'use client';

import { SlideProps } from "./Slide.types";
export default function Slide(props: SlideProps) {
    return (
        <div className="h-screen relative snap-center" id={`slide-${props.id}`}>
            { props.children }
        </div>
    );
}