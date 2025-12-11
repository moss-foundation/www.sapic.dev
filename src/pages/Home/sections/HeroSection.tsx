import React, { useState, useEffect } from "react";
import Button from "@/components/ui/Button";
import LayoutContainer from "@/components/containers/LayoutContainer";
import { motion, AnimatePresence } from "motion/react";
import { useWaitList } from "@/hooks/useWaitList";

import amazonDynamoDB from "@assets/images/amazon/AmazonDynamoDB.webp";
import amazonLambda from "@assets/images/amazon/AmazonLambdas.webp";
import amazonS3 from "@assets/images/amazon/AmazonS3.webp";
import amazonSNS from "@assets/images/amazon/AmazonSNS.webp";
import amazonSQS from "@assets/images/amazon/AmazonSQS.webp";
import azureBusRelay from "@assets/images/azure/AzureBusRelay.webp";
import azureCosmosDB from "@assets/images/azure/AzureCosmosDB.webp";
import azureFunctions from "@assets/images/azure/AzureFunctions.webp";
import azureServiceBus from "@assets/images/azure/AzureServiceBus.webp";
import googleStorage from "@assets/images/google/GoogleStorage.webp";
import { Underlined } from "@/components";

interface ResourceProps {
    brand: string;
    product: string;
    imgSrc: string;
}

const resources: ResourceProps[] = [
    { brand: "Amazon", product: "SQS", imgSrc: amazonSQS },
    { brand: "Amazon", product: "Lambda", imgSrc: amazonLambda },
    { brand: "Amazon", product: "S3", imgSrc: amazonS3 },
    { brand: "Amazon", product: "DynamoDB", imgSrc: amazonDynamoDB },
    { brand: "Amazon", product: "SNS", imgSrc: amazonSNS },
    { brand: "Azure", product: "Functions", imgSrc: azureFunctions },
    { brand: "Azure", product: "Service Bus", imgSrc: azureServiceBus },
    { brand: "Azure", product: "CosmosDB", imgSrc: azureCosmosDB },
    { brand: "Azure", product: "Bus Relay", imgSrc: azureBusRelay },
    { brand: "Google", product: "Storage", imgSrc: googleStorage },
];

// Helper function to split text into animated words
const AnimatedText = ({
    children,
    delay = 0,
    delta = 0.08,
    className = ""
}: {
    children: React.ReactNode;
    delay?: number;
    delta?: number;
    className?: string;
}) => {
    let wordIndex = 0;

    const processNode = (node: React.ReactNode, currentDelay: number): React.ReactNode => {
        // Handle null, undefined, boolean
        if (node == null || typeof node === 'boolean') {
            return null;
        }

        // Handle strings and numbers
        if (typeof node === 'string' || typeof node === 'number') {
            const text = String(node);
            const words = text.split(' ');

            return words.map((word, index) => {
                const wordDelay = currentDelay + wordIndex * delta;
                wordIndex++;
                return (
                    <motion.span
                        key={`word-${wordIndex}-${index}`}
                        className="inline-block"
                        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{
                            duration: 0.6,
                            delay: wordDelay,
                            ease: [0.25, 0.1, 0.25, 1]
                        }}
                    >
                        {word}
                        {index < words.length - 1 && "\u00A0"}
                    </motion.span>
                );
            });
        }

        // Handle React elements
        if (React.isValidElement(node)) {
            const element = node as React.ReactElement<{ children?: React.ReactNode }>;

            // If it's a <br /> or similar self-closing element, return as is
            if (element.type === 'br' || (typeof element.type === 'string' && element.type.toLowerCase() === 'br')) {
                return React.cloneElement(element, { key: `br-${wordIndex}` });
            }

            // For other elements, recursively process their children
            const elementChildren = element.props?.children;
            const processedChildren = React.Children.map(elementChildren, (child) =>
                processNode(child, currentDelay)
            );

            return React.cloneElement(element, {
                key: `element-${wordIndex}`,
                children: processedChildren
            });
        }

        // Handle arrays
        if (Array.isArray(node)) {
            return node.map((item, index) => (
                <React.Fragment key={`array-${index}`}>
                    {processNode(item, currentDelay)}
                </React.Fragment>
            ));
        }

        return null;
    };

    return (
        <span className={className}>
            {React.Children.map(children, (child) => processNode(child, delay))}
        </span>
    );
};

interface AudienceType {
    text: string;
    duration: number; // in milliseconds
}

const audienceTypes: AudienceType[] = [
    { text: "Developers", duration: 1500 },
    { text: "Testers", duration: 1500 },
    { text: "DevOps Engineers", duration: 1500 },
    { text: "Architects", duration: 1500 },
    { text: "Platform Engineers", duration: 1500 },
    { text: "Backend Teams", duration: 1500 },
    { text: "You", duration: 3000 },
];

const HeroSection = () => {
    const { openWaitList: openWaitList } = useWaitList();
    const [currentAudienceIndex, setCurrentAudienceIndex] = useState(0);
    const [animationComplete, setAnimationComplete] = useState(false);

    // Wait for initial animation to complete before starting word rotation
    useEffect(() => {
        const initialDelay = setTimeout(() => {
            setAnimationComplete(true);
        }, 250 + audienceTypes[0].duration); // animation time + first word display time

        return () => clearTimeout(initialDelay);
    }, []);

    useEffect(() => {
        if (!animationComplete) return;

        const scheduleNext = () => {
            const currentDuration = audienceTypes[currentAudienceIndex].duration;

            const timeout = setTimeout(() => {
                setCurrentAudienceIndex((prev) => (prev + 1) % audienceTypes.length);
            }, currentDuration);

            return timeout;
        };

        const timeout = scheduleNext();
        return () => clearTimeout(timeout);
    }, [currentAudienceIndex, animationComplete]);

    return (

        <LayoutContainer className="relative w-full pt-28 mb-10 xl:mb-28">
            <div className="h-full flex flex-col relative z-10">
                <div className="flex flex-col gap-4 md:gap-10 relative" style={{ padding: '2px' }}>
                    <motion.div
                        className="flex flex-col items-center gap-4 md:gap-5"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >


                        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-serif font-semibold text-neutral-900 leading-tight text-center max-w-full">
                            <AnimatedText delay={0.2} delta={0.08}>
                                Unified AI-Native<br />Resource Console For
                            </AnimatedText>
                            <motion.span
                                className="inline-flex justify-center items-center relative overflow-visible text-blue-4"
                                style={{ minWidth: 'clamp(350px, 50vw, 900px)', minHeight: '1.6em' }}
                                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                transition={{
                                    duration: 0.6,
                                    delay: 1,
                                    ease: [0.25, 0.1, 0.25, 1]
                                }}
                            >
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={audienceTypes[currentAudienceIndex].text}
                                        initial={{ y: 30, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: -30, opacity: 0 }}
                                        transition={{
                                            duration: 0.4,
                                            ease: [0.25, 0.1, 0.25, 1]
                                        }}
                                        className="whitespace-nowrap"
                                    >
                                        {audienceTypes[currentAudienceIndex].text}
                                    </motion.span>
                                </AnimatePresence>
                            </motion.span>
                        </h1>

                        <motion.p
                            className="mt-2 md:mt-4 max-w-full text-pretty text-base leading-relaxed text-gray-600 text-center mx-auto md:px-10 xl:px-20"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
                        >
                            With our AI-Native Resource Console, you can create and chat with your APIs, queues, databases, and other cloud services.
                            Run <Underlined text="actions" color="blue" style="solid" tooltip="For example, calling and inspecting HTTP endpoints, Lambdas, connecting to the database, etc." />,
                            inspect <Underlined text="events" color="purple" style="solid" tooltip="Just like in the API client you can subscribe to WS events, you can also subscribe to SQS, SNS, Pub/Sub, etc." />,
                            and generate integration tests or mocks using natural language.<br />
                            AI & Git native with batteries included.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.9, ease: "easeOut" }}
                        >
                            <Button
                                variant="primary"
                                size="large"
                                className="self-center w-full sm:w-auto mt-4"
                                onClick={() => openWaitList('hero_section')}
                            >
                                Sign up for Sapic Beta
                            </Button>
                        </motion.div>


                        <motion.div
                            className="relative w-full overflow-hidden mt-8 md:mt-10 group"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 1.1, ease: "easeOut" }}
                        >
                            <div className="relative flex items-center h-16">
                                <motion.div
                                    className="flex gap-8 md:gap-12"
                                    animate={{
                                        x: [0, -100 * resources.length],
                                    }}
                                    transition={{
                                        x: {
                                            repeat: Infinity,
                                            repeatType: "loop",
                                            duration: 40,
                                            ease: "linear",
                                        },
                                    }}
                                >
                                    {[...resources, ...resources, ...resources].map((resource, index) => (
                                        <div
                                            key={`${resource.brand}-${resource.product}-${index}`}
                                            className="flex flex-row items-center gap-3 flex-shrink-0"
                                        >
                                            <img
                                                src={resource.imgSrc}
                                                alt={`${resource.brand} ${resource.product}`}
                                                className="size-8 md:size-10 object-contain md:grayscale transition-all duration-700 md:group-hover:grayscale-0"
                                            />
                                            <div className="flex flex-col items-start">
                                                <span className="text-xs text-neutral-500 whitespace-nowrap">
                                                    {resource.brand}
                                                </span>
                                                <span className="text-sm md:text-base text-neutral-700 font-semibold whitespace-nowrap">
                                                    {resource.product}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </motion.div>
                            </div>

                            {/* Left fade gradient */}
                            <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />

                            {/* Right fade gradient */}
                            <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </LayoutContainer>
    );
};

export default HeroSection;
