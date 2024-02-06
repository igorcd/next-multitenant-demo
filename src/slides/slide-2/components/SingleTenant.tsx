import CircleStackIcon from "@/components/icons/CircleStackIcon";
import CogIcon from "@/components/icons/CogIcon";
import CpuIcon from "@/components/icons/CpuIcon";
import GlobeIcon from "@/components/icons/GlobeIcon";
import Tooltip from "@/components/tooltip/Tooltip";


export default function SingleTenant(props: { title: string; ipBase: number }) {
    function generateNextIp(start: number){
        const next = start++;
        return `${next}.${next}.${next}.${next}`;
    }

    return (
        <div>
            <p className="text-center text-white mb-4 text-xl">{props.title}</p>
            <div className="p-4 border border-white rounded-lg flex flex-col gap-4">
                <Tooltip content={(
                    <div>
                        <p>visas-au.tlscontanct.com</p>
                        <p>ip: {generateNextIp(props.ipBase)}</p>
                    </div>
                )}>
                    <>
                        <GlobeIcon className="w-10 stroke-green-200 mx-auto"/>
                        <p className="text-white text-center">Application</p>
                    </>
                </Tooltip>

                <div className="h-px bg-white/50 "></div>

                <Tooltip content={(
                    <div>
                        <p>gateway.tlscontanct.com</p>
                        <p>ip: {generateNextIp(props.ipBase + 1)}</p>
                    </div>
                )}>
                    <CogIcon className="w-10 stroke-red-200 mx-auto"/>
                    <p className="text-white text-center">Gateway</p>
                </Tooltip>

                <div className="h-px bg-white/50 "></div>
                    
                <div className="flex items-center gap-4">
                    <Tooltip content={(
                        <div>
                            <p>{props.title}.servicea.tlscontanct.com</p>
                            <p>ip: {generateNextIp(props.ipBase + 2)}</p>
                        </div>
                    )} className="flex-1">
                        <CpuIcon className="w-10 stroke-blue-200 mx-auto"/>
                        <p className="text-white text-center">Service A</p>
                    </Tooltip>

                    <Tooltip content={(
                        <div>
                            <p>{props.title}.serviceb.tlscontanct.com</p>
                            <p>ip: {generateNextIp(props.ipBase + 3)}</p>
                        </div>
                    )} className="flex-1">
                        <CpuIcon className="w-10 stroke-blue-200 mx-auto"/>
                        <p className="text-white text-center">Service B</p>
                    </Tooltip>
                </div>

                <div className="h-px bg-white/50 "></div>

                <div className="flex items-center justify-between gap-4">
                    <Tooltip content={(
                        <div>
                            <p>ip: {generateNextIp(props.ipBase + 4)}</p>
                        </div>
                    )}>
                        <CircleStackIcon className="w-10 stroke-yellow-200 mx-auto"/>
                        <p className="text-white text-center">Database A</p>
                    </Tooltip>
                    <Tooltip content={(
                        <div>
                            <p>ip: {generateNextIp(props.ipBase + 5)}</p>
                        </div>
                    )}>
                        <CircleStackIcon className="w-10 stroke-yellow-200 mx-auto"/>
                        <p className="text-white text-center">Database B</p>
                    </Tooltip>
                </div>
            </div>
        </div>
    );
}