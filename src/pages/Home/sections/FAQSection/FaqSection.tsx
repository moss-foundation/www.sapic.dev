import { Accordion } from "@/components/Accordion";
import LayoutContainer from "@/components/LayoutContainer";
import Line from "@/components/Line";

import FAQSectionImage from "@/assets/images/FAQSectionImage.webp";
import { BlockTitleHint } from "@/components";

const FaqSection = () => {
    return (
        <>
            <section className="relative h-full">
                <BlockTitleHint text="FAQ" />
                <LayoutContainer className="border-l border-t border-r border-dashed border-(--default-border-color) bg-[#fdfdf8]">
                    <div className="grid grid-cols-2 border-b border-dashed border-(--default-border-color)">
                        <div className="border-r border-dashed border-(--default-border-color)">
                            <p className="px-2.5 text-5xl font-serif font-medium text-black text-balance leading-tight text-left border-b border-dashed border-(--default-border-color) pt-[80px] pb-[42px]">
                                Answers for easy <span className="text-blue-4">understand</span>
                            </p>

                            {/* HACK: Synchronization the horizontal borders in columns */}
                            <FixedEmptyBlock />
                            <div className="h-px" />
                            <FixedEmptyBlock />

                            <div className=" border-t border-dashed border-(--default-border-color) p-3">
                                <img
                                    src={FAQSectionImage}
                                    alt="FAQ Section Image"
                                    className="w-full h-full object-contain pointer-events-none"
                                />
                            </div>
                        </div>

                        <div>
                            <FixedEmptyBlock />
                            <div className="flex items-center border-t border-dashed border-(--default-border-color)">
                                <Accordion
                                    title="Working with resources"
                                    className="border-b border-dashed border-(--default-border-color) pl-[26px] py-[26px] pr-5"
                                >
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Quisquam, quos. Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quisquam, quos. quos.
                                </Accordion>
                            </div>
                            <div className="flex items-center ">
                                <Accordion
                                    title="Working with resources"
                                    className="border-b border-dashed border-(--default-border-color) pl-[26px] py-[26px] pr-5"
                                >
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Quisquam, quos. Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quisquam, quos. quos.
                                </Accordion>
                            </div>
                            <div className="flex items-center ">
                                <Accordion
                                    title="Working with resources"
                                    className="border-b border-dashed border-(--default-border-color) pl-[26px] py-[26px] pr-5"
                                >
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Quisquam, quos. Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quisquam, quos. quos.
                                </Accordion>
                            </div>
                            <div className="flex items-center ">
                                <Accordion
                                    title="Working with resources"
                                    className="border-b border-dashed border-(--default-border-color) pl-[26px] py-[26px] pr-5"
                                >
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Quisquam, quos.
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </LayoutContainer>
                <Line />
            </section>
        </>
    );
};

const FixedEmptyBlock = () => {
    return (
        <div className=" flex items-center pl-[26px] py-[26px] pr-5 ">
            <div className="w-full opacity-0 pointer-events-none">
                <Accordion title="Working with resources">
                    <p>Working with resources</p>
                </Accordion>
            </div>
        </div>
    );
};

export default FaqSection;
