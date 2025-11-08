import LayoutContainer from "@/components/LayoutContainer";
import FadeInElement from "@/components/FadeInElement";

import feature1 from "../images/feature_1.png";
import feature2 from "../images/feature_2.png";
import feature3 from "../images/feature_3.png";
import feature4 from "../images/feature_4.png";

const FeaturesSection = () => {
    return (
        <LayoutContainer className="flex flex-col gap-8 md:gap-10 w-full">
            <FadeInElement>
                <div className="flex flex-col items-start">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold w-full lg:w-3/5 text-neutral-900">Everything your team needs and more</h2>
                    <p className="text-pretty text-sm md:text-base leading-relaxed text-neutral-500 mt-4 md:mt-6 max-w-full md:max-w-2xl">
                        <span className="font-medium text-gray-900">Unlimited users on every plan.</span> Because charging per user for a feedback tool is like charging per customer for a store. It's backwards.
                    </p>
                </div>
            </FadeInElement>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                <FadeInElement delay={0.1} className="md:col-span-2">
                    <div className="border border-neutral-200 p-0.5 md:p-1 rounded-xl md:rounded-2xl h-full">
                        <div className="flex flex-col bg-neutral-50 rounded-xl md:rounded-2xl pt-6 md:pt-10 gap-4 md:gap-5 h-full">
                            <div className="flex flex-col gap-1.5 px-5 md:px-10">
                                <p className="text-xs md:text-sm font-medium text-violet-500">Feature 1</p>
                                <div className="flex flex-col gap-1 text-xl md:text-2xl lg:text-3xl font-medium text-balance">
                                    <p className="text-black">
                                        One platform, hundreds of use cases.
                                    </p>
                                    <p className="text-neutral-500">
                                        Context perfectly connected.
                                    </p>
                                </div>
                            </div>

                            <div className="w-full px-5 md:px-10 pb-6 md:pb-10 flex-1">
                                <img src={feature1} alt="Feature 1" className="w-full h-auto" />
                            </div>
                        </div>
                    </div>
                </FadeInElement>

                <FadeInElement delay={0.2}>
                    <div className="border border-neutral-200 p-0.5 md:p-1 rounded-xl md:rounded-2xl h-full">
                        <div className="flex flex-col bg-neutral-50 rounded-xl md:rounded-2xl pt-6 md:pt-10 gap-4 md:gap-5 h-full">
                            <div className="flex flex-col gap-1.5 px-5 md:px-10">
                                <p className="text-xs md:text-sm font-medium text-violet-500">Feature 2</p>
                                <div className="flex flex-col gap-1 text-xl md:text-2xl lg:text-3xl font-medium text-balance">
                                    <p className="text-black">
                                        Instant meetings.
                                    </p>
                                    <p className="text-neutral-500">
                                        Stay in flow.
                                    </p>
                                </div>
                            </div>

                            <div className="w-full px-5 md:px-10 pb-6 md:pb-10 flex-1">
                                <img src={feature2} alt="Feature 2" className="w-full h-auto" />
                            </div>
                        </div>
                    </div>
                </FadeInElement>

                <FadeInElement delay={0.3}>
                    <div className="border border-neutral-200 p-0.5 md:p-1 rounded-xl md:rounded-2xl h-full">
                        <div className="flex flex-col bg-neutral-50 rounded-xl md:rounded-2xl pt-6 md:pt-10 gap-4 md:gap-5 h-full">
                            <div className="flex flex-col gap-1.5 px-5 md:px-10">
                                <p className="text-xs md:text-sm font-medium text-violet-500">Feature 3</p>
                                <div className="flex flex-col gap-1 text-xl md:text-2xl lg:text-3xl font-medium text-balance">
                                    <p className="text-black">
                                        Instant meetings.
                                    </p>
                                    <p className="text-neutral-500">
                                        Stay in flow.
                                    </p>
                                </div>
                            </div>

                            <div className="w-full px-5 md:px-10 pb-6 md:pb-10 flex-1">
                                <img src={feature2} alt="Feature 3" className="w-full h-auto" />
                            </div>
                        </div>
                    </div>
                </FadeInElement>

                <FadeInElement delay={0.4}>
                    <div className="border border-neutral-200 p-0.5 md:p-1 rounded-xl md:rounded-2xl h-full">
                        <div className="flex flex-col bg-neutral-50 rounded-xl md:rounded-2xl pt-6 md:pt-10 gap-4 md:gap-5 h-full">
                            <div className="flex flex-col gap-1.5 px-5 md:px-10">
                                <p className="text-xs md:text-sm font-medium text-violet-500">Feature 4</p>
                                <div className="flex flex-col gap-1 text-xl md:text-2xl lg:text-3xl font-medium text-balance">
                                    <p className="text-black">
                                        Instant meetings.
                                    </p>
                                    <p className="text-neutral-500">
                                        Stay in flow.
                                    </p>
                                </div>
                            </div>

                            <div className="w-full px-5 md:px-10 pb-6 md:pb-10 flex-1">
                                <img src={feature3} alt="Feature 4" className="w-full h-auto" />
                            </div>
                        </div>
                    </div>
                </FadeInElement>

                <FadeInElement delay={0.5}>
                    <div className="border border-neutral-200 p-0.5 md:p-1 rounded-xl md:rounded-2xl h-full">
                        <div className="flex flex-col bg-neutral-50 rounded-xl md:rounded-2xl pt-6 md:pt-10 gap-4 md:gap-5 h-full">
                            <div className="flex flex-col gap-1.5 px-5 md:px-10">
                                <p className="text-xs md:text-sm font-medium text-violet-500">Feature 5</p>
                                <div className="flex flex-col gap-1 text-xl md:text-2xl lg:text-3xl font-medium text-balance">
                                    <p className="text-black">
                                        Instant meetings.
                                    </p>
                                    <p className="text-neutral-500">
                                        Stay in flow.
                                    </p>
                                </div>
                            </div>

                            <div className="w-full px-5 md:px-10 pb-6 md:pb-10 flex-1">
                                <img src={feature4} alt="Feature 5" className="w-full h-auto" />
                            </div>
                        </div>
                    </div>
                </FadeInElement>
            </div>
        </LayoutContainer >
    );
};

export default FeaturesSection;