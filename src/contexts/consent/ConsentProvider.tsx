import { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { ConsentContext, type ConsentStatus, type ConsentPreferences } from './ConsentContext';

const CONSENT_STORAGE_KEY = 'cookie_consent';
const CONSENT_PREFERENCES_KEY = 'cookie_consent_preferences';

export const ConsentProvider = ({ children }: { children: ReactNode }) => {
    const [consentStatus, setConsentStatus] = useState<ConsentStatus>('pending');
    const [consentPreferences, setConsentPreferences] = useState<ConsentPreferences>({
        analytics: false,
        sessionRecording: false,
    });
    const [hasAnswered, setHasAnswered] = useState(false);

    // Load consent from localStorage on mount
    useEffect(() => {
        const savedConsent = localStorage.getItem(CONSENT_STORAGE_KEY);
        const savedPreferences = localStorage.getItem(CONSENT_PREFERENCES_KEY);

        if (savedConsent && savedPreferences) {
            setConsentStatus(savedConsent as ConsentStatus);
            setConsentPreferences(JSON.parse(savedPreferences));
            setHasAnswered(true);
        }
    }, []);

    const saveConsent = (status: ConsentStatus, preferences: ConsentPreferences) => {
        setConsentStatus(status);
        setConsentPreferences(preferences);
        setHasAnswered(true);
        localStorage.setItem(CONSENT_STORAGE_KEY, status);
        localStorage.setItem(CONSENT_PREFERENCES_KEY, JSON.stringify(preferences));
    };

    const acceptAll = () => {
        saveConsent('accepted', {
            analytics: true,
            sessionRecording: true,
        });
    };

    const rejectAll = () => {
        saveConsent('rejected', {
            analytics: false,
            sessionRecording: false,
        });
    };

    const customize = (preferences: ConsentPreferences) => {
        saveConsent('customized', preferences);
    };

    const showBanner = () => {
        setHasAnswered(false);
        setConsentStatus('pending');
    };

    return (
        <ConsentContext.Provider
            value={{
                consentStatus,
                consentPreferences,
                hasAnswered,
                acceptAll,
                rejectAll,
                customize,
                showBanner,
            }}
        >
            {children}
        </ConsentContext.Provider>
    );
};

