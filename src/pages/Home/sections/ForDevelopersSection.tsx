import BlockTitleHint from "@/components/BlockTitleHint";
import LayoutContainer from "@/components/LayoutContainer";
import Line from "@/components/Line";

import aws from "@assets/images/aws.png";

const ForDevelopersSection = () => {
    return (
        <section className="relative h-full">
            <BlockTitleHint text="FOR DEVELOPERS" />

            <LayoutContainer className="py-12 px-4 border-l border-r border-dashed border-[var(--default-border-color)] bg-[#fdfdf8]">
                <div className="">
                    <p className="text-5xl font-serif font-medium text-black text-balance leading-tight text-center">
                        All your used resources are now gathered in <span className="text-blue-4">one place</span>
                    </p>
                </div>
            </LayoutContainer>
            <Line />

            <LayoutContainer className="border-l border-r border-dashed border-[var(--default-border-color)] pb-24 bg-[#fdfdf8]">
                <div className="flex border-b border-dashed border-[var(--default-border-color)]">
                    <div className="w-1/4 p-4 border-r border-dashed border-[var(--default-border-color)]">
                        <img
                            src={aws}
                            alt="AWS"
                            className="size-12 object-contain"
                        />
                        <p className="text-xl font-medium text-black mt-2.5">Amazon Web Services</p>
                        <p className="text-gray-600 text-sm text-gray-6 mt-1.5">
                            Create production-like behavior from schemas, components, and rules. Cover success paths, errors, delays, and events with one click.
                        </p>
                    </div>

                    <div className="w-2/4 p-4 border-r border-dashed border-[var(--default-border-color)] bg-[#FAFAF8]">
                    </div>

                    <div className="w-1/4 p-4">
                        222
                    </div>
                </div>

                <div className="grid grid-cols-4 divide-x divide-y divide-dashed divide-[var(--default-border-color)] border-b border-dashed border-[var(--default-border-color)] [&>*:first-child]:border-l-0 [&>*:last-child]:border-r-0 [&>*:nth-last-child(-n+4)]:border-b-0">
                    <div className="p-4">1</div>
                    <div className="p-4">2</div>
                    <div className="p-4">3</div>
                    <div className="p-4">4</div>
                    <div className="p-4">1</div>
                    <div className="p-4">2</div>
                    <div className="p-4">3</div>
                    <div className="p-4">4</div>
                </div>
            </LayoutContainer>

        </section >
    );
};

export default ForDevelopersSection;