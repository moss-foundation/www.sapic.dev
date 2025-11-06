import SimpleButton from "./SimpleButton";

import bannerBg from "@assets/images/banner-bg.svg";

const Banner = () => {
    return (
        <div className="bg-blue-4 rounded-xl border border-blue-2 relative overflow-hidden">
            <div
                className="absolute top-0 right-0 lg:w-1/2 w-full h-full bg-cover bg-no-repeat bg-center lg:bg-right"
                style={{
                    backgroundImage: `url(${bannerBg})`,
                }}
            />

            <div className="relative z-10 w-2/3 p-10">
                <h2 className="text-white text-3xl font-medium mb-4">
                    <span className="opacity-70">Replace several tools with</span>
                    <br />
                    <span>one powerful console</span>
                </h2>

                <p className="text-white/90 text-base mb-4 leading-relaxed w-full">
                    Stop juggling API clients, database and log viewers, mock servers, and
                    policy checkers. Design, test, and operate your backend in one seamless
                    flow — faster, clearer, smarter.
                </p>

                <SimpleButton variant="default" size="medium">
                    Join Waitlist
                </SimpleButton>
            </div>
        </div>
    );
};

export default Banner;
