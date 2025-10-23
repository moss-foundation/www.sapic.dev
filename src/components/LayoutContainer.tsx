import type { ReactNode } from "react";

interface LayoutContainerProps {
    children: ReactNode;
    className?: string;
}

const LayoutContainer = ({ children, className = "" }: LayoutContainerProps) => {
    return (
        <div className={`w-15/20 mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
            {children}
        </div>
    );
};

export default LayoutContainer;
