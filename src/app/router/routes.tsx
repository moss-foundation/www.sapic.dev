import { createRootRoute, createRoute, createRouter, Outlet } from "@tanstack/react-router";
import { Header } from "../../widgets/Header";
import HomePage from "../../pages/Home";

const rootRoute = createRootRoute({
    component: () => (
        <>
            <Header />
            <div id="root-content">
                <Outlet />
            </div>
        </>
    ),
});

const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/",
    component: HomePage,
});

const routeTree = rootRoute.addChildren([indexRoute]);
export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
    interface Register {
        router: typeof router;
    }
}
