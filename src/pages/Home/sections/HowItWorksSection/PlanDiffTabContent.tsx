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
        <div className="flex gap-x-20 divide-x divide-neutral-200 min-h-[500px]">
            <div className="w-1/2 max-h-[50vh] overflow-y-auto relative [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                <div className="pr-10">
                    <p className="text-pretty text-base leading-relaxed text-balance text-neutral-900">
                        We generate a change plan and show clear diffs for resource contracts, input/output bodies, mock configurations, environments, variables, and functions.
                        You'll see which steps are potentially risky, which tests and mocks will be updated, and what the impact will be on the target environment.
                        Unnecessary changes can be excluded from the plan, the final artifact can be saved, and then sent to a PR — the same plan will later run in
                        the <Tag label="UI" />, <Tag label="CLI" variant="pending" tooltip={{ text: "Coming soon", position: "bottom" }} />,
                        and
                        <Tag label="CI" variant="pending" tooltip={{ text: "Coming soon", position: "bottom" }} />.
                    </p>
                </div>

                <div className="mt-10 flex max-w-full md:max-w-2xl gap-3 md:gap-4 pr-10">
                    <div className="w-1 flex-shrink-0 rounded-full bg-blue-4"></div>
                    <p className="text-pretty text-sm text-neutral-500 text-balance">
                        You can see the essence of the changes: what's critical and what's not, unnecessary details can be hidden with a single click.
                        Step-by-step logs, selective execution, and quick rollback — all in one place and finally reliable!
                    </p>
                </div>
            </div>
            <div className="w-1/2 bg-neutral-50 rounded-2xl pt-8 px-8 max-h-[50vh] overflow-hidden relative">
                {/* Current image index indicator for debugging */}
                <div className="absolute top-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded-md z-20">
                    {currentImageIndex + 1} / {images.length}
                </div>

                {/* Image container with transition */}
                <div className="relative w-full h-[calc(100%-0.25rem)]">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Plan view ${index + 1}`}
                            className={`absolute inset-0 w-full h-full object-cover object-top rounded-t-xl border-t border-x border-neutral-200 shadow-2xl transition-opacity duration-500 ${currentImageIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                                }`}
                        />
                    ))}
                </div>

                {/* Progress bar at the bottom of container */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-neutral-200 z-20">
                    <div
                        className="h-full bg-blue-600 transition-all duration-[50ms] ease-linear"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>
        </div>
    );
};

export default PlanDiffTabContent;


