import Link from "next/link";
import { PropsWithChildren } from "react";

export default function LinkButton(props: { href: string; className?: string } & PropsWithChildren) {
    return (
        <Link  prefetch={false}
               href={props.href}
               className={`${props.className} rounded-full border-2 border-sky-700 px-12 py-4 text-lg font-bold text-white`}>
            { props.children }
        </Link>
    );
}