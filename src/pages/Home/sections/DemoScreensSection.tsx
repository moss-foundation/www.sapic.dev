import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import screen from "@assets/images/screen.png";
import screen2 from "@assets/images/screen2.png";
import screen3 from "@assets/images/screen3.png";
import LayoutContainer from "@/components/containers/LayoutContainer";
import UsersIcon from "@/icons/Users";

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
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleTabClick = (index: number) => {
        if (index === activeScreenIndex) return;
        previousActiveIndexRef.current = activeScreenIndex;
        setActiveScreenIndex(index);
    };

    const handleScreenClick = () => {
        // Open modal only on mobile devices
        if (window.innerWidth < 768) {
            setIsModalOpen(true);
        }
    };

    // Block scroll when modal is open
    useEffect(() => {
        if (isModalOpen) {
            // Save current scroll position
            const scrollY = window.scrollY;
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollY}px`;
            document.body.style.width = '100%';
        } else {
            // Restore scroll position
            const scrollY = document.body.style.top;
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            window.scrollTo(0, parseInt(scrollY || '0') * -1);
        }
    }, [isModalOpen]);

    return (
        <LayoutContainer>
            <div className="flex flex-col gap-4 md:gap-6">
                {/* Tabs */}
                <div className="flex flex-row items-center justify-center gap-x-2.5 flex-wrap gap-y-1.5 mb-8">
                    {screens.map((screen, index) => (
                        <div
                            key={screen.id}
                            className={`flex flex-row items-center gap-1 text-sm px-3 py-1.5 rounded-lg transition-all duration-300 cursor-pointer ${activeScreenIndex === index
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
                                    className={`${width} aspect-video rounded-lg md:rounded-xl border border-dashed border-neutral-300 ${topOffset} ${!isFirstInactive ? "bg-white" : ""
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
                        loading="eager"
                        decoding="async"
                        fetchPriority="high"
                        draggable={false}
                        onClick={handleScreenClick}
                        style={{
                            zIndex: 30,
                            imageRendering: "auto"
                        }}
                        className="w-full h-auto rounded-lg md:rounded-xl border border-neutral-200/50 relative object-contain cursor-pointer md:cursor-default"
                    />
                </div>
            </div>
            <div className="grid grid-cols-2 md:flex md:flex-row md:flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6 lg:gap-10 w-full md:w-auto mt-6 sm:mt-8">
                <div className="flex flex-row items-center justify-center gap-2 sm:gap-1.5">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-5 sm:size-4 flex-shrink-0">
                        <path d="M4.5 2.25V11.25M4.5 11.25C3.25736 11.25 2.25 12.2573 2.25 13.5C2.25 14.7427 3.25736 15.75 4.5 15.75C5.74264 15.75 6.75 14.7427 6.75 13.5M4.5 11.25C5.74264 11.25 6.75 12.2573 6.75 13.5M6.75 13.5C8.54017 13.5 10.2571 12.7889 11.523 11.523C12.7889 10.2571 13.5 8.54017 13.5 6.75M13.5 6.75C14.7427 6.75 15.75 5.74264 15.75 4.5C15.75 3.25736 14.7427 2.25 13.5 2.25C12.2573 2.25 11.25 3.25736 11.25 4.5C11.25 5.74264 12.2573 6.75 13.5 6.75Z" stroke="#3369D6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className="text-sm sm:text-xs md:text-sm text-neutral-500 whitespace-nowrap">Git Native</p>
                </div>
                <div className="flex flex-row items-center justify-center gap-2 sm:gap-1.5">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-5 sm:size-4 flex-shrink-0">
                        <path fillRule="evenodd" clipRule="evenodd" d="M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10ZM16.3455 13.9999C15.0169 16.1031 12.6716 17.5 10 17.5C7.32841 17.5 4.98308 16.1031 3.65452 13.9999H10.0826C10.1435 13.9999 10.1841 13.9788 10.1841 13.9229V12.0668C10.1841 12.011 10.1435 11.9999 10.0826 11.9999H8.5082V10.584H10.211C10.3664 10.584 11.0421 10.6287 11.2581 11.4973C11.2697 11.543 11.2836 11.6527 11.2993 11.7759C11.3163 11.9099 11.3354 12.06 11.3557 12.1614C11.4217 12.4907 11.5005 12.7059 11.5639 12.8791C11.568 12.8901 11.572 12.901 11.5759 12.9117C11.6771 13.2237 12.0892 14.0056 12.5283 14.0056L15.3043 13.9999H16.3455ZM17.2304 11.9999H15.0257C14.6812 11.9999 14.2918 11.5949 14.2141 11.1551C14.0629 10.2996 13.7283 10.0276 13.2153 9.62117L13.1795 9.59281C13.8417 9.16984 14.5308 8.54586 14.5308 7.71064C14.5308 6.80877 13.9161 6.24072 13.4971 5.96214C12.9093 5.57241 12.2584 5.49432 12.0828 5.49432L4.00364 5.49443C5.3722 3.67593 7.54877 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10C17.5 10.6926 17.4061 11.3632 17.2304 11.9999ZM2.92706 7.49917C2.65049 8.28135 2.5 9.1231 2.5 10C2.5 10.6926 2.59388 11.3632 2.7696 11.9999H5.54779V7.49908L2.92706 7.49917ZM8.50856 7.54375V8.7912L10.5695 8.79103C11.0085 8.79103 11.5423 8.63521 11.5423 8.20063C11.5423 7.67724 10.8463 7.54375 10.7315 7.54375H8.50856Z" fill="#F86E40" />
                    </svg>
                    <p className="text-sm sm:text-xs md:text-sm text-neutral-500 whitespace-nowrap">Built with Rust</p>
                </div>
                <div className="flex flex-row items-center justify-center gap-2 sm:gap-1.5">
                    <UsersIcon className="size-5 sm:size-4.5 flex-shrink-0" />
                    <p className="text-sm sm:text-xs md:text-sm text-neutral-500 whitespace-nowrap">Easy to collaborate</p>
                </div>
                <div className="flex flex-row items-center justify-center gap-2 sm:gap-1.5">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-5 sm:size-4 flex-shrink-0">
                        <path d="M11.4873 7.5C12.5136 7.81972 13.4752 8.33933 14.3134 9.0375M16.9383 6.37498C14.7465 4.44296 11.9251 3.37697 9.00334 3.37697C8.54959 3.37697 8.09824 3.40267 7.65132 3.45335M6.40076 11.7075C7.16216 11.1666 8.07304 10.876 9.00702 10.876C9.94099 10.876 10.8519 11.1666 11.6133 11.7075M9.00342 14.625H9.01092M0.898438 6.52557C1.89865 5.60902 3.05471 4.85981 4.3223 4.3223M3.55236 9.18225C4.60042 8.259 5.88471 7.59765 7.3029 7.30045M11.7771 11.8313C11.0128 11.2322 10.0498 10.875 9.00334 10.875C7.94104 10.875 6.96471 11.2431 6.19495 11.8587M2.25342 2.25L15.7534 15.75" stroke="#DF9303" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className="text-sm sm:text-xs md:text-sm text-neutral-500 whitespace-nowrap">Works Offline</p>
                </div>
            </div>

            {/* Modal for mobile */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 md:hidden"
                        onClick={() => setIsModalOpen(false)}
                    >
                        <div className="relative w-full h-full flex flex-col items-center justify-center p-4">
                            {/* Close button */}
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-4 right-4 z-10 text-white hover:text-neutral-300 transition-colors"
                                aria-label="Close"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>


                            <div className="flex flex-row items-center justify-center gap-x-2.5 flex-wrap gap-y-1.5 mb-4">
                                {screens.map((screen, index) => (
                                    <div
                                        key={screen.id}
                                        className={`flex flex-row items-center gap-1 text-sm px-3 py-2 rounded-lg transition-all duration-300 cursor-pointer ${activeScreenIndex === index
                                            ? 'bg-white text-neutral-900'
                                            : 'text-white hover:text-neutral-300'
                                            }`}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleTabClick(index);
                                        }}
                                    >
                                        <p>{screen.label}</p>
                                    </div>
                                ))}
                            </div>

                            <motion.img
                                key={`modal-${activeScreenIndex}`}
                                src={screens[activeScreenIndex].image}
                                alt={`Sapic Console Screenshot ${activeScreenIndex + 1}`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                onClick={(e) => e.stopPropagation()}
                                className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
                            />

                            {/* Tab indicator */}
                            <p className="text-white text-sm mt-4 opacity-70">Tap tabs to change screens</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </LayoutContainer>
    );
};

export default DemoScreensSection;

