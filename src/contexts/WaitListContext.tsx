import { useState } from "react";
import type { ReactNode } from "react";
import { WaitListContext } from "./WaitListContextType";

interface WaitListProviderProps {
    children: ReactNode;
}

export const WaitListProvider = ({ children }: WaitListProviderProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const openWaitList = () => setIsOpen(true);
    const closeWaitList = () => setIsOpen(false);

    return (
        <WaitListContext.Provider value={{ isOpen, openWaitList, closeWaitList }}>
            {children}
        </WaitListContext.Provider>
    );
};

