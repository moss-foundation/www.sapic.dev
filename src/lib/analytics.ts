import { posthog } from "./posthog";
import { DISCORD_INVITE_URL } from "./constants";

export const getCommonEventProperties = () => {
    const isLocalhost = window.location.hostname === "localhost";

    return isLocalhost
        ? {
              internal: true,
              environment: "local",
          }
        : {};
};

export const handleDiscordClick = (source: string) => {
    if (posthog?.capture) {
        posthog.capture("discord_join_clicked", {
            source,
            ...getCommonEventProperties(),
        });
    }

    window.open(DISCORD_INVITE_URL, "_blank");
};
