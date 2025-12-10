import posthog from "posthog-js";

let posthogInitialized = false;

interface PostHogInitOptions {
    analytics?: boolean;
    sessionRecording?: boolean;
}

export const initPostHog = (options: PostHogInitOptions = {}) => {
    const { analytics = false, sessionRecording = false } = options;

    // If user hasn't consented to analytics, don't initialize
    if (!analytics) {
        console.log("PostHog: User has not consented to analytics");
        return null;
    }

    if (posthogInitialized) return posthog;

    const apiKey = import.meta.env.VITE_PUBLIC_POSTHOG_KEY;
    const apiHost = import.meta.env.VITE_PUBLIC_POSTHOG_HOST;

    if (!apiKey || !apiHost) {
        console.warn(
            "PostHog is not configured. Missing VITE_PUBLIC_POSTHOG_KEY or VITE_PUBLIC_POSTHOG_HOST"
        );
        return null;
    }

    posthog.init(apiKey, {
        api_host: apiHost,
        person_profiles: "identified_only",
        capture_pageview: false,
        capture_pageleave: false,
        autocapture: analytics,
        disable_session_recording: !sessionRecording,
        persistence: "localStorage",
        mask_all_element_attributes: false,
        session_recording: {
            maskAllInputs: true,
            maskTextSelector: "[data-private]",
        },
        loaded: () => {
            if (import.meta.env.DEV) {
                console.log("PostHog initialized successfully");
                posthog.debug();
            }
        },
    });

    posthogInitialized = true;
    return posthog;
};

export const shutdownPostHog = () => {
    if (posthogInitialized && posthog) {
        // Opt out of capturing
        posthog.opt_out_capturing();

        // Stop session recording if active
        posthog.stopSessionRecording?.();

        // Clear PostHog data from localStorage
        Object.keys(localStorage).forEach(key => {
            if (key.startsWith("ph_")) {
                localStorage.removeItem(key);
            }
        });

        posthogInitialized = false;
        console.log("PostHog: Shut down and data cleared");
    }
};

export const resetPostHog = () => {
    shutdownPostHog();
};

export { posthog };
export default posthog;
