import Slide from "@/components/slide/Slide";
import SlideButton from "@/components/slide/SlideButton";

export default function Slide1() {
    return (
        <Slide id={1}>
            <div className='h-full flex flex-col items-center justify-center p-6'>
                <img src="/tls-logo.svg" 
                     className='h-12 mb-12'
                     alt="logo"/>

                <h1 className='text-5xl font-medium bg-clip-text text-gray-200 text-center max-w-2xl leading-[4rem] mb-24'>
                    Multi-tenant application with Next.js
                </h1>

                <SlideButton target={2}>
                    <button className="border-2 px-12 py-4 rounded-full text-2xl text-white cursor-pointer hover:bg-white/20 transition-all duration-150" >
                        Start
                    </button>
                </SlideButton>
            </div>
        </Slide>
    );
}