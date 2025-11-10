import { useEffect, useRef, useState } from "react";
import LayoutContainer from "@/components/LayoutContainer";
import FadeInElement from "@/components/FadeInElement";

interface Tab {
    id: string;
    label: string;
    subLabel?: string;
    icon: React.ReactNode;
    iconColor: string;
    title: string;
    description: string;
    bulletPoints: string[];
    outcome: string;
}

const tabs: Tab[] = [
    {
        id: 'connect',
        label: 'Connect',
        subLabel: '(Optional)',
        iconColor: 'text-pink-600',
        title: 'Ingest Your Specifications and Cloud Resources',
        description: 'The foundation of Sapic is a single, reliable source of truth for your entire system.',
        bulletPoints: [
            'Connect Your Git Repos: Link GitHub, GitLab, or other providers. Sapic is Git-native, so your workflows and versions are always in sync.',
            'Import Your Contracts: Automatically ingest your API specifications (OpenAPI, GraphQL, AsyncAPI, Protobuf) to create the blueprint of your system.',
            'Discover Cloud Resources: Sapic connects to your AWS, Azure, or GCP accounts to automatically discover and map your serverless functions, queues, databases, and other resources.',
        ],
        outcome: 'A living, visual map of your backend architecture, so you finally have a clear view of all connections and dependencies.',
        icon: (
            <svg className="size-5" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                <g fill="currentColor">
                    <rect x="2" y="6" width="4" height="6" rx="1" fill="currentColor" fillOpacity="0.3" stroke="none"/>
                    <rect x="2" y="6" width="4" height="6" rx="1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                    <rect x="12" y="6" width="4" height="6" rx="1" fill="currentColor" fillOpacity="0.3" stroke="none"/>
                    <rect x="12" y="6" width="4" height="6" rx="1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                    <path d="M6 9H12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                    <circle cx="4" cy="9" r="0.75" fill="currentColor" stroke="none"/>
                    <circle cx="14" cy="9" r="0.75" fill="currentColor" stroke="none"/>
                </g>
            </svg>
        ),
    },
    {
        id: 'design',
        label: 'Design & Create',
        iconColor: 'text-red-600',
        title: 'Design with AI and Generate Your Assets',
        description: 'Transform your specifications into a fully functional backend environment in minutes, not days.',
        bulletPoints: [
            'AI-Powered Scaffolding: Describe your intent in plain English. Our built-in AI agent helps you design new API endpoints, data models, and workflows.',
            'One-Click Advanced Mocks: Instantly generate a full mock server from your API contracts. Switch between mock and real backend with a single click for seamless development and testing.',
            'Generate Integration Tests: Automatically create robust integration tests that cover the entire flow of a request across multiple services and cloud resources.',
        ],
        outcome: 'Drastically reduce manual coding and setup time. Move from design to a testable environment instantly.',
        icon: (
            <svg className="size-5" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                <g fill="currentColor">
                    <path d="M9 2L10.5 6.5L15 8L10.5 9.5L9 14L7.5 9.5L3 8L7.5 6.5L9 2Z" fill="currentColor" fillOpacity="0.3" stroke="none"/>
                    <path d="M9 2L10.5 6.5L15 8L10.5 9.5L9 14L7.5 9.5L3 8L7.5 6.5L9 2Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                    <circle cx="9" cy="8" r="1.5" fill="currentColor" stroke="none"/>
                </g>
            </svg>
        ),
    },
    {
        id: 'collaborate',
        label: 'Collaborate',
        iconColor: 'text-green-600',
        title: 'Build and Validate as a Team',
        description: 'Sapic creates a unified workspace where your team can build confidence together.',
        bulletPoints: [
            'Shared Workspaces & Environments: Create isolated environments (dev, staging) that your entire team can access with one click. Onboard new members in days, not weeks.',
            'Contract-Driven Collaboration: Use your API specs as contracts between frontend and backend teams. Everyone works against the same definitive interface.',
            'Real-Time Visibility: See what your teammates are building and testing. Comment and review workflows directly in the context of the resources.',
        ],
        outcome: 'Eliminate "it works on my machine" syndrome. Foster collaboration and speed up development cycles.',
        icon: (
            <svg className="size-5" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                <g fill="currentColor">
                    <circle cx="5.5" cy="5.5" r="2" fill="currentColor" fillOpacity="0.3" stroke="none"/>
                    <circle cx="5.5" cy="5.5" r="2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                    <circle cx="12.5" cy="5.5" r="2" fill="currentColor" fillOpacity="0.3" stroke="none"/>
                    <circle cx="12.5" cy="5.5" r="2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                    <circle cx="9" cy="12.5" r="2" fill="currentColor" fillOpacity="0.3" stroke="none"/>
                    <circle cx="9" cy="12.5" r="2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                    <path d="M7 6.5L8.5 10.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                    <path d="M11 6.5L9.5 10.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                </g>
            </svg>
        ),
    },
    {
        id: 'plan',
        label: 'Plan & Diff',
        iconColor: 'text-purple-600',
        title: 'Simulate and Analyze Changes Safely',
        description: 'Understand the impact of every change before it hits production.',
        bulletPoints: [
            'Smart "Plan" Mode: Like Terraform plan, but for your entire application flow. Sapic shows you exactly what will be affected — APIs, functions, data flows — when you apply a change.',
            'Visual Diffs: See not just code differences, but architecture and contract differences in a clear, visual interface.',
            'Detect Drift & Anomalies: Get alerted when your running environment drifts from its specified state, preventing configuration errors.',
        ],
        outcome: 'Make changes with confidence. Significantly reduce the risk of unexpected breakages and production rollbacks.',
        icon: (
            <svg className="size-5" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                <g fill="currentColor">
                    <path d="M3 4H8V6H3V4Z" fill="currentColor" fillOpacity="0.3" stroke="none"/>
                    <path d="M3 4H8V6H3V4Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                    <path d="M3 8H10V10H3V8Z" fill="currentColor" fillOpacity="0.3" stroke="none"/>
                    <path d="M3 8H10V10H3V8Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                    <path d="M3 12H8V14H3V12Z" fill="currentColor" fillOpacity="0.3" stroke="none"/>
                    <path d="M3 12H8V14H3V12Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                    <path d="M12 4L15 7L12 10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                    <path d="M15 7H11" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                </g>
            </svg>
        ),
    },
    {
        id: 'apply',
        label: 'Apply',
        iconColor: 'text-blue-600',
        title: 'Deploy with Confidence and Observe',
        description: 'Execute your changes and monitor the entire system in one place.',
        bulletPoints: [
            'Safe Deployment: Apply your validated changes directly to your target environments (via your existing CI/CD or through Sapic).',
            'End-to-End Observability: Don\'t just hope it worked. Our console provides live logs, traces, and metrics that are automatically correlated to the specific change you just made.',
            'Continuous Validation: "Policies as Code" actively validate data and security rules throughout the entire workflow. Telemetry and drift alerts keep you informed in real-time.',
        ],
        outcome: 'Slash your Mean Time to Resolution (MTTR) and achieve a low change failure rate. Know the state of your system at all times.',
        icon: (
            <svg className="size-5" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                <g fill="currentColor">
                    <circle cx="9" cy="9" r="7" fill="currentColor" fillOpacity="0.3" stroke="none"/>
                    <circle cx="9" cy="9" r="7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                    <path d="M7 6L7 12L12 9L7 6Z" fill="currentColor" stroke="none"/>
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
                        From fragmented scripts to a <span className="text-blue-4">unified workflow</span>
                    </h2>
                    <p className="mt-4 md:mt-6 max-w-full md:max-w-2xl text-pretty text-sm md:text-base leading-relaxed text-neutral-600">
                        Stop juggling a dozen tools. Sapic brings your entire backend development process into one intelligent, AI-powered console.
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
            <div className="min-h-[500px]">
                {tabs.map((tab, index) => (
                    <div
                        key={tab.id}
                        className={`transition-opacity duration-300 ${activeTabIndex === index ? 'opacity-100' : 'opacity-0 hidden'
                            }`}
                    >
                        <div className="bg-neutral-50 rounded-xl p-6 md:p-8 lg:p-10">
                            <div className="space-y-6 md:space-y-8">
                                <div>
                                    <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-neutral-900 mb-3 md:mb-4">
                                        {tab.title}
                                    </h3>
                                    <p className="text-sm md:text-base leading-relaxed text-neutral-700">
                                        {tab.description}
                                    </p>
                                </div>

                                <ul className="space-y-4 md:space-y-5">
                                    {tab.bulletPoints.map((point, pointIndex) => (
                                        <li key={pointIndex} className="flex items-start gap-3">
                                            <span className="flex-shrink-0 mt-1.5">
                                                <svg className="w-5 h-5 text-blue-4" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                            </span>
                                            <p className="text-sm md:text-base leading-relaxed text-neutral-700 flex-1">
                                                {point}
                                            </p>
                                        </li>
                                    ))}
                                </ul>

                                <div className="pt-4 md:pt-6 border-t border-neutral-200">
                                    <div className="flex items-start gap-3">
                                        <span className="text-blue-4 font-semibold text-lg md:text-xl flex-shrink-0">→</span>
                                        <div>
                                            <p className="text-xs md:text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-2">
                                                The Outcome
                                            </p>
                                            <p className="text-sm md:text-base leading-relaxed text-neutral-900 font-medium">
                                                {tab.outcome}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </LayoutContainer>
    );
};

export default HowDoesThisWorkSection;