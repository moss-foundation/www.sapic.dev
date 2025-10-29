import { DividerWithPadding, LayoutContainer, Line } from "@/components";
import Banner from "@/components/Banner";
import Divider from "@/components/Divider";
import Footer from "@/parts/Footer";
import FAQSection from "./sections/FAQSection/FAQSection";
import ForDevelopersSection from "./sections/ForDevelopersSection/ForDevelopersSection";
import HeroSection from "./sections/HeroSection";
import UseCasesSection from "./sections/UseCasesSection";

const HomePage = () => {
    return (
        <div className="min-h-screen">
            <HeroSection />

            <Divider />

            {/* HACK: The solution is a bit of a hack, but it’s just a quick implementation for now - we’ll need to improve it later. */}
            <LayoutContainer>
                <div className="border-l border-r border-dashed border-[var(--default-border-color)] h-32"></div>
            </LayoutContainer>

            <Line />

            <UseCasesSection />

            <Divider />

            {/* HACK: The solution is a bit of a hack, but it’s just a quick implementation for now - we’ll need to improve it later. */}
            <LayoutContainer>
                <div className="border-l border-r border-dashed border-[var(--default-border-color)] h-32"></div>
            </LayoutContainer>

            <Line />

            <ForDevelopersSection />

            <Banner />

            <DividerWithPadding />

            <FAQSection />

            <DividerWithPadding />

            <Footer />
        </div>
    );
};

export default HomePage;
