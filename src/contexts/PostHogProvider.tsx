import { useEffect } from 'react';
import { initPostHog, shutdownPostHog } from '@/lib/posthog';
import { useConsent } from '@/hooks/useConsent';
import { usePageTracking } from '@/hooks/usePageTracking';

interface PostHogProviderProps {
    children: React.ReactNode;
}

/**
 * Provider that manages PostHog initialization and tracking
 * based on user consent preferences
 */
export const PostHogProvider = ({ children }: PostHogProviderProps) => {
    const { consentPreferences, hasAnswered } = useConsent();

    // Initialize or shutdown PostHog based on consent
    useEffect(() => {
        if (!hasAnswered) {
            // User hasn't made a choice yet, don't initialize
            return;
        }

        if (consentPreferences.analytics) {
            // User consented, initialize PostHog
            initPostHog({
                analytics: consentPreferences.analytics,
                sessionRecording: consentPreferences.sessionRecording,
            });
        } else {
            // User rejected, shutdown PostHog if it was initialized
            shutdownPostHog();
        }
    }, [hasAnswered, consentPreferences]);

    // Track page views, time on page, scroll depth, and manage session recording
    usePageTracking({
        enabled: hasAnswered && consentPreferences.analytics,
        sessionRecordingEnabled: consentPreferences.sessionRecording,
    });

    return <>{children}</>;
};

export default PostHogProvider;

