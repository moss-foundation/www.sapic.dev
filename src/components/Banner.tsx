import { Button } from ".";
import LayoutContainer from "./LayoutContainer";

import bannerBg from "@assets/images/banner-bg.svg";

const Banner = () => {
    return (
        <LayoutContainer>
            <div className="p-2.5 border-l border-r border-dashed border-[var(--default-border-color)] bg-[#fdfdf8]">
                <div className="bg-blue-4 rounded-xl border border-blue-2 relative overflow-hidden">
                    <div
                        className="absolute top-0 right-0 w-1/2 h-full bg-cover bg-no-repeat"
                        style={{
                            backgroundImage: `url(${bannerBg})`,
                            backgroundPosition: "right center",
                            backgroundSize: "cover",
                        }}
                    />

                    <div className="relative z-10 w-2/3 py-10 px-5">
                        <h2 className="text-white text-4xl font-semibold mb-4">
                            <span className="opacity-50">Replace several tools with</span>
                            <br />
                            <span>one powerful console</span>
                        </h2>

                        <p className="text-white/90 text-lg mb-4 leading-relaxed w-full">
                            Stop juggling API clients, database and log viewers, mock servers, and
                            policy checkers. Design, test, and operate your backend in one seamless
                            flow — faster, clearer, smarter.
                        </p>

                        <Button variant="default" size="medium">
                            Join Waitlist
                        </Button>
                    </div>
                </div>
            </div>
        </LayoutContainer>
    );
};

export default Banner;
