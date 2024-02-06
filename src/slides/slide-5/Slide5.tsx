import Slide from "@/components/slide/Slide";

export default function Slide5() {
    return (
        <Slide id={5}>
            <div className='h-full flex flex-col items-center justify-center p-6 gap-10'>
                <h1 className='text-5xl font-medium bg-clip-text text-gray-200 text-center max-w-2xl leading-[4rem]'>
                    Subdomain approach
                </h1>

                <img src="/ign.gif" className="h-[30rem] rounded-xl" alt="slack"/>
                <p className="text-white text-2xl">
                    <span>https://<span className="text-green-300">tenant</span>.ign.com/<span className="text-red-300">page</span></span>
                </p>

                <div className="flex gap-20">
                    <div>
                        <p className="text-green-500 text-center">Pros</p>
                        <p className="text-center text-white">Distinct localStorage and cookies per tenant</p>
                    </div>
                    <div>
                        <p className="text-red-500 text-center">Cons</p>
                        <p className="text-white">Needs proxy middleware configuration</p>

                    </div>
                </div>
                
                <a className="text-white text-lg font-bold" target="_blank" href={process.env.MULTI_TENANT_DOMAIN_EXAMPLE}>Check example</a>
            </div>
        </Slide>
    );
}