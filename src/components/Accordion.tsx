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
        <button className={`w-full cursor-pointer ${className}`} onClick={() => setIsOpen(!isOpen)}>
            <div className="flex items-center w-full justify-between  ">
                <h3 className="text-lg font-medium">{title}</h3>
                <ArrowHeadBottom className={`${isOpen ? "-rotate-180" : ""} transition`} />
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden text-left"
                    >
                        {children}
                    </motion.p>
                )}
            </AnimatePresence>
        </button>
    );
};
