import { useEffect, useRef, useState } from "react";
import LayoutContainer from "@/components/LayoutContainer";
import FadeInElement from "@/components/FadeInElement";

interface Tab {
    id: string;
    label: string;
    subLabel?: string;
    icon: React.ReactNode;
    iconColor: string;
}

const tabs: Tab[] = [
    {
        id: 'connect',
        label: 'Connect',
        subLabel: '(Optional)',
        iconColor: 'text-pink-600',
        icon: (
            <svg className="size-5" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                <g fill="currentColor">
                    <path
                        d="M5.02539 6.32811C4.63105 5.60571 4.66304 4.72608 5.10742 4.03417L5.44113 3.5147L5.02539 2.9711C3.36745 3.91845 2.25 5.70379 2.25 7.74999C2.25 10.7875 4.7125 13.25 7.75 13.25C10.7875 13.25 13.25 10.7875 13.25 7.74999L12.5524 6.49602L10.6426 9.46678C10.0737 10.3513 8.97349 10.7185 7.99707 10.3711L7.80371 10.292C6.78185 9.81838 6.27115 8.66359 6.59863 7.59178L6.63574 7.46874C6.00824 7.36578 5.44893 7.00211 5.10352 6.46092L5.02539 6.32811Z"
                        fill="currentColor" fillOpacity="0.3" stroke="none"></path>
                    <path d="M15.75 15.75L11.6386 11.6386" fill="none" stroke="currentColor" strokeLinecap="round"
                        strokeLinejoin="round" strokeWidth="1"></path>
                    <path
                        d="M4.8121 3.10599C3.274 4.08109 2.25 5.79419 2.25 7.74999C2.25 10.7876 4.7125 13.25 7.75 13.25C10.7875 13.25 13.25 10.7876 13.25 7.74999C13.25 7.46289 13.2213 7.18309 13.1789 6.90799"
                        fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                    <path d="M9.66701 5.25H7L9.25 1.75L8.33299 4.75H11L8.75 8.25L9.66701 5.25Z" fill="currentColor"
                        stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                </g>
            </svg>
        ),
    },
    {
        id: 'design',
        label: 'Design & Create',
        iconColor: 'text-red-600',
        icon: (
            <svg className="size-5" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                <g fill="currentColor">
                    <path
                        d="M13.25 6.75H4.75C4.19772 6.75 3.75 7.19772 3.75 7.75V12.25C3.75 12.8023 4.19772 13.25 4.75 13.25H13.25C13.8023 13.25 14.25 12.8023 14.25 12.25V7.75C14.25 7.19772 13.8023 6.75 13.25 6.75Z"
                        fill="currentColor" fillOpacity="0.3" stroke="none"></path>
                    <path d="M5.75 6.75V4C5.75 2.205 7.205 0.75 9 0.75C10.795 0.75 12.25 2.205 12.25 4V6.75" fill="none"
                        stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                    <path
                        d="M13.25 6.75H4.75C4.19772 6.75 3.75 7.19772 3.75 7.75V12.25C3.75 12.8023 4.19772 13.25 4.75 13.25H13.25C13.8023 13.25 14.25 12.8023 14.25 12.25V7.75C14.25 7.19772 13.8023 6.75 13.25 6.75Z"
                        fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                    <path
                        d="M2.25 18C2.94036 18 3.5 17.4404 3.5 16.75C3.5 16.0596 2.94036 15.5 2.25 15.5C1.55964 15.5 1 16.0596 1 16.75C1 17.4404 1.55964 18 2.25 18Z"
                        fill="currentColor" stroke="none"></path>
                    <path
                        d="M6.75 18C7.44036 18 8 17.4404 8 16.75C8 16.0596 7.44036 15.5 6.75 15.5C6.05964 15.5 5.5 16.0596 5.5 16.75C5.5 17.4404 6.05964 18 6.75 18Z"
                        fill="currentColor" stroke="none"></path>
                    <path
                        d="M11.25 18C11.9404 18 12.5 17.4404 12.5 16.75C12.5 16.0596 11.9404 15.5 11.25 15.5C10.5596 15.5 10 16.0596 10 16.75C10 17.4404 10.5596 18 11.25 18Z"
                        fill="currentColor" stroke="none"></path>
                    <path
                        d="M15.75 18C16.4404 18 17 17.4404 17 16.75C17 16.0596 16.4404 15.5 15.75 15.5C15.0596 15.5 14.5 16.0596 14.5 16.75C14.5 17.4404 15.0596 18 15.75 18Z"
                        fill="currentColor" stroke="none"></path>
                    <path d="M9 9.5V10.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                        strokeWidth="1"></path>
                </g>
            </svg>
        ),
    },
    {
        id: 'collaborate',
        label: 'Collaborate',
        iconColor: 'text-green-600',
        icon: (
            <svg className="size-5" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                <g fill="currentColor">
                    <path
                        d="M1.75 11.25C1.75 10.6977 2.19772 10.25 2.75 10.25H9V15.25H2.75C2.19772 15.25 1.75 14.8023 1.75 14.25V11.25Z"
                        fill="currentColor" fillOpacity="0.3" stroke="none"></path>
                    <path
                        d="M9.48497 6.975L11.455 3.598C11.673 3.224 11.403 2.754 10.97 2.754H7.02997C6.59697 2.754 6.32697 3.224 6.54497 3.598L8.51497 6.975C8.73197 7.346 9.26797 7.346 9.48497 6.975Z"
                        fill="currentColor" fillOpacity="0.3" stroke="none"></path>
                    <path d="M9 10.25V15" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                        strokeWidth="1"></path>
                    <path
                        d="M15.25 10.25H2.75C2.19772 10.25 1.75 10.6977 1.75 11.25V14.25C1.75 14.8023 2.19772 15.25 2.75 15.25H15.25C15.8023 15.25 16.25 14.8023 16.25 14.25V11.25C16.25 10.6977 15.8023 10.25 15.25 10.25Z"
                        fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                    <path
                        d="M9.48497 6.975L11.455 3.598C11.673 3.224 11.403 2.754 10.97 2.754H7.02997C6.59697 2.754 6.32697 3.224 6.54497 3.598L8.51497 6.975C8.73197 7.346 9.26797 7.346 9.48497 6.975Z"
                        fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                </g>
            </svg>
        ),
    },
    {
        id: 'plan',
        label: 'Plan & Diff',
        iconColor: 'text-purple-600',
        icon: (
            <svg className="size-5" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                <g fill="currentColor">
                    <path d="M7.75 7.75H10.25C10.802 7.75 11.25 8.198 11.25 8.75V15.25H6.75V8.75C6.75 8.198 7.198 7.75 7.75 7.75Z"
                        fill="currentColor" fillOpacity="0.3" stroke="none"></path>
                    <path d="M7.75 7.75H10.25C10.802 7.75 11.25 8.198 11.25 8.75V15.25H6.75V8.75C6.75 8.198 7.198 7.75 7.75 7.75Z"
                        fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                    <path
                        d="M3.25 11.75H6.75V15.25H3.25C2.698 15.25 2.25 14.802 2.25 14.25V12.75C2.25 12.198 2.698 11.75 3.25 11.75Z"
                        fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                    <path
                        d="M11.25 10.25H14.75C15.302 10.25 15.75 10.698 15.75 11.25V14.25C15.75 14.802 15.302 15.25 14.75 15.25H11.25V10.25Z"
                        fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                    <path d="M9.25 4.75V0.75C9.25 0.75 8.792 1.556 7.819 1.742" fill="none" stroke="currentColor"
                        strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                </g>
            </svg>
        ),
    },
    {
        id: 'apply',
        label: 'Apply',
        iconColor: 'text-blue-600',
        icon: (
            <svg className="size-5" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                <g fill="currentColor">
                    <path
                        d="M5.02539 6.32811C4.63105 5.60571 4.66304 4.72608 5.10742 4.03417L5.44113 3.5147L5.02539 2.9711C3.36745 3.91845 2.25 5.70379 2.25 7.74999C2.25 10.7875 4.7125 13.25 7.75 13.25C10.7875 13.25 13.25 10.7875 13.25 7.74999L12.5524 6.49602L10.6426 9.46678C10.0737 10.3513 8.97349 10.7185 7.99707 10.3711L7.80371 10.292C6.78185 9.81838 6.27115 8.66359 6.59863 7.59178L6.63574 7.46874C6.00824 7.36578 5.44893 7.00211 5.10352 6.46092L5.02539 6.32811Z"
                        fill="currentColor" fillOpacity="0.3" stroke="none"></path>
                    <path d="M15.75 15.75L11.6386 11.6386" fill="none" stroke="currentColor" strokeLinecap="round"
                        strokeLinejoin="round" strokeWidth="1"></path>
                    <path
                        d="M4.8121 3.10599C3.274 4.08109 2.25 5.79419 2.25 7.74999C2.25 10.7876 4.7125 13.25 7.75 13.25C10.7875 13.25 13.25 10.7876 13.25 7.74999C13.25 7.46289 13.2213 7.18309 13.1789 6.90799"
                        fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                    <path d="M9.66701 5.25H7L9.25 1.75L8.33299 4.75H11L8.75 8.25L9.66701 5.25Z" fill="currentColor"
                        stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                </g>
            </svg>
        ),
    },
];

const HowDoesThisWorkSection = () => {
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const sectionRef = useRef<HTMLDivElement>(null);
    const hasCompletedRef = useRef(false);
    const lastScrollTime = useRef(0);
    const isEngagedRef = useRef(false);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;


        const handleWheel = (e: WheelEvent) => {
            if (!section) return;

            const rect = section.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            const sectionCenter = rect.top + rect.height / 2;
            const isInActiveZone = sectionCenter >= viewportHeight * 0.3 && sectionCenter <= viewportHeight * 0.7;


            if (rect.bottom < 0 || rect.top > viewportHeight) {
                isEngagedRef.current = false;
                if (rect.bottom < 0) {
                    // Scrolled the section - can reset the state
                    hasCompletedRef.current = false;
                }
                return;
            }

            // If the section is not in the active zone, don't intercept
            if (!isInActiveZone) {
                return;
            }

            const scrollingDown = e.deltaY > 0;
            const scrollingUp = e.deltaY < 0;
            const now = Date.now();

            // Activate the mode when the user starts scrolling in the active zone
            if (!isEngagedRef.current && scrollingDown && activeTabIndex === 0) {
                isEngagedRef.current = true;
            }

            // Throttle to prevent too fast switching
            if (now - lastScrollTime.current < 300) {
                if (isEngagedRef.current && activeTabIndex < tabs.length - 1) {
                    e.preventDefault();
                }
                return;
            }

            // Scroll down
            if (scrollingDown) {
                // If we haven't passed all the tabs and we are in the interaction mode
                if (isEngagedRef.current && activeTabIndex < tabs.length - 1) {
                    e.preventDefault();
                    setActiveTabIndex((prev) => prev + 1);
                    lastScrollTime.current = now;
                } else if (activeTabIndex === tabs.length - 1) {
                    // Reached the last tab
                    hasCompletedRef.current = true;
                    isEngagedRef.current = false;
                }
            }
            // Scroll up
            else if (scrollingUp) {
                // If we have already passed all the tabs earlier, don't block the reverse scroll
                if (hasCompletedRef.current && activeTabIndex === tabs.length - 1) {
                    return;
                }

                // If not on the first tab, switch back
                if (activeTabIndex > 0 && isEngagedRef.current) {
                    e.preventDefault();
                    setActiveTabIndex((prev) => prev - 1);
                    lastScrollTime.current = now;
                }
            }
        };

        window.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            window.removeEventListener('wheel', handleWheel);
        };
    }, [activeTabIndex]);

    return (
        <LayoutContainer ref={sectionRef} className="flex flex-col gap-8 md:gap-10 w-full">
            <FadeInElement>
                <div className="flex flex-col items-start gap-y-1.5">
                    <h2 className="max-w-full lg:max-w-xl text-3xl md:text-4xl lg:text-5xl font-semibold font-serif !leading-[1.2] tracking-tight text-neutral-900">
                        One tool, <span className="text-blue-4">thousands of use cases</span>
                    </h2>
                    <p className="mt-4 md:mt-6 max-w-full md:max-w-2xl text-pretty text-sm md:text-base leading-relaxed text-neutral-600">
                        When users take time to share feedback, they're invested in your success.
                        <span className="font-medium text-neutral-900">
                            {" "}When you show them you're listening—really listening—they become your biggest champions.
                        </span>
                        {" "}That's not just good product management. That's good business.
                    </p>
                </div>
            </FadeInElement>

            {/* Tabs Navigation */}
            <div className="flex flex-row items-center justify-start gap-x-2.5">
                {tabs.map((tab, index) => (
                    <FadeInElement
                        key={tab.id}
                        delay={0.1 + index * 0.05}
                        className={`flex flex-row items-center gap-1 text-base px-3 py-1.5 rounded-lg transition-all duration-300 cursor-pointer ${activeTabIndex === index
                            ? 'bg-neutral-100 text-neutral-900'
                            : 'text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900'
                            }`}
                        onClick={() => setActiveTabIndex(index)}
                    >
                        <div className={tab.iconColor}>
                            {tab.icon}
                        </div>
                        <p>
                            {tab.label}
                            {tab.subLabel && <span className="text-neutral-500"> {tab.subLabel}</span>}
                        </p>
                    </FadeInElement>
                ))}
            </div>

            {/* Tab Content */}
            <div className="min-h-[400px]">
                {tabs.map((tab, index) => (
                    <div
                        key={tab.id}
                        className={`transition-opacity duration-300 ${activeTabIndex === index ? 'opacity-100' : 'opacity-0 hidden'
                            }`}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="col-span-2 bg-neutral-50 rounded-xl p-8 min-h-[400px] flex items-center justify-center">
                                <p className="text-neutral-400 text-lg">Content for tab "{tab.label}"</p>
                            </div>
                            <div className="col-span-1 bg-neutral-50 rounded-xl p-8 min-h-[400px] flex items-center justify-center">
                                <p className="text-neutral-400 text-sm">Additional content</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </LayoutContainer>
    );
};

export default HowDoesThisWorkSection;