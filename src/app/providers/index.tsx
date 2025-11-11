import { RouterProvider } from "@tanstack/react-router";
import { router } from "@app/router";
import { WaitListProvider } from "@/contexts/WaitListContext";
import { useWaitList } from "@/hooks/useWaitList";
import WaitListModal from "@/components/modals/WaitListModal";

const AppProviderContent = () => {
    const { isOpen, closeWaitList } = useWaitList();

    return (
        <>
            <RouterProvider router={router} />
            <WaitListModal isOpen={isOpen} onClose={closeWaitList} />
        </>
    );
};

const AppProvider = () => {
    return (
        <WaitListProvider>
            <AppProviderContent />
        </WaitListProvider>
    );
};

export default AppProvider;
