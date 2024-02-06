import Slide from "@/components/slide/Slide";

export default function Slide4() {
    return (
        <Slide id={4}>
            <div className='h-full flex flex-col items-center justify-center p-6 gap-10'>
                <h1 className='text-5xl font-medium bg-clip-text text-gray-200 text-center max-w-2xl leading-[4rem]'>
                    URL path approach
                </h1>

                <img src="/slack.gif" className="h-[30rem] rounded-xl" alt="slack"/>
                <p className="text-white text-2xl">
                    <span>https://app.slack.com/client/<span className="text-green-300">tenant</span>/<span className="text-red-300">page</span></span>
                </p>

                <div className="flex gap-20">
                    <div>
                        <p className="text-green-500 text-center">Pros</p>
                        <p className="text-center text-white">Easy to implement</p>
                    </div>
                    <div>
                        <p className="text-red-500 text-center">Cons</p>
                        <p className="text-white">Tenants shares the same localStorage and cookies</p>
                    </div>
                </div>

                <a className="text-white text-lg font-bold" target="_blank" href="/visas-fr">Check example</a>
            </div>
        </Slide>
    );
}