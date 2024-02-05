import CircleStackIcon from "@/components/icons/CircleStackIcon";
import CogIcon from "@/components/icons/CogIcon";
import CpuIcon from "@/components/icons/CpuIcon";
import GlobeIcon from "@/components/icons/GlobeIcon";

export default function MultiTenantApp() {

    const tenants = ["visas-au", "visas-fr", "vcas"];

    return (
        <div className="flex flex-col items-center gap-4">
            <p className="text-center text-white text-xl">Multi-tenant app</p>
            
            <div className="p-4 border border-white rounded-lg flex flex-col gap-4">
                <div>
                    <GlobeIcon className="w-10 stroke-white mx-auto"/>
                    <p className="text-white text-center">Application / Tenant</p>
                </div>
                <div className="h-px bg-white/50 "></div>

                <div>
                    <CogIcon className="w-10 stroke-white mx-auto"/>
                    <p className="text-white text-center">Gateway / Tenant</p>
                </div>
            </div>

            <div className="flex gap-4">
                {
                    tenants.map(tenant => (
                        <div key={tenant}>
                            <p className="text-center text-white text-xl mb-2">
                                { tenant }
                            </p>
                            <div className="p-4 border border-white rounded-lg flex flex-col gap-4">
                                <div className="flex items-center gap-4">
                                    <div className="flex-1">
                                        <CpuIcon className="w-10 stroke-white mx-auto"/>
                                        <p className="text-white text-center">Service A</p>
                                    </div>
                                    <div className="flex-1">
                                        <CpuIcon className="w-10 stroke-white mx-auto"/>
                                        <p className="text-white text-center">Service B</p>
                                    </div>
                                </div>
                                <div className="h-px bg-white/50 "></div>
   
                                <div className="flex items-center justify-between gap-4">
                                    <div>
                                        <CircleStackIcon className="w-10 stroke-white mx-auto"/>
                                        <p className="text-white text-center">Database A</p>
                                    </div>
                                    <div>
                                        <CircleStackIcon className="w-10 stroke-white mx-auto"/>
                                        <p className="text-white text-center">Database B</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}