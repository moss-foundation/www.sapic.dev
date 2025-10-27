import { motion, useAnimation } from "motion/react";
import { useEffect } from "react";

interface FlippingCardsProgressBarProps {
    duration: number;
    isRunning: boolean;
}

const variants = {
    full: {
        width: "100%",
    },
    empty: {
        width: "0%",
    },
};

export const FlippingCardsProgressBar = ({
    duration,
    isRunning,
}: FlippingCardsProgressBarProps) => {
    const controls = useAnimation();

    useEffect(() => {
        if (isRunning) {
            controls.start("empty");
        }
    }, [isRunning, controls]);

    return (
        <motion.div
            className="absolute bottom-0 left-0 h-[4px] bg-sky-500 rounded-full"
            animate={controls}
            variants={variants}
            initial="full"
            transition={{
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
                duration: duration / 1000,
            }}
        />
    );
};
