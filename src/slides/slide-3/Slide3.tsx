import Slide from "@/components/slide/Slide";

export default function Slide3() {
    return (
        <Slide id={3}>
            <div className='h-full flex flex-col items-center justify-center p-6'>
                <h1 className='text-5xl font-medium bg-clip-text text-gray-200 text-center max-w-2xl leading-[4rem] mb-24'>
                    Multi-tenant app Approachs
                </h1>
                <h1 className='text-5xl font-medium bg-clip-text text-gray-200 text-center max-w-2xl leading-[4rem] mb-24'>
                    URL Path | Subdomain
                </h1>
            </div>
        </Slide>
    );
}