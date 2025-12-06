import React, { useState } from "react";
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

    const handleTabClick = (tabIndex: number) => {
        setActiveTabIndex(tabIndex);
    };

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


                    <div className="flex flex-row items-center justify-start gap-x-2 lg:gap-x-2.5 gap-y-2 overflow-x-auto lg:flex-wrap mb-6 md:mb-8 pb-2 -mx-4 px-4 lg:mx-0 lg:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                        {tabs.map((tab, index) => (
                            <FadeInElement key={tab.id}>
                                <div
                                    className={`flex flex-row items-center gap-1.5 lg:gap-1 text-sm md:text-base lg:text-sm px-3 py-2 lg:py-1.5 rounded-lg transition-all duration-300 cursor-pointer whitespace-nowrap flex-shrink-0 ${activeTabIndex === index
                                        ? 'bg-neutral-100 text-neutral-900 lg:border lg:border-neutral-200'
                                        : 'text-neutral-500 active:bg-neutral-100/50 lg:hover:text-neutral-900 lg:border lg:border-transparent lg:hover:border-neutral-200'
                                        }`}
                                    onClick={() => handleTabClick(index)}
                                >
                                    <div className={tab.iconColor}>{tab.icon}</div>
                                    <p className="font-medium lg:font-normal">
                                        {tab.label}
                                        {tab.subLabel && <span className="text-neutral-500"> {tab.subLabel}</span>}
                                    </p>
                                </div>
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

