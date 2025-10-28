import FAQSectionImage from "@/assets/images/FAQSectionImage.webp";
import { Accordion } from "@/components/Accordion";
import LayoutContainer from "@/components/LayoutContainer";
import Line from "@/components/Line";
import FAQHeader from "./FAQHeader";

const FaqSection = () => {
    return (
        <section className="relative h-full">
            <LayoutContainer className="py-12 border-l border-r  border-dashed border-(--default-border-color) bg-[#fdfdf8]">
                <FAQHeader />
                <div className="grid grid-cols-2 grid-rows-[repeat(10,minmax(0,auto))] border-b border-dashed border-(--default-border-color)">
                    <p className="row-span-3 text-6xl font-serif font-medium text-black text-balance leading-tight text-left border-b border-dashed border-(--default-border-color) pt-[60px] pb-[30px]">
                        Answers for easy <span className="text-blue-4">understand</span>
                    </p>

                    <div className="row-start-1 col-start-2 flex items-center border-l border-b border-dashed border-(--default-border-color) pl-[26px] py-[26px] pr-5 ">
                        <div className="w-full opacity-0 pointer-events-none">
                            <Accordion title="Working with resources">
                                <p>Working with resources</p>
                            </Accordion>
                        </div>
                    </div>
                    <div className="row-start-2 col-start-2 flex items-center border-l border-b border-dashed border-(--default-border-color) pl-[26px] py-[26px] pr-5">
                        <Accordion title="Working with resources">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                                quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Quisquam, quos. quos.
                            </p>
                        </Accordion>
                    </div>
                    <div className="row-start-3 col-start-2 flex items-center border-l border-b border-dashed border-(--default-border-color) pl-[26px] py-[26px] pr-5">
                        <Accordion title="Working with resources">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                                quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Quisquam, quos. quos.
                            </p>
                        </Accordion>
                    </div>
                    <div className="row-start-4 col-start-2 flex items-center border-l border-b border-dashed border-(--default-border-color) pl-[26px] py-[26px] pr-5">
                        <Accordion title="Working with resources">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                                quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Quisquam, quos. quos.
                            </p>
                        </Accordion>
                    </div>
                    <div className="row-start-5 col-start-2 flex items-center border-l border-b border-dashed border-(--default-border-color) pl-[26px] py-[26px] pr-5">
                        <Accordion title="Working with resources">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                                quos.
                            </p>
                        </Accordion>
                    </div>

                    <div className="row-start-4 row-span-2 col-start-1 border-b border-dashed border-(--default-border-color)" />

                    <div className="row-start-6 row-span-5 col-start-1  p-3">
                        <img
                            src={FAQSectionImage}
                            alt="FAQ Section Image"
                            className="w-full h-full object-contain pointer-events-none"
                        />
                    </div>

                    <div className="row-start-6 row-span-5 col-start-2 border-l border-dashed border-(--default-border-color)" />
                </div>
            </LayoutContainer>
            <Line />
        </section>
    );
};

export default FaqSection;
