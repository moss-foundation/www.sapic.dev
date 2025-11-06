import { LayoutContainer } from "@/components";



const Footer = () => {
    return (
        <LayoutContainer>
            <footer className="w-full py-5">
                <div className="flex items-center justify-between">
                    <p className="text-stone-500 text-sm">
                        © {new Date().getFullYear()} Sapic AS. All rights reserved.
                    </p>
                    <div className="flex flex-row items-center gap-6">
                        <a href="#">
                            <p className="text-stone-500 text-sm hover:text-stone-700 transition-colors">
                                Terms of Use
                            </p>
                        </a>
                        <a href="#">
                            <p className="text-stone-500 text-sm hover:text-stone-700 transition-colors">
                                Privacy Policy
                            </p>
                        </a>
                    </div>
                </div>

            </footer>
        </LayoutContainer>

    )
}

export default Footer;