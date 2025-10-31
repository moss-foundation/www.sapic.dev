import { AnimatePresence, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { createBreakpoint } from "react-use";
import { brandCards } from "./brandCards";
import { FlippingCard } from "./FlippingCard";
import { FlippingCardsProgressBar } from "./FlippingCardsProgressBar";
import { FrontFlippingCard } from "./FrontFlippingCard";

const useBreakpoint = createBreakpoint({
    md: 768,
    lg: 1024,
});

export const FlippingSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true,
    });

    const breakpoint = useBreakpoint();

    const [currentIndex, setCurrentIndex] = useState(0);

    const totalCardsCount = 8;
    const colsCount = breakpoint === "md" ? 2 : 4;

    const cardsDuration = 5000;
    const cardsDelay = 0.2;

    useEffect(() => {
        let interval: number;

        if (isInView) {
            const totalPartners = brandCards.length;

            interval = setInterval(
                () => setCurrentIndex((currentIndex + 1) % totalPartners),
                cardsDuration
            );
        }

        return () => clearInterval(interval);
    }, [currentIndex, isInView, setCurrentIndex]);

    return (
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4">
            <div className="border-b border-r border-dashed border-(--default-border-color) col-span-1 relative">
                <AnimatePresence mode="wait">
                    <FrontFlippingCard
                        key={currentIndex}
                        imgSrc={brandCards[currentIndex].frontCard.imgSrc}
                        title={brandCards[currentIndex].frontCard.title}
                        description={brandCards[currentIndex].frontCard.description}
                    />
                </AnimatePresence>
                <FlippingCardsProgressBar
                    currentIndex={currentIndex}
                    duration={cardsDuration}
                    isRunning={isInView}
                />
            </div>

            <div className="md:sr-only border-b border-dashed border-(--default-border-color)" />

            <div className="col-span-2 bg-[#E5E7E0] border-b border-r border-dashed border-(--default-border-color) min-h-32 sr-only md:not-sr-only" />

            <div className="col-span-2 row-start-7 md:row-start-auto md:col-span-1 lg:row-start-auto lg:col-span-1 border-b border-dashed border-(--default-border-color) min-h-32 sr-only md:not-sr-only" />

            {new Array(totalCardsCount).fill(null).map((_, index) => (
                <FlippingCard
                    key={index}
                    cards={brandCards.map(partner => partner.cards[index])}
                    currentIndex={currentIndex}
                    delay={index * cardsDelay}
                    isLastCol={(index + 1) % colsCount === 0}
                    isLastRow={index >= totalCardsCount - colsCount}
                />
            ))}
        </div>
    );
};
