import { AnimatePresence, motion } from "motion/react";
import type { CardProps } from "./cards";

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
    const dontAnimate =
        cards[currentIndex % cards.length] === undefined &&
        cards[(currentIndex + 1) % cards.length] === undefined;

    return (
        <div
            className={`w-full h-full ${isLastRow ? "" : "border-b"}  ${isLastCol ? "" : "border-r"} border-dashed border-[var(--default-border-color)]`}
            style={
                {
                    // perspective: "1000px",
                }
            }
        >
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    transition={{ duration: 1, delay }}
                    exit={{ rotateY: dontAnimate ? 0 : 180 }}
                    style={{
                        transformStyle: "preserve-3d",
                        backfaceVisibility: "hidden",
                    }}
                    className=" rounded-lg w-full h-full relative min-h-[100px] "
                >
                    {/* Card Front Side */}
                    <motion.div
                        style={{
                            backfaceVisibility: "hidden",
                        }}
                        className="bg-[#fdfdf8] inset-0 absolute w-full h-full flex justify-center items-center"
                    >
                        {cards[currentIndex % cards.length] ? (
                            <CardFace card={cards[currentIndex % cards.length]} />
                        ) : (
                            <div className="w-full h-full bg-[#fdfdf8]" />
                        )}
                    </motion.div>

                    {/* Card Back Side */}
                    <motion.div
                        className=" bg-[#fdfdf8] inset-0 absolute w-full h-full flex justify-center items-center"
                        style={{
                            backfaceVisibility: "hidden",
                            transform: "rotateY(180deg)",
                        }}
                    >
                        {cards[(currentIndex + 1) % cards.length] ? (
                            <CardFace card={cards[(currentIndex + 1) % cards.length]} />
                        ) : (
                            <div className="w-full h-full bg-[#fdfdf8]" />
                        )}
                    </motion.div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

const CardFace = ({ card }: { card: CardProps }) => {
    return (
        <div className="w-full h-full flex gap-4 items-center justify-center bg-[#fdfdf8] font-[Inter]">
            <img src={card.imgSrc} className="size-[50px] object-contain" />
            <div>
                <p className="text-[16px] font-medium leading-5">{card.brand}</p>
                <p className="text-[20px] font-bold leading-5">{card.product}</p>
            </div>
        </div>
    );
};
