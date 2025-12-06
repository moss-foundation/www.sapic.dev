import Tag from "@/components/ui/Tag";

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
        </div>
    );
};

export default ApplyTabContent;


