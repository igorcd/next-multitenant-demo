'use client';
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { ReactElement, useRef } from "react";

export default function AnimatedSwitcher(props: { children: ReactElement }) {
    const { children } = props;
    const ref = useRef(null);
    
    return (
        <SwitchTransition mode="out-in">
            <CSSTransition nodeRef={ref}
                           key={children.key}
                           timeout={350}
                           classNames="fade">
                <div ref={ref}>
                    { children }
                </div>
            </CSSTransition>
        </SwitchTransition>
    );
}