import { DECK_LINK } from "@/lib/constants";
import { useState } from "react";

export const DeckPage = () => {
    const [error, setError] = useState(false);

    const getEmbedUrl = () => {
        if (!DECK_LINK) return null;

        const urlObj = new URL(DECK_LINK);
        const hostname = window.location.hostname;

        // Remove existing embed-host and add the correct one
        urlObj.searchParams.delete('embed-host');
        urlObj.searchParams.set('embed-host', hostname === 'localhost' ? 'localhost' : hostname);

        return urlObj.toString();
    };

    const embedUrl = getEmbedUrl();

    return (
        <div className="w-screen relative left-[50%] right-[50%] -mx-[50vw] bg-neutral-50">
            {embedUrl ? (
                <div className="w-full h-full relative">
                    {error && (
                        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-50 bg-yellow-50 border border-yellow-200 rounded-lg p-4 max-w-2xl mx-4">
                            <p className="text-sm text-yellow-800">
                                <strong>Note:</strong> If the presentation doesn't load, try opening it in a new tab or contact support.
                            </p>
                            <a
                                href={embedUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-blue-600 hover:text-blue-800 underline mt-2 inline-block"
                            >
                                Open presentation in new tab
                            </a>
                        </div>
                    )}
                    <div className="w-full h-screen relative overflow-hidden">
                        <iframe
                            style={{ border: "none" }}
                            className="w-full h-full"
                            src={embedUrl}
                            allowFullScreen
                            title="Sapic Deck Presentation"
                            sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-presentation"
                            allow="fullscreen"
                            onError={() => setError(true)}
                            onLoad={() => setError(false)}
                        />
                    </div>
                </div>
            ) : (
                <div className="text-center max-w-md mx-auto px-4 py-20">
                    <h1 className="text-2xl md:text-3xl font-semibold text-neutral-900 mb-4">
                        Deck Not Available
                    </h1>
                    <p className="text-neutral-600">
                        The presentation deck link is not configured.
                    </p>
                </div>
            )}
        </div>
    );
};

