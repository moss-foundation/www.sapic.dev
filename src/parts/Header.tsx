import SimpleButton from "@/components/SimpleButton";
import LayoutContainer from "@/components/LayoutContainer";
import logoBlue from "@assets/images/logo_blue.svg";
import { useRouter } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useWaitList } from "@/hooks/useWaitList";
import { DISCORD_INVITE_URL } from "@/lib/constants";
import { scrollToSection } from "@/lib/scrollToSection";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { openWaitList: openWaitList } = useWaitList();
    const router = useRouter();

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
            router.navigate({ to: '/' }).then(() => {
                setTimeout(() => scrollToSection(sectionId), 100);
            });
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
                        ? "bg-white/50 backdrop-blur-md border-transparent"
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
                            <img src={logoBlue} alt="Sapic" className="size-7.5" />
                            <span className="text-lg font-medium text-neutral-900">
                                Sapic
                            </span>
                        </motion.div>

                        <motion.nav
                            className="hidden md:flex items-center gap-6 font-medium text-sm"
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
                                <SimpleButton variant="ghost" size="small" onClick={() => window.open(DISCORD_INVITE_URL, "_blank")}>
                                    Join our Discord
                                </SimpleButton>
                                <SimpleButton
                                    variant="primary"
                                    size="small"
                                    onClick={openWaitList}
                                >
                                    Get Started
                                </SimpleButton>
                            </div>

                            <div className="md:hidden flex items-center gap-2">
                                <SimpleButton
                                    variant="primary"
                                    size="small"
                                    onClick={openWaitList}
                                >
                                    Get Started
                                </SimpleButton>
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
                                        <SimpleButton
                                            variant="primary"
                                            size="large"
                                            className="w-full"
                                            onClick={() => window.open(DISCORD_INVITE_URL, "_blank")}
                                        >
                                            Join our Discord
                                        </SimpleButton>
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
