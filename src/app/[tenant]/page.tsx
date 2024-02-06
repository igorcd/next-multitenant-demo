import { TENANTS } from "@/utils/constants";
import { headers } from "next/headers";

export default function HomePage(props: { params: { tenant: string } }) {

    const { tenant } = props.params;

    const hasSubdomain = TENANTS.includes(headers().get('host')?.split('.')[0] ?? '');

    return (
        <div className="flex items-center justify-center h-screen flex-col gap-10">

            <img src={`/${tenant}.png`} className="rounded-full w-20 h-20 border-2 border-white" alt="Logo"/>

            <h1 className=" text-4xl text-white font-bold">
                { `Home Page of ${tenant}`}
            </h1>

            <ul className="text-white text-center">
                <li>
                    <a href={hasSubdomain ? '/news' : `/${tenant}/news`}>Go to news</a>
                </li>
                <li>
                    <a href={hasSubdomain ? '/services' : `/${tenant}/services`}>Go to services</a>
                </li>
            </ul>
        </div>
    );
}