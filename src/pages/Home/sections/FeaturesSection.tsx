import LayoutContainer from "@/components/LayoutContainer";

import feature1 from "../images/feature_1.png";
import feature2 from "../images/feature_2.png";
import feature3 from "../images/feature_3.png";
import feature4 from "../images/feature_4.png";

const FeaturesSection = () => {
    return (
        <LayoutContainer>
            <div className="flex items-center justify-center py-16 w-3/5 mx-auto">
                <h2 className="text-6xl font-serif font-medium text-center">Everything your team needs and more</h2>
            </div>

            <div className="grid grid-cols-3 gap-6">
                <div className="flex flex-col bg-[#f7f7f7] rounded-2xl col-span-2 pt-10 gap-5">
                    <div className="flex flex-col gap-1.5 px-10">
                        <p className="text-sm font-medium text-violet-500">Feature 1</p>
                        <div className="flex flex-col gap-1 text-3xl font-medium text-balance">
                            <p className="text-black">
                                One platform, hundreds of use cases.
                            </p>
                            <p className="text-gray-500">
                                Context perfectly connected.
                            </p>
                        </div>
                    </div>

                    <div className="w-full">
                        <img src={feature1} alt="Feature 1" className="w-full h-full object-contain" />
                    </div>
                </div>

                <div className="flex flex-col bg-[#f7f7f7] rounded-2xl pt-10 gap-5">
                    <div className="flex flex-col gap-1.5 px-10">
                        <p className="text-sm font-medium text-violet-500">Feature 1</p>
                        <div className="flex flex-col gap-1 text-3xl font-medium text-balance">
                            <p className="text-black">
                                Instant meetings.
                            </p>
                            <p className="text-gray-500">
                                Stay in flow.
                            </p>
                        </div>
                    </div>

                    <div className="w-full">
                        <img src={feature2} alt="Feature 2" className="w-full h-full object-contain" />
                    </div>
                </div>
                <div className="flex flex-col bg-[#f7f7f7] rounded-2xl pt-10 gap-5">
                    <div className="flex flex-col gap-1.5 px-10">
                        <p className="text-sm font-medium text-violet-500">Feature 1</p>
                        <div className="flex flex-col gap-1 text-3xl font-medium text-balance">
                            <p className="text-black">
                                Instant meetings.
                            </p>
                            <p className="text-gray-500">
                                Stay in flow.
                            </p>
                        </div>
                    </div>

                    <div className="w-full">
                        <img src={feature2} alt="Feature 3" className="w-full h-full object-contain" />
                    </div>
                </div>

                <div className="flex flex-col bg-[#f7f7f7] rounded-2xl pt-10 gap-5">
                    <div className="flex flex-col gap-1.5 px-10">
                        <p className="text-sm font-medium text-violet-500">Feature 1</p>
                        <div className="flex flex-col gap-1 text-3xl font-medium text-balance">
                            <p className="text-black">
                                Instant meetings.
                            </p>
                            <p className="text-gray-500">
                                Stay in flow.
                            </p>
                        </div>
                    </div>

                    <div className="w-full">
                        <img src={feature3} alt="Feature 4" className="w-full h-full object-contain" />
                    </div>
                </div>

                <div className="flex flex-col bg-[#f7f7f7] rounded-2xl pt-10 gap-5">
                    <div className="flex flex-col gap-1.5 px-10">
                        <p className="text-sm font-medium text-violet-500">Feature 1</p>
                        <div className="flex flex-col gap-1 text-3xl font-medium text-balance">
                            <p className="text-black">
                                Instant meetings.
                            </p>
                            <p className="text-gray-500">
                                Stay in flow.
                            </p>
                        </div>
                    </div>

                    <div className="w-full">
                        <img src={feature4} alt="Feature 2" className="w-full h-full object-contain" />
                    </div>
                </div>
            </div>
        </LayoutContainer >
    );
};

export default FeaturesSection;