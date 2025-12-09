import Tag from "@/components/ui/Tag";
import image from "../../../images/1321316787.svg";

const DesignCreateTabContent = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-x-20 lg:divide-x lg:divide-neutral-200">
            <div className="w-full lg:w-1/2 lg:max-h-[50vh] overflow-y-auto relative [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                <div className="lg:pr-10">
                    <p className="text-pretty text-sm md:text-base leading-relaxed text-balance text-neutral-900">
                        Create resource contracts directly from actions in the UI.
                        Enter the URL, your lambda's ARN, or any other link format to your resource, set the parameters and request
                        body — we'll instantly generate the contract, build JSON schemas and examples, launch mocks, and link
                        everything to the selected environments, variables, and functions.
                        It all starts locally: you edit a draft, preview the changes, and save the final plan.
                    </p>
                </div>

                <div className="mt-6 lg:mt-10 flex max-w-full md:max-w-2xl gap-3 md:gap-4 lg:pr-10">
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
            <div className="w-full lg:w-1/2 lg:max-h-[50vh]">
                <div className="border border-neutral-200 p-0.5 md:p-1 rounded-xl md:rounded-2xl h-full">
                    <div className="bg-neutral-50 rounded-xl md:rounded-2xl pt-6 px-6 md:pt-8 md:px-8 lg:overflow-hidden relative h-full">
                        <div className="relative w-full lg:h-full overflow-hidden lg:overflow-visible rounded-xl">
                            <img
                                src={image}
                                alt="Design & Create UI"
                                loading="eager"
                                decoding="async"
                                draggable={false}
                                style={{
                                    imageRendering: "-webkit-optimize-contrast",
                                    transform: "translateZ(0)",
                                    WebkitTransform: "translateZ(0)",
                                    backfaceVisibility: "hidden",
                                    WebkitBackfaceVisibility: "hidden",
                                    willChange: "transform"
                                }}
                                className="w-full h-auto lg:h-full object-contain lg:object-cover object-center lg:object-top rounded-t-xl border-t border-x border-neutral-200 shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DesignCreateTabContent;


