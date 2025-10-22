import { RouterProvider } from "@tanstack/react-router";
import { router } from "../router";

const AppProvider = () => {
    return <RouterProvider router={router} />;
}

export default AppProvider;

