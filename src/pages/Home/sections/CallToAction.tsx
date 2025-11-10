import LayoutContainer from "@/components/LayoutContainer";
import SimpleButton from "@/components/SimpleButton";
import FadeInElement from "@/components/FadeInElement";
import { useWaitList } from "@/hooks/useWaitList";
import { GITHUB_ROADMAP_URL } from "@/lib/constants";

const CallToActionSection = () => {
    const { openWaitList: openWaitlist } = useWaitList();

    return (
        <LayoutContainer>
            <section>
                <FadeInElement>
                    <div className="mb-6 md:mb-8 lg:mb-10">
                        <div className="relative mb-6 md:mb-8 lg:mb-10 inline-flex justify-center antialiased">
                            <svg className="h-10 w-10 md:h-12 md:w-12" viewBox="0 0 128 128"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#1F1F1F" className="face"
                                    d="M5.89913 90.8654C8.0522 95.5121 10.6368 100.378 9.13098 105.618C8.06985 109.311 5.75106 112.334 5.42471 116.308C4.86915 123.072 10.8259 128.553 17.5205 127.438C23.7626 126.398 29.7626 120.467 36.339 122.014C36.9967 122.168 39.1761 122.939 44.4944 124.841C50.4386 126.967 56.7724 128 64 128C99.3462 128 128 99.3462 128 64C128 28.6538 99.3462 0 64 0C28.6538 0 0 28.6538 0 64C0 73.5861 2.11243 82.6911 5.89913 90.8654Z">
                                </path>
                                <path stroke="#F5F5F5" className="smile"
                                    d="M86 82.6663C80.9833 89.3457 72.9962 93.6663 64 93.6663C55.0038 93.6663 47.0167 89.3457 42 82.6663"
                                    strokeWidth="13" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                            <div className="absolute -bottom-2 -right-1.5">
                                <svg width="24" height="24" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 text-rose-500">
                                    <path fill="currentColor"
                                        d="M1.25 9c0-3.96 3.37-6.75 6.75-6.75 1.37 0 2.86.39 3.99 1.55 1.12-1.17 2.59-1.58 4.01-1.56 3.35.04 6.73 2.78 6.73 6.74 0 6.01-5.77 10.34-10.75 12.83-4.99-2.5-10.75-6.82-10.75-12.84Z"
                                        stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                                        className="shadow-sm"></path>
                                </svg>
                            </div>
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

                        <p className="text-xs md:text-sm text-neutral-500 font-normal">Free forever • No credit card • 30-second setup</p>
                    </div>
                </FadeInElement>
            </section>
        </LayoutContainer>
    );
};

export default CallToActionSection;