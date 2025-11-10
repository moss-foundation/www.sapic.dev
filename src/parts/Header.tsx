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
    const [activeSection, setActiveSection] = useState<string>("home");
    const { openWaitList: openWaitList } = useWaitList();
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 20);

            if (window.location.pathname === '/') {
                const sections = ['home', 'how-it-works', 'features', 'use-cases', 'community', 'for-developers', 'faq', 'get-started'];
                const headerHeight = 56;
                
                for (let i = sections.length - 1; i >= 0; i--) {
                    const section = document.getElementById(sections[i]);
                    if (section) {
                        const rect = section.getBoundingClientRect();
                        if (rect.top <= headerHeight + 100) {
                            setActiveSection(sections[i]);
                            break;
                        }
                    }
                }
            } else {
                setActiveSection('');
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const checkPath = () => {
            if (window.location.pathname !== '/') {
                setActiveSection('');
            }
        };
        
        checkPath();
        window.addEventListener('popstate', checkPath);
        return () => window.removeEventListener('popstate', checkPath);
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
        
        setActiveSection(sectionId);
        
        if (isHomePage) {
            scrollToSection(sectionId);
        } else {
            router.navigate({ to: '/' }).then(() => {
                setTimeout(() => {
                    scrollToSection(sectionId);
                    setActiveSection(sectionId);
                }, 100);
            });
        }
        
        setIsMobileMenuOpen(false);
    };

    const menuItems = [
        { label: "Home", sectionId: "home", to: "/" },
        { label: "How It Works", sectionId: "how-it-works", to: "/" },
        { label: "Features", sectionId: "features", to: "/" },
        { label: "Use Cases", sectionId: "use-cases", to: "/" },
        { label: "Community", sectionId: "community", to: "/" },
        { label: "For Developers", sectionId: "for-developers", to: "/" },
        { label: "FAQ", sectionId: "faq", to: "/" },
        { label: "Get Started", sectionId: "get-started", to: "/" },
    ];

    return (
        <>
            <motion.header
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`sticky top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
                    isMobileMenuOpen
                        ? "bg-white backdrop-blur-lg border-neutral-200 shadow-sm"
                        : isScrolled
                            ? "bg-white/95 backdrop-blur-lg border-neutral-200 shadow-sm"
                            : "bg-white border-transparent"
                }`}
            >
                <LayoutContainer>
                    <motion.div
                        className="flex items-center justify-between h-14"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
                    >
                        <motion.button
                            onClick={(e) => handleNavClick("home", e)}
                            className="flex items-center gap-2.5 cursor-pointer transition-opacity hover:opacity-80"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
                        >
                            <img src={logoBlue} alt="Sapic" className="size-8" />
                            <span className="text-lg font-semibold text-neutral-900">
                                Sapic
                            </span>
                        </motion.button>

                        <motion.nav
                            className="hidden md:flex items-center gap-0.5 font-medium text-sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
                        >
                            {menuItems.map((item) => {
                                const isActive = activeSection === item.sectionId;
                                return (
                                    <button
                                        key={item.sectionId}
                                        onClick={(e) => handleNavClick(item.sectionId, e)}
                                        className={`relative px-2.5 py-2 rounded-md transition-all duration-200 cursor-pointer ${
                                            isActive
                                                ? "text-neutral-900 font-semibold"
                                                : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50"
                                        }`}
                                    >
                                        {item.label}
                                        {isActive && (
                                            <motion.div
                                                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-5 bg-blue-4 rounded-full"
                                                layoutId="activeIndicator"
                                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                            />
                                        )}
                                    </button>
                                );
                            })}
                        </motion.nav>

                        <motion.div
                            className="flex items-center gap-2"
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
                        >
                            <div className="hidden md:flex items-center gap-2.5">
                                <SimpleButton 
                                    variant="ghost" 
                                    size="small" 
                                    onClick={() => window.open(DISCORD_INVITE_URL, "_blank")}
                                    className="text-neutral-600 hover:text-neutral-900"
                                >
                                    Join our Discord
                                </SimpleButton>
                                <SimpleButton
                                    variant="primary"
                                    size="small"
                                    onClick={openWaitList}
                                    className="font-medium"
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
