import { DividerWithPadding } from "@/components";
import Banner from "@/components/Banner";
import FAQSection from "./sections/FAQSection/FAQSection";
import ForDevelopersSection from "./sections/ForDevelopersSection/ForDevelopersSection";
import HeroSection from "./sections/HeroSection";
import UseCasesSection from "./sections/UseCasesSection";

const HomePage = () => {
    return (
        <div className="min-h-screen">
            <HeroSection />
            <DividerWithPadding />

            <UseCasesSection />
            <DividerWithPadding />

            <ForDevelopersSection />
            <DividerWithPadding />

            <Banner />
            <DividerWithPadding />

            <FAQSection />
            <DividerWithPadding />
        </div>
    );
};

export default HomePage;
