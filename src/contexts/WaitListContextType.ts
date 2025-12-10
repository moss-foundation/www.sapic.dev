import { createContext } from "react";

export interface WaitListContextType {
    isOpen: boolean;
    openWaitList: (source: string) => void;
    closeWaitList: () => void;
}

export const WaitListContext = createContext<WaitListContextType | undefined>(undefined);
