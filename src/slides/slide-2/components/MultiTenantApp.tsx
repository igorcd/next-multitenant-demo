import CircleStackIcon from "@/components/icons/CircleStackIcon";
import CogIcon from "@/components/icons/CogIcon";
import CpuIcon from "@/components/icons/CpuIcon";
import GlobeIcon from "@/components/icons/GlobeIcon";
import Tooltip from "@/components/tooltip/Tooltip";

export default function MultiTenantApp() {

    const tenants = ["visas-au", "visas-fr", "vcas"];

    return (
        <div className="flex flex-col items-center gap-4">
            <p className="text-center text-white text-xl">Multi-tenant app</p>
            
            <div className="p-4 border border-white rounded-lg flex flex-col gap-4">
                <Tooltip content={(
                    <div>
                        <p>(tenant).tlscontanct.com</p>
                        <p>or</p>
                        <p>tlscontanct.com/(tenant)</p>
                        <p>ip: 10.10.10.10</p>
                    </div>
                )}>
                    <GlobeIcon className="w-10 stroke-green-200 mx-auto"/>
                    <p className="text-white text-center">Application / Tenant</p>
                </Tooltip>
                <div className="h-px bg-white/50 "></div>

                <Tooltip content={(
                    <div>
                        <p>(tenant).tlscontanct.com/api</p>
                        <p>or</p>
                        <p>tlscontanct.com/(tenant)/api</p>
                        <p>ip: 10.10.10.10</p>
                    </div>
                )}>
                    <CogIcon className="w-10 stroke-red-200 mx-auto"/>
                    <p className="text-white text-center">Gateway / Tenant</p>
                </Tooltip>
            </div>

            <div className="flex gap-4">
                {
                    tenants.map((tenant, index) => (
                        <div key={tenant}>
                            <p className="text-center text-white text-xl mb-2">
                                { tenant }
                            </p>
                            <div className="p-4 border border-white rounded-lg flex flex-col gap-4">
                                <div className="flex items-center gap-4">
                                    <Tooltip content={(
                                        <div>
                                            <p>{tenant}.servicea.tlscontanct.com</p>
                                            <p>ip: {(index + 1) * 11}.{(index + 1) * 11}.{(index + 1) * 11}.{(index + 1) * 11}</p>
                                        </div>
                                    )}
                                             className="flex-1">
                                        <CpuIcon className="w-10 stroke-blue-200 mx-auto"/>
                                        <p className="text-white text-center">Service A</p>
                                    </Tooltip>

                                    <Tooltip content={(
                                        <div>
                                            <p>{tenant}.serviceb.tlscontanct.com</p>
                                            <p>ip: {(index + 1) * 12}.{(index + 1) * 12}.{(index + 1) * 12}.{(index + 1) * 12}</p>
                                        </div>
                                    )} className="flex-1">
                                        <CpuIcon className="w-10 stroke-blue-200 mx-auto"/>
                                        <p className="text-white text-center">Service B</p>
                                    </Tooltip>
                                </div>
                                <div className="h-px bg-white/50 "></div>
   
                                <div className="flex items-center justify-between gap-4">
                                    <Tooltip content={(
                                        <p>ip: {(index + 1) * 13}.{(index + 1) * 13}.{(index + 1) * 13}.{(index + 1) * 13}</p>
                                    )}>
                                        <CircleStackIcon className="w-10 stroke-yellow-200 mx-auto"/>
                                        <p className="text-white text-center">Database A</p>
                                    </Tooltip>
                                    <Tooltip content={(
                                        <p>ip: {(index + 1) * 14}.{(index + 1) * 14}.{(index + 1) * 14}.{(index + 1) * 14}</p>
                                    )}>
                                        <CircleStackIcon className="w-10 stroke-yellow-200 mx-auto"/>
                                        <p className="text-white text-center">Database B</p>
                                    </Tooltip>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}