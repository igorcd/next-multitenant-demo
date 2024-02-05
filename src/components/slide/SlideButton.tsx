'use client';

import { SlideButtonProps } from "./Slide.types";

export default function SlideButton(props: SlideButtonProps) {
    function onClick() {
        const element = document.querySelector(`#slide-${props.target}`);
        if(element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    return (
        <div onClick={onClick}>
            {  props.children }
        </div>
    );
}