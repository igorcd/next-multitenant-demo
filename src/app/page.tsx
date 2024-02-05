import SlideControls from "@/components/slide/SlideControls";
import Slide1 from "@/slides/slide-1/Slide1";
import Slide2 from "@/slides/slide-2/Slide2";
import Slide3 from "@/slides/slide-3/Slide3";
import Slide4 from "@/slides/slide-4/Slide4";
import Slide5 from "@/slides/slide-5/Slide5";

export default function Home() {
    return (
        <>
            <div className="overflow-auto snap-mandatory snap-y h-screen relative" id="root">
                <Slide1/>
                <Slide2/>
                <Slide3/>
                <Slide4/>
                <Slide5/>
            </div>
            <SlideControls/>
        </>
    );
}
