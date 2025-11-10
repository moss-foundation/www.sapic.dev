import Tag from "@/components/Tag";

const ApplyTabContent = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-x-20 lg:divide-x lg:divide-neutral-200">
            <div className="w-full lg:w-1/2 lg:max-h-[50vh] overflow-y-auto relative [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] lg:pr-10">
                <div>
                    <h3 className="mb-2 text-base md:text-lg font-medium text-gray-900">Apply</h3>
                    <div className="flex flex-col gap-y-4">
                        <p className="text-pretty text-sm md:text-base leading-relaxed text-balance text-neutral-900">
                            You apply the exact saved plan, the same one you saw in the <span className="underline decoration-blue-500 decoration-2 underline-offset-5">diff</span>. The same artifact runs in the <Tag label="UI" />, <Tag label="CLI" variant="pending" tooltip={{ text: "Coming soon", position: "bottom" }} />,
                            and <Tag label="CI" variant="pending" tooltip={{ text: "Coming soon", position: "bottom" }} />: select the workspace and environment, start the apply, and view step-by-step logs. You can apply selectively, and if needed, rollback to the previous apply.
                        </p>
                    </div>
                </div>
                <div className="mt-6 lg:mt-10 flex max-w-full md:max-w-2xl gap-3 md:gap-4 lg:pr-10">
                    <div className="w-1 flex-shrink-0 rounded-full bg-blue-4"></div>
                    <p className="text-pretty text-sm text-neutral-500 text-balance">
                        Reproducible and transparent: one plan, same steps, same result no matter where you run it.
                    </p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 min-h-[350px] lg:min-h-[400px] lg:max-h-[50vh]">
                <div className="border border-neutral-200 p-0.5 md:p-1 rounded-xl md:rounded-2xl h-full">
                    <div className="bg-neutral-50 rounded-xl md:rounded-2xl pt-6 px-6 md:pt-8 md:px-8 overflow-hidden select-none relative h-full">
                        <div className="h-full border border-neutral-200 rounded-xl shadow-2xl">
                            <div className="bg-neutral-100 rounded-t-xl border border-neutral-100 border-b-0">
                                <div className="flex items-center gap-x-2 px-3 py-2.5">
                                    <div className="flex gap-x-2">
                                        <div className="w-3 h-3 rounded-full border border-neutral-300" />
                                        <div className="w-3 h-3 rounded-full border border-neutral-300" />
                                        <div className="w-3 h-3 rounded-full border border-neutral-300" />
                                    </div>
                                </div>
                            </div>
                            <div className="bg-neutral-50 border-t border-neutral-200 p-3 md:p-4 font-mono text-xs md:text-sm min-h-[300px] lg:min-h-[400px]">
                                <div className="space-y-1">
                                    <div className="flex items-start gap-x-2">
                                        <span className="text-lime-600">✓</span>
                                        <div className="flex-1">
                                            <span className="text-purple-700">create</span>
                                            <span className="text-gray-800"> aws.sns.topic Notification Topic </span>
                                            <span className="text-gray-400">0.8s</span>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-x-2">
                                        <span className="text-lime-600">✓</span>
                                        <div className="flex-1">
                                            <span className="text-purple-700">update</span>
                                            <span className="text-gray-800"> aws.lambda.function User Lambda </span>
                                            <span className="text-gray-400">2.1s</span>
                                        </div>
                                    </div>
                                    <div className="text-gray-500 ml-6">(+6MB memory)</div>
                                    <div className="flex items-start gap-x-2">
                                        <span className="text-lime-600">✓</span>
                                        <div className="flex-1">
                                            <span className="text-purple-700">update</span>
                                            <span className="text-gray-800"> mock GET /orders </span>
                                            <span className="text-gray-400">0.1s</span>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-x-2">
                                        <span className="text-lime-600">✓</span>
                                        <div className="flex-1">
                                            <span className="text-purple-700">set</span>
                                            <span className="text-gray-800"> env vars stage </span>
                                            <span className="text-gray-400">0.2s</span>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-x-2">
                                        <span className="text-lime-600">✓</span>
                                        <div className="flex-1">
                                            <span className="text-purple-700">commit</span>
                                            <span className="text-gray-800"> repo/project@3c8a1f </span>
                                            <span className="text-gray-400">0.1s</span>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-x-2 mt-5">
                                        <span className="text-lime-600">Project state updated!</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApplyTabContent;


