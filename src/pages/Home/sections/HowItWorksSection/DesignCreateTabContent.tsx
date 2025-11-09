import Tag from "@/components/Tag";
import tttt from "../../images/1321316787.svg";

const DesignCreateTabContent = () => {
    return (
        <div className="flex gap-x-20 divide-x divide-neutral-200">
            <div className="w-1/2 max-h-[50vh] overflow-y-auto relative [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                <div className="pr-10">
                    <p className="text-pretty text-base leading-relaxed text-balance text-neutral-900">
                        Create resource contracts directly from actions in the UI.
                        Enter the URL, your lambda's ARN, or any other link format to your resource, set the parameters and request
                        body — we'll instantly generate the contract, build JSON schemas and examples, launch mocks, and link
                        everything to the selected environments, variables, and functions.
                        It all starts locally: you edit a draft, preview the changes, and save the final plan.
                    </p>
                </div>

                <div className="mt-10 flex max-w-full md:max-w-2xl gap-3 md:gap-4 pr-10">
                    <div className="w-1 flex-shrink-0 rounded-full bg-blue-4"></div>
                    <p className="text-pretty text-sm text-neutral-500">
                        All resource types don't come bundled with the app — only the basic ones (
                        <Tag label="HTTP" />,
                        <Tag label="gRPC" />,
                        <Tag label="GraphQL" />,
                        <Tag label="WebSocket" />,
                        <Tag label="SQLite" variant="pending" tooltip={{ text: "Coming soon", position: "bottom" }} />,
                        etc.
                        ). You can install the cloud provider resources you need yourself through our plugin registry.
                    </p>
                </div>
            </div>
            <div className="w-1/2 bg-neutral-50 rounded-2xl pt-8 px-8 max-h-[50vh] overflow-hidden">
                <img src={tttt} alt="GitHub" className="w-full h-full object-cover object-top rounded-t-xl border-t border-x border-neutral-200 shadow-2xl" />
            </div>
        </div>
    );
};

export default DesignCreateTabContent;


