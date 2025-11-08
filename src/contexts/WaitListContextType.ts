import { createContext } from "react";

export interface WaitListContextType {
    isOpen: boolean;
    openWaitList: () => void;
    closeWaitList: () => void;
}

export const WaitListContext = createContext<WaitListContextType | undefined>(undefined);
