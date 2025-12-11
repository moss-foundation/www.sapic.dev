interface TooltipProps {
    content: string;
    isVisible: boolean;
    position?: "top" | "bottom" | "left" | "right";
}

const Tooltip = ({ content, isVisible, position = "top" }: TooltipProps) => {
    const positionStyles = {
        top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
        bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
        left: "right-full top-1/2 -translate-y-1/2 mr-2",
        right: "left-full top-1/2 -translate-y-1/2 ml-2",
    };

    return (
        <span
            className={`
                absolute z-50 
                px-2.5 py-1.5 text-xs text-white bg-neutral-800 rounded-md shadow-lg 
                pointer-events-none transition-opacity duration-300 ease-in-out 
                md:max-w-none md:w-max
                whitespace-normal md:whitespace-nowrap break-words
                text-left md:text-center
                ${positionStyles[position]}
                ${isVisible ? "opacity-100" : "opacity-0"}
            `}
        >
            {content}
        </span>
    );
};

export default Tooltip;

