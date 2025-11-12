import { motion } from "motion/react";

interface CollaborativeCursorProps {
    x: number;
    y: number;
    name: string;
    color: string;
    isVisible: boolean;
}

const CollaborativeCursor = ({ x, y, name, color, isVisible }: CollaborativeCursorProps) => {
    if (!isVisible) return null;

    return (
        <motion.div
            className="pointer-events-none fixed z-[9999]"
            style={{ left: 0, top: 0 }}
            animate={{ x, y }}
            transition={{
                type: "spring",
                damping: 30,
                stiffness: 200,
                mass: 0.5
            }}
            initial={false}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="25" viewBox="0 0 18 25" fill="none" style={{ transform: 'translate(-2px, -2px)' }}>
                <g filter="url(#filter0_d_7953_74170)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M9.137 20.066L11 19.063L12.615 18.224L10.047 13.408H14.379L3 2V18.015L6.316 14.794L9.137 20.066Z" fill="white" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M9.4203 18.5929L11.1853 17.6519L8.41097 12.4503H12.0145L3.9895 4.40735V15.5953L6.51934 13.1533L9.4203 18.5929Z" fill="black" />
                </g>
                <defs>
                    <filter id="filter0_d_7953_74170" x="0" y="0" width="17.379" height="24.066" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="1" />
                        <feGaussianBlur stdDeviation="1.5" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4049 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_7953_74170" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_7953_74170" result="shape" />
                    </filter>
                </defs>
            </svg>

            <div
                className="absolute top-5 left-5 px-2 py-1 rounded-md text-xs font-medium text-white whitespace-nowrap"
                style={{ backgroundColor: color }}
            >
                {name}
            </div>
        </motion.div >
    );
};

export default CollaborativeCursor;
