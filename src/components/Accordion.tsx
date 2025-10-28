import { ArrowHeadBottom } from "@/icons/ArrowHeadBottom";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

interface AccordionProps {
    title: string;
    children: React.ReactNode;
    className?: string;
}

export const Accordion = ({ title, children, className }: AccordionProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`w-full ${className}`}>
            <button
                className="flex items-center w-full justify-between cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h3 className="text-lg font-medium">{title}</h3>
                <ArrowHeadBottom className={`${isOpen ? "-rotate-180" : ""} transition`} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
