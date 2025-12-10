import { useState } from "react";
import type { ReactNode } from "react";
import { WaitListContext } from "./WaitListContextType";
import { posthog } from "@/lib/posthog";
import { getCommonEventProperties } from "@/lib/analytics";

interface WaitListProviderProps {
    children: ReactNode;
}

export const WaitListProvider = ({ children }: WaitListProviderProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const openWaitList = (source: string) => {
        setIsOpen(true);

        if (posthog?.capture) {
            posthog.capture("waitlist_opened", {
                source,
                ...getCommonEventProperties(),
            });
        }
    };

    const closeWaitList = () => setIsOpen(false);

    return (
        <WaitListContext.Provider value={{ isOpen, openWaitList, closeWaitList }}>
            {children}
        </WaitListContext.Provider>
    );
};




