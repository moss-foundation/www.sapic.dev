import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import LayoutContainer from "@/components/containers/LayoutContainer";
import UsersIcon from "@/icons/Users";

import screenshotLambda from "@assets/images/screenshot_lambda.png";
import screenshotEndpoint from "@assets/images/screenshot_endpoint.png";
import screenshotConfiguration from "@assets/images/screenshot_configuration.png";


interface ScreenTab {
    id: string;
    label: string;
    image: string;
    order: number;
}

interface StackCardStyle {
    width: string;
    topOffset: string;
    zIndex: number;
    showBackground: boolean;
}

const ANIMATION_DURATION = {
    screen: 0.4,
    modal: 0.2,
} as const;

const STACK_CONFIG = {
    first: {
        width: "w-[96%]",
        topOffset: "absolute -top-8 md:-top-6 left-1/2 -translate-x-1/2",
        zIndex: 10,
    },
    second: {
        width: "w-[98%]",
        topOffset: "absolute -top-4 md:-top-3 left-1/2 -translate-x-1/2",
        zIndex: 20,
    },
    active: { zIndex: 30 },
} as const;

const SCREENS: ScreenTab[] = [
    {
        id: "screen1",
        label: "Lambda",
        image: screenshotLambda,
        order: 1,
    },
    {
        id: "screen2",
        label: "HTTP",
        image: screenshotEndpoint,
        order: 2,
    },
    {
        id: "screen3",
        label: "Configuration",
        image: screenshotConfiguration,
        order: 3,
    },
].sort((a, b) => a.order - b.order);

const FEATURES = [
    {
        icon: (
            <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 sm:size-4 flex-shrink-0"
            >
                <path
                    d="M4.5 2.25V11.25M4.5 11.25C3.25736 11.25 2.25 12.2573 2.25 13.5C2.25 14.7427 3.25736 15.75 4.5 15.75C5.74264 15.75 6.75 14.7427 6.75 13.5M4.5 11.25C5.74264 11.25 6.75 12.2573 6.75 13.5M6.75 13.5C8.54017 13.5 10.2571 12.7889 11.523 11.523C12.7889 10.2571 13.5 8.54017 13.5 6.75M13.5 6.75C14.7427 6.75 15.75 5.74264 15.75 4.5C15.75 3.25736 14.7427 2.25 13.5 2.25C12.2573 2.25 11.25 3.25736 11.25 4.5C11.25 5.74264 12.2573 6.75 13.5 6.75Z"
                    stroke="#3369D6"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        ),
        label: "Git Native",
    },
    {
        icon: (
            <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 sm:size-4 flex-shrink-0"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10ZM16.3455 13.9999C15.0169 16.1031 12.6716 17.5 10 17.5C7.32841 17.5 4.98308 16.1031 3.65452 13.9999H10.0826C10.1435 13.9999 10.1841 13.9788 10.1841 13.9229V12.0668C10.1841 12.011 10.1435 11.9999 10.0826 11.9999H8.5082V10.584H10.211C10.3664 10.584 11.0421 10.6287 11.2581 11.4973C11.2697 11.543 11.2836 11.6527 11.2993 11.7759C11.3163 11.9099 11.3354 12.06 11.3557 12.1614C11.4217 12.4907 11.5005 12.7059 11.5639 12.8791C11.568 12.8901 11.572 12.901 11.5759 12.9117C11.6771 13.2237 12.0892 14.0056 12.5283 14.0056L15.3043 13.9999H16.3455ZM17.2304 11.9999H15.0257C14.6812 11.9999 14.2918 11.5949 14.2141 11.1551C14.0629 10.2996 13.7283 10.0276 13.2153 9.62117L13.1795 9.59281C13.8417 9.16984 14.5308 8.54586 14.5308 7.71064C14.5308 6.80877 13.9161 6.24072 13.4971 5.96214C12.9093 5.57241 12.2584 5.49432 12.0828 5.49432L4.00364 5.49443C5.3722 3.67593 7.54877 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10C17.5 10.6926 17.4061 11.3632 17.2304 11.9999ZM2.92706 7.49917C2.65049 8.28135 2.5 9.1231 2.5 10C2.5 10.6926 2.59388 11.3632 2.7696 11.9999H5.54779V7.49908L2.92706 7.49917ZM8.50856 7.54375V8.7912L10.5695 8.79103C11.0085 8.79103 11.5423 8.63521 11.5423 8.20063C11.5423 7.67724 10.8463 7.54375 10.7315 7.54375H8.50856Z"
                    fill="#F86E40"
                />
            </svg>
        ),
        label: "Built with Rust",
    },
    {
        icon: <UsersIcon className="size-5 sm:size-4.5 flex-shrink-0" />,
        label: "Easy to Collaborate",
    },
    {
        icon: (
            <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 sm:size-4 flex-shrink-0"
            >
                <path
                    d="M11.4873 7.5C12.5136 7.81972 13.4752 8.33933 14.3134 9.0375M16.9383 6.37498C14.7465 4.44296 11.9251 3.37697 9.00334 3.37697C8.54959 3.37697 8.09824 3.40267 7.65132 3.45335M6.40076 11.7075C7.16216 11.1666 8.07304 10.876 9.00702 10.876C9.94099 10.876 10.8519 11.1666 11.6133 11.7075M9.00342 14.625H9.01092M0.898438 6.52557C1.89865 5.60902 3.05471 4.85981 4.3223 4.3223M3.55236 9.18225C4.60042 8.259 5.88471 7.59765 7.3029 7.30045M11.7771 11.8313C11.0128 11.2322 10.0498 10.875 9.00334 10.875C7.94104 10.875 6.96471 11.2431 6.19495 11.8587M2.25342 2.25L15.7534 15.75"
                    stroke="#DF9303"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        ),
        label: "Works Offline",
    },
] as const;

const getInitialActiveIndex = (): number => {
    const index = SCREENS.findIndex(screen => screen.order === 1);
    return index !== -1 ? index : 0;
};

const getStackCardStyle = (stackPosition: number): StackCardStyle => {
    const isFirst = stackPosition === 0;
    return {
        width: isFirst ? STACK_CONFIG.first.width : STACK_CONFIG.second.width,
        topOffset: isFirst ? STACK_CONFIG.first.topOffset : STACK_CONFIG.second.topOffset,
        zIndex: isFirst ? STACK_CONFIG.first.zIndex : STACK_CONFIG.second.zIndex,
        showBackground: !isFirst,
    };
};

const useScrollLock = (isLocked: boolean) => {
    useEffect(() => {
        if (isLocked) {
            const scrollY = window.scrollY;
            document.body.style.position = "fixed";
            document.body.style.top = `-${scrollY}px`;
            document.body.style.width = "100%";

            return () => {
                const scrollY = document.body.style.top;
                document.body.style.position = "";
                document.body.style.top = "";
                document.body.style.width = "";
                window.scrollTo(0, parseInt(scrollY || "0") * -1);
            };
        }
    }, [isLocked]);
};

const TabButton = ({
    screen,
    isActive,
    onClick,
}: {
    screen: ScreenTab;
    isActive: boolean;
    onClick: () => void;
}) => (
    <div
        className={`flex flex-row items-center gap-1 text-sm px-3 py-1.5 rounded-lg transition-all duration-300 cursor-pointer ${isActive
            ? "bg-neutral-100 text-neutral-900 border border-neutral-200"
            : "text-neutral-500 hover:text-neutral-900 border border-transparent hover:border-neutral-200"
            }`}
        onClick={onClick}
    >
        <p>{screen.label}</p>
    </div>
);

const StackCard = ({ style, screenId }: { style: StackCardStyle; screenId: string }) => (
    <div
        key={screenId}
        style={{ zIndex: style.zIndex }}
        className={`${style.width} aspect-video rounded-lg md:rounded-xl border border-dashed border-neutral-300 ${style.topOffset
            } ${style.showBackground ? "bg-white" : ""}`}
    />
);

const ActiveScreen = ({
    screen,
    screenIndex,
    onClick,
}: {
    screen: ScreenTab;
    screenIndex: number;
    onClick: () => void;
}) => (
    <motion.img
        key={`active-${screenIndex}`}
        src={screen.image}
        alt={`${screen.label} Screenshot`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: ANIMATION_DURATION.screen, ease: "easeInOut" }}
        loading="eager"
        decoding="async"
        fetchPriority="high"
        draggable={false}
        onClick={onClick}
        style={{ zIndex: STACK_CONFIG.active.zIndex, imageRendering: "auto" }}
        className="w-full h-auto rounded-lg md:rounded-xl border border-neutral-200/50 relative object-contain cursor-pointer md:cursor-default md:pointer-events-none"
    />
);

const FeatureBadge = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
    <div className="flex flex-row items-center justify-center gap-2 sm:gap-1.5">
        {icon}
        <p className="text-sm sm:text-xs md:text-sm text-neutral-600 whitespace-nowrap">{label}</p>
    </div>
);

const CloseButton = ({ onClick }: { onClick: () => void }) => (
    <button
        onClick={onClick}
        className="absolute top-4 right-4 z-10 text-white hover:text-neutral-300 transition-colors"
        aria-label="Close"
    >
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M18 6L6 18M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    </button>
);

const DemoScreensSection = () => {
    const initialIndex = getInitialActiveIndex();
    const [activeScreenIndex, setActiveScreenIndex] = useState(initialIndex);
    const previousActiveIndexRef = useRef<number>(initialIndex);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useScrollLock(isModalOpen);

    const handleTabClick = useCallback((index: number) => {
        setActiveScreenIndex(current => {
            if (index === current) return current;
            previousActiveIndexRef.current = current;
            return index;
        });
    }, []);

    const handleScreenClick = useCallback(() => {
        setIsModalOpen(true);
    }, []);

    const handleModalClose = useCallback(() => {
        setIsModalOpen(false);
    }, []);

    const handleModalTabClick = useCallback(
        (e: React.MouseEvent, index: number) => {
            e.stopPropagation();
            handleTabClick(index);
        },
        [handleTabClick]
    );

    const getInactiveScreens = useCallback(() => {
        return SCREENS.map((screen, index) => ({ screen, index }))
            .filter(({ index }) => index !== activeScreenIndex)
            .sort((a, b) => {
                if (a.index === previousActiveIndexRef.current) return 1;
                if (b.index === previousActiveIndexRef.current) return -1;
                return a.index - b.index;
            })
            .map(({ screen, index }, inactivePosition) => {
                const isPreviousActive = index === previousActiveIndexRef.current;
                const totalInactive = SCREENS.length - 1;
                const stackPosition = isPreviousActive ? totalInactive - 1 : inactivePosition;
                return { screen, style: getStackCardStyle(stackPosition) };
            });
    }, [activeScreenIndex]);

    const inactiveScreens = getInactiveScreens();
    const activeScreen = SCREENS[activeScreenIndex];

    return (
        <LayoutContainer>
            <div className="flex flex-col gap-4 md:gap-6">
                {/* Screen Tabs */}
                <div className="flex flex-row items-center justify-center gap-x-2.5 flex-wrap gap-y-1.5 mb-8">
                    {SCREENS.map((screen, index) => (
                        <TabButton
                            key={screen.id}
                            screen={screen}
                            isActive={activeScreenIndex === index}
                            onClick={() => handleTabClick(index)}
                        />
                    ))}
                </div>

                {/* Screen Stack */}
                <div className="relative w-full">
                    {/* Inactive screens in background */}
                    {inactiveScreens.map(({ screen, style }) => (
                        <StackCard key={screen.id} style={style} screenId={screen.id} />
                    ))}

                    {/* Active screen on top with animated border */}
                    <div className="relative">
                        <ActiveScreen
                            screen={activeScreen}
                            screenIndex={activeScreenIndex}
                            onClick={handleScreenClick}
                        />

                        {/* Animated gradient border */}
                        <motion.div
                            className="absolute inset-0 rounded-lg md:rounded-xl pointer-events-none"
                            style={{
                                background: 'linear-gradient(90deg, #f5f8fe 0%, #3574f0 50%, #f5f8fe 100%)',
                                backgroundSize: '200% 100%',
                                padding: '1px',
                                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                WebkitMaskComposite: 'xor',
                                maskComposite: 'exclude',
                                zIndex: 40,
                            }}
                            animate={{
                                backgroundPosition: ['0% 0%', '200% 0%'],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: 'linear',
                            }}
                        />
                    </div>
                </div>
            </div>

            {/* Feature Badges */}
            <div className="grid grid-cols-2 md:flex md:flex-row md:flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6 w-full md:w-auto mt-6 sm:mt-8">
                {FEATURES.map(feature => (
                    <FeatureBadge key={feature.label} icon={feature.icon} label={feature.label} />
                ))}
            </div>

            {/* Mobile Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: ANIMATION_DURATION.modal }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 md:hidden"
                        onClick={handleModalClose}
                    >
                        <div className="relative w-full h-full flex flex-col items-center justify-center p-4">
                            <CloseButton onClick={handleModalClose} />

                            {/* Modal Tabs */}
                            <div className="flex flex-row items-center justify-center gap-x-2.5 flex-wrap gap-y-1.5 mb-4">
                                {SCREENS.map((screen, index) => (
                                    <div
                                        key={screen.id}
                                        className={`flex flex-row items-center gap-1 text-sm px-3 py-2 rounded-lg transition-all duration-300 cursor-pointer ${activeScreenIndex === index
                                            ? "bg-white text-neutral-900"
                                            : "text-white hover:text-neutral-300"
                                            }`}
                                        onClick={e => handleModalTabClick(e, index)}
                                    >
                                        <p>{screen.label}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Modal Screenshot */}
                            <motion.img
                                key={`modal-${activeScreenIndex}`}
                                src={activeScreen.image}
                                alt={`${activeScreen.label} Screenshot`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                onClick={e => e.stopPropagation()}
                                className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
                            />

                            <p className="text-white text-sm mt-4 opacity-70">
                                Tap tabs to change screens
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </LayoutContainer>
    );
};

export default DemoScreensSection;
