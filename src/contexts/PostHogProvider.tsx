import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { initPostHog, posthog, shutdownPostHog } from '@/lib/posthog';
import { getCommonEventProperties } from '@/lib/analytics';
import { useConsent } from '@/hooks/useConsent';

interface PostHogProviderProps {
    children: React.ReactNode;
}

export const PostHogProvider = ({ children }: PostHogProviderProps) => {
    const location = useLocation();
    const maxScrollDepthRef = useRef(0);
    const { consentPreferences, hasAnswered } = useConsent();

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

    // Control session recording only for home page
    useEffect(() => {
        if (!hasAnswered || !consentPreferences.sessionRecording) {
            return;
        }

        const isHomePage = location.pathname === '/';

        if (posthog) {
            if (isHomePage) {
                posthog.startSessionRecording?.();
            } else {
                posthog.stopSessionRecording?.();
            }
        }
    }, [location.pathname, hasAnswered, consentPreferences.sessionRecording]);

    // Tracking pageview and time on page
    useEffect(() => {
        if (!hasAnswered || !consentPreferences.analytics) {
            return;
        }

        const isHomePage = location.pathname === '/';
        const startTime = Date.now();
        maxScrollDepthRef.current = 0;

        if (isHomePage && posthog?.capture) {
            posthog.capture('$pageview', {
                path: location.pathname,
                page: 'home',
                ...getCommonEventProperties(),
            });
        }

        // When leaving the page, send the time spent
        return () => {
            if (!isHomePage || !posthog?.capture) return;

            const timeOnPage = Date.now() - startTime;
            posthog.capture('page_time', {
                path: location.pathname,
                page: 'home',
                time_seconds: Math.round(timeOnPage / 1000),
                max_scroll_depth: maxScrollDepthRef.current,
                ...getCommonEventProperties(),
            });
        };
    }, [location.pathname, hasAnswered, consentPreferences.analytics]);

    // Tracking scroll depth
    useEffect(() => {
        if (!hasAnswered || !consentPreferences.analytics) {
            return;
        }

        const isHomePage = location.pathname === '/';
        if (!isHomePage) return;

        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollTop = window.scrollY || document.documentElement.scrollTop;

            const scrollDepth = Math.round(((scrollTop + windowHeight) / documentHeight) * 100);

            if (scrollDepth > maxScrollDepthRef.current) {
                maxScrollDepthRef.current = scrollDepth;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [location.pathname, hasAnswered, consentPreferences.analytics]);

    return <>{children}</>;
};

export default PostHogProvider;

