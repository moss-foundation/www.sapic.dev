import type { ReactNode } from "react";
import { forwardRef } from "react";

interface LayoutContainerProps {
    children: ReactNode;
    className?: string;
}

const LayoutContainer = forwardRef<HTMLDivElement, LayoutContainerProps>(
    ({ children, className = "" }, ref) => {
        return (
            <div className="w-full px-[2rem] md:px-[2.25rem] lg:px-[4rem] xl:px-[6rem] 2xl:px-[10.5rem] mx-auto max-w-[1400px]">
                <div ref={ref} className={className}>{children}</div>
            </div>
        );
    }
);

LayoutContainer.displayName = 'LayoutContainer';

export default LayoutContainer;
