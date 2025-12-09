import Button from "@/components/ui/Button";
import LayoutContainer from "@/components/containers/LayoutContainer";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useWaitList } from "@/hooks/useWaitList";
import { DISCORD_INVITE_URL } from "@/lib/constants";
import { scrollToSection } from "@/lib/scrollToSection";

import logo from "@/assets/images/sapic_logo.svg";

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
        { label: "Demo", sectionId: "demo", to: "/" },
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

                            <img src={logo} alt="Sapic Logo" className="h-6.5" />

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
                                    className="text-neutral-800 transition-colors hover:bg-neutral-100 px-3 py-1.5 transition-all duration-500 rounded-lg cursor-pointer select-none"
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
                                <div onClick={() => window.open(DISCORD_INVITE_URL, "_blank")} className="cursor-pointer text-neutral-600 hover:text-neutral-900 transition-all duration-500 px-3">
                                    <svg className="size-4.5" fill="currentColor" aria-hidden="true" viewBox="0 -28.5 256 256" xmlns="http://www.w3.org/2000/svg"><g><path d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z" fill="currentColor" fill-rule="nonzero"></path></g></svg>
                                </div>

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
