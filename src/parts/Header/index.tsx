import { useEffect, useState } from "react";
import Button from "@/components/Button";
import LayoutContainer from "@/components/LayoutContainer";
import logoBlue from "@assets/images/logo_blue.svg";

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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-white/80 backdrop-blur-md border-b border-gray-100"
                : "bg-transparent border-b border-transparent"
                }`}
        >
            <LayoutContainer>
                <div className="flex items-center justify-between h-14">
                    <div className="flex items-center gap-2">
                        <img src={logoBlue} alt="Sapic" className="w-7.5 h-7.5" />
                        <span className="text-xl font-medium text-gray-900 font-mono">Sapic</span>
                    </div>

                    <nav className="hidden md:flex items-center gap-8">
                        <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors text-sm">
                            Hello_
                        </a>
                        <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors text-sm">
                            Home
                        </a>
                        <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors text-sm">
                            Home
                        </a>
                    </nav>

                    <Button variant="primary" size="small">
                        Join Waitlist
                    </Button>
                </div>
            </LayoutContainer>
        </header>
    );
};

export default Header;
