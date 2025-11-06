import { LayoutContainer } from "@/components"
import HeroSection from "./sections/HeroSection";
import FeaturesSection from "./sections/FeaturesSection";

import UseCasesSection from "./sections/UseCasesSection";
import ForDevelopersSection from "./sections/ForDevelopersSection";
import FaqSection from "./sections/FaqSection";
import Banner from "@/components/Banner";


const HomePage = () => {
    return (
        <div className="min-h-screen flex flex-col gap-40">
            <HeroSection />
            <FeaturesSection />
            {/* <IntegrationsSection /> */}
            <UseCasesSection />
            <LayoutContainer>
                <ForDevelopersSection />
                <Banner />
                <FaqSection />
            </LayoutContainer>
        </div>
    );
};

export default HomePage;
