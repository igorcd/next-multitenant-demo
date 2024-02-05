import { NextRequest, NextResponse } from "next/server";

const tenants = ["visas-au", "visas-fr", "vcas"];

export default function middleware(req: NextRequest) {
    const tenant = req.headers.get('host')?.split('.')[0];

    if(!tenant || !tenants?.includes(tenant)) {
        return NextResponse.next();
    }
    const { pathname, origin } = req.nextUrl;
    
    const url = `/${tenant}${pathname}`;
    return NextResponse.rewrite(new URL(url, origin));
}

export const config = {
    // Skip all paths that should not be internationalized. This example skips the
    // folders "api", "_next" and all files with an extension (e.g. favicon.ico)
    matcher: [ '/((?!_next|.*\\..*).*)' ]
};