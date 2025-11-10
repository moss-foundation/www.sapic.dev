import LayoutContainer from "@/components/LayoutContainer";
import SimpleButton from "@/components/SimpleButton";
import FadeInElement from "@/components/FadeInElement";
import { useWaitList } from "@/hooks/useWaitList";
import { DISCORD_INVITE_URL, TWITTER_URL, REDDIT_URL, GITHUB_ROADMAP_URL } from "@/lib/constants";

const JoinCommunitySection = () => {
    const { openWaitList: openWaitList } = useWaitList();

    return (
        <LayoutContainer>
            <section className="relative">
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

                <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-8">
                    {/* Left Content */}
                    <div className="flex-1 max-w-full md:max-w-2xl">
                        <FadeInElement delay={0.1}>
                            <div className="mb-6 md:mb-8">
                                <h2
                                    className="max-w-full lg:max-w-xl text-3xl md:text-4xl lg:text-5xl font-semibold font-serif !leading-[1.2] tracking-tight text-neutral-900">
                                    Join our <span className="text-blue-4">open-source</span> community
                                </h2>
                                <div className="mt-3 md:mt-4 space-y-3">
                                    <p className="text-pretty text-sm md:text-base leading-normal text-neutral-600">
                                        We believe the best developer tools are built with developers, not just for them.
                                    </p>
                                    <p className="text-pretty text-sm md:text-base leading-normal text-neutral-600">
                                        Sapic is open source so every engineer can help shape how modern backends are designed, tested, and run.
                                    </p>
                                </div>
                            </div>
                        </FadeInElement>

                        <FadeInElement delay={0.15}>
                            <div className="mb-6 md:mb-8">
                                <h3 className="text-xl md:text-2xl font-semibold text-neutral-900 mb-4 md:mb-5">
                                    Why join
                                </h3>
                                <div className="space-y-4 md:space-y-5">
                                    <div>
                                        <p className="text-pretty text-sm md:text-base leading-normal text-neutral-600">
                                            <span className="font-medium text-neutral-900">Contribute & shape the future</span> — Help build mocks, test engines, policies, and integrations.
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-pretty text-sm md:text-base leading-normal text-neutral-600">
                                            <span className="font-medium text-neutral-900">Learn & collaborate</span> — Join our community calls, discussions, and SIGs to share ideas and learn from peers.
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-pretty text-sm md:text-base leading-normal text-neutral-600">
                                            <span className="font-medium text-neutral-900">Build in public</span> — Everything from roadmap to releases happens transparently on GitHub.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </FadeInElement>

                        <FadeInElement delay={0.2}>
                            <div className="mb-6 md:mb-8">
                                <p className="text-pretty text-sm md:text-base leading-normal text-neutral-600">
                                    Be part of an open, Git-native, AI-driven project redefining how backend teams work.
                                </p>
                            </div>
                        </FadeInElement>

                        <FadeInElement delay={0.25}>
                            <div className="flex flex-row items-center justify-start gap-2 md:gap-3 flex-wrap">
                                <SimpleButton
                                    variant="primary"
                                    size="large"
                                    className="group inline-flex items-center justify-center gap-2 font-semibold shadow-md hover:shadow-lg"
                                    onClick={openWaitList}
                                >
                                    Sign up to Waitlist
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" width="1em" height="1em"
                                        className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 text-white"
                                        style={{ strokeWidth: 2 }}>
                                        <path fill="currentColor" fillRule="evenodd"
                                            d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12m12.28-3.53a.75.75 0 1 0-1.06 1.06l1.72 1.72H8a.75.75 0 0 0 0 1.5h6.19l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06z"
                                            clipRule="evenodd"></path>
                                    </svg>
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
                        </FadeInElement>
                    </div>

                    {/* Desktop Social Media Icons */}
                    <div className="hidden lg:block relative w-32 h-full pointer-events-none">
                        <FadeInElement delay={0.3}>
                            <button
                                onClick={() => window.open(DISCORD_INVITE_URL, "_blank")}
                                className="absolute right-0 top-44 transition-transform duration-200 hover:scale-110 active:scale-95 pointer-events-auto cursor-pointer"
                                aria-label="Join our Discord"
                            >
                                <svg
                                    width="48"
                                    height="48"
                                    viewBox="0 0 71 55"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z"
                                        fill="#5865F2"
                                    />
                                </svg>
                            </button>
                        </FadeInElement>
                        <FadeInElement delay={0.35}>
                            <button
                                onClick={() => window.open(TWITTER_URL, "_blank")}
                                className="absolute right-12 top-76 transition-transform duration-200 hover:scale-110 active:scale-95 pointer-events-auto cursor-pointer"
                                aria-label="Follow us on X (Twitter)"
                            >
                                <svg
                                    width="48"
                                    height="48"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                                        fill="#000000"
                                    />
                                </svg>
                            </button>
                        </FadeInElement>
                        <FadeInElement delay={0.4}>
                            <button
                                onClick={() => window.open(REDDIT_URL, "_blank")}
                                className="absolute -right-12 top-108 transition-transform duration-200 hover:scale-110 active:scale-95 pointer-events-auto cursor-pointer"
                                aria-label="Join our Reddit community"
                            >
                                <svg
                                    width="48"
                                    height="48"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"
                                        fill="#FF4500"
                                    />
                                </svg>
                            </button>
                        </FadeInElement>
                    </div>
                </div>

                {/* Mobile Social Media Icons - Horizontal */}
                <FadeInElement delay={0.3}>
                    <div className="flex lg:hidden flex-row items-center justify-start gap-4 mt-8">
                        <button
                            onClick={() => window.open(DISCORD_INVITE_URL, "_blank")}
                            className="transition-transform duration-200 hover:scale-110 active:scale-95 cursor-pointer"
                            aria-label="Join our Discord"
                        >
                            <svg
                                width="48"
                                height="48"
                                viewBox="0 0 71 55"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z"
                                    fill="#5865F2"
                                />
                            </svg>
                        </button>
                        <button
                            onClick={() => window.open(TWITTER_URL, "_blank")}
                            className="transition-transform duration-200 hover:scale-110 active:scale-95 cursor-pointer"
                            aria-label="Follow us on X (Twitter)"
                        >
                            <svg
                                width="48"
                                height="48"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                                    fill="#000000"
                                />
                            </svg>
                        </button>
                        <button
                            onClick={() => window.open(REDDIT_URL, "_blank")}
                            className="transition-transform duration-200 hover:scale-110 active:scale-95 cursor-pointer"
                            aria-label="Join our Reddit community"
                        >
                            <svg
                                width="48"
                                height="48"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"
                                    fill="#FF4500"
                                />
                            </svg>
                        </button>
                    </div>
                </FadeInElement>
            </section>
        </LayoutContainer>
    );
};

export default JoinCommunitySection;