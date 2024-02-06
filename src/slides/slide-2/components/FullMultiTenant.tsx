import CircleStackIcon from "@/components/icons/CircleStackIcon";
import CogIcon from "@/components/icons/CogIcon";
import CpuIcon from "@/components/icons/CpuIcon";
import GlobeIcon from "@/components/icons/GlobeIcon";

export default function FullMultiTenant() {
    return (
        <div>
            <p className="text-center text-white mb-4 text-xl">Multi-tenant</p>
            <div className="p-4 border border-white rounded-lg flex flex-col gap-4">
                <div>
                    <GlobeIcon className="w-10 stroke-green-200 mx-auto"/>
                    <p className="text-white text-center">application/tenant</p>
                </div>

                <div className="h-px bg-white/50 "></div>

                <div>
                    <CogIcon className="w-10 stroke-red-200 mx-auto"/>
                    <p className="text-white text-center">gateway/tenant</p>
                </div>

                <div className="h-px bg-white/50 "></div>
                    
                <div className="flex items-center gap-4">
                    <div className="w-32">
                        <CpuIcon className="w-10 stroke-blue-200 mx-auto"/>
                        <p className="text-white text-center">service-a/tenant</p>
                    </div>
                    <div className="w-32">
                        <CpuIcon className="w-10 stroke-blue-200 mx-auto"/>
                        <p className="text-white text-center">service-b/tenant</p>
                    </div>
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