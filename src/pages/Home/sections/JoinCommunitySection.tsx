import LayoutContainer from "@/components/containers/LayoutContainer";
import Button from "@/components/ui/Button";
import FadeInElement from "@/components/FadeInElement";
import { useWaitList } from "@/hooks/useWaitList";
import { DISCORD_INVITE_URL } from "@/lib/constants";
import { useNavigate } from "react-router-dom";

const JoinCommunitySection = () => {
    const { openWaitList: openWaitList } = useWaitList();
    const navigate = useNavigate();

    return (
        <LayoutContainer>
            <section className="relative">
                <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-8">
                    {/* Left Content */}
                    <div className="flex flex-col gap-6 max-w-full md:max-w-2xl">
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
                                    onClick={() => window.open(DISCORD_INVITE_URL, "_blank")}
                                >
                                    Join our Discord
                                </Button>
                                <Button
                                    variant="default"
                                    size="medium"
                                    className="self-start w-full sm:w-auto"
                                    onClick={openWaitList}
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
                            <p className="text-xs md:text-sm text-neutral-500 font-normal text-center md:text-left">Influence the roadmap • Co-design features with creators • Share your ideas and feedback</p>
                        </FadeInElement>

                    </div>
                </div>
            </section>
        </LayoutContainer>
    );
};

export default JoinCommunitySection;