import { DividerLine, LayoutContainer } from "@/components";

import logoBlack from "@assets/images/logo_black.svg";


const Footer = () => {
    return (
        <footer className="relative bg-[#eeefe9]/50 before:absolute before:inset-0 before:opacity-5 before:bg-[url(@assets/images/noise.png)] before:bg-[length:200px_200px] before:bg-repeat before:mix-blend-multiply before:pointer-events-none">
            <DividerLine />
            <LayoutContainer>
                <div className="relative border-l border-r border-dashed border-[var(--default-border-color)]">
                    <div className="flex flex-row gap-x-10 border-b border-[var(--default-border-color)] border-dashed px-5 py-2.5">
                        <div className="w-1/3 flex flex-col gap-1.5 divide-[var(--default-border-color)]">
                            <div className="flex flex-row items-center gap-2">
                                <img src={logoBlack} alt="Sapic" className="size-6.5" />
                                <p className="text-lg text-black font-mono font-medium">Sapic</p>
                            </div>
                            <p className="text-[var(--default-primary-text-color)] text-xs">
                                One AI-native console for every backend resource.
                            </p>
                        </div>

                        <div className="w-2/3 flex flex-col items-end justify-end gap-2">
                            <p className="text-gray-3 text-sm font-medium font-mono">
                                hello@sapic.dev
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-row items-center justify-between py-2.5 px-5">
                        <nav className="flex flex-row items-center gap-5 w-3/4">
                            <a href="#">
                                <p className="text-gray-3 text-xs">
                                    Terms of Use
                                </p>
                            </a>
                            <a href="#">
                                <p className="text-gray-3 text-xs">
                                    Privacy Policy
                                </p>
                            </a>
                        </nav>
                        <div className="flex flex-row items-center justify-end gap-2 w-1/4">
                            <p className="text-gray-3 text-xs">
                                © {new Date().getFullYear()} Sapic AS. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </LayoutContainer>
        </footer>
    )
}

export default Footer;