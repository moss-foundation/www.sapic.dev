import LayoutContainer from "@/components/containers/LayoutContainer";
import FadeInElement from "@/components/FadeInElement";

import feature1 from "../images/feature_1.png";
import feature2 from "../images/feature_2.png";
import feature3 from "../images/feature_3.png";
import feature4 from "../images/feature_4.png";
import feature5 from "../images/feature_5.png";

const FeaturesSection = () => {
    return (
        <LayoutContainer className="flex flex-col gap-8 md:gap-10 w-full">
            <FadeInElement>
                <div className="flex flex-col items-start">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold w-full lg:w-3/5 text-neutral-900">
                        Feel the <span className="text-blue-4">best experience</span> with our features
                    </h2>
                    <p className="text-pretty text-sm md:text-base leading-relaxed text-neutral-500 mt-4 md:mt-6 max-w-full md:max-w-2xl">
                        <span className="font-medium text-gray-900">Everything your team needs in one place.</span> A unified toolset that turns your backend resources into living systems with tests, environments, policies, and real-time mocks.
                    </p>
                </div>
            </FadeInElement>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                <FadeInElement delay={0.1} className="md:col-span-2">
                    <div className="border border-neutral-200 p-0.5 md:p-1 rounded-xl md:rounded-2xl h-full">
                        <div className="flex flex-col bg-neutral-50 rounded-xl md:rounded-2xl pt-6 md:pt-10 gap-2 h-full">
                            <div className="flex flex-col gap-1.5 px-5 md:px-8">
                                <p className="text-xs md:text-sm font-medium text-blue-4">Integration tests</p>
                                <div className="flex flex-col text-xl md:text-2xl lg:text-3xl font-medium text-balance">
                                    <p className="text-black">
                                        Contract-driven integration tests.
                                    </p>
                                    <p className="text-neutral-500 flex items-center flex-wrap gap-x-2">
                                        <span>Auto-generated.</span>
                                        <span className="inline-flex flex-shrink-0">
                                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-6">
                                                <circle cx="14" cy="14" r="12" fill="#55A76A" />
                                                <path d="M20 10.5L12.5 18L8.5 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </span>
                                        <span>Green before you ship.</span>
                                    </p>
                                </div>
                            </div>

                            <div className="w-full px-5 md:px-8 pb-6 flex-1 flex items-center justify-center">
                                <img src={feature1} alt="Feature 1" className="w-full h-full object-contain" />
                            </div>
                        </div>
                    </div>
                </FadeInElement>

                <FadeInElement delay={0.2}>
                    <div className="border border-neutral-200 p-0.5 md:p-1 rounded-xl md:rounded-2xl h-full">
                        <div className="flex flex-col bg-neutral-50 rounded-xl md:rounded-2xl pt-6 md:pt-10 gap-2 h-full">
                            <div className="flex flex-col gap-1.5 px-5 md:px-8">
                                <p className="text-xs md:text-sm font-medium text-blue-4">Smart automation</p>
                                <div className="flex flex-col text-xl md:text-2xl lg:text-3xl font-medium text-balance">
                                    <p className="text-black">
                                        WASM functions.
                                    </p>
                                    <p className="text-neutral-500">
                                        Use built-ins or write your own.
                                    </p>
                                </div>
                            </div>

                            <div className="w-full px-5 md:px-8 pb-6 flex-1 flex items-center justify-center">
                                <img src={feature2} alt="Feature 2" className="w-full h-full object-contain" />
                            </div>
                        </div>
                    </div>
                </FadeInElement>

                <FadeInElement delay={0.3}>
                    <div className="border border-neutral-200 p-0.5 md:p-1 rounded-xl md:rounded-2xl h-full">
                        <div className="flex flex-col bg-neutral-50 rounded-xl md:rounded-2xl pt-6 md:pt-10 gap-2 h-full">
                            <div className="flex flex-col gap-1.5 px-5 md:px-8">
                                <p className="text-xs md:text-sm font-medium text-blue-4">Runtime Contexts</p>
                                <div className="flex flex-col text-xl md:text-2xl lg:text-3xl font-medium text-balance">
                                    <p className="text-black">
                                        Environments.
                                    </p>
                                    <p className="text-neutral-500">
                                        Inherit, switch, reuse.
                                    </p>
                                </div>
                            </div>

                            <div className="w-full px-5 md:px-8 pb-6 flex-1 flex items-center justify-center">
                                <img src={feature3} alt="Feature 3" className="w-full h-full object-contain" />
                            </div>
                        </div>
                    </div>
                </FadeInElement>

                <FadeInElement delay={0.4}>
                    <div className="border border-neutral-200 p-0.5 md:p-1 rounded-xl md:rounded-2xl h-full">
                        <div className="flex flex-col bg-neutral-50 rounded-xl md:rounded-2xl pt-6 md:pt-10 gap-2 h-full">
                            <div className="flex flex-col gap-1.5 px-5 md:px-8">
                                <p className="text-xs md:text-sm font-medium text-blue-4">Guardrails</p>
                                <div className="flex flex-col text-xl md:text-2xl lg:text-3xl font-medium text-balance">
                                    <p className="text-black">
                                        Schemas & policies.
                                    </p>
                                    <p className="text-neutral-500">
                                        Catch breaking changes early.
                                    </p>
                                </div>
                            </div>

                            <div className="w-full px-5 md:px-8 pb-6 flex-1 flex items-center justify-center">
                                <img src={feature4} alt="Feature 4" className="w-full h-full object-contain" />
                            </div>
                        </div>
                    </div>
                </FadeInElement>

                <FadeInElement delay={0.5}>
                    <div className="border border-neutral-200 p-0.5 md:p-1 rounded-xl md:rounded-2xl h-full">
                        <div className="flex flex-col bg-neutral-50 rounded-xl md:rounded-2xl pt-6 md:pt-10 gap-2 h-full">
                            <div className="flex flex-col gap-1.5 px-5 md:px-8">
                                <p className="text-xs md:text-sm font-medium text-blue-4">Developer Speed</p>
                                <div className="flex flex-col text-xl md:text-2xl lg:text-3xl font-medium text-balance">
                                    <p className="text-black">
                                        Advanced mocks.
                                    </p>
                                    <p className="text-neutral-500">
                                        Realistic APIs, zero deps.
                                    </p>
                                </div>
                            </div>

                            <div className="w-full px-5 md:px-8 pb-6 flex-1 flex items-center justify-center">
                                <img src={feature5} alt="Feature 5" className="w-full h-full object-contain" />
                            </div>
                        </div>
                    </div>
                </FadeInElement>
            </div>
        </LayoutContainer >
    );
};

export default FeaturesSection;