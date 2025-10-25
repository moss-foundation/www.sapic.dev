import HeroSection from "./sections/HeroSection";
import Divider from "@/components/Divider";
import UseCasesSection from "./sections/UseCasesSection";
import Banner from "@/components/Banner";
import { LayoutContainer, Line } from "@/components";
import Footer from "@/parts/Footer";
import ForDevelopersSection from "./sections/ForDevelopersSection";
// import FaqSection from "./sections/FaqSection";

const HomePage = () => {
    return (
        <div className="min-h-screen">
            <HeroSection />
            <Divider />

            {/* HACK: The solution is a bit of a hack, but it’s just a quick implementation for now - we’ll need to improve it later. */}
            <LayoutContainer>
                <div className="border-l border-r border-dashed border-[var(--default-border-color)] h-32">
                </div>
            </LayoutContainer>

            <Line />

            <UseCasesSection />
            <Divider />

            {/* HACK: The solution is a bit of a hack, but it’s just a quick implementation for now - we’ll need to improve it later. */}
            <LayoutContainer>
                <div className="border-l border-r border-dashed border-[var(--default-border-color)] h-32">
                </div>
            </LayoutContainer>

            <Line />

            <ForDevelopersSection />
            {/* <Divider />
            <FaqSection /> */}
            <Divider />
            <Banner />
            <Divider />


            {/* HACK: The solution is a bit of a hack, but it’s just a quick implementation for now - we’ll need to improve it later. */}
            <LayoutContainer>
                <div className="border-l border-r border-dashed border-[var(--default-border-color)] h-32">
                </div>
            </LayoutContainer>

            <Footer />
        </div>
    );
};

export default HomePage;
