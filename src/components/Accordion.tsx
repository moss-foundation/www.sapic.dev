import { ArrowHeadBottom } from "@/icons/ArrowHeadBottom";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

interface AccordionProps {
    title: string;
    children: React.ReactNode;
    className?: string;
    defaultOpen?: boolean;
}

export const Accordion = ({ title, children, className, defaultOpen = false }: AccordionProps) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <button className={`w-full cursor-pointer ${className}`} onClick={() => setIsOpen(!isOpen)}>
            <div className="flex items-center w-full justify-between gap-4">
                <p className="text-sm md:text-lg font-medium text-left">{title}</p>
                <ArrowHeadBottom className={`${isOpen ? "-rotate-180" : ""} transition flex-shrink-0`} />
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden text-left"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </button>
    );
};
