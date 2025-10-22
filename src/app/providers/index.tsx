import { RouterProvider } from "@tanstack/react-router";
import { router } from "@app/router";

const AppProvider = () => {
    return <RouterProvider router={router} />;
};

export default AppProvider;
