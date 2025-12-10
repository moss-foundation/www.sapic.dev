import LayoutContainer from "@/components/containers/LayoutContainer";
import Button from "@/components/ui/Button";
import FadeInElement from "@/components/FadeInElement";
import { useWaitList } from "@/hooks/useWaitList";
import { useNavigate } from "react-router-dom";
import { handleDiscordClick } from "@/lib/analytics";

import sapicIconDev from "@assets/images/sapic_icon_dev.svg";

const CallToActionSection = () => {
    const { openWaitList: openWaitlist } = useWaitList();
    const navigate = useNavigate();

    return (
        <LayoutContainer className="">
            <div className="flex flex-col items-center">
                <FadeInElement>
                    <div className="relative mb-6 md:mb-8 lg:mb-10 inline-flex justify-center antialiased">
                        <img src={sapicIconDev} alt="Sapic" className="size-18" />
                    </div>
                </FadeInElement>

                <FadeInElement delay={0.1}>
                    <div className="mb-8 md:mb-10 text-center">
                        <h2
                            className="max-w-full lg:max-w-xl text-3xl md:text-4xl lg:text-5xl font-semibold font-serif !leading-[1.2] tracking-tight text-neutral-900 mx-auto">
                            The future of <span className="text-neutral-800 font-sans">sapic<span className="text-blue-4">_</span></span> <span className="text-blue-4">depends on you</span>
                        </h2>
                        <div className="mt-4 md:mt-6 max-w-full md:max-w-2xl space-y-4 mx-auto">
                            <p className="text-pretty text-sm md:text-base leading-normal text-neutral-600">
                                <span className="text-neutral-900">Your voice drives Sapic. </span>
                                By contributing feedback and examples from real projects, you help transform fragmented workflows into a single, reliable path from design to apply.
                                <span className="text-neutral-900"> Join the community to co-design features, guide decisions, and make backend engineering feel effortless.</span>
                            </p>
                        </div>
                    </div>
                </FadeInElement>

                <FadeInElement delay={0.2}>
                    <div className="flex flex-col gap-4 md:gap-6">
                        <div className="flex flex-row items-center justify-center gap-2 md:gap-3 flex-wrap">
                            <Button
                                variant="primary"
                                size="medium"
                                className="w-full sm:w-auto"
                                onClick={() => openWaitlist('cta_section')}
                            >
                                Sign up to Waitlist
                            </Button>
                            <Button
                                variant="default"
                                size="medium"
                                className="w-full sm:w-auto"
                                onClick={() => handleDiscordClick('cta_section')}
                            >
                                Join our Discord
                            </Button>
                            <Button
                                variant="default"
                                size="medium"
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
                    </div>
                </FadeInElement>
            </div>
        </LayoutContainer>
    );
};

export default CallToActionSection;