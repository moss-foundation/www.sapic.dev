import BlockTitleHint from "@/components/BlockTitleHint";
import LayoutContainer from "@/components/LayoutContainer";
import Line from "@/components/Line";

import { FlippingSection } from "./FlippingSection";

const ForDevelopersSection = () => {
    return (
        <section className="relative h-full">
            <BlockTitleHint text="FOR DEVELOPERS" />

            <LayoutContainer className="py-12 px-4 border-l border-r border-dashed border-[var(--default-border-color)] bg-[#fdfdf8]">
                <p className="text-5xl font-serif font-medium text-black text-balance leading-tight text-center">
                    All your used resources are now gathered in
                    <span className="text-blue-4">one place</span>
                </p>
            </LayoutContainer>
            <Line />

            <LayoutContainer className="border-l border-r border-dashed border-[var(--default-border-color)]  bg-[#fdfdf8]">
                <FlippingSection />
            </LayoutContainer>
        </section>
    );
};

export default ForDevelopersSection;
