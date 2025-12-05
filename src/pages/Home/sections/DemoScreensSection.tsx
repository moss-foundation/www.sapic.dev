import { useState, useRef } from "react";
import { motion } from "motion/react";
import screen from "@assets/images/screen.png";
import screen2 from "@assets/images/screen2.png";
import screen3 from "@assets/images/screen3.png";
import LayoutContainer from "@/components/containers/LayoutContainer";

interface ScreenTab {
    id: string;
    label: string;
    image: string;
}

const screens: ScreenTab[] = [
    {
        id: "screen1",
        label: "Lambda",
        image: screen2,
    },
    {
        id: "screen2",
        label: "HTTP",
        image: screen3,
    },
    {
        id: "screen3",
        label: "Configuration",
        image: screen,
    },
];

const DemoScreensSection = () => {
    const [activeScreenIndex, setActiveScreenIndex] = useState(2);
    const previousActiveIndexRef = useRef<number>(2);

    const handleTabClick = (index: number) => {
        if (index === activeScreenIndex) return;
        previousActiveIndexRef.current = activeScreenIndex;
        setActiveScreenIndex(index);
    };

    return (
        <LayoutContainer>
            <div className="flex flex-col gap-4 md:gap-6">
                {/* Tabs */}
                <div className="flex flex-row items-center justify-center gap-x-2.5 flex-wrap gap-y-1.5 mb-8">
                    {screens.map((screen, index) => (
                        <div
                            key={screen.id}
                            className={`flex flex-row items-center gap-1 text-base px-3 py-1 rounded-lg transition-all duration-300 cursor-pointer ${activeScreenIndex === index
                                ? 'bg-neutral-100 text-neutral-900 border border-neutral-200'
                                : 'text-neutral-500 hover:text-neutral-900 border border-transparent hover:border-neutral-200'
                                }`}
                            onClick={() => handleTabClick(index)}
                        >
                            <p>{screen.label}</p>
                        </div>
                    ))}
                </div>

                {/* Stacked Screens */}
                <div className="relative w-full">
                    {/* Render inactive screens first */}
                    {screens
                        .map((screen, index) => ({ screen, index }))
                        .filter(({ index }) => index !== activeScreenIndex)
                        .sort((a, b) => {
                            // Previous active screen should be last in stack (lowest, rendered first)
                            if (a.index === previousActiveIndexRef.current) return 1;
                            if (b.index === previousActiveIndexRef.current) return -1;
                            return a.index - b.index;
                        })
                        .map(({ screen, index }, inactivePosition) => {
                            // Previous active screen goes to the bottom (last position in stack)
                            const isPreviousActive = index === previousActiveIndexRef.current;
                            const totalInactive = screens.length - 1;
                            const stackPosition = isPreviousActive ? totalInactive - 1 : inactivePosition;

                            const isFirstInactive = stackPosition === 0;
                            const width = isFirstInactive ? "w-[96%]" : "w-[98%]";
                            const topOffset = isFirstInactive
                                ? "absolute -top-8 md:-top-6 left-1/2 -translate-x-1/2"
                                : "absolute -top-4 md:-top-3 left-1/2 -translate-x-1/2";
                            const zIndex = isFirstInactive ? 10 : 20;

                            return (
                                <div
                                    key={screen.id}
                                    style={{ zIndex }}
                                    className={`${width} aspect-video rounded-lg md:rounded-xl border border-dashed border-neutral-200 ${topOffset} ${!isFirstInactive ? "bg-white" : ""
                                        }`}
                                />
                            );
                        })}
                    {/* Render active screen last (on top) */}
                    <motion.img
                        key={`active-${activeScreenIndex}`}
                        src={screens[activeScreenIndex].image}
                        alt={`Sapic Console Screenshot ${activeScreenIndex + 1}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 0.4,
                            ease: "easeInOut"
                        }}
                        style={{ zIndex: 30 }}
                        className="w-full h-auto rounded-lg md:rounded-xl border border-neutral-200/50 relative"
                    />
                </div>
            </div>
        </LayoutContainer>
    );
};

export default DemoScreensSection;

