import type { IconProps } from "@lib/icon";

export interface InfoIconProps extends IconProps {
    className?: string;
}

const InfoIcon = ({ className }: InfoIconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className={className}>
            <circle cx="8" cy="8" r="7" fill="#4682FA" />
            <path d="M8 11.3999L8 8.3999" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
            <circle cx="7.99961" cy="5.09995" r="1.1" transform="rotate(-180 7.99961 5.09995)" fill="white" />
        </svg>
    );
};

export default InfoIcon;