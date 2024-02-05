import { PropsWithChildren } from "react";

export interface SelectButtonProps extends PropsWithChildren {
    selected: boolean;
    onClick: () => void;
}