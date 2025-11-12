import { BrowserRouter } from "react-router-dom";
import AppLayout from "@app/router/routes";
import { WaitListProvider } from "@/contexts/WaitListContext";
import { useWaitList } from "@/hooks/useWaitList";
import WaitListModal from "@/components/modals/WaitListModal";

const AppProviderContent = () => {
    const { isOpen, closeWaitList } = useWaitList();

    return (
        <>
            <BrowserRouter>
                <AppLayout />
            </BrowserRouter>
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
