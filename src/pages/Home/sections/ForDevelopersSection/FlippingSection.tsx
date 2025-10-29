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
    const duration = 5000;
    const delay = 0.15;

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
        <div ref={ref} className="grid grid-cols-4">
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
                    duration={duration}
                    isRunning={isInView}
                />
            </div>

            <div className="col-span-2 bg-[#E5E7E0] border-b border-r border-dashed border-(--default-border-color)" />

            <div className="col-span-1 border-b border-dashed border-(--default-border-color)" />

            {new Array(totalCardsCount).fill(null).map((_, index) => (
                <FlippingCard
                    key={index}
                    cards={brandCards.map(partner => partner.cards[index])}
                    currentIndex={currentIndex}
                    delay={index * delay}
                    isLastCol={(index + 1) % colsCount === 0}
                />
            ))}
        </div>
    );
};
