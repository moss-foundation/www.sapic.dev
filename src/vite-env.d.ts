/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_PUBLIC_POSTHOG_KEY: string;
    readonly VITE_PUBLIC_POSTHOG_HOST: string;
    readonly VITE_BETTERSTACK_API_TOKEN: string;
    readonly VITE_BETTERSTACK_STATUS_PAGE_ID: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
