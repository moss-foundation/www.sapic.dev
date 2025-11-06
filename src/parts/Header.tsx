import SimpleButton from "@/components/SimpleButton";
import LayoutContainer from "@/components/LayoutContainer";
import logoBlue from "@assets/images/logo_blue.svg";
import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/50 backdrop-blur-md" : "bg-white"
                }`}
        >
            <LayoutContainer>
                <div className="flex items-center justify-between h-14">
                    <div className="flex items-center gap-3">
                        <img src={logoBlue} alt="Sapic" className="size-7.5" />
                        <span className="text-xl font-medium text-[var(--default-primary-text-color)] font-mono">
                            Sapic
                        </span>
                    </div>

                    <nav className="hidden md:flex items-center gap-8">
                        <Link
                            to="/"
                            className="text-[var(--default-primary-text-color)] transition-colors text-sm"
                        >
                            Home
                        </Link>
                        <Link
                            to="/use-cases"
                            className="text-[var(--default-primary-text-color)] transition-colors text-sm"
                        >
                            Use Cases
                        </Link>
                        <Link
                            to="/features"
                            className="text-[var(--default-primary-text-color)] transition-colors text-sm"
                        >
                            Features
                        </Link>
                        <Link
                            to="/faq"
                            className="text-[var(--default-primary-text-color)] transition-colors text-sm"
                        >
                            FAQ
                        </Link>
                    </nav>

                    <div className="flex items-center gap-2">
                        <SimpleButton variant="ghost" size="small">
                            Contact Sales
                        </SimpleButton>
                        <SimpleButton variant="primary" size="small">
                            Sign up
                        </SimpleButton>
                    </div>

                </div>
            </LayoutContainer>
        </header>
    );
};

export default Header;
