import LayoutContainer from "./LayoutContainer";

const Line = () => {
    return (
        <div className="relative w-full">
            {/* Lines going from the diamonds left and right */}
            <div className="absolute inset-y-0 left-0 right-0 flex items-center pointer-events-none">
                {/* Left line from the left diamond */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/2 h-px border-t border-dashed border-[var(--default-border-color)]"></div>

                {/* Right line from the right diamond */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-px border-t border-dashed border-[var(--default-border-color)]"></div>
            </div>

            {/* Central area with diamonds */}
            <LayoutContainer>
                <div className="relative flex items-center justify-center">
                    {/* Horizontal dashed line in the center */}
                    <div className="w-full h-px relative">
                        {/* Diamond left - positioned at the start of the line */}
                        <div className="absolute left-0 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 z-10 bg-[#F2F2F3] ml-[0.3px] border border-[var(--default-border-color)]"></div>

                        {/* Diamond right - positioned at the end of the line */}
                        <div className="absolute right-0 translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 z-10 bg-[#F2F2F3] mr-[0.3px] border border-[var(--default-border-color)]"></div>
                    </div>
                </div>
            </LayoutContainer>
        </div>
    );
};

export default Line;