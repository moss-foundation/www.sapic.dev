import Button from "@/components/ui/Button";
import LayoutContainer from "@/components/containers/LayoutContainer";
import { motion } from "motion/react";
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
    text,
    delay = 0,
    delta = 0.08,
    className = ""
}: {
    text: string;
    delay?: number;
    delta?: number;
    className?: string;
}) => {
    // Split by line breaks first to preserve structure
    const lines = text.split('\n').map(line => line.trim());
    let wordIndex = 0;

    return (
        <span className={className}>
            {lines.map((line, lineIndex) => (
                <span key={lineIndex} className="block">
                    {line.split(" ").map((word, index) => {
                        const currentDelay = delay + wordIndex * delta;
                        wordIndex++;
                        return (
                            <motion.span
                                key={`${lineIndex}-${index}`}
                                className="inline-block"
                                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                transition={{
                                    duration: 0.6,
                                    delay: currentDelay,
                                    ease: [0.25, 0.1, 0.25, 1]
                                }}
                            >
                                {word}
                                {index < line.split(" ").length - 1 && "\u00A0"}
                            </motion.span>
                        );
                    })}
                </span>
            ))}
        </span>
    );
};

const HeroSection = () => {
    const { openWaitList: openWaitList } = useWaitList();

    return (

        <LayoutContainer className="relative w-full pt-28 lg:pt-42 mb-10 xl:mb-28">
            <div className="h-full flex flex-col relative z-10">
                <div className="flex flex-col gap-4 md:gap-10 relative" style={{ padding: '2px' }}>
                    <motion.div
                        className="flex flex-col items-center gap-4 md:gap-5"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >


                        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-serif font-semibold text-neutral-900 leading-tight text-center max-w-full">
                            <AnimatedText
                                text={`Unified AI-Native Resource Console`}
                                delay={0.2}
                                delta={0.08}
                            />
                        </h1>

                        <motion.p
                            className="mt-2 md:mt-4 max-w-full text-pretty text-base leading-relaxed text-gray-600 text-center mx-auto md:px-10 xl:px-20"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
                        >
                            With our AI-Native Resource Console, you can create and chat with your APIs, queues, databases, and cloud services.
                            Run actions, trigger functions, inspect events, and generate tests or mocks using natural language.
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
                                onClick={openWaitList}
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
                                                className="size-8 md:size-10 object-contain grayscale transition-all duration-700 group-hover:grayscale-0"
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


                    {/* <motion.div
                                className="flex flex-col gap-1 md:gap-2"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 1.1, ease: "easeOut" }}
                            >
                                <div className="hidden lg:flex mt-4 md:mt-6">
                                    <div className="grid grid-cols-2 gap-4 md:flex md:flex-row md:flex-wrap md:gap-6 lg:gap-10 w-full md:w-auto">
                                        <div className="flex flex-row items-center gap-1 md:gap-1.5">
                                            <svg height="1em" width="1em" className="h-3.5 w-3.5 md:h-4 md:w-4 text-neutral-400 flex-shrink-0" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                                                <title>badge 13</title>
                                                <g fill="currentColor">
                                                    <path
                                                        d="m11.15,16.127l5.397-7.987c.112-.166-.007-.39-.207-.39h-4.779l.846-5.707c.037-.252-.293-.381-.436-.169l-5.397,7.987c-.112.166.007.39.207.39h4.779l-.846,5.707c-.037.252.293.381.436.169Z"
                                                        fill="currentColor" opacity=".3" strokeWidth="0"></path>
                                                    <path
                                                        d="m11.15,16.127l5.397-7.987c.112-.166-.007-.39-.207-.39h-4.779l.846-5.707c.037-.252-.293-.381-.436-.169l-5.397,7.987c-.112.166.007.39.207.39h4.779l-.846,5.707c-.037.252.293.381.436.169Z"
                                                        fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                                                    <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" x1=".75"
                                                        x2="4" y1="9" y2="9"></line>
                                                    <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                                                        x1="3.25" x2="5.25" y1="5.75" y2="5.75"></line>
                                                    <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                                                        x1="3.25" x2="5.25" y1="12.25" y2="12.25"></line>
                                                </g>
                                            </svg>
                                            <p className="text-xs md:text-sm text-neutral-500">30-second setup</p>
                                        </div>
                                        <div className="flex flex-row items-center gap-1 md:gap-1.5">
                                            <svg height="1em" width="1em" className="h-3.5 w-3.5 md:h-4 md:w-4 text-neutral-400 flex-shrink-0" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                                                <title>badge 13</title>
                                                <g fill="currentColor">
                                                    <path
                                                        d="M16.75 9C16.75 10.7951 15.3622 12.25 13.65 12.25C10.0333 12.25 7.9667 5.75 4.35 5.75C2.6378 5.75 1.25 7.2049 1.25 9C1.25 10.7951 2.6378 12.25 4.35 12.25C7.9667 12.25 10.0333 5.75 13.65 5.75C15.3622 5.75 16.75 7.2049 16.75 9Z"
                                                        fill="currentColor" fillOpacity="0.3" stroke="none"></path>
                                                    <path
                                                        d="M6.907 6.8364C6.1229 6.1881 5.2887 5.75 4.35 5.75C2.6378 5.75 1.25 7.205 1.25 9C1.25 10.795 2.6378 12.25 4.35 12.25C7.9667 12.25 10.0333 5.75 13.65 5.75C15.3622 5.75 16.75 7.205 16.75 9C16.75 10.795 15.3622 12.25 13.65 12.25C12.7113 12.25 11.877 11.8119 11.093 11.1636"
                                                        fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                                                    <path d="M4.35004 12.25C7.96674 12.25 10.0333 5.75 13.65 5.75" fill="none" stroke="currentColor"
                                                        strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                                                </g>
                                            </svg>
                                            <p className="text-xs md:text-sm text-neutral-500">30-second setup</p>
                                        </div>
                                        <div className="flex flex-row items-center gap-1 md:gap-1.5">
                                            <svg height="1em" width="1em" className="h-3.5 w-3.5 md:h-4 md:w-4 text-neutral-400 flex-shrink-0" viewBox="0 0 18 18"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <title>badge 13</title>
                                                <g fill="currentColor">
                                                    <path
                                                        d="M15.75 14.25C15.75 15.355 14.855 16.25 13.75 16.25H4.25C3.145 16.25 2.25 15.355 2.25 14.25V7.25C2.25 6.145 3.145 5.25 4.25 5.25H13.75C14.855 5.25 15.75 6.145 15.75 7.25V14.25Z"
                                                        fill="currentColor" fillOpacity="0.3" stroke="none"></path>
                                                    <path d="M9 2.25V5.25" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                                        strokeWidth="1"></path>
                                                    <path
                                                        d="M15.75 14.25C15.75 15.355 14.855 16.25 13.75 16.25H4.25C3.145 16.25 2.25 15.355 2.25 14.25V7.25C2.25 6.145 3.145 5.25 4.25 5.25H13.75C14.855 5.25 15.75 6.145 15.75 7.25V14.25Z"
                                                        fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                                                    <path d="M6 11C6.552 11 7 10.552 7 10C7 9.448 6.552 9 6 9C5.448 9 5 9.448 5 10C5 10.552 5.448 11 6 11Z"
                                                        fill="currentColor" stroke="none"></path>
                                                    <path
                                                        d="M12 11C12.552 11 13 10.552 13 10C13 9.448 12.552 9 12 9C11.448 9 11 9.448 11 10C11 10.552 11.448 11 12 11Z"
                                                        fill="currentColor" stroke="none"></path>
                                                    <path d="M2.25 10.75H1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                                        strokeWidth="1"></path>
                                                    <path d="M15.75 10.75H17" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                                        strokeWidth="1"></path>
                                                    <path
                                                        d="M9 3.25C9.897 3.25 10.625 2.5224 10.625 1.625C10.625 0.7276 9.897 0 9 0C8.103 0 7.375 0.7276 7.375 1.625C7.375 2.5224 8.103 3.25 9 3.25Z"
                                                        fill="currentColor" stroke="none"></path>
                                                    <path
                                                        d="M7.83327 11.5H10.1666C10.4886 11.5 10.7499 11.7613 10.7499 12.0833C10.7499 13.0493 9.96588 13.8333 8.99988 13.8333C8.03388 13.8333 7.24988 13.0493 7.24988 12.0833C7.24988 11.7613 7.51127 11.5 7.83327 11.5Z"
                                                        fill="currentColor" stroke="none"></path>
                                                </g>
                                            </svg>
                                            <p className="text-xs md:text-sm text-neutral-500">30-second setup</p>
                                        </div>
                                        <div className="flex flex-row items-center gap-1 md:gap-1.5">
                                            <svg height="1em" width="1em" className="h-3.5 w-3.5 md:h-4 md:w-4 text-neutral-400 flex-shrink-0" viewBox="0 0 18 18"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <title>badge 13</title>
                                                <g fill="currentColor">
                                                    <path
                                                        d="M13.1707 10.0588C16.6759 6.381 16.2472 2.0942 16.2108 1.7892C15.9049 1.7528 11.619 1.3241 7.94118 4.8293C5.71338 6.9526 4.96349 9.3233 4.74579 10.1164L7.88368 13.2543C8.67678 13.0366 11.0474 12.2865 13.1707 10.0588Z"
                                                        fill="currentColor" fillOpacity="0.3" stroke="none"></path>
                                                    <path
                                                        d="M11.75 7.5C12.44 7.5 13 6.9404 13 6.25C13 5.5596 12.44 5 11.75 5C11.06 5 10.5 5.5596 10.5 6.25C10.5 6.9404 11.06 7.5 11.75 7.5Z"
                                                        fill="currentColor" stroke="none"></path>
                                                    <path
                                                        d="M2.85699 12.4692C2.20309 12.7981 1.75 13.468 1.75 14.25V16.25H3.75C4.5317 16.25 5.2016 15.7971 5.5305 15.1433"
                                                        fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                                                    <path
                                                        d="M13.1707 10.0588C16.6759 6.381 16.2472 2.0942 16.2108 1.7892C15.9049 1.7528 11.619 1.3241 7.94118 4.8293C5.71338 6.9526 4.96349 9.3233 4.74579 10.1164L7.88368 13.2543C8.67678 13.0366 11.0474 12.2865 13.1707 10.0588Z"
                                                        fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                                                    <path
                                                        d="M8.26601 4.5279L6.892 4.2819C5.637 4.0569 4.737 3.959 4 5L1.75 8.2699C1.75 8.2699 3.3528 7.6568 5.5921 7.9669"
                                                        fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                                                    <path
                                                        d="M10.033 12.4078C10.3431 14.647 9.72998 16.2499 9.72998 16.2499L13 14C14.041 13.263 13.943 12.3629 13.718 11.1079L13.472 9.7339"
                                                        fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                                                </g>
                                            </svg>
                                            <p className="text-xs md:text-sm text-neutral-500">30-second setup</p>
                                        </div>
                                    </div>
                                </div>

                                <motion.div
                                    className="relative rounded-xl md:rounded-2xl p-0.5 md:p-1 mt-6 overflow-hidden"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 1.3, ease: "easeOut" }}
                                >
                                    <div className="relative z-10 pt-20 px-10 rounded-xl bg-neutral-100">
                                        <img
                                            src={screen}
                                            alt="Sapic Console Screenshot"
                                            className="w-full h-auto rounded-lg md:rounded-xl border-8 border-neutral-200/50"
                                        />
                                    </div>

                                    <div className="absolute bottom-0 left-0 right-0 h-32 md:h-40 bg-gradient-to-t from-white via-white/80 to-transparent z-20 pointer-events-none rounded-b-lg md:rounded-b-xl" />
                                </motion.div>

                            </motion.div> */}
                </div>
            </div>
        </LayoutContainer>
    );
};

export default HeroSection;
