import posthog from "posthog-js";

let posthogInitialized = false;

export const initPostHog = () => {
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
        autocapture: true,
        disable_session_recording: false,
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

export { posthog };
export default posthog;
