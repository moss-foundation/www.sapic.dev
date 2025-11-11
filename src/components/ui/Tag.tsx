import { useState } from "react";
import Tooltip from "./Tooltip";

type TagVariant = "default" | "pending" | "placeholder";

interface TagProps {
    leadingIcon?: React.ReactNode;
    label: string;
    variant?: TagVariant;
    tooltip?: {
        text: string;
        position?: "top" | "bottom" | "left" | "right";
    };
}

const Tag = ({ leadingIcon, label, variant = "default", tooltip }: TagProps) => {
    const [isTooltipVisible, setIsTooltipVisible] = useState(false);

    const variantStyles: Record<TagVariant, string> = {
        default: "text-neutral-700 bg-neutral-100 px-2 py-0.5 rounded-md border border-neutral-200",
        pending: "px-2 py-0.5 rounded-md border border-dashed border-neutral-200 text-neutral-500",
        placeholder: "px-2 py-0.5 text-neutral-400",
    };

    return (
        <span
            className={`relative inline-flex flex-row items-center gap-x-1 ${variantStyles[variant]} cursor-default`}
            onMouseEnter={() => tooltip && setIsTooltipVisible(true)}
            onMouseLeave={() => setIsTooltipVisible(false)}
        >
            {leadingIcon && <span className="inline-flex size-4">{leadingIcon}</span>}
            <span className="text-sm">{label}</span>
            {tooltip && <Tooltip content={tooltip.text} isVisible={isTooltipVisible} position={tooltip.position} />}
        </span>
    );
};

export default Tag;