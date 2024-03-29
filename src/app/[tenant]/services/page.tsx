import { TENANTS } from "@/utils/constants";
import { headers } from "next/headers";

export default async function ServicesPage(props: { params: { tenant: string } }) {
    const { tenant } = props.params;
    const hasSubdomain = TENANTS.includes(headers().get('host')?.split('.')[0] ?? '');

    const data = await fetch(`${process.env.BASE_URL}/${tenant}/api/services`)
        .then(resp => resp.json()) as { title: string; content: string }[];

    return (
        <div className="flex flex-col gap-10 items-center justify-center h-screen">
            <h1 className="text-4xl text-white font-bold">
                { `Services Page of ${props.params.tenant}`}
            </h1>

            <div>
                {
                    data.map((service, index) => (
                        <article className="px max-w-lg border-b border-b-white/50 last:border-b-0 py-4 text-white flex flex-col items-stretch gap-2" key={index}>
                            <h1 className="text-2xl ">{ service.title }</h1>
                            <p className="text-white/80 font-light">{ service.content }</p>
                        </article>
                    ))
                }
            </div>

            <a href={hasSubdomain ? '/' : `/${tenant}`} className="text-white">Back</a>
        </div>
    );
}