import Button from "@/components/Button";
import DividerLine from "@/components/DividerLine";
import LayoutContainer from "@/components/LayoutContainer";
import logoBlue from "@assets/images/logo_blue.svg";
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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled ? "bg-[#eeefe9]/50 backdrop-blur-md" : "bg-[#FAFAF8]"
            }`}
        >
            <LayoutContainer className="border-l border-r border-dashed border-[var(--default-border-color)] px-4">
                <div className="flex items-center justify-between h-14">
                    <div className="flex items-center gap-3">
                        <img src={logoBlue} alt="Sapic" className="size-7.5" />
                        <span className="text-xl font-medium text-[var(--default-primary-text-color)] font-mono">
                            Sapic
                        </span>
                    </div>

                    <nav className="hidden md:flex items-center gap-8">
                        <a
                            href="#"
                            className="text-[var(--default-primary-text-color)] transition-colors text-sm"
                        >
                            Hello_
                        </a>
                        <a
                            href="#"
                            className="text-[var(--default-primary-text-color)] transition-colors text-sm"
                        >
                            Use Cases
                        </a>
                        <a
                            href="#"
                            className="text-[var(--default-primary-text-color)] transition-colors text-sm"
                        >
                            Features
                        </a>
                        <a
                            href="#"
                            className="text-[var(--default-primary-text-color)] transition-colors text-sm"
                        >
                            FAQ
                        </a>
                    </nav>

                    <Button variant="primary" size="small">
                        Join Waitlist
                    </Button>
                </div>
            </LayoutContainer>
            <DividerLine />
        </header>
    );
};

export default Header;
