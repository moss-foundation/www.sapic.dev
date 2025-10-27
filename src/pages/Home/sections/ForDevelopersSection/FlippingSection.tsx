import { AnimatePresence, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { brandCards } from "./brandCards";
import { FlippingCard } from "./FlippingCard";
import { FlippingCardsProgressBar } from "./FlippingCardsProgressBar";
import { FrontFlippingCard } from "./FrontFlippingCard";

export const FlippingSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true,
    });

    const [currentIndex, setCurrentIndex] = useState(0);

    const totalPartners = brandCards.length;
    const totalCardsCount = 8;
    const colsCount = 4;
    const duration = 3000;

    useEffect(() => {
        let interval: number;

        if (isInView) {
            interval = setInterval(
                () => setCurrentIndex((currentIndex + 1) % totalPartners),
                duration
            );
        }

        return () => clearInterval(interval);
    }, [currentIndex, isInView, setCurrentIndex, totalPartners]);

    return (
        <div
            ref={ref}
            className="border-b border-dashed border-[var(--default-border-color)] grid grid-cols-4"
        >
            <div className="border-b border-r border-dashed border-[var(--default-border-color)] col-span-1 relative">
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
                    duration={duration}
                    isRunning={isInView}
                />
            </div>
            <div className="border-b border-dashed border-[var(--default-border-color)] col-span-3" />

            {new Array(totalCardsCount).fill(null).map((_, index) => (
                <div key={index}>
                    <FlippingCard
                        cards={brandCards.map(partner => partner.cards[index])}
                        currentIndex={currentIndex}
                        delay={index * 0.2}
                        isLastCol={(index + 1) % colsCount === 0}
                        isLastRow={index >= totalCardsCount - colsCount}
                    />
                </div>
            ))}
        </div>
    );
};
