import CircleStackIcon from "@/components/icons/CircleStackIcon";
import CogIcon from "@/components/icons/CogIcon";
import CpuIcon from "@/components/icons/CpuIcon";
import GlobeIcon from "@/components/icons/GlobeIcon";
import Tooltip from "@/components/tooltip/Tooltip";

export default function FullMultiTenant() {
    return (
        <div>
            <p className="text-center text-white mb-4 text-xl">Multi-tenant</p>
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
                    <p className="text-white text-center">application/tenant</p>
                </Tooltip>

                <div className="h-px bg-white/50 "></div>

                <Tooltip content={(
                    <div>
                        <p>(tenant).tlscontanct.com</p>
                        <p>or</p>
                        <p>tlscontanct.com/(tenant)</p>
                        <p>ip: 10.10.10.10</p>
                    </div>
                )}>
                    <CogIcon className="w-10 stroke-red-200 mx-auto"/>
                    <p className="text-white text-center">gateway/tenant</p>
                </Tooltip>

                <div className="h-px bg-white/50 "></div>
                    
                <div className="flex items-center gap-4">
                    <Tooltip content={(
                        <div>
                            <p>servicea.tlscontanct.com/(tenant)</p>
                            <p>ip: 11.11.11.11</p>
                        </div>
                    )} className="w-32">
                        <CpuIcon className="w-10 stroke-blue-200 mx-auto"/>
                        <p className="text-white text-center">service-a/tenant</p>
                    </Tooltip>

                    <Tooltip content={(
                        <div>
                            <p>serviceb.tlscontanct.com/(tenant)</p>
                            <p>ip: 12.12.12.12</p>
                        </div>
                    )} className="w-32">
                        <CpuIcon className="w-10 stroke-blue-200 mx-auto"/>
                        <p className="text-white text-center">service-b/tenant</p>
                    </Tooltip>
                </div>
                <div className="h-px bg-white/50 "></div>

                <div className="flex items-center justify-between gap-4">
                    <div className="w-32">
                        <CircleStackIcon className="w-10 stroke-yellow-200 mx-auto"/>
                        <p className="text-white text-center">Database A</p>
                    </div>
                    <div className="w-32">
                        <CircleStackIcon className="w-10 stroke-yellow-200 mx-auto"/>
                        <p className="text-white text-center">Database B</p>
                    </div>
                </div>
            </div>
        </div>
    );
}