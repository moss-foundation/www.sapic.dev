import { FAQPage } from "@/pages/FAQ/FAQPage";
import { FeaturesPage } from "@/pages/Features/FeaturesPage";
import { UseCasesPage } from "@/pages/UseCases/UseCasesPage";
import { TermsOfUsePage } from "@/pages/TermsOfUse/TermsOfUsePage";
import { PrivacyPolicyPage } from "@/pages/PrivacyPolicy/PrivacyPolicyPage";
import { RoadmapPage } from "@/pages/Roadmap/RoadmapPage";
import { DeckPage } from "@/pages/Deck/DeckPage";
import Footer from "@/parts/Footer";
import HomePage from "@pages/Home";
import Header from "@parts/Header";
import { Routes, Route } from "react-router-dom";

const AppLayout = () => {
    return (
        <>
            <Header />
            <div id="root-content">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/features" element={<FeaturesPage />} />
                    <Route path="/use-cases" element={<UseCasesPage />} />
                    <Route path="/faq" element={<FAQPage />} />
                    <Route path="/terms-of-use" element={<TermsOfUsePage />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                    <Route path="/roadmap" element={<RoadmapPage />} />
                    <Route path="/deck" element={<DeckPage />} />
                </Routes>
            </div>
            <Footer />
        </>
    );
};

export default AppLayout;
