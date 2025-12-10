import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import Button from "../ui/Button";
import ToggleSwitch from "../ui/ToggleSwitch";
import { useConsent } from "@/hooks/useConsent";

interface CookieCustomizeModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const CookieCustomizeModal = ({ isOpen, onClose }: CookieCustomizeModalProps) => {
    const { customize, rejectAll, consentPreferences } = useConsent();
    const [customPreferences, setCustomPreferences] = useState({
        analytics: consentPreferences.analytics,
        sessionRecording: consentPreferences.sessionRecording,
    });

    const handleSave = () => {
        customize(customPreferences);
        onClose();
    };

    const handleRejectAll = () => {
        rejectAll();
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                        onClick={onClose}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 relative"
                            onClick={e => e.stopPropagation()}
                        >
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-600 transition-colors cursor-pointer"
                                aria-label="Close modal"
                            >
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M18 6L6 18M6 6L18 18"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>

                            {/* Content */}
                            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-neutral-900 mb-3 text-center">
                                Customize Cookie Preferences
                            </h2>
                            <p className="text-neutral-600 text-sm md:text-base mb-8 text-center max-w-md mx-auto">
                                Choose which cookies you'd like to allow. You can change these settings at any time.
                            </p>

                            {/* Cookie Settings */}
                            <div className="space-y-2.5 mb-8">
                                <div className="p-4 border border-neutral-200 rounded-lg">
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1 mr-4">
                                            <h3 className="font-medium text-base mb-1 text-neutral-900">
                                                Analytics Cookies
                                            </h3>
                                            <p className="text-neutral-600 text-sm">
                                                Help us understand how visitors interact with our website by collecting and reporting information anonymously.
                                            </p>
                                        </div>
                                        <ToggleSwitch
                                            checked={customPreferences.analytics}
                                            onCheckedChange={(checked) =>
                                                setCustomPreferences({
                                                    ...customPreferences,
                                                    analytics: checked,
                                                })
                                            }
                                        />
                                    </div>
                                </div>

                                <div className="p-4 border border-neutral-200 rounded-lg">
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1 mr-4">
                                            <h3 className="font-medium text-base mb-1 text-neutral-900">
                                                Session Recording
                                            </h3>
                                            <p className="text-neutral-600 text-sm">
                                                Record your session to help us improve user experience. All sensitive data is masked.
                                            </p>
                                        </div>
                                        <ToggleSwitch
                                            checked={customPreferences.sessionRecording}
                                            onCheckedChange={(checked) =>
                                                setCustomPreferences({
                                                    ...customPreferences,
                                                    sessionRecording: checked,
                                                })
                                            }
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-row gap-2">
                                <div className="w-full">
                                    <Button
                                        variant="default"
                                        size="large"
                                        onClick={handleRejectAll}
                                    >
                                        Reject All
                                    </Button>
                                </div>
                                <div className="flex gap-2 justify-end">
                                    <Button
                                        variant="default"
                                        size="large"
                                        onClick={onClose}
                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                        variant="primary"
                                        size="large"
                                        onClick={handleSave}
                                    >
                                        Save
                                    </Button>
                                </div>
                            </div>

                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};

export default CookieCustomizeModal;

