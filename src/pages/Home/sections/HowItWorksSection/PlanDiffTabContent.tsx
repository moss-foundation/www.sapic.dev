import { useEffect, useState } from "react";
import Tag from "@/components/Tag";
import changes_frame from "../../images/changes_frame.svg";
import changes_diff_frame from "../../images/changes_diff_frame.svg";

const PlanDiffTabContent = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [progress, setProgress] = useState(0);

    const images = [changes_diff_frame, changes_frame];

    useEffect(() => {
        console.log('PlanDiffTabContent mounted, starting timer');
        const duration = 5000; // 5 seconds
        const startTime = Date.now();

        const interval = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const currentProgress = (elapsed % duration) / duration * 100;
            const newImageIndex = Math.floor(elapsed / duration) % images.length;

            setProgress(currentProgress);
            setCurrentImageIndex(newImageIndex);
        }, 50);

        return () => {
            console.log('PlanDiffTabContent unmounted, clearing timer');
            clearInterval(interval);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-x-20 lg:divide-x lg:divide-neutral-200 min-h-[400px] lg:min-h-[500px]">
            <div className="w-full lg:w-1/2 lg:max-h-[50vh] overflow-y-auto relative [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                <div className="lg:pr-10">
                    <p className="text-pretty text-sm md:text-base leading-relaxed text-balance text-neutral-900">
                        We generate a change plan and show clear diffs for resource contracts, input/output bodies, mock configurations, environments, variables, and functions.
                        You'll see which steps are potentially risky, which tests and mocks will be updated, and what the impact will be on the target environment.
                        Unnecessary changes can be excluded from the plan, the final artifact can be saved, and then sent to a PR — the same plan will later run in
                        the <Tag label="UI" />, <Tag label="CLI" variant="pending" tooltip={{ text: "Coming soon", position: "bottom" }} />,
                        and
                        <Tag label="CI" variant="pending" tooltip={{ text: "Coming soon", position: "bottom" }} />.
                    </p>
                </div>

                <div className="mt-6 lg:mt-10 flex max-w-full md:max-w-2xl gap-3 md:gap-4 lg:pr-10">
                    <div className="w-1 flex-shrink-0 rounded-full bg-blue-4"></div>
                    <p className="text-pretty text-sm text-neutral-500 text-balance">
                        You can see the essence of the changes: what's critical and what's not, unnecessary details can be hidden with a single click.
                        Step-by-step logs, selective execution, and quick rollback — all in one place and finally reliable!
                    </p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:max-h-[50vh]">
                <div className="border border-neutral-200 p-0.5 md:p-1 rounded-xl md:rounded-2xl h-full">
                    <div className="bg-neutral-50 rounded-xl md:rounded-2xl pt-6 px-6 md:pt-8 md:px-8 pb-2 lg:pb-0 lg:overflow-hidden relative h-full">
                        {/* Current image index indicator for debugging */}
                        <div className="absolute top-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded-md z-30">
                            {currentImageIndex + 1} / {images.length}
                        </div>

                        {/* Image container with transition */}
                        <div className="relative w-full lg:h-[calc(100%-0.25rem)] overflow-hidden lg:overflow-visible rounded-t-xl">
                            {images.map((image, index) => (
                                <div
                                    key={index}
                                    className={`w-full ${currentImageIndex === index ? 'block' : 'hidden lg:block'} lg:absolute lg:inset-0`}
                                >
                                    <img
                                        src={image}
                                        alt={`Plan view ${index + 1}`}
                                        className={`w-full h-auto lg:h-full object-contain lg:object-cover object-center lg:object-top rounded-t-xl border-t border-x border-neutral-200 shadow-2xl transition-opacity duration-500 ${currentImageIndex === index ? 'opacity-100' : 'opacity-0'
                                            }`}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Progress bar at the bottom of container */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-neutral-200 z-30">
                            <div
                                className="h-full bg-blue-600 transition-all duration-[50ms] ease-linear"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlanDiffTabContent;


