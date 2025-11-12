import { AnimatePresence, motion } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { useReward } from "react-rewards";
import Button from "../ui/Button";
import logoBlue from "@assets/images/logo_blue.svg";
import { DISCORD_INVITE_URL, TURNSTILE_SITE_KEY } from "@/lib/constants";


declare global {
    interface Window {
        turnstile?: {
            render: (
                element: HTMLElement | string,
                options: {
                    sitekey: string;
                    callback?: (token: string) => void;
                    "error-callback"?: () => void;
                    "expired-callback"?: () => void;
                }
            ) => string;
            reset: (widgetId: string) => void;
            remove: (widgetId: string) => void;
        };
    }
}

interface WaitListModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const WaitListModal = ({ isOpen, onClose }: WaitListModalProps) => {
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [confettiPositions, setConfettiPositions] = useState<Array<{ id: string; x: number; y: number; angle: number }>>([]);
    const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
    const turnstileWidgetId = useRef<string | null>(null);
    const turnstileContainerRef = useRef<HTMLDivElement>(null);

    const { reward: reward0 } = useReward("confetti-0", "confetti", {
        lifetime: 250,
        decay: 0.91,
        spread: 120,
        startVelocity: 45,
        elementCount: 120,
        elementSize: 10,
        zIndex: 9999,
    });

    const { reward: reward1 } = useReward("confetti-1", "confetti", {
        lifetime: 250,
        decay: 0.91,
        spread: 120,
        startVelocity: 45,
        elementCount: 120,
        elementSize: 10,
        zIndex: 9999,
    });

    const { reward: reward2 } = useReward("confetti-2", "confetti", {
        lifetime: 250,
        decay: 0.91,
        spread: 120,
        startVelocity: 45,
        elementCount: 120,
        elementSize: 10,
        zIndex: 9999,
    });

    const { reward: reward3 } = useReward("confetti-3", "confetti", {
        lifetime: 250,
        decay: 0.91,
        spread: 120,
        startVelocity: 45,
        elementCount: 120,
        elementSize: 10,
        zIndex: 9999,
    });

    const { reward: reward4 } = useReward("confetti-4", "confetti", {
        lifetime: 250,
        decay: 0.91,
        spread: 120,
        startVelocity: 45,
        elementCount: 120,
        elementSize: 10,
        zIndex: 9999,
    });

    const rewards = [reward0, reward1, reward2, reward3, reward4];

    // Generate random confetti positions with better distribution
    const generateConfettiPositions = () => {
        const count = Math.floor(Math.random() * 2) + 4; // 4-5 sources
        const positions = [];

        // Divide screen into zones to ensure better distribution
        const zones = [
            { xMin: 0, xMax: 33, yMin: 0, yMax: 50 },    // Top-left
            { xMin: 33, xMax: 66, yMin: 0, yMax: 50 },   // Top-center
            { xMin: 66, xMax: 100, yMin: 0, yMax: 50 },  // Top-right
            { xMin: 0, xMax: 50, yMin: 50, yMax: 100 },  // Bottom-left
            { xMin: 50, xMax: 100, yMin: 50, yMax: 100 } // Bottom-right
        ];

        // Shuffle zones and pick random positions from different zones
        const shuffledZones = zones.sort(() => Math.random() - 0.5);

        for (let i = 0; i < count; i++) {
            const zone = shuffledZones[i];
            positions.push({
                id: `confetti-${i}`,
                x: Math.random() * (zone.xMax - zone.xMin) + zone.xMin,
                y: Math.random() * (zone.yMax - zone.yMin) + zone.yMin,
                angle: Math.random() * 360, // random angle
            });
        }

        return positions;
    };

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            // Initialize Turnstile when modal opens
            const initTurnstile = () => {
                if (window.turnstile && turnstileContainerRef.current && !turnstileWidgetId.current) {
                    turnstileWidgetId.current = window.turnstile.render(turnstileContainerRef.current, {
                        sitekey: TURNSTILE_SITE_KEY,
                        callback: (token: string) => {
                            setTurnstileToken(token);
                        },
                        "error-callback": () => {
                            setTurnstileToken(null);
                        },
                        "expired-callback": () => {
                            setTurnstileToken(null);
                        },
                    });
                }
            };

            initTurnstile();

            // If Turnstile script hasn't loaded yet, wait for it
            if (!window.turnstile) {
                const checkTurnstile = setInterval(() => {
                    if (window.turnstile) {
                        clearInterval(checkTurnstile);
                        initTurnstile();
                    }
                }, 100);

                setTimeout(() => clearInterval(checkTurnstile), 5000);
            }
        } else {
            document.body.style.overflow = "unset";
            // Remove Turnstile widget when modal closes
            if (window.turnstile && turnstileWidgetId.current) {
                window.turnstile.remove(turnstileWidgetId.current);
                turnstileWidgetId.current = null;
                setTurnstileToken(null);
            }
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    // Cleanup Turnstile widget on unmount
    useEffect(() => {
        return () => {
            if (window.turnstile && turnstileWidgetId.current) {
                window.turnstile.remove(turnstileWidgetId.current);
                turnstileWidgetId.current = null;
            }
        };
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isSubmitting || !turnstileToken) return;

        // Block the form
        setIsSubmitting(true);

        // TODO: Handle waitlist submission with turnstileToken
        console.log("Submitted email:", email);
        console.log("Turnstile token:", turnstileToken);

        // Generate random confetti positions
        const positions = generateConfettiPositions();
        setConfettiPositions(positions);

        // Trigger confetti animations with random delays
        positions.forEach((_, index) => {
            const delay = Math.random() * 300; // Random delay 0-300ms
            setTimeout(() => {
                rewards[index]();
            }, delay);

            // Second wave
            setTimeout(() => {
                rewards[index]();
            }, delay + 400);

            // Third wave
            setTimeout(() => {
                rewards[index]();
            }, delay + 800);
        });

        // Clear email and close modal after all confetti
        setTimeout(() => {
            setEmail("");
            setIsSubmitting(false);
            setConfettiPositions([]);
            onClose();
        }, 2500);
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

                    {/* Confetti sources - positioned across entire viewport */}
                    {confettiPositions.map((pos) => (
                        <span
                            key={pos.id}
                            id={pos.id}
                            className="fixed pointer-events-none"
                            style={{
                                left: `${pos.x}%`,
                                top: `${pos.y}%`,
                                zIndex: 9999,
                            }}
                        />
                    ))}

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
                            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative"
                            onClick={(e) => e.stopPropagation()}
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

                            {/* Logo */}
                            <div className="mb-6 flex justify-center">
                                <img src={logoBlue} alt="Sapic" className="size-14" />
                            </div>

                            {/* Content */}
                            <h2 className="text-2xl md:text-4xl font-serif font-semibold text-center text-neutral-900 mb-3">
                                Join the waitlist
                            </h2>
                            <p className="text-neutral-600 text-sm md:text-base text-center mb-6">
                                Be the first to know when Sapic launches. Get exclusive early access and special perks.
                            </p>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="email" className="sr-only">
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email"
                                        required
                                        disabled={isSubmitting}
                                        className="w-full px-4 py-2 bg-neutral-50 border border-neutral-200 rounded-lg text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-4 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                    />
                                </div>

                                {/* Turnstile widget */}
                                <div className="flex justify-center">
                                    <div ref={turnstileContainerRef} id="turnstile-widget"></div>
                                </div>

                                <Button
                                    type="submit"
                                    variant="primary"
                                    size="large"
                                    className="w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                                    disabled={isSubmitting || !turnstileToken}
                                >
                                    {isSubmitting ? "Joining..." : "Join Waitlist"}
                                </Button>
                            </form>

                            {/* Divider */}
                            <div className="relative my-6">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-neutral-200"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-white text-neutral-500">or</span>
                                </div>
                            </div>

                            {/* Discord button */}
                            <Button
                                variant="default"
                                size="large"
                                className="flex flex-row items-center gap-2 w-full justify-center group disabled:opacity-50 disabled:cursor-not-allowed"
                                onClick={() => window.open(DISCORD_INVITE_URL, "_blank")}
                                disabled={isSubmitting}
                            >
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 71 55"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="flex-shrink-0"
                                >
                                    <path
                                        d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z"
                                        fill="currentColor"
                                    />
                                </svg>
                                Join our Discord
                            </Button>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};

export default WaitListModal;

