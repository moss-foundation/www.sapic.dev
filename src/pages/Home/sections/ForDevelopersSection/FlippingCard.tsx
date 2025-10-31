import { AnimatePresence, motion, MotionConfig } from "motion/react";
import type { CardProps } from "./brandCards";

interface FlippingCardProps {
    cards: CardProps[];
    currentIndex: number;
    delay?: number;
    isLastCol?: boolean;
    isLastRow?: boolean;
}

export const FlippingCard = ({
    cards,
    currentIndex,
    delay = 0,
    isLastCol = false,
    isLastRow = false,
}: FlippingCardProps) => {
    return (
        <div
            className={`${isLastCol ? "" : "border-r"} ${isLastRow ? "" : "border-b"} border-dashed border-(--default-border-color)`}
        >
            <MotionConfig transition={{ duration: 0.5, delay, ease: "easeInOut" }}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        className=" rounded-lg relative  overflow-hidden "
                    >
                        <motion.div
                            initial={{ translateY: "-100%" }}
                            animate={{ translateY: "0%" }}
                            exit={{ translateY: "100%" }}
                            className="w-full h-full flex justify-center items-center bg-[#fdfdf8] min-h-[100px]"
                        >
                            {cards[currentIndex % cards.length] ? (
                                <CardFace card={cards[currentIndex % cards.length]} />
                            ) : (
                                <div className="w-full h-full" />
                            )}
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            </MotionConfig>
        </div>
    );
};

const CardFace = ({ card }: { card: CardProps }) => {
    return (
        <div className="w-full h-full flex gap-4 items-center justify-center font-[Inter]">
            <img src={card.imgSrc} className="size-[32px] md:size-[50px] object-contain" />
            <div>
                <p className="text-base font-medium leading-5">{card.brand}</p>
                <p className="text-xl font-bold leading-5">{card.product}</p>
            </div>
        </div>
    );
};
