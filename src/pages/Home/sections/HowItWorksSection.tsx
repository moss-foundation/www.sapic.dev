import { useEffect, useRef, useState } from "react";
import LayoutContainer from "@/components/LayoutContainer";
import FadeInElement from "@/components/FadeInElement";
import CollaborateTabContent from "@/components/CollaborateTabContent";
import ConnectTabContent from "./HowItWorksSection/ConnectTabContent";
import DesignCreateTabContent from "./HowItWorksSection/DesignCreateTabContent";
import PlanDiffTabContent from "./HowItWorksSection/PlanDiffTabContent";
import ApplyTabContent from "./HowItWorksSection/ApplyTabContent";
import ConnectionsIcon from "@/icons/Connections";
import PuzzleIcon from "@/icons/Puzzle";
import UsersIcon from "@/icons/Users";
import DiffIcon from "@/icons/Diff";
import ApplyIcon from "@/icons/Apply";
import { Underlined } from "@/components";

interface Tab {
    id: string;
    label: string;
    subLabel?: string;
    icon: React.ReactNode;
    iconColor: string;
    content: React.ReactNode;
}

const tabs: Tab[] = [
    {
        id: 'connect',
        label: 'Connect',
        subLabel: '(Optional)',
        iconColor: 'text-pink-600',
        icon: <PuzzleIcon className="size-4.5" />,
        content: <ConnectTabContent />,
    },
    {
        id: 'design',
        label: 'Design & Create',
        iconColor: 'text-red-600',
        icon: <ConnectionsIcon className="size-4.5" />,
        content: <DesignCreateTabContent />,
    },
    {
        id: 'collaborate',
        label: 'Collaborate',
        iconColor: 'text-green-600',
        icon: <UsersIcon className="size-4.5" />,
        content: <CollaborateTabContent />,
    },
    {
        id: 'plan',
        label: 'Plan & Diff',
        iconColor: 'text-purple-600',
        icon: <DiffIcon className="size-4.5" />,
        content: <PlanDiffTabContent />,
    },
    {
        id: 'apply',
        label: 'Apply',
        iconColor: 'text-blue-600',
        icon: <ApplyIcon className="size-4.5" />,
        content: <ApplyTabContent />,
    },
];

const HowItWorksSection = () => {
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const sectionRef = useRef<HTMLDivElement>(null);
    const isScrollingToTab = useRef(false);
    const scrollTimeoutRef = useRef<number | null>(null);

    const scrollToTab = (tabIndex: number) => {
        const section = sectionRef.current;
        if (!section) return;

        // Set flag to prevent scroll handler from updating state
        isScrollingToTab.current = true;

        // Clear any existing timeout
        if (scrollTimeoutRef.current) {
            clearTimeout(scrollTimeoutRef.current);
        }

        // Immediately update the active tab
        setActiveTabIndex(tabIndex);

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const viewportHeight = window.innerHeight;

        // Calculate the scroll position for the selected tab
        const scrollProgress = tabIndex / tabs.length;
        const targetScroll = sectionTop + (scrollProgress * (sectionHeight - viewportHeight));

        window.scrollTo({
            top: targetScroll,
            behavior: 'smooth'
        });

        // Reset the flag after a longer delay to ensure smooth scroll completes
        scrollTimeoutRef.current = setTimeout(() => {
            isScrollingToTab.current = false;
        }, 1500);
    };

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        let rafId: number | null = null;

        const handleScroll = () => {
            // Cancel any pending animation frame
            if (rafId) {
                cancelAnimationFrame(rafId);
            }

            // Use requestAnimationFrame for better performance
            rafId = requestAnimationFrame(() => {
                // Skip if user clicked on a tab
                if (isScrollingToTab.current) return;

                const rect = section.getBoundingClientRect();
                const sectionHeight = section.offsetHeight;
                const viewportHeight = window.innerHeight;

                const scrollProgress = Math.max(0, Math.min(1, -rect.top / (sectionHeight - viewportHeight)));
                const newTabIndex = Math.min(tabs.length - 1, Math.floor(scrollProgress * tabs.length));

                setActiveTabIndex(newTabIndex);
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (rafId) {
                cancelAnimationFrame(rafId);
            }
            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }
        };
    }, []);

    return (
        <div ref={sectionRef} style={{ height: `${tabs.length * 100}vh` }}>
            <div className="sticky top-0 h-screen flex items-center justify-center py-20">
                <LayoutContainer>
                    <FadeInElement>
                        <div className="flex flex-col items-start gap-y-1.5 mb-6 md:mb-12">
                            <h2 className="max-w-full lg:max-w-xl text-3xl md:text-4xl lg:text-5xl font-semibold font-serif !leading-[1.2] tracking-tight text-neutral-900">
                                How It Works
                            </h2>
                            <p className="mt-4 md:mt-6 max-w-full md:max-w-2xl text-pretty text-sm md:text-base leading-relaxed text-neutral-600">
                                We didn't reinvent the wheel, just made it fit <Underlined text="everywhere" color="purple" style="wavy" />.
                            </p>
                        </div>
                    </FadeInElement>

                    <div className="flex flex-row items-center justify-start gap-x-2.5 flex-wrap gap-y-2 mb-6 md:mb-8">
                        {tabs.map((tab, index) => (
                            <div
                                key={tab.id}
                                className={`flex flex-row items-center gap-1 text-base px-3 py-1.5 rounded-lg transition-all duration-300 cursor-pointer ${activeTabIndex === index
                                    ? 'bg-neutral-100 text-neutral-900'
                                    : 'text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900'
                                    }`}
                                onClick={() => scrollToTab(index)}
                            >
                                <div className={tab.iconColor}>{tab.icon}</div>
                                <p>
                                    {tab.label}
                                    {tab.subLabel && <span className="text-neutral-500"> {tab.subLabel}</span>}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="relative min-h-[400px]">
                        {tabs.map((tab, index) => (
                            <FadeInElement key={tab.id} delay={index * 0.5}>
                                <div
                                    key={tab.id}
                                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${activeTabIndex === index
                                        ? 'opacity-100 pointer-events-auto'
                                        : 'opacity-0 pointer-events-none'
                                        }`}
                                >
                                    {tab.content}
                                </div>
                            </FadeInElement>
                        ))}
                    </div>
                </LayoutContainer>
            </div>
        </div>
    );
};

export default HowItWorksSection;