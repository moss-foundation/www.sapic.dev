import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useConsent } from '@/hooks/useConsent';
import Button from './ui/Button';
import CookieCustomizeModal from './modals/CookieCustomizeModal';

export const CookieConsent = () => {
    const { hasAnswered, acceptAll } = useConsent();
    const [showCustomize, setShowCustomize] = useState(false);

    if (hasAnswered) {
        return null;
    }

    return (
        <>
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    className="fixed left-4 md:left-8 bottom-4 md:bottom-8 z-50 max-w-md"
                >
                    <div className="bg-white rounded-xl shadow-2xl p-5 border border-neutral-200">
                        <h2 className="text-base font-medium text-neutral-900 mb-1.5">
                            We value your privacy
                        </h2>
                        <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                            We use cookies to enhance your browsing experience and analyze our traffic.
                            By clicking "Accept All", you consent to our use of cookies.
                        </p>

                        <div className="flex flex-row gap-2">
                            <Button
                                variant="primary"
                                size="medium"
                                onClick={acceptAll}
                                className="w-full justify-center"
                            >
                                Accept All
                            </Button>
                            <Button
                                variant="default"
                                size="medium"
                                onClick={() => setShowCustomize(true)}
                                className="w-full justify-center"
                            >
                                Customize
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            <CookieCustomizeModal
                isOpen={showCustomize}
                onClose={() => setShowCustomize(false)}
            />
        </>
    );
};

export default CookieConsent;

