import { BrowserRouter } from "react-router-dom";
import AppLayout from "@app/router/routes";
import { WaitListProvider } from "@/contexts/WaitListContext";
import { ConsentProvider } from "@/contexts/consent";
import { PostHogProvider } from "@/contexts/PostHogProvider";
import { useWaitList } from "@/hooks/useWaitList";
import WaitListModal from "@/components/modals/WaitListModal";
import CookieConsent from "@/components/CookieConsent";

const AppProviderContent = () => {
    const { isOpen, closeWaitList } = useWaitList();

    return (
        <>
            <AppLayout />
            <WaitListModal isOpen={isOpen} onClose={closeWaitList} />
            <CookieConsent />
        </>
    );
};

const AppProvider = () => {
    return (
        <ConsentProvider>
            <WaitListProvider>
                <BrowserRouter>
                    <PostHogProvider>
                        <AppProviderContent />
                    </PostHogProvider>
                </BrowserRouter>
            </WaitListProvider>
        </ConsentProvider>
    );
};

export default AppProvider;
