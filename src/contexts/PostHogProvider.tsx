import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { initPostHog, posthog } from '@/lib/posthog';
import { getCommonEventProperties } from '@/lib/analytics';

interface PostHogProviderProps {
    children: React.ReactNode;
}

export const PostHogProvider = ({ children }: PostHogProviderProps) => {
    const location = useLocation();
    const maxScrollDepthRef = useRef(0);

    useEffect(() => {
        initPostHog();
    }, []);

    // Control session recording only for home page
    useEffect(() => {
        const isHomePage = location.pathname === '/';

        if (posthog) {
            if (isHomePage) {
                posthog.startSessionRecording?.();
            } else {
                posthog.stopSessionRecording?.();
            }
        }
    }, [location.pathname]);

    // Tracking pageview and time on page
    useEffect(() => {
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
    }, [location.pathname]);

    // Tracking scroll depth
    useEffect(() => {
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
    }, [location.pathname]);

    return <>{children}</>;
};

export default PostHogProvider;

