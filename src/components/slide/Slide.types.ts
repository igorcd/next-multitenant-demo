import { PropsWithChildren } from "react";

export interface SlideProps extends PropsWithChildren {
    id: number;
}

export interface SlideButtonProps extends PropsWithChildren {
    target: number;
}