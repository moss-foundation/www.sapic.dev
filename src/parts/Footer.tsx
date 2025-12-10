import { LayoutContainer } from "@/components";
import { Link } from "react-router-dom";
import { useConsent } from "@/hooks/useConsent";

const Footer = () => {
    const { showBanner } = useConsent();

    return (
        <LayoutContainer>
            <footer className="w-full py-6 md:py-8 border-t border-gray-200">
                <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6 order-1 md:order-2 pb-10 pt-6 md:pb-0 md:pt-0 w-full md:w-auto">
                        <Link to="/terms-of-use" className="text-neutral-600 text-sm hover:text-neutral-900 transition-colors select-none">
                            Terms of Use
                        </Link>
                        <Link to="/privacy-policy" className="text-neutral-600 text-sm hover:text-neutral-900 transition-colors select-none">
                            Privacy Policy
                        </Link>
                        <button
                            onClick={showBanner}
                            className="text-neutral-600 text-sm hover:text-neutral-900 transition-colors select-none text-left cursor-pointer select-none flex items-center gap-1.5"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 30 14" version="1.1" viewBox="0 0 30 14" className="w-6 h-3" style={{ fillRule: 'evenodd', clipRule: 'evenodd' }}>
                                <path fill="#FFFFFF" d="m7.4 12.8h6.8l3.1-11.6h-9.9c-3.2 0-5.8 2.6-5.8 5.8s2.6 5.8 5.8 5.8z" />
                                <path fill="#0066FF" d="m22.6 0h-15.2c-3.9 0-7 3.1-7 7s3.1 7 7 7h15.2c3.9 0 7-3.1 7-7s-3.2-7-7-7zm-21 7c0-3.2 2.6-5.8 5.8-5.8h9.9l-3.1 11.6h-6.8c-3.2 0-5.8-2.6-5.8-5.8z" />
                                <path fill="#FFFFFF" d="m24.6 4c0.2 0.2 0.2 0.6 0 0.8l-2.1 2.2 2.2 2.2c0.2 0.2 0.2 0.6 0 0.8s-0.6 0.2-0.8 0l-2.2-2.2-2.2 2.2c-0.2 0.2-0.6 0.2-0.8 0s-0.2-0.6 0-0.8l2.1-2.2-2.2-2.2c-0.2-0.2-0.2-0.6 0-0.8s0.6-0.2 0.8 0l2.2 2.2 2.2-2.2c0.2-0.2 0.6-0.2 0.8 0z" />
                                <path fill="#0066FF" d="m12.7 4.1c0.2 0.2 0.3 0.6 0.1 0.8l-4.2 4.9c-0.1 0.1-0.2 0.2-0.3 0.2-0.2 0.1-0.5 0.1-0.7-0.1l-2.2-2.2c-0.2-0.2-0.2-0.6 0-0.8s0.6-0.2 0.8 0l1.8 1.7 3.8-4.5c0.2-0.2 0.6-0.2 0.9 0z" />
                            </svg>
                            Cookie Settings
                        </button>
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