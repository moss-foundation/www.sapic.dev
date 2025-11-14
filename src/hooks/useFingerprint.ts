import { useEffect, useState, useCallback } from "react";
import FingerprintJS from "@fingerprintjs/fingerprintjs";

type Agent = Awaited<ReturnType<typeof FingerprintJS.load>>;

interface UseFingerprintResult {
    fingerprintId: string | null;
    isLoading: boolean;
    error: Error | null;
    getFingerprint: () => Promise<string | null>;
}

export const useFingerprint = (): UseFingerprintResult => {
    const [fingerprintId, setFingerprintId] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);
    const [fpInstance, setFpInstance] = useState<Agent | null>(null);

    useEffect(() => {
        let mounted = true;

        const initFingerprint = async () => {
            try {
                setIsLoading(true);
                const fp = await FingerprintJS.load();
                if (mounted) {
                    setFpInstance(fp);
                    setIsLoading(false);
                }
            } catch (err) {
                if (mounted) {
                    setError(
                        err instanceof Error ? err : new Error("Failed to initialize FingerprintJS")
                    );
                    setIsLoading(false);
                }
            }
        };

        initFingerprint();

        return () => {
            mounted = false;
        };
    }, []);

    const getFingerprint = useCallback(async (): Promise<string | null> => {
        if (!fpInstance) {
            try {
                setIsLoading(true);
                const fp = await FingerprintJS.load();
                setFpInstance(fp);
                const result = await fp.get();
                const id = result.visitorId;
                setFingerprintId(id);
                setIsLoading(false);
                return id;
            } catch (err) {
                setError(err instanceof Error ? err : new Error("Failed to get fingerprint"));
                setIsLoading(false);
                return null;
            }
        }

        try {
            setIsLoading(true);
            const result = await fpInstance.get();
            const id = result.visitorId;
            setFingerprintId(id);
            setIsLoading(false);
            return id;
        } catch (err) {
            setError(err instanceof Error ? err : new Error("Failed to get fingerprint"));
            setIsLoading(false);
            return null;
        }
    }, [fpInstance]);

    return {
        fingerprintId,
        isLoading,
        error,
        getFingerprint,
    };
};
