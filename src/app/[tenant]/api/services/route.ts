import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest, props: { params: { tenant: string } }) {
    const { tenant } = props.params;

    return NextResponse.json([
        {
            title: `${tenant.toUpperCase()} service 1`,
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"
        },
        {
            title: `${tenant.toUpperCase()} service 2`,
            content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed"
        },
    ]);
}