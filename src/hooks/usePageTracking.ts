import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { posthog } from "@/lib/posthog";
import { getCommonEventProperties } from "@/lib/analytics";
import { isTrackedPage, getPageName, shouldRecordSession, shouldTrackScroll } from "@/lib/tracking";

interface UsePageTrackingOptions {
    enabled: boolean;
    sessionRecordingEnabled: boolean;
}

/**
 * Hook to track page views, time on page, and scroll depth
 */
export const usePageTracking = ({ enabled, sessionRecordingEnabled }: UsePageTrackingOptions) => {
    const location = useLocation();
    const maxScrollDepthRef = useRef(0);

    // Session recording control
    useEffect(() => {
        if (!enabled || !sessionRecordingEnabled || !posthog) {
            return;
        }

        const shouldRecord =
            isTrackedPage(location.pathname) && shouldRecordSession(location.pathname);

        if (shouldRecord) {
            posthog.startSessionRecording?.();
        } else {
            posthog.stopSessionRecording?.();
        }
    }, [location.pathname, enabled, sessionRecordingEnabled]);

    // Pageview and time on page tracking
    useEffect(() => {
        if (!enabled || !posthog?.capture) {
            return;
        }

        const shouldTrack = isTrackedPage(location.pathname);
        if (!shouldTrack) return;

        const pageName = getPageName(location.pathname);
        const startTime = Date.now();
        maxScrollDepthRef.current = 0;

        // Track pageview
        posthog.capture("$pageview", {
            path: location.pathname,
            page: pageName,
            ...getCommonEventProperties(),
        });

        // Track time on page when leaving
        return () => {
            const timeOnPage = Date.now() - startTime;
            posthog.capture("page_time", {
                path: location.pathname,
                page: pageName,
                time_seconds: Math.round(timeOnPage / 1000),
                max_scroll_depth: maxScrollDepthRef.current,
                ...getCommonEventProperties(),
            });
        };
    }, [location.pathname, enabled]);

    // Scroll depth tracking
    useEffect(() => {
        if (!enabled || !posthog) {
            return;
        }

        const shouldTrack =
            isTrackedPage(location.pathname) && shouldTrackScroll(location.pathname);
        if (!shouldTrack) return;

        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollTop = window.scrollY || document.documentElement.scrollTop;

            const scrollDepth = Math.round(((scrollTop + windowHeight) / documentHeight) * 100);

            if (scrollDepth > maxScrollDepthRef.current) {
                maxScrollDepthRef.current = scrollDepth;
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [location.pathname, enabled]);
};
