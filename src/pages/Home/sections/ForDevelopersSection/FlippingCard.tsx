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
            className={`w-full h-full ${isLastRow ? "" : "border-b"}  ${isLastCol ? "" : "border-r"} border-dashed border-(--default-border-color)`}
        >
            <MotionConfig transition={{ duration: 0.5, delay, ease: "easeInOut" }}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        className=" rounded-lg w-full h-full relative min-h-[100px] overflow-hidden "
                    >
                        {/* Card Back Side */}
                        <motion.div
                            className="bg-[#fdfdf8] inset-0 absolute w-full h-full flex justify-center items-center"
                            initial={{ translateY: "-100%" }}
                            animate={{ translateY: "0%" }}
                            exit={{ translateY: "100%" }}
                        >
                            {cards[(currentIndex + 1) % cards.length] ? (
                                <CardFace card={cards[(currentIndex + 1) % cards.length]} />
                            ) : (
                                <div className="w-full h-full bg-[#fdfdf8]" />
                            )}
                        </motion.div>

                        {/* Card Front Side */}
                        <motion.div
                            initial={{ translateY: "-100%" }}
                            animate={{ translateY: "0%" }}
                            exit={{ translateY: "100%" }}
                            className="bg-[#fdfdf8] inset-0 absolute w-full h-full flex justify-center items-center"
                        >
                            {cards[currentIndex % cards.length] ? (
                                <CardFace card={cards[currentIndex % cards.length]} />
                            ) : (
                                <div className="w-full h-full bg-[#fdfdf8]" />
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
        <div className="w-full h-full flex gap-4 items-center justify-center bg-[#fdfdf8] font-[Inter]">
            <img src={card.imgSrc} className="size-[50px] object-contain" />
            <div>
                <p className="text-base font-medium leading-5">{card.brand}</p>
                <p className="text-xl font-bold leading-5">{card.product}</p>
            </div>
        </div>
    );
};
