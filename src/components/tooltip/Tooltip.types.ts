import { PropsWithClassName } from "@/core/props-with-class-name";
import { PropsWithChildren, ReactNode } from "react";

export interface TooltipProps extends PropsWithChildren, PropsWithClassName {
    content: ReactNode;
}