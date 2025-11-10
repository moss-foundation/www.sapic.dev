import LayoutContainer from "@/components/LayoutContainer";
import FadeInElement from "@/components/FadeInElement";

const UseCasesSection = () => {
    const features = [
        {
            title: "Contract-synced mock servers",
            description: (
                <>
                    Generate realistic mocks straight from your API/event contracts. <span className="font-medium text-neutral-900">Flip mock ↔ real</span> on any resource, seed data, and reproduce edge cases — no brittle hand-written stubs.
                </>
            ),
            icon: (
                <svg height="1em" width="1em" className="mb-3 h-8 w-8 md:h-10 md:w-10 text-pink-600" viewBox="0 0 18 18"
                    xmlns="http://www.w3.org/2000/svg">
                    <g fill="currentColor">
                        <path
                            d="M3.25 4.75H14.75C15.3023 4.75 15.75 5.19772 15.75 5.75V12.25C15.75 12.8023 15.3023 13.25 14.75 13.25H3.25C2.69772 13.25 2.25 12.8023 2.25 12.25V5.75C2.25 5.19772 2.69772 4.75 3.25 4.75Z"
                            fill="currentColor" fillOpacity="0.3" stroke="none"></path>
                        <path
                            d="M3.25 4.75H14.75C15.3023 4.75 15.75 5.19772 15.75 5.75V12.25C15.75 12.8023 15.3023 13.25 14.75 13.25H3.25C2.69772 13.25 2.25 12.8023 2.25 12.25V5.75C2.25 5.19772 2.69772 4.75 3.25 4.75Z"
                            fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                        <path d="M6.5 8.5H11.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                        <path d="M6.5 10.5H9.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                        <path d="M9 2.25V4.75" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                        <path d="M9 13.25V15.75" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                    </g>
                </svg>
            ),
            color: "text-pink-500",
        },
        {
            title: "Integration tests anywhere",
            description: (
                <>
                    Author or auto-generate end-to-end tests that span services, events, and databases. Run them locally or in CI with <span className="font-medium text-neutral-900">contract-aware assertions</span> that catch breakage before it ships.
                </>
            ),
            icon: (
                <svg height="1em" width="1em" className="mb-3 h-8 w-8 md:h-10 md:w-10 text-red-600" viewBox="0 0 18 18"
                    xmlns="http://www.w3.org/2000/svg">
                    <g fill="currentColor">
                        <path
                            d="M9 2.25L3.75 5.25V9C3.75 12.4518 6.29822 15 9.75 15C13.2018 15 15.75 12.4518 15.75 9V5.25L10.5 2.25"
                            fill="currentColor" fillOpacity="0.3" stroke="none"></path>
                        <path
                            d="M9 2.25L3.75 5.25V9C3.75 12.4518 6.29822 15 9.75 15C13.2018 15 15.75 12.4518 15.75 9V5.25L10.5 2.25"
                            fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                        <path d="M3.75 5.25L9 8.25L14.25 5.25" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                        <path d="M9 2.25V8.25" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                        <path d="M7.5 11.25L9.75 13.5L12 11.25" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                    </g>
                </svg>
            ),
            color: "text-red-500",
        },
        {
            title: "Environment workspaces",
            description: (
                <>
                    Spin up reproducible dev/test/stage environments with isolated credentials and datasets. <span className="font-medium text-neutral-900">Share a workspace with one link</span> so teammates can debug exactly what you're seeing.
                </>
            ),
            icon: (
                <svg height="1em" width="1em" className="mb-3 h-8 w-8 md:h-10 md:w-10 text-green-600" viewBox="0 0 18 18"
                    xmlns="http://www.w3.org/2000/svg">
                    <g fill="currentColor">
                        <path
                            d="M3.25 3.25H14.75C15.3023 3.25 15.75 3.69772 15.75 4.25V13.75C15.75 14.3023 15.3023 14.75 14.75 14.75H3.25C2.69772 14.75 2.25 14.3023 2.25 13.75V4.25C2.25 3.69772 2.69772 3.25 3.25 3.25Z"
                            fill="currentColor" fillOpacity="0.3" stroke="none"></path>
                        <path
                            d="M3.25 3.25H14.75C15.3023 3.25 15.75 3.69772 15.75 4.25V13.75C15.75 14.3023 15.3023 14.75 14.75 14.75H3.25C2.69772 14.75 2.25 14.3023 2.25 13.75V4.25C2.25 3.69772 2.69772 3.25 3.25 3.25Z"
                            fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                        <path d="M5.5 6.5H12.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                        <path d="M5.5 9H10.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                        <path d="M5.5 11.5H12.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                        <circle cx="13.5" cy="5.5" r="1.5" fill="currentColor" stroke="none"></circle>
                    </g>
                </svg>
            ),
            color: "text-green-500",
        },
        {
            title: "Policy guardrails (as code)",
            description: (
                <>
                    Define access and data rules once; Sapic enforces them across flows. <span className="font-medium text-neutral-900">Violations surface early</span> — pre-merge and pre-deploy — with clear, explainable failures.
                </>
            ),
            icon: (
                <svg height="1em" width="1em" className="mb-3 h-8 w-8 md:h-10 md:w-10 text-purple-600" viewBox="0 0 18 18"
                    xmlns="http://www.w3.org/2000/svg">
                    <g fill="currentColor">
                        <path
                            d="M9 2.25L4.5 4.5V9C4.5 12.3137 7.18629 15 10.5 15C13.8137 15 16.5 12.3137 16.5 9V4.5L12 2.25"
                            fill="currentColor" fillOpacity="0.3" stroke="none"></path>
                        <path
                            d="M9 2.25L4.5 4.5V9C4.5 12.3137 7.18629 15 10.5 15C13.8137 15 16.5 12.3137 16.5 9V4.5L12 2.25"
                            fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                        <path d="M4.5 4.5L9 6.75L13.5 4.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                        <path d="M9 2.25V6.75" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                        <path d="M7.5 10.5L9 12L12 9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
                    </g>
                </svg>
            ),
            color: "text-purple-500",
        },
    ];

    return (
        <LayoutContainer className="flex flex-col gap-8 md:gap-10 w-full">
            <div className="w-full">
                <FadeInElement>
                    <div className="flex flex-col items-start gap-y-1.5">
                        <h2 className="max-w-full lg:max-w-xl text-3xl md:text-4xl lg:text-5xl font-semibold font-serif !leading-[1.2] tracking-tight text-neutral-900">One tool, <span className="text-blue-4">thousands of use cases</span></h2>
                        <p className="mt-4 md:mt-6 max-w-full md:max-w-2xl text-pretty text-sm md:text-base leading-relaxed text-neutral-600">
                            When your backend lives across APIs, queues, functions, and data stores, context is everything. <span className="font-medium text-neutral-900">Sapic brings the whole system into one Git-aware console</span> — so you can design, mock, test, enforce policies, and observe behavior without hopping tools. The result: faster delivery, fewer regressions, lower MTTR.
                        </p>
                    </div>
                </FadeInElement>

                <div className="grid grid-cols-2 gap-6 md:gap-12 lg:gap-16 mt-10 md:mt-14">
                    {features.map((feature, index) => (
                        <FadeInElement key={index} delay={0.1 + index * 0.1}>
                            <div className="flex flex-col">
                                <div className="mb-3 md:mb-4">
                                    {feature.icon}
                                </div>
                                <h3 className="text-base md:text-lg font-medium text-neutral-900 mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-sm md:text-base text-neutral-500 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </FadeInElement>
                    ))}
                </div>

                <FadeInElement delay={0.5}>
                    <div className="mt-10 md:mt-16 lg:mt-20 flex max-w-full md:max-w-2xl gap-3 md:gap-4">
                        <div className="w-1 flex-shrink-0 rounded-full bg-blue-4"></div>
                        <div className="flex flex-col gap-3">
                            <p className="text-pretty text-sm md:text-base text-neutral-500">
                                <span className="font-medium text-neutral-900">Also built-in:</span> drift & dependency monitors, log/trace views in contract context, Git-native versioning, and collaborative reviews — <span className="font-medium text-neutral-900">all in one desktop app.</span>
                            </p>
                            <p className="text-pretty text-sm md:text-base text-neutral-500">
                                Just open Sapic, turn it on, and watch delivery speed (and confidence) climb.
                            </p>
                        </div>
                    </div>
                </FadeInElement>
            </div>
        </LayoutContainer>
    );
};

export default UseCasesSection;

