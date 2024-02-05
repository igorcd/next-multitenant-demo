import { SelectButtonProps } from "./SelectButton.types";

export default function SelectButton(props: SelectButtonProps) {
    return (
        <button className={`text-white opacity-40 cursor-pointer border-b border-transparent hover:!border-white hover:opacity-100 duration-150 ${props.selected && '!opacity-100 !border-white'}`}
                onClick={props.onClick}>
            {props.children}
        </button>
    );
}