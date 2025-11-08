import { useContext } from "react";
import { WaitListContext } from "@/contexts/WaitListContextType";

export const useWaitList = () => {
    const context = useContext(WaitListContext);
    if (!context) {
        throw new Error("useWaitList must be used within WaitListProvider");
    }
    return context;
};
