import { LayoutContainer } from "@/components";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <LayoutContainer>
            <footer className="w-full py-6 md:py-8 border-t border-gray-200">
                <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6 order-1 md:order-2 pb-10 pt-6 md:pb-0 md:pt-0 w-full md:w-auto">
                        <Link to="/terms-of-use" className="text-neutral-600 text-sm hover:text-neutral-700 transition-colors">
                            Terms of Use
                        </Link>
                        <Link to="/privacy-policy" className="text-neutral-600 text-sm hover:text-neutral-700 transition-colors">
                            Privacy Policy
                        </Link>
                    </div>

                    <hr className="w-full border-t border-gray-200 md:hidden order-2" />

                    <p className="text-neutral-600 text-xs md:text-sm order-3 md:order-1 pt-4 md:pt-0">
                        © {new Date().getFullYear()} Sapic AS. All rights reserved.
                    </p>
                </div>

            </footer>
        </LayoutContainer>

    )
}

export default Footer;