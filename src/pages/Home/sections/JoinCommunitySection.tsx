import LayoutContainer from "@/components/containers/LayoutContainer";
import Button from "@/components/ui/Button";
import FadeInElement from "@/components/FadeInElement";
import { useWaitList } from "@/hooks/useWaitList";
import { useNavigate } from "react-router-dom";
import { handleDiscordClick } from "@/lib/analytics";

const JoinCommunitySection = () => {
    const { openWaitList: openWaitList } = useWaitList();
    const navigate = useNavigate();

    return (
        <LayoutContainer>
            <section className="relative">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                    {/* Main content block */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-6 order-2 lg:order-1">
                        <FadeInElement>
                            <div className="flex flex-col items-start gap-y-1.5">
                                <h2 className="max-w-full lg:max-w-xl text-3xl md:text-4xl lg:text-5xl font-semibold font-serif !leading-[1.2] tracking-tight text-neutral-900"> Join our <span className="text-blue-4">open-source</span> community</h2>
                                <p className="mt-4 md:mt-6 max-w-full md:max-w-2xl text-pretty text-balance text-sm md:text-base leading-relaxed text-neutral-600">
                                    Be part of an open, Git-native, AI-driven project redefining how backend teams work from local experiments to production-ready workflows.
                                </p>
                            </div>
                        </FadeInElement>

                        <FadeInElement delay={0.15}>
                            <p className="text-pretty text-balance text-sm md:text-base leading-normal text-neutral-900">
                                We believe the best developer tools are built <span className="font-medium text-neutral-900">with</span> developers, not just <span className="font-medium text-neutral-900">for</span> them. We're forming a community of practitioners who can shape what matters: contracts, plugins, mocks, and integration testing workflows. Add your voice to the roadmap so the product solves your real day-to-day problems, not hypothetical ones.
                            </p>
                        </FadeInElement>

                        <FadeInElement delay={0.25} className="mt-6 flex flex-col gap-5">

                            <div className="flex flex-row items-center justify-start gap-2 md:gap-3 flex-wrap">
                                <Button
                                    variant="primary"
                                    size="medium"
                                    className="self-start w-full sm:w-auto"
                                    onClick={() => handleDiscordClick('join_community_section')}
                                >
                                    Join our Discord
                                </Button>
                                <Button
                                    variant="default"
                                    size="medium"
                                    className="self-start w-full sm:w-auto"
                                    onClick={() => openWaitList('join_community_section')}
                                >
                                    Sign up to Waitlist
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="medium"
                                    className="self-start w-full sm:w-auto"
                                    onClick={() => navigate("/roadmap")}
                                >
                                    <span className="hidden lg:inline">
                                        Explore our roadmap
                                    </span>
                                    <span className="inline lg:hidden">
                                        Our Roadmap
                                    </span>
                                </Button>
                            </div>

                            <FadeInElement delay={0.3}>
                                <div className="flex max-w-full md:max-w-2xl gap-3 md:gap-4 mt-6 lg:mt-10">
                                    <div className="w-1 flex-shrink-0 rounded-full bg-blue-4"></div>
                                    <div className="flex flex-col gap-3">
                                        <p className="text-pretty text-sm text-neutral-500">
                                            Feel free to reach out if you'd like to get involved in the project!
                                        </p>
                                    </div>
                                </div>
                            </FadeInElement>
                        </FadeInElement>

                    </div>

                    {/* SVG image block */}
                    <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end order-1 lg:order-2">
                        <svg width="280" height="280" viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_10608_35608)">
                                <rect width="280" height="280" fill="white" />
                                <path d="M50 50H95V95H50V50Z" fill="#276EF0" />
                                <path opacity="0.6" d="M140 50H185V95H140V50Z" fill="#276EF0" />
                                <path opacity="0.6" d="M95 95H140V140H95V95Z" fill="#276EF0" />
                                <path opacity="0.45" d="M140 95H185V140H140V95Z" fill="#276EF0" />
                                <path opacity="0.3" d="M185 95H230V140H185V95Z" fill="#276EF0" />
                                <path opacity="0.6" d="M50 140H95V185H50V140Z" fill="#276EF0" />
                                <path opacity="0.45" d="M95 140H140V185H95V140Z" fill="#276EF0" />
                                <path opacity="0.3" d="M140 140H185V185H140V140Z" fill="#276EF0" />
                                <path opacity="0.15" d="M185 140H230V185H185V140Z" fill="#276EF0" />
                                <path opacity="0.3" d="M95 185H140V230H95V185Z" fill="#276EF0" />
                                <path opacity="0.15" d="M140 185H185V230H140V185Z" fill="#276EF0" />
                                <line x1="95.5" y1="2.18558e-08" x2="95.5" y2="280" stroke="#D4E2FF" />
                                <line y1="139.5" x2="280" y2="139.5" stroke="#D4E2FF" />
                                <line y1="184.5" x2="280" y2="184.5" stroke="#D4E2FF" />
                                <line y1="229.5" x2="280" y2="229.5" stroke="#D4E2FF" />
                                <line y1="274.5" x2="280" y2="274.5" stroke="#D4E2FF" />
                                <line y1="94.5" x2="280" y2="94.5" stroke="#D4E2FF" />
                                <line y1="49.5" x2="280" y2="49.5" stroke="#D4E2FF" />
                                <line y1="4.5" x2="280" y2="4.5" stroke="#D4E2FF" />
                                <line x1="184.5" y1="280" x2="184.5" y2="2.18557e-08" stroke="#D4E2FF" />
                                <line x1="140.5" y1="2.18558e-08" x2="140.5" y2="280" stroke="#D4E2FF" />
                                <line x1="230.5" y1="2.18558e-08" x2="230.5" y2="280" stroke="#D4E2FF" />
                                <line x1="275.5" y1="2.18558e-08" x2="275.5" y2="280" stroke="#D4E2FF" />
                                <line x1="50.5" y1="2.18558e-08" x2="50.5" y2="280" stroke="#D4E2FF" />
                                <line x1="5.5" y1="2.18558e-08" x2="5.49999" y2="280" stroke="#D4E2FF" />
                                <rect width="280" height="280" fill="url(#paint0_radial_10608_35608)" />
                            </g>
                            <defs>
                                <radialGradient id="paint0_radial_10608_35608" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(140 140) rotate(90) scale(159.5)">
                                    <stop stopColor="white" stopOpacity="0" />
                                    <stop offset="1" stopColor="white" />
                                </radialGradient>
                                <clipPath id="clip0_10608_35608">
                                    <rect width="280" height="280" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
            </section>
        </LayoutContainer>
    );
};

export default JoinCommunitySection;