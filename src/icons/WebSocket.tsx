import type { IconProps } from "@/lib/icon";

export interface WebSocketIconProps extends IconProps {
    className?: string;
}

const WebSocketIcon = ({ className }: WebSocketIconProps) => {
    return (
        <svg className={className} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_9226_46769)">
                <circle cx="9" cy="9" r="8" fill="#FFF4EB" />
                <path d="M12.182 7.93979L10.591 9.53078M8.46967 7.40946L10.0607 5.81847M6.86595 6.89504C7.13589 6.57737 7.63493 6.57472 7.94994 6.88974L11.1107 10.0505C11.4257 10.3655 11.4231 10.8646 11.1054 11.1345L10.2378 11.8717C9.60708 12.4054 8.8436 12.7583 8.02843 12.8931L7.51772 12.9795C7.27292 13.0173 7.02263 12.9963 6.78755 12.9182C6.55248 12.8401 6.33939 12.7071 6.16591 12.5303L5.47012 11.8345C5.2933 11.6611 5.16033 11.448 5.08222 11.2129C5.00411 10.9778 4.9831 10.7275 5.02093 10.4827L5.10737 9.97201C5.2421 9.15684 5.59506 8.39337 6.12879 7.76266L6.86595 6.89504Z" stroke="#B85516" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6.23698 16.0068C8.93 17.06 12.112 16.4958 14.2916 14.3161C17.227 11.3807 17.2323 6.62685 14.3033 3.69783C11.3743 0.768819 6.62041 0.774123 3.68503 3.7095C0.928376 6.46616 0.755489 10.8255 3.16902 13.7725C3.43206 14.0928 3.91095 14.0902 4.20423 13.7969L5.79893 12.2022" stroke="#B85516" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_9226_46769">
                    <rect width="18" height="18" fill="white" />
                </clipPath>
            </defs>
        </svg>

    );
};

export default WebSocketIcon;