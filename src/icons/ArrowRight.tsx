import type { IconProps } from "@lib/icon";

export interface IconArrowRightProps extends IconProps {
    className?: string;
    color: string;
}

const IconArrowRight = ({ className, color }: IconArrowRightProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            className={className}
        >
            <path
                d="M3.33203 7.9987H12.6654M12.6654 7.9987L7.9987 3.33203M12.6654 7.9987L7.9987 12.6654"
                stroke={color}
                strokeWidth="1.3333"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default IconArrowRight;
