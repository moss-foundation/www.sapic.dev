import { createContext } from "react";

export type ConsentStatus = "pending" | "accepted" | "rejected" | "customized";

export interface ConsentPreferences {
    analytics: boolean;
    sessionRecording: boolean;
}

export interface ConsentContextType {
    consentStatus: ConsentStatus;
    consentPreferences: ConsentPreferences;
    hasAnswered: boolean;
    acceptAll: () => void;
    rejectAll: () => void;
    customize: (preferences: ConsentPreferences) => void;
    showBanner: () => void;
}

export const ConsentContext = createContext<ConsentContextType | undefined>(undefined);
