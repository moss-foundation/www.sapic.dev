/**
 * Tracking configuration for PostHog analytics
 * Add new pages here to enable tracking for them
 */

export interface TrackedPageConfig {
    path: string;
    name: string;
    enableSessionRecording?: boolean;
    enableScrollTracking?: boolean;
}

export const TRACKED_PAGES: TrackedPageConfig[] = [
    {
        path: "/",
        name: "home",
        enableSessionRecording: true,
        enableScrollTracking: true,
    },
    {
        path: "/deck",
        name: "deck",
        enableSessionRecording: true,
        enableScrollTracking: true,
    },
];

/**
 * Get tracking configuration for a given pathname
 */
export const getPageTrackingConfig = (pathname: string): TrackedPageConfig | null => {
    return TRACKED_PAGES.find(page => page.path === pathname) || null;
};

/**
 * Check if a page should be tracked
 */
export const isTrackedPage = (pathname: string): boolean => {
    return TRACKED_PAGES.some(page => page.path === pathname);
};

/**
 * Get page name for analytics
 */
export const getPageName = (pathname: string): string => {
    const config = getPageTrackingConfig(pathname);
    return config?.name || pathname.replace("/", "") || "unknown";
};

/**
 * Check if session recording should be enabled for a page
 */
export const shouldRecordSession = (pathname: string): boolean => {
    const config = getPageTrackingConfig(pathname);
    return config?.enableSessionRecording ?? false;
};

/**
 * Check if scroll tracking should be enabled for a page
 */
export const shouldTrackScroll = (pathname: string): boolean => {
    const config = getPageTrackingConfig(pathname);
    return config?.enableScrollTracking ?? false;
};
