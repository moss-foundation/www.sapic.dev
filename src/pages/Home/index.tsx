import HeroSection from "./sections/HeroSection";
import FeaturesSection from "./sections/FeaturesSection";

import UseCasesSection from "./sections/UseCasesSection";
import ForDevelopersSection from "./sections/ForDevelopersSection";
import FaqSection from "./sections/FaqSection";
import Line from "@/components/Line";
import JoinCommunitySection from "./sections/JoinCommunitySection";
import CallToActionSection from "./sections/CallToAction";
import HowDoesThisWorkSection from "./sections/HowDoesThisWorkSection";



const HomePage = () => {
    return (
        <div className="min-h-screen flex flex-col gap-10 mb-16 lg:mb-32">
            <HeroSection />
            <Line />
            <HowDoesThisWorkSection />
            <Line />
            <FeaturesSection />
            <Line />
            <UseCasesSection />
            <Line />
            <JoinCommunitySection />
            <Line />
            <ForDevelopersSection />
            <Line />
            <FaqSection />
            <Line />
            <CallToActionSection />
        </div>
    );
};

export default HomePage;
