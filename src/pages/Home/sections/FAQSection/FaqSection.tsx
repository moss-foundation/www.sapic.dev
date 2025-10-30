import { Accordion } from "@/components/Accordion";
import LayoutContainer from "@/components/LayoutContainer";

import FAQSectionImage from "@/assets/images/FAQSectionImage.webp";
import { BlockTitleHint } from "@/components";

const FAQSection = () => {
    return (
        <section className="relative h-full">
            <BlockTitleHint text="FAQ" />
            <LayoutContainer className="border-l border-r border-dashed border-(--default-border-color) bg-[#fdfdf8]">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="lg:border-r border-dashed border-(--default-border-color)">
                        <p className="flex flex-col items-start px-4 lg:px-2.5 text-5xl font-serif font-medium text-black text-balance leading-tight text-left border-b border-dashed border-(--default-border-color) pt-[80px] pb-[42px]">
                            <span>Answers for easy </span>
                            <span className="text-blue-4">understand</span>
                        </p>

                        {/* HACK: Synchronization the horizontal borders in columns */}
                        <FixedEmptyBlock className="hidden lg:block " />
                        <div className="h-[1px] hidden lg:block" />
                        <FixedEmptyBlock className="hidden lg:block" />

                        <div className="border-t border-dashed border-(--default-border-color) p-3 hidden lg:block">
                            <img
                                src={FAQSectionImage}
                                alt="FAQ Section Image"
                                className="w-full h-full object-contain pointer-events-none"
                            />
                        </div>
                    </div>

                    <div>
                        <FixedEmptyBlock className="hidden lg:block" />
                        <div className="flex items-center lg:border-t lg:border-dashed lg:border-(--default-border-color)">
                            <Accordion
                                title="Working with resources"
                                className="border-b border-dashed border-(--default-border-color) pl-[26px] py-[26px] pr-5"
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                                quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Quisquam, quos. quos.
                            </Accordion>
                        </div>
                        <div className="flex items-center ">
                            <Accordion
                                title="Working with resources"
                                className="border-b border-dashed border-(--default-border-color) pl-[26px] py-[26px] pr-5"
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                                quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Quisquam, quos. quos.
                            </Accordion>
                        </div>
                        <div className="flex items-center ">
                            <Accordion
                                title="Working with resources"
                                className="border-b border-dashed border-(--default-border-color) pl-[26px] py-[26px] pr-5"
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                                quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Quisquam, quos. quos.
                            </Accordion>
                        </div>
                        <div className="flex items-center ">
                            <Accordion
                                title="Working with resources"
                                className="border-b border-dashed border-(--default-border-color) pl-[26px] py-[26px] pr-5"
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                                quos.
                            </Accordion>
                        </div>
                    </div>

                    <div className=" p-3 block lg:hidden">
                        <img
                            src={FAQSectionImage}
                            alt="FAQ Section Image"
                            className="w-full h-full object-contain pointer-events-none"
                        />
                    </div>
                </div>
            </LayoutContainer>
        </section>
    );
};

const FixedEmptyBlock = ({ className }: { className?: string }) => {
    return (
        <div className={` flex items-center pl-[26px] py-[26px] pr-5 ${className}`}>
            <div className="w-full opacity-0 pointer-events-none">
                <Accordion title="Working with resources">
                    <p>Working with resources</p>
                </Accordion>
            </div>
        </div>
    );
};

export default FAQSection;
