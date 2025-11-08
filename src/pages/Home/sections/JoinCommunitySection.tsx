import LayoutContainer from "@/components/LayoutContainer";
import SimpleButton from "@/components/SimpleButton";
import FadeInElement from "@/components/FadeInElement";
import { useWaitList } from "@/hooks/useWaitList";

const JoinCommunitySection = () => {
    const { openWaitList: openWaitList } = useWaitList();

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
                            Join our <span className="text-blue-4"> open source</span> community
                        </h2>
                        <p className="mt-4 md:mt-6 max-w-full md:max-w-2xl text-pretty text-sm md:text-base leading-relaxed text-neutral-600">
                            When users take time to share feedback, they're invested in your success.
                            <span className="font-medium text-neutral-900">
                                When you show them you're listening—really listening—they become your biggest champions.
                            </span>
                            That's not just good product management. That's good business.
                        </p>
                    </div>
                </FadeInElement>

                <FadeInElement delay={0.2}>
                    <div className="flex flex-row items-center justify-start gap-2 md:gap-3 flex-wrap mt-6 md:mt-8">
                        <SimpleButton
                            variant="default"
                            size="medium"
                            className="group inline-flex items-center justify-center gap-2"
                            onClick={openWaitList}
                        >
                            Sign up to Waitlist
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" width="1em" height="1em"
                                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 text-neutral-900"
                                style={{ strokeWidth: 2 }}>
                                <path fill="currentColor" fillRule="evenodd"
                                    d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12m12.28-3.53a.75.75 0 1 0-1.06 1.06l1.72 1.72H8a.75.75 0 0 0 0 1.5h6.19l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06z"
                                    clipRule="evenodd"></path>
                            </svg>
                        </SimpleButton>
                        <SimpleButton variant="ghost" size="medium">
                            <span className="hidden lg:inline">
                                Explore our roadmap
                            </span>
                            <span className="inline lg:hidden">
                                Our Roadmap
                            </span>
                        </SimpleButton>
                    </div>
                </FadeInElement>
            </section>
        </LayoutContainer>
    );
};

export default JoinCommunitySection;