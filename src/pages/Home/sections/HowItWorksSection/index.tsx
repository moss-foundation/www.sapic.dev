import React, { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import LayoutContainer from "@/components/containers/LayoutContainer";
import FadeInElement from "@/components/FadeInElement";
import ConnectTabContent from "./tabs/ConnectTabContent";
import DesignCreateTabContent from "./tabs/DesignCreateTabContent";
import CollaborateTabContent from "./tabs/CollaborateTabContent";
import PlanDiffTabContent from "./tabs/PlanDiffTabContent";
import ApplyTabContent from "./tabs/ApplyTabContent";
import ConnectionsIcon from "@/icons/Connections";
import PuzzleIcon from "@/icons/Puzzle";
import UsersIcon from "@/icons/Users";
import DiffIcon from "@/icons/Diff";
import ApplyIcon from "@/icons/Apply";

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
    const [progress, setProgress] = useState(0);
    const tabsDuration = 15 * 1000;
    const startTimeRef = useRef(Date.now());

    const handleTabClick = (tabIndex: number) => {
        setActiveTabIndex(tabIndex);
        setProgress(0);
        startTimeRef.current = Date.now();
    };

    useEffect(() => {
        // Reset the timer when the index changes
        startTimeRef.current = Date.now();
        setProgress(0);

        const progressInterval = setInterval(() => {
            const elapsed = Date.now() - startTimeRef.current;
            const newProgress = Math.min((elapsed / tabsDuration) * 100, 100);
            setProgress(newProgress);

            if (elapsed >= tabsDuration) {
                setActiveTabIndex((prev) => (prev + 1) % tabs.length);
            }
        }, 50);

        return () => {
            clearInterval(progressInterval);
        };
    }, [activeTabIndex, tabsDuration]);

    return (
        <div>
            <div className="lg:flex lg:items-center lg:justify-center lg:py-12">
                <LayoutContainer>
                    <FadeInElement>
                        <div className="flex flex-col items-start gap-y-1.5 mb-6 md:mb-8 lg:mb-12">
                            <h2 className="max-w-full lg:max-w-xl text-3xl md:text-4xl lg:text-5xl font-semibold font-serif !leading-[1.2] tracking-tight text-neutral-900">
                                How It Works
                            </h2>
                            <p className="mt-4 md:mt-5 lg:mt-6 max-w-full md:max-w-2xl text-pretty text-sm md:text-base leading-relaxed text-neutral-600">
                                We didn't reinvent the wheel, just made it fit everywhere.
                            </p>
                        </div>
                    </FadeInElement>


                    <div className="flex flex-row flex-wrap items-center justify-start gap-3 md:gap-4 mb-6 md:mb-8">
                        {tabs.map((tab, index) => (
                            <FadeInElement key={tab.id}>
                                <button
                                    className="relative transition-colors"
                                    onClick={() => handleTabClick(index)}
                                >
                                    <div
                                        className={`flex flex-row items-center gap-2 text-sm px-3 py-1.5 rounded-lg border transition-all duration-300 cursor-pointer whitespace-nowrap ${activeTabIndex === index
                                            ? 'bg-neutral-100 text-neutral-900 border-neutral-200'
                                            : 'text-neutral-500 hover:bg-neutral-100 border-transparent'
                                            }`}
                                    >
                                        <div className={tab.iconColor}>{tab.icon}</div>
                                        <p className="font-normal">
                                            {tab.label}
                                            {tab.subLabel && <span className="text-neutral-500"> {tab.subLabel}</span>}
                                        </p>
                                    </div>

                                    {/* Animated border progress - gradient stroke on top of gray border */}
                                    {activeTabIndex === index && (
                                        <svg
                                            className="absolute inset-0 pointer-events-none"
                                            width="100%"
                                            height="100%"
                                        >
                                            <defs>
                                                <linearGradient id={`howItWorksBorderGradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                                                    <stop offset="0%" stopColor="#d4e2ff" />
                                                    <stop offset="100%" stopColor="#3574f0" />
                                                </linearGradient>
                                            </defs>
                                            <motion.rect
                                                x="0.5"
                                                y="0.5"
                                                width="calc(100% - 1px)"
                                                height="calc(100% - 1px)"
                                                rx="8"
                                                fill="none"
                                                stroke={`url(#howItWorksBorderGradient-${index})`}
                                                strokeWidth="1"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                pathLength="100"
                                                strokeDasharray="100"
                                                initial={{ strokeDashoffset: 100 }}
                                                animate={{ strokeDashoffset: 100 - progress }}
                                                transition={{ duration: 0.05, ease: "linear" }}
                                            />
                                        </svg>
                                    )}
                                </button>
                            </FadeInElement>
                        ))}
                    </div>

                    <div className="relative min-h-[300px] md:min-h-[350px] lg:min-h-[400px]">
                        {tabs.map((tab, index) => (
                            <FadeInElement key={tab.id} delay={index * 0.5}>
                                <div
                                    className={`transition-opacity duration-700 ease-in-out ${activeTabIndex === index
                                        ? 'opacity-100 pointer-events-auto'
                                        : 'hidden opacity-0 pointer-events-none'
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

