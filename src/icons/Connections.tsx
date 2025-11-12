import type { IconProps } from "@lib/icon";

export interface ConnectionsIconProps extends IconProps {
    className?: string;
}

const ConnectionsIcon = ({ className }: ConnectionsIconProps) => {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <circle cx="9" cy="10.125" r="5.72917" stroke="#8150BE" strokeWidth="0.916667" />
            <circle cx="9" cy="3.9375" r="2.3125" fill="#E4CFFF" stroke="#8150BE" />
            <circle cx="3.9375" cy="12.9375" r="2.3125" fill="#E4CFFF" stroke="#8150BE" />
            <circle cx="14.0625" cy="12.9375" r="2.3125" fill="#E4CFFF" stroke="#8150BE" />
        </svg>

    );
};

export default ConnectionsIcon;