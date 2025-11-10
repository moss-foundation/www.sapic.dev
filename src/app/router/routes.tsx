import { FAQPage } from "@/pages/FAQ/FAQPage";
import { FeaturesPage } from "@/pages/Features/FeaturesPage";
import { UseCasesPage } from "@/pages/UseCases/UseCasesPage";
import { TermsOfUsePage } from "@/pages/TermsOfUse/TermsOfUsePage";
import Footer from "@/parts/Footer";
import HomePage from "@pages/Home";
import Header from "@parts/Header";
import { createRootRoute, createRoute, createRouter, Outlet } from "@tanstack/react-router";

const rootRoute = createRootRoute({
    component: () => (
        <>
            <Header />
            <div id="root-content">
                <Outlet />
            </div>
            <Footer />
        </>
    ),
});

const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/",
    component: HomePage,
});

const featuresRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/features",
    component: FeaturesPage,
});

const useCasesRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/use-cases",
    component: UseCasesPage,
});

const faqRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/faq",
    component: FAQPage,
});

const termsOfUseRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/terms-of-use",
    component: TermsOfUsePage,
});

const routeTree = rootRoute.addChildren([indexRoute, featuresRoute, useCasesRoute, faqRoute, termsOfUseRoute]);
export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
    interface Register {
        router: typeof router;
    }
}
