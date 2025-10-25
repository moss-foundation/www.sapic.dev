import BlockTitleHint from "@/components/BlockTitleHint";
import LayoutContainer from "@/components/LayoutContainer";
import Line from "@/components/Line";

import useCase1 from "@assets/images/use-case-1.png";
import rectangles3 from "@assets/images/3rectangles.svg";
import Button from "@/components/Button";

const UseCasesSection = () => {
    const useCaseCards = [
        {
            title: "API Client",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: useCase1
        },
        {
            title: "Database Viewer",
            description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            image: useCase1
        },
        {
            title: "Integration Tests",
            description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            image: useCase1
        },
        {
            title: "Observability",
            description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            image: useCase1
        },
        {
            title: "Performance Monitoring",
            description: "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.",
            image: useCase1
        }
    ];

    return (
        <section className="relative h-full">
            <BlockTitleHint text="USE CASES" />
            <LayoutContainer className="py-10 px-4 border-l border-r border-dashed border-[var(--default-border-color)]">

                <p className="text-5xl font-serif font-medium text-gray-900 leading-tight text-balance text-center mb-4 px-48">
                    Invoke, subscribe and observe your <span className="text-blue-4">resources</span>
                </p>

                <p className="text-base text-gray-600 leading-relaxed text-[#5A5D6B] text-balance text-center">
                    One console for modern backends. Design, invoke, subscribe, and observe your APIs, queues, and databases, etc. with integration tests, mocks, and environments.
                    AI & Git native with batteries included.
                </p>

            </LayoutContainer>

            <Line />

            {/* Card Grid Section */}
            <LayoutContainer className="">
                <div className="grid grid-cols-3 border-l border-r border-dashed border-[var(--default-border-color)] px-4 py-4 gap-4 items-stretch">
                    {useCaseCards.map((card, index) => (
                        <div
                            key={index}
                            className="flex flex-col h-full rounded-xl border border-[var(--default-border-color)] overflow-hidden bg-[#F2F1EE]/50"
                        >
                            <div className="px-6 py-5 flex flex-col flex-1 mb-4">
                                <h3 className="text-2xl font-serif font-medium text-[var(--default-primary-text-color)] mb-3">
                                    {card.title}
                                </h3>
                                <p className="text-base text-[var(--default-secondary-text-color)] flex-1 text-pretty">
                                    {card.description}
                                </p>
                            </div>
                            <div className="p-2.5">
                                <div className="border border-[var(--default-border-color)] rounded-xl h-80">
                                    <img
                                        src={card.image}
                                        alt={card.title}
                                        className="w-full h-full object-cover block border-5 border-[var(--default-border-color)]/50 rounded-xl"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Promotional card */}
                    <div className="flex flex-col h-full rounded-xl border-2 border-blue-2 bg-blue-4 relative overflow-hidden">
                        <div className="absolute inset-0 flex justify-center items-start">
                            <img src={rectangles3} className="opacity-20 absolute -translate-y-2/4" />
                        </div>
                        <div className="absolute inset-0">
                            <img src={rectangles3} className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 opacity-20"
                            />
                        </div>

                        <div className="flex flex-col items-center justify-center h-full">
                            <div className="flex flex-col gap-4 items-center justify-center">
                                <p className="text-white text-4xl font-semibold">Get Early Access</p>
                                <Button variant="default" size="medium" className="w-full">Join</Button>
                            </div>
                        </div>
                    </div>
                </div>

            </LayoutContainer>

            <Line />

            {/* HACK: The solution is a bit of a hack, but it's just a quick implementation for now - we'll need to improve it later. */}
            <LayoutContainer className="">
                <div className="border-l border-r border-dashed border-[var(--default-border-color)] h-32">
                </div>
            </LayoutContainer>
        </section>
    );
};

export default UseCasesSection;