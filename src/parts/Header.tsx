import Button from "@/components/ui/Button";
import LayoutContainer from "@/components/containers/LayoutContainer";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useWaitList } from "@/hooks/useWaitList";
import { DISCORD_INVITE_URL } from "@/lib/constants";
import { scrollToSection } from "@/lib/scrollToSection";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { openWaitList: openWaitList } = useWaitList();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMobileMenuOpen]);

    const handleNavClick = (sectionId: string, e: React.MouseEvent) => {
        e.preventDefault();
        const isHomePage = window.location.pathname === '/';

        if (isHomePage) {
            scrollToSection(sectionId);
        } else {
            navigate('/');
            setTimeout(() => scrollToSection(sectionId), 100);
        }

        setIsMobileMenuOpen(false);
    };

    const menuItems = [
        { label: "Home", sectionId: "home", to: "/" },
        { label: "Use Cases", sectionId: "use-cases", to: "/" },
        { label: "Features", sectionId: "features", to: "/" },
        { label: "FAQ", sectionId: "faq", to: "/" },
    ];

    return (
        <>
            <motion.header
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`sticky top-0 left-0 right-0 z-50 border-b ${isMobileMenuOpen
                    ? "bg-white/70 backdrop-blur-md border-neutral-100"
                    : isScrolled
                        ? "bg-white/50 backdrop-blur-md border-neutral-200"
                        : "bg-white border-transparent"
                    }`}
                style={{
                    transition: 'background-color 0.3s ease-in-out, backdrop-filter 0.3s ease-in-out, border-color 0.3s ease-in-out'
                }}
            >
                <LayoutContainer>
                    <motion.div
                        className="flex items-center justify-between h-14"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
                    >
                        <motion.div
                            className="flex items-center gap-3 cursor-pointer"
                            onClick={(e) => handleNavClick("home", e)}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
                        >

                            <svg viewBox="0 0 559 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6.5">
                                <path d="M88.3431 70.0693L62.7459 71.6454C62.3084 69.4564 61.3676 67.4863 59.9237 65.7351C58.4797 63.9402 56.5764 62.5173 54.2135 61.4666C51.8945 60.3721 49.116 59.8249 45.878 59.8249C41.5462 59.8249 37.8926 60.7443 34.9172 62.583C31.9418 64.378 30.4541 66.7858 30.4541 69.8066C30.4541 72.2145 31.4167 74.2503 33.342 75.9139C35.2672 77.5775 38.5708 78.9128 43.2527 79.9197L61.4989 83.5972C71.3002 85.6111 78.6074 88.8508 83.4206 93.3163C88.2337 97.7818 90.6403 103.648 90.6403 110.916C90.6403 117.526 88.6932 123.327 84.7989 128.318C80.9484 133.309 75.6539 137.205 68.9155 140.007C62.2209 142.765 54.498 144.144 45.7468 144.144C32.4012 144.144 21.7686 141.364 13.8487 135.804C5.97268 130.201 1.35643 122.583 0 112.951L27.5006 111.507C28.3319 115.578 30.3447 118.687 33.5389 120.832C36.7331 122.933 40.8242 123.984 45.8124 123.984C50.7131 123.984 54.6511 123.043 57.6265 121.16C60.6457 119.234 62.1771 116.76 62.2209 113.74C62.1771 111.2 61.1051 109.121 59.0048 107.501C56.9045 105.837 53.6666 104.568 49.291 103.692L31.8324 100.212C21.9873 98.2415 14.6582 94.8267 9.84507 89.9672C5.07568 85.1076 2.69099 78.9128 2.69099 71.3827C2.69099 64.9033 4.44122 59.3214 7.94169 54.637C11.4859 49.9526 16.4522 46.3408 22.8406 43.8015C29.2727 41.2623 36.7987 39.9927 45.4186 39.9927C58.1516 39.9927 68.1717 42.6852 75.4789 48.07C82.8299 53.4549 87.118 60.788 88.3431 70.0693Z" fill="#27282E" />
                                <path d="M135.146 144.079C128.714 144.079 122.982 142.962 117.95 140.73C112.918 138.453 108.936 135.104 106.005 130.682C103.117 126.217 101.673 120.657 101.673 114.002C101.673 108.398 102.701 103.692 104.757 99.8833C106.814 96.0744 109.614 93.0098 113.159 90.6895C116.703 88.3692 120.728 86.618 125.235 85.436C129.786 84.2539 134.555 83.4221 139.543 82.9405C145.407 82.3276 150.132 81.7585 153.72 81.2331C157.308 80.664 159.912 79.8322 161.531 78.7377C163.15 77.6432 163.959 76.0233 163.959 73.8782V73.4841C163.959 69.3251 162.647 66.1073 160.021 63.8307C157.44 61.5542 153.764 60.4159 148.995 60.4159C143.963 60.4159 139.959 61.5323 136.984 63.765C134.008 65.954 132.039 68.7122 131.077 72.0394L105.217 69.938C106.53 63.8088 109.111 58.5115 112.962 54.046C116.812 49.5367 121.779 46.0781 127.861 43.6702C133.986 41.2185 141.075 39.9927 149.126 39.9927C154.727 39.9927 160.087 40.6494 165.206 41.9628C170.369 43.2762 174.942 45.3119 178.924 48.07C182.949 50.8282 186.122 54.3743 188.441 58.7085C190.76 62.9989 191.919 68.143 191.919 74.1408V142.174H165.403V128.187H164.616C162.997 131.339 160.831 134.119 158.118 136.527C155.405 138.891 152.145 140.752 148.338 142.109C144.532 143.422 140.134 144.079 135.146 144.079ZM143.153 124.772C147.266 124.772 150.898 123.962 154.048 122.342C157.199 120.679 159.671 118.446 161.465 115.644C163.259 112.842 164.156 109.668 164.156 106.122V95.4177C163.281 95.9869 162.078 96.5122 160.546 96.9938C159.059 97.4316 157.374 97.8475 155.492 98.2415C153.611 98.5918 151.729 98.9201 149.848 99.2266C147.966 99.4892 146.26 99.73 144.729 99.9489C141.447 100.43 138.581 101.197 136.13 102.247C133.68 103.298 131.777 104.721 130.42 106.516C129.064 108.267 128.386 110.456 128.386 113.083C128.386 116.892 129.764 119.803 132.521 121.817C135.321 123.787 138.865 124.772 143.153 124.772Z" fill="#27282E" />
                                <path d="M211.763 180V41.3061H239.329V58.2488H240.576C241.801 55.5345 243.573 52.7764 245.893 49.9745C248.255 47.1288 251.318 44.7647 255.081 42.8822C258.888 40.9559 263.614 39.9927 269.258 39.9927C276.609 39.9927 283.391 41.919 289.605 45.7716C295.818 49.5804 300.784 55.3375 304.504 63.0427C308.223 70.7041 310.082 80.3138 310.082 91.8716C310.082 103.123 308.267 112.623 304.635 120.372C301.047 128.077 296.146 133.922 289.933 137.906C283.763 141.846 276.85 143.816 269.193 143.816C263.767 143.816 259.151 142.919 255.344 141.124C251.581 139.329 248.496 137.074 246.089 134.36C243.683 131.602 241.845 128.822 240.576 126.02H239.723V180H211.763ZM239.132 91.7402C239.132 97.7381 239.964 102.97 241.626 107.435C243.289 111.901 245.696 115.381 248.846 117.877C251.996 120.328 255.825 121.554 260.332 121.554C264.883 121.554 268.733 120.306 271.884 117.811C275.034 115.272 277.419 111.769 279.038 107.304C280.7 102.795 281.532 97.6067 281.532 91.7402C281.532 85.9175 280.722 80.7953 279.103 76.3736C277.484 71.9518 275.1 68.4933 271.949 65.9978C268.799 63.5024 264.926 62.2547 260.332 62.2547C255.781 62.2547 251.931 63.4586 248.78 65.8665C245.674 68.2744 243.289 71.6892 241.626 76.1109C239.964 80.5327 239.132 85.7424 239.132 91.7402Z" fill="#27282E" />
                                <path d="M326.874 142.174V41.3061H354.834V142.174H326.874ZM340.92 28.3035C336.763 28.3035 333.197 26.9245 330.221 24.1664C327.29 21.3645 325.824 18.0153 325.824 14.1189C325.824 10.2663 327.29 6.96097 330.221 4.20285C333.197 1.40095 336.763 0 340.92 0C345.077 0 348.621 1.40095 351.552 4.20285C354.528 6.96097 356.016 10.2663 356.016 14.1189C356.016 18.0153 354.528 21.3645 351.552 24.1664C348.621 26.9245 345.077 28.3035 340.92 28.3035Z" fill="#27282E" />
                                <path d="M420.933 144.144C410.607 144.144 401.725 141.955 394.286 137.578C386.891 133.156 381.203 127.027 377.221 119.19C373.283 111.354 371.314 102.335 371.314 92.1343C371.314 81.8023 373.305 72.7399 377.287 64.9471C381.312 57.1105 387.023 51.0033 394.417 46.6253C401.812 42.2036 410.607 39.9927 420.802 39.9927C429.597 39.9927 437.298 41.5907 443.905 44.7866C450.512 47.9825 455.741 52.4699 459.592 58.2488C463.442 64.0277 465.564 70.8136 465.958 78.6064H439.573C438.829 73.5717 436.86 69.5221 433.666 66.4575C430.516 63.3491 426.381 61.795 421.262 61.795C416.93 61.795 413.145 62.977 409.907 65.3411C406.713 67.6614 404.219 71.0544 402.425 75.5199C400.631 79.9854 399.734 85.3922 399.734 91.7402C399.734 98.1758 400.609 103.648 402.359 108.158C404.153 112.667 406.669 116.104 409.907 118.468C413.145 120.832 416.93 122.014 421.262 122.014C424.456 122.014 427.322 121.357 429.86 120.044C432.441 118.73 434.563 116.826 436.226 114.331C437.932 111.791 439.048 108.749 439.573 105.202H465.958C465.521 112.908 463.42 119.694 459.657 125.56C455.938 131.383 450.797 135.936 444.233 139.219C437.67 142.503 429.903 144.144 420.933 144.144Z" fill="#27282E" />
                                <path d="M559 142.174V163.386H470.723V142.174H559Z" fill="#3574F0" />
                            </svg>

                        </motion.div>

                        <motion.nav
                            className="hidden md:flex items-center gap-6 text-sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
                        >
                            {menuItems.map((item) => (
                                <button
                                    key={item.sectionId}
                                    onClick={(e) => handleNavClick(item.sectionId, e)}
                                    className="text-neutral-800 transition-colors hover:bg-neutral-100 px-3 py-1.5 transition-all duration-500 rounded-lg cursor-pointer"
                                >
                                    {item.label}
                                </button>
                            ))}
                        </motion.nav>

                        <motion.div
                            className="flex items-center gap-2"
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
                        >
                            <div className="hidden md:flex items-center gap-2">
                                <Button variant="ghost" size="small" onClick={() => window.open(DISCORD_INVITE_URL, "_blank")}>
                                    Join our Discord
                                </Button>
                                <Button
                                    variant="primary"
                                    size="small"
                                    onClick={openWaitList}
                                >
                                    Get Started
                                </Button>
                            </div>

                            <div className="md:hidden flex items-center gap-2">
                                <Button
                                    variant="primary"
                                    size="small"
                                    onClick={openWaitList}
                                >
                                    Get Started
                                </Button>
                                <button
                                    aria-label="Toggle menu"
                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                    className="flex items-center justify-center rounded-xl px-2 py-2 transition-all duration-300 hover:bg-black/5"
                                >
                                    <div className="relative w-5 h-5 flex items-center justify-center">
                                        <span
                                            className={`absolute w-4 h-0.5 bg-neutral-700 transition-all duration-300 ease-in-out ${isMobileMenuOpen
                                                ? "rotate-45"
                                                : "-translate-y-1.5"
                                                }`}
                                        />
                                        <span
                                            className={`absolute w-4 h-0.5 bg-neutral-700 transition-all duration-300 ease-in-out ${isMobileMenuOpen
                                                ? "-rotate-45"
                                                : "translate-y-1.5"
                                                }`}
                                        />
                                    </div>
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                </LayoutContainer>
            </motion.header>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 0.2, delay: 0.2 } }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="fixed top-14 left-0 right-0 bottom-0 z-40 bg-white/70 backdrop-blur-md md:hidden overflow-y-auto"
                    >
                        <div className="min-h-full flex flex-col">
                            <LayoutContainer>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1, transition: { duration: 0.2, delay: 0.1 } }}
                                    exit={{ opacity: 0, transition: { duration: 0.15 } }}
                                >
                                    <nav className="flex flex-col gap-6 py-6">
                                        {menuItems.map((item, index) => (
                                            <motion.div
                                                key={item.sectionId}
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{
                                                    opacity: 1,
                                                    y: 0,
                                                    transition: {
                                                        duration: 0.2,
                                                        delay: 0.15 + index * 0.05,
                                                        ease: "easeOut"
                                                    }
                                                }}
                                                exit={{
                                                    opacity: 0,
                                                    y: -10,
                                                    transition: {
                                                        duration: 0.15,
                                                        delay: (menuItems.length - index - 1) * 0.03,
                                                        ease: "easeIn"
                                                    }
                                                }}
                                            >
                                                <button
                                                    onClick={(e) => handleNavClick(item.sectionId, e)}
                                                    className="text-neutral-900 text-xl font-normal transition-colors hover:text-neutral-600 text-left cursor-pointer"
                                                >
                                                    {item.label}
                                                </button>
                                            </motion.div>
                                        ))}
                                    </nav>
                                </motion.div>
                            </LayoutContainer>

                            <div className="mt-auto">
                                <LayoutContainer>
                                    <motion.div
                                        className="pb-6"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                            transition: {
                                                duration: 0.2,
                                                delay: 0.35,
                                                ease: "easeOut"
                                            }
                                        }}
                                        exit={{
                                            opacity: 0,
                                            y: 10,
                                            transition: {
                                                duration: 0.15,
                                                ease: "easeIn"
                                            }
                                        }}
                                    >
                                        <Button
                                            variant="primary"
                                            size="large"
                                            className="w-full"
                                            onClick={() => window.open(DISCORD_INVITE_URL, "_blank")}
                                        >
                                            Join our Discord
                                        </Button>
                                    </motion.div>
                                </LayoutContainer>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
