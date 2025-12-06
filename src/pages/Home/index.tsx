import HeroSection from "./sections/HeroSection";
import FeaturesSection from "./sections/FeaturesSection";
import DemoScreensSection from "./sections/DemoScreensSection";
import ForDevelopersSection from "./sections/ForDevelopersSection";
import FaqSection from "./sections/FaqSection";
import Line from "@/components/decorations/Line";
import JoinCommunitySection from "./sections/JoinCommunitySection";
import CallToActionSection from "./sections/CallToAction";
import HowItWorksSection from "./sections/HowItWorksSection";
import { useEffect } from "react";
import { handleHashNavigation } from "@/lib/scrollToSection";

const HomePage = () => {
    useEffect(() => {
        handleHashNavigation();

        const handleHashChange = () => {
            handleHashNavigation();
        };

        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    return (
        <div className="min-h-screen flex flex-col gap-10 mb-16 lg:mb-32">
            <section id="home" className="scroll-mt-20">
                <HeroSection />
            </section>

            <section id="demo" className="scroll-mt-20">
                <DemoScreensSection />
            </section>

            <Line />

            <section id="features" className="scroll-mt-20">
                <FeaturesSection />
            </section>

            <Line />

            <section id="how-it-works" className="scroll-mt-20">
                <HowItWorksSection />
            </section>
            <Line />
            <section id="community" className="scroll-mt-20">
                <JoinCommunitySection />
            </section>
            <Line />
            <section id="for-developers" className="scroll-mt-20">
                <ForDevelopersSection />
            </section>
            <Line />
            <section id="faq" className="scroll-mt-20">
                <FaqSection />
            </section>
            <Line />
            <section id="get-started" className="scroll-mt-20">
                <CallToActionSection />
            </section>
        </div>
    );
};

export default HomePage;
