'use client';

import Slide from "@/components/slide/Slide";
import SingleTenant from "./components/SingleTenant";
import { useState } from "react";
import SelectButton from "@/components/select-button/SelectButton";
import AnimatedSwitcher from "@/components/animated-switcher/AnimatedSwitcher";
import MultiTenantApp from "./components/MultiTenantApp";
import FullMultiTenant from "./components/FullMultiTenant";

export default function Slide2() {
    const [ mode, setMode ] = useState(0);

    function renderContent() {
        if(mode == 0) {
            return (
                <div className="flex items-center gap-10" key={0}>
                    <SingleTenant title="visas-au"/>
                    <SingleTenant title="vcas"/>
                    <SingleTenant title="visas-fr"/>                    
                </div>
            );
        }

        if(mode == 1) {
            return (
                <MultiTenantApp key={1}/>
            );
        }

        return  <FullMultiTenant key={2}/>;
    }

    return (
        <Slide id={2}>
            <div className='min-h-screen flex flex-col items-center justify-center gap-6'>
                <h1 className='text-5xl font-medium bg-clip-text text-gray-200 text-center max-w-2xl leading-[4rem] mb-8'>
                    Single-tenant vs Multi-tenant
                </h1>

                <AnimatedSwitcher>
                    { renderContent() }
                </AnimatedSwitcher>

                <div className="flex items-center gap-6">
                    <SelectButton selected={mode == 0} onClick={() => setMode(0)}>
                        Single-tenant
                    </SelectButton>

                    <SelectButton selected={mode == 1} onClick={() => setMode(1)}>
                        Multi-tenant app
                    </SelectButton>

                    <SelectButton selected={mode == 2} onClick={() => setMode(2)}>
                        Full multi-tenant
                    </SelectButton>
                    
                </div>
            </div>
        </Slide>
    );
}