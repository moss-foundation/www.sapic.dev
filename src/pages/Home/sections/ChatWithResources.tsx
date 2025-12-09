import { useState, useEffect } from "react";
import { Button, LayoutContainer } from "@/components";
import FadeInElement from "@/components/FadeInElement";
import { ArrowHeadBottom } from "@/icons/ArrowHeadBottom";
import { useWaitList } from "@/hooks/useWaitList";
import { motion, AnimatePresence } from "motion/react";

const resourceTypes = [
    "endpoints",
    "lambdas",
    "databases",
    "queues",
    "topics",
    "buckets",
];

interface PromptExample {
    text: string;
    category: string;
}

const promptExamples = {
    row1: [
        { text: "Show me all Lambda functions in production", category: "DevOps" },
        { text: "List DynamoDB tables with their capacity", category: "Exploring" },
        { text: "Get all SQS queues and their configurations", category: "Analyzing" },
        { text: "Show SNS topics and their subscriptions", category: "Exploring" },
        { text: "Find all S3 buckets with versioning enabled", category: "Security" },
        { text: "List API Gateway endpoints and their stages", category: "DevOps" },
    ],
    row2: [
        { text: "Show me recent CloudWatch logs for user-service", category: "Debugging" },
        { text: "Get IAM roles with admin permissions", category: "Security" },
        { text: "List all running EC2 instances", category: "Monitoring" },
        { text: "Show me RDS databases and their sizes", category: "Analyzing" },
        { text: "Find all Lambda functions using Node.js 18", category: "Exploring" },
        { text: "Get all resources tagged as 'production'", category: "DevOps" },
    ],
};

const ChatWithResources = () => {
    const [inputText, setInputText] = useState("");
    const [selectedTags] = useState(["user", "components"]);
    const [currentResourceIndex, setCurrentResourceIndex] = useState(0);
    const { openWaitList } = useWaitList();

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentResourceIndex((prev) => (prev + 1) % resourceTypes.length);
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    const handleTryItOut = () => {
        if (inputText.trim()) {
            openWaitList();
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            if (inputText.trim()) {
                openWaitList();
            }
        }
    };

    const handlePromptClick = (prompt: PromptExample) => {
        setInputText(prompt.text);
    };

    const isInputEmpty = !inputText.trim();

    return (
        <LayoutContainer >
            <div className="flex flex-col items-center justify-center gap-8 md:gap-10 lg:gap-12">
                <FadeInElement>
                    <div className="flex flex-col items-start mx-auto gap-y-1.5">
                        <h2 className="max-w-full lg:max-w-xl text-3xl md:text-4xl lg:text-5xl font-semibold font-serif !leading-[1.2] tracking-tight text-neutral-900 text-center">
                            Chat with your{" "}
                            <span className="inline-block relative align-bottom overflow-hidden text-blue-4" style={{ minWidth: 'clamp(200px, 20vw, 350px)', height: '1.2em' }}>
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={currentResourceIndex}
                                        initial={{ y: 30, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: -30, opacity: 0 }}
                                        transition={{
                                            duration: 0.4,
                                            ease: [0.25, 0.1, 0.25, 1]
                                        }}
                                        className="absolute left-1/2 top-0 -translate-x-1/2 whitespace-nowrap"
                                    >
                                        {resourceTypes[currentResourceIndex]}
                                    </motion.span>
                                </AnimatePresence>
                            </span>
                        </h2>
                        <p className="mt-4 md:mt-6 w-full text-pretty text-sm md:text-base leading-normal text-neutral-600 text-center">
                            Now your cloud resources can speak. Are you listening?
                        </p>
                    </div>
                </FadeInElement>

                <FadeInElement delay={0.1} className="w-full">
                    <div className="w-full lg:w-2/3 mx-auto">
                        <motion.div
                            className="relative rounded-2xl p-[1px]"
                            style={{
                                background: 'linear-gradient(90deg, #f5f8fe 0%, #3574f0 50%, #f5f8fe 100%)',
                                backgroundSize: '200% 100%',
                            }}
                            animate={{
                                backgroundPosition: ['0% 0%', '200% 0%'],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: 'linear',
                            }}
                        >
                            <div className="relative bg-white rounded-2xl overflow-hidden">
                                <div className="relative z-10 p-2.5">
                                    <div className="flex flex-wrap gap-1 mb-3">
                                        <div className="inline-flex items-center gap-1.5 py-0.5 px-1.5 bg-neutral-100 border border-neutral-200 rounded-lg text-sm text-neutral-500">
                                            @
                                        </div>
                                        {selectedTags.map((tag, index) => (
                                            <div
                                                key={index}
                                                className="inline-flex items-center gap-1.5 px-1.5 bg-neutral-100 border border-neutral-200 rounded-lg text-[13px] font-mono text-neutral-700"
                                            >
                                                {tag}
                                            </div>
                                        ))}
                                    </div>
                                    <textarea
                                        value={inputText}
                                        onChange={(e) => setInputText(e.target.value)}
                                        onKeyDown={handleKeyDown}
                                        className="w-full text-base text-neutral-700 bg-transparent border-none outline-none resize-none placeholder:text-neutral-400"
                                        placeholder="Design, improve, create anything..."
                                        rows={2}
                                        style={{ minHeight: '60px' }}
                                    />
                                </div>


                                <div className="relative z-10 border-t border-neutral-200 bg-neutral-50 px-2.5 py-2.5">
                                    <div className="flex items-center justify-between gap-4">
                                        {/* Model Selector */}
                                        <div className="flex items-center gap-1.5 cursor-not-allowed opacity-50">
                                            <p className="text-sm text-neutral-900">gpt-5</p>
                                            <ArrowHeadBottom className="flex-shrink-0 pointer-events-none size-4.5" />
                                        </div>

                                        {/* Right Side - Ask Button and Actions */}
                                        <div className="flex items-center gap-2">
                                            <Button variant="primary" size="small" onClick={handleTryItOut} disabled={isInputEmpty}>
                                                Try it out
                                            </Button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </FadeInElement>

                {/* Prompt Examples - Two scrolling rows */}
                <FadeInElement delay={0.2} className="w-full mt-6 md:mt-10">
                    <div className="w-full space-y-4">
                        <div className="relative w-full overflow-hidden">
                            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                            <motion.div
                                className="flex gap-3"
                                animate={{
                                    x: [-1920, 0],
                                }}
                                transition={{
                                    x: {
                                        repeat: Infinity,
                                        repeatType: "loop",
                                        duration: 120,
                                        ease: "linear",
                                    },
                                }}
                            >
                                {[...promptExamples.row1, ...promptExamples.row1, ...promptExamples.row1, ...promptExamples.row1].map((prompt, index) => (
                                    <button
                                        key={`row1-${index}`}
                                        onClick={() => handlePromptClick(prompt)}
                                        className="flex-shrink-0 px-3 py-2.5 bg-neutral-100 hover:bg-neutral-200 border border-neutral-200 hover:border-neutral-300 rounded-lg transition-all duration-200 whitespace-nowrap cursor-pointer"
                                    >
                                        <div className="flex flex-col items-start gap-0.5">
                                            <span className="text-xs text-neutral-500">{prompt.category}</span>
                                            <span className="text-sm text-neutral-800">{prompt.text}</span>
                                        </div>
                                    </button>
                                ))}
                            </motion.div>
                        </div>

                        {/* Second row - Moving left */}
                        <div className="relative w-full overflow-hidden">
                            {/* White fade shadows on edges */}
                            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                            <motion.div
                                className="flex gap-3"
                                animate={{
                                    x: [0, -1920],
                                }}
                                transition={{
                                    x: {
                                        repeat: Infinity,
                                        repeatType: "loop",
                                        duration: 120,
                                        ease: "linear",
                                    },
                                }}
                            >
                                {[...promptExamples.row2, ...promptExamples.row2, ...promptExamples.row2, ...promptExamples.row2].map((prompt, index) => (
                                    <button
                                        key={`row2-${index}`}
                                        onClick={() => handlePromptClick(prompt)}
                                        className="flex-shrink-0 px-3 py-2.5 bg-neutral-100 hover:bg-neutral-200 border border-neutral-200 hover:border-neutral-300 rounded-lg transition-all duration-200 whitespace-nowrap cursor-pointer"
                                    >
                                        <div className="flex flex-col items-start gap-0.5">
                                            <span className="text-xs text-neutral-500">{prompt.category}</span>
                                            <span className="text-sm text-neutral-800">{prompt.text}</span>
                                        </div>
                                    </button>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </FadeInElement>
            </div>
        </LayoutContainer>
    );
};

export default ChatWithResources;