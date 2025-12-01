import { useState } from "react";
import Tooltip from "./Tooltip";

interface UnderlinedProps {
    text: React.ReactNode;
    color?: "blue" | "purple";
    style?: "solid" | "wavy" | "double";
    tooltip?: string;
}
const Underlined = ({ text, color = "blue", style = "solid", tooltip }: UnderlinedProps) => {
    const [isHovered, setIsHovered] = useState(false);

    const styleClasses = {
        solid: `underline decoration-${color}-500 decoration-2 underline-offset-5`,
        wavy: `underline decoration-wavy decoration-${color}-500 decoration-2 underline-offset-5`,
        double: `underline decoration-double decoration-${color}-500 decoration-2 underline-offset-5`,
    };

    return (
        <span
            className={`relative cursor-help ${styleClasses[style]}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {text}
            {tooltip && <Tooltip content={tooltip} isVisible={isHovered} position="top" />}
        </span>
    );
};

export default Underlined;