import { TooltipProps } from "./Tooltip.types";

export default function Tooltip(props: TooltipProps) {
    return (
        <div className={`relative group whitespace-nowrap ${props.className}`}>
            { props.children }

            <div className="absolute bottom-[calc(100%+0.5rem)] bg-blue-700 px-4 py-2 rounded-2xl shadow-lg text-xs text-white text-center group-hover:opacity-100 opacity-0 transition-all pointer-events-none left-1/2 -translate-x-1/2">
                {props.content}
            </div>
        </div>
    );
}