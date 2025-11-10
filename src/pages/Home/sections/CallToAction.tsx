import LayoutContainer from "@/components/LayoutContainer";
import SimpleButton from "@/components/SimpleButton";
import FadeInElement from "@/components/FadeInElement";
import { useWaitList } from "@/hooks/useWaitList";
import { GITHUB_ROADMAP_URL } from "@/lib/constants";

import logoBlack from "@assets/images/logo_black.svg";

const CallToActionSection = () => {
    const { openWaitList: openWaitlist } = useWaitList();

    return (
        <LayoutContainer>
            <section>
                <FadeInElement>
                    <div className="mb-6">
                        <div className="relative mb-6 md:mb-8 lg:mb-10 inline-flex justify-center antialiased">
                            <img src={logoBlack} alt="Sapic" className="size-14" />
                        </div>
                    </div>
                </FadeInElement>

                <FadeInElement delay={0.1}>
                    <div className="mb-8 md:mb-10">
                        <h2
                            className="max-w-full lg:max-w-xl text-3xl md:text-4xl lg:text-5xl font-semibold font-serif !leading-[1.2] tracking-tight text-neutral-900">
                            The future of Sapic <span className="text-blue-4">depends on you</span>
                        </h2>
                        <div className="mt-4 md:mt-6 max-w-full md:max-w-2xl space-y-4">
                            <p className="text-pretty text-sm md:text-base leading-normal text-neutral-600">
                                Building the ultimate backend console isn't something we can do alone. It's a partnership with the developers who use it every day.
                            </p>
                            <p className="text-pretty text-sm md:text-base leading-normal text-neutral-600">
                                When you take the time to share your feedback, you're not just reporting a bug or suggesting a feature — <span className="font-medium text-neutral-900">you're helping us close the gap between scattered tools and a truly unified workflow.</span> You're invested in a future with less friction, fewer rollbacks, and more time for building what matters.
                            </p>
                            <p className="text-pretty text-sm md:text-base leading-normal text-neutral-600">
                                <span className="font-medium text-neutral-900">When we show you we're listening — really listening — we build more than a product. We build a community of champions.</span> That's not just good product development. That's how we shape the future of backend engineering together.
                            </p>
                        </div>
                    </div>
                </FadeInElement>

                <FadeInElement delay={0.2}>
                    <div className="flex flex-col gap-4 md:gap-6">
                        <div className="flex flex-row items-center justify-start gap-2 md:gap-3 flex-wrap">
                            <SimpleButton
                                variant="primary"
                                size="large"
                                className="self-start w-full sm:w-auto"
                                onClick={openWaitlist}
                            >
                                Sign up to Waitlist
                            </SimpleButton>
                            <SimpleButton
                                variant="ghost"
                                size="medium"
                                onClick={() => window.open(GITHUB_ROADMAP_URL, "_blank")}
                            >
                                <span className="hidden lg:inline">
                                    Explore our roadmap
                                </span>
                                <span className="inline lg:hidden">
                                    Our Roadmap
                                </span>
                            </SimpleButton>
                        </div>
                    </div>
                </FadeInElement>

                <FadeInElement delay={0.3}>
                    <div className="flex max-w-full md:max-w-2xl gap-3 md:gap-4 mt-6 lg:mt-10">
                        <div className="w-1 flex-shrink-0 rounded-full bg-blue-4"></div>
                        <div className="flex flex-col gap-3">
                            <p className="text-pretty text-sm md:text-base text-neutral-500">
                                Feel free to reach out if you'd like to get involved in the project!
                            </p>
                        </div>
                    </div>
                </FadeInElement>
            </section>
        </LayoutContainer>
    );
};

export default CallToActionSection;