import { BrowserRouter } from "react-router-dom";
import AppLayout from "@app/router/routes";
import { WaitListProvider } from "@/contexts/WaitListContext";
import { PostHogProvider } from "@/contexts/PostHogProvider";
import { useWaitList } from "@/hooks/useWaitList";
import WaitListModal from "@/components/modals/WaitListModal";

const AppProviderContent = () => {
    const { isOpen, closeWaitList } = useWaitList();

    return (
        <>
            <AppLayout />
            <WaitListModal isOpen={isOpen} onClose={closeWaitList} />
        </>
    );
};

const AppProvider = () => {
    return (
        <WaitListProvider>
            <BrowserRouter>
                <PostHogProvider>
                    <AppProviderContent />
                </PostHogProvider>
            </BrowserRouter>
        </WaitListProvider>
    );
};

export default AppProvider;
