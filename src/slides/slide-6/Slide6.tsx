import Slide from "@/components/slide/Slide";

export default function Slide5() {
    return (
        <Slide id={6}>
            <div className='h-full flex flex-col items-center justify-center p-6 gap-10'>
                <h1 className='text-5xl font-medium bg-clip-text text-gray-200 text-center max-w-2xl leading-[4rem]'>
                    Real world example
                </h1>
            </div>
        </Slide>
    );
}