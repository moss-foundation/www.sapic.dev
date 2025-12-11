import { useEffect, useState } from "react";

export interface StatusPageData {
    status: "operational" | "degraded" | "partial_outage" | "major_outage" | "under_maintenance";
    message?: string;
}

interface BetterStackResponse {
    data: {
        id: string;
        type: string;
        attributes: {
            aggregate_state: string;
            // Add other fields if needed
        };
    };
}

const STATUS_MAP: Record<string, StatusPageData["status"]> = {
    operational: "operational",
    degraded: "degraded",
    partial_outage: "partial_outage",
    major_outage: "major_outage",
    under_maintenance: "under_maintenance",
};

export const useStatusPage = () => {
    const [status, setStatus] = useState<StatusPageData>({
        status: "operational",
        message: "All systems operational",
    });
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchStatus = async () => {
            const apiToken = import.meta.env.VITE_BETTERSTACK_API_TOKEN;
            const statusPageId = import.meta.env.VITE_BETTERSTACK_STATUS_PAGE_ID;

            if (!apiToken || !statusPageId) {
                console.warn("Better Stack credentials not configured");
                setIsLoading(false);
                return;
            }

            try {
                const response = await fetch(
                    `https://uptime.betterstack.com/api/v2/status-pages/${statusPageId}`,
                    {
                        headers: {
                            "Authorization": `Bearer ${apiToken}`,
                            "Content-Type": "application/json",
                        },
                    }
                );

                if (!response.ok) {
                    throw new Error(`Failed to fetch status: ${response.status}`);
                }

                const data: BetterStackResponse = await response.json();
                const aggregateState = data.data.attributes.aggregate_state;
                const mappedStatus = STATUS_MAP[aggregateState] || "operational";

                setStatus({
                    status: mappedStatus,
                    message: getStatusMessage(mappedStatus),
                });
                setError(null);
            } catch (err) {
                console.error("Error fetching status page:", err);
                setError(err instanceof Error ? err.message : "Unknown error");
                // Keep default operational status on error
            } finally {
                setIsLoading(false);
            }
        };

        fetchStatus();

        // Refresh status every 5 minutes
        const interval = setInterval(fetchStatus, 5 * 60 * 1000);

        return () => clearInterval(interval);
    }, []);

    return { status, isLoading, error };
};

function getStatusMessage(status: StatusPageData["status"]): string {
    switch (status) {
        case "operational":
            return "All systems operational";
        case "degraded":
            return "Degraded performance";
        case "partial_outage":
            return "Partial outage";
        case "major_outage":
            return "Major outage";
        case "under_maintenance":
            return "Under maintenance";
        default:
            return "Status unknown";
    }
}
