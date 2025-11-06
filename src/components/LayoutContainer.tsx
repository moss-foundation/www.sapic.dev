import type { ReactNode } from "react";

interface LayoutContainerProps {
    children: ReactNode;
    className?: string;
}

const LayoutContainer = ({ children, className = "" }: LayoutContainerProps) => {
    return (
        <div className="w-19/20 lg:w-14/20 mx-auto">
            <div className={className}>{children}</div>
        </div>
    );
};

export default LayoutContainer;
