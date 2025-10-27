import { motion } from "motion/react";
interface FrontFlippingCardProps {
    imgSrc: string;
    title: string;
    description: string;
}

export const FrontFlippingCard = ({ imgSrc, title, description }: FrontFlippingCardProps) => {
    return (
        <motion.div
            key={imgSrc}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="p-4 font-[Inter]"
        >
            <img src={imgSrc} alt="AWS" className="size-12 object-contain" />
            <p className="text-xl font-medium text-black mt-3">{title}</p>
            <p className="text-gray-600 text-sm text-gray-6 mt-1.5">{description}</p>
        </motion.div>
    );
};
