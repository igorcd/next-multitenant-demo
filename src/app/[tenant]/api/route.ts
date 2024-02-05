import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest, props: { params: { tenant: string } }) {
    return NextResponse.json({
        title: `Title from ${props.params.tenant} CMS`
    });
}