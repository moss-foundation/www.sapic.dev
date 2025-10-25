import BlockTitleHint from "@/components/BlockTitleHint";
import LayoutContainer from "@/components/LayoutContainer";
import Line from "@/components/Line";

const FaqSection = () => {
    return (
        <section className="relative h-full">
            <BlockTitleHint text="FAQ" />

            <LayoutContainer className="py-12 px-4 border-l border-r border-dashed border-[var(--default-border-color)] bg-[#fdfdf8]">
                <div className="">
                    <p className="text-6xl font-serif font-medium text-black text-balance leading-tight text-center">
                        Answers for easy <span className="text-blue-4">understand</span>
                    </p>
                </div>
            </LayoutContainer>
            <Line />


        </section>
    );
};

export default FaqSection;