import { AnimatePresence, motion } from "motion/react";
import React, { useEffect, useState, useRef } from "react";
import LayoutContainer from "@/components/containers/LayoutContainer";
import FadeInElement from "@/components/FadeInElement";

import awsLogo from "@assets/images/aws_logo.png";
import azureLogo from "@assets/images/azure_logo.png";
import googleLogo from "@assets/images/google_cloud_logo.png";



import amazonDynamoDB from "@assets/images/amazon/AmazonDynamoDB.webp";
import amazonLambda from "@assets/images/amazon/AmazonLambdas.webp";
import amazonS3 from "@assets/images/amazon/AmazonS3.webp";
import amazonSNS from "@assets/images/amazon/AmazonSNS.webp";
import amazonSQS from "@assets/images/amazon/AmazonSQS.webp";

import azureBusRelay from "@assets/images/azure/AzureBusRelay.webp";
import azureCosmosDB from "@assets/images/azure/AzureCosmosDB.webp";
import azureFunctions from "@assets/images/azure/AzureFunctions.webp";
import azureServiceBus from "@assets/images/azure/AzureServiceBus.webp";

import googleCloudTasks from "@assets/images/google/GoogleCloudTasks.webp";
import googleFirestore from "@assets/images/google/GoogleFirestore.webp";
import googleFunctions from "@assets/images/google/GoogleFunctions.webp";
import googlePubSub from "@assets/images/google/GooglePubSub.webp";
import googleStorage from "@assets/images/google/GoogleStorage.webp";
import HttpIcon from "@/icons/Http";
import gRPCIcon from "@/icons/gRPC";
import WebSocketIcon from "@/icons/WebSocket";
import GraphQLIcon from "@/icons/GraphQL";
import SocketIOIcon from "@/icons/SocketIO";
import SQLiteIcon from "@/icons/SQLite";
import { Tag } from "@/components";

type IconComponent = ({ className }: { className?: string }) => React.ReactElement;

interface PartnersProps {
    frontCard: {
        label: string;
        imgSrc?: string;
        iconComponent?: IconComponent;
        description: string;
    };
    cards: CardProps[];
}

export interface CardProps {
    brand: string;
    product: string;
    imgSrc?: string;
    iconComponent?: IconComponent;
}


const brandCards: PartnersProps[] = [
    {
        frontCard: {
            label: "Built-in",
            iconComponent: ({ className }: { className?: string }) => (
                <svg className={`${className} p-0.5`} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0H5V5H0V0Z" fill="#276EF0" />
                    <path opacity="0.6" d="M10 0H15V5H10V0Z" fill="#276EF0" />
                    <path opacity="0.6" d="M5 5H10V10H5V5Z" fill="#276EF0" />
                    <path opacity="0.45" d="M10 5H15V10H10V5Z" fill="#276EF0" />
                    <path opacity="0.3" d="M15 5H20V10H15V5Z" fill="#276EF0" />
                    <path opacity="0.6" d="M0 10H5V15H0V10Z" fill="#276EF0" />
                    <path opacity="0.45" d="M5 10H10V15H5V10Z" fill="#276EF0" />
                    <path opacity="0.3" d="M10 10H15V15H10V10Z" fill="#276EF0" />
                    <path opacity="0.15" d="M15 10H20V15H15V10Z" fill="#276EF0" />
                    <path opacity="0.3" d="M5 15H10V20H5V15Z" fill="#276EF0" />
                    <path opacity="0.15" d="M10 15H15V20H10V15Z" fill="#276EF0" />
                </svg>
            ),
            description:
                "Create production-like behavior from schemas, components, and rules. Cover success paths, errors, delays, and events with one click.",
        },
        cards: [
            { brand: "Built-in", product: "HTTP", iconComponent: HttpIcon },
            { brand: "Built-in", product: "gRPC", iconComponent: gRPCIcon },
            { brand: "Built-in", product: "WebSocket", iconComponent: WebSocketIcon },
            { brand: "Built-in", product: "GraphQL", iconComponent: GraphQLIcon },
            { brand: "Built-in", product: "Socket.IO", iconComponent: SocketIOIcon },
            { brand: "Built-in", product: "SQLite", iconComponent: SQLiteIcon },
        ],
    },
    {
        frontCard: {
            label: "Amazon Web Services",
            imgSrc: awsLogo,
            description:
                "Create production-like behavior from schemas, components, and rules. Cover success paths, errors, delays, and events with one click.",
        },
        cards: [
            { brand: "Amazon", product: "Lambda", imgSrc: amazonLambda },
            { brand: "Amazon", product: "SQS", imgSrc: amazonSQS },
            { brand: "Amazon", product: "S3", imgSrc: amazonS3 },
            { brand: "Amazon", product: "DynamoDB", imgSrc: amazonDynamoDB },
            { brand: "Amazon", product: "SNS", imgSrc: amazonSNS },
        ],
    },

    {
        frontCard: {
            label: "Google",
            imgSrc: googleLogo,
            description:
                "Create production-like behavior from schemas, components, and rules. Cover success paths, errors, delays, and events with one click.",
        },
        cards: [
            { brand: "Google", product: "Pub/Sub", imgSrc: googlePubSub },
            { brand: "Google", product: "Cloud Tasks", imgSrc: googleCloudTasks },
            { brand: "Google", product: "Functions", imgSrc: googleFunctions },
            { brand: "Google", product: "Firestore", imgSrc: googleFirestore },
            { brand: "Google", product: "Storage", imgSrc: googleStorage },
        ],
    },

    {
        frontCard: {
            label: "Azure",
            imgSrc: azureLogo,
            description:
                "Create production-like behavior from schemas, components, and rules. Cover success paths, errors, delays, and events with one click.",
        },
        cards: [
            { brand: "Azure", product: "Bus Relay", imgSrc: azureBusRelay },
            { brand: "Azure", product: "Functions", imgSrc: azureFunctions },
            { brand: "Azure", product: "Service Bus", imgSrc: azureServiceBus },
            { brand: "Azure", product: "CosmosDB", imgSrc: azureCosmosDB },
        ],
    },
];


const ForDevelopersSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const [changeCounter, setChangeCounter] = useState(0);
    const cardsDuration = 15 * 1000;
    const startTimeRef = useRef(Date.now());

    // Calculate the maximum number of cards across all brands
    const maxCardsCount = Math.max(...brandCards.map(brand => brand.cards.length));
    const cols = 5;
    // Round up to nearest multiple of columns to keep grid balanced
    const maxCards = Math.ceil(maxCardsCount / cols) * cols;

    const handleTabClick = (index: number) => {
        setChangeCounter(prev => prev + 1);
        setCurrentIndex(index);
        setProgress(0);
        startTimeRef.current = Date.now();
    };

    useEffect(() => {
        // Reset the timer when the index changes
        startTimeRef.current = Date.now();
        setProgress(0);

        const progressInterval = setInterval(() => {
            const elapsed = Date.now() - startTimeRef.current;
            const newProgress = Math.min((elapsed / cardsDuration) * 100, 100);
            setProgress(newProgress);

            if (elapsed >= cardsDuration) {
                setChangeCounter(prev => prev + 1);
                setCurrentIndex((prev) => (prev + 1) % brandCards.length);
            }
        }, 50);

        return () => {
            clearInterval(progressInterval);
        };
    }, [currentIndex, cardsDuration]);

    const currentBrand = brandCards[currentIndex];

    // Pad the cards array to maxCards to maintain consistent grid height
    const cards: (typeof currentBrand.cards[0] | null)[] = [...currentBrand.cards];
    while (cards.length < maxCards) {
        cards.push(null);
    }

    return (
        <LayoutContainer>
            <FadeInElement>
                <div className="flex flex-col items-start gap-y-1.5 mb-6 md:mb-8 lg:mb-12">
                    <h2 className="max-w-full lg:max-w-xl text-3xl md:text-4xl lg:text-5xl font-semibold font-serif !leading-[1.2] tracking-tight text-neutral-900">
                        Everything your team needs and more
                    </h2>
                    <p className="mt-4 md:mt-5 lg:mt-6 max-w-full md:max-w-2xl text-pretty text-sm md:text-base leading-relaxed text-neutral-600">
                        Backends aren't one thing anymore - they're dozens of moving parts. <span className="font-medium text-neutral-900">Our console unifies them into a single, AI-native hub where you can explore, change, and ship with confidence.</span>
                    </p>
                </div>
            </FadeInElement>

            {/* Unified Tabs with Flex Wrap */}
            <FadeInElement delay={0.1}>
                <div className="max-w-full lg:max-w-7xl mx-auto mt-10 md:mt-14">
                    <div className="flex flex-row flex-wrap gap-3 md:gap-4">
                        {brandCards.map((brand, index) => (
                            <button
                                key={index}
                                onClick={() => handleTabClick(index)}
                                className="relative transition-colors"
                            >
                                <div className={`group flex flex-row items-center cursor-pointer gap-2.5 px-3 py-1 rounded-lg border transition-all duration-300 ${currentIndex === index
                                    ? "text-neutral-900 bg-neutral-100 border-neutral-200"
                                    : "text-neutral-500 hover:bg-neutral-100 border-transparent"
                                    }`}>
                                    {brand.frontCard.iconComponent ? (
                                        <brand.frontCard.iconComponent className={`size-6 flex-shrink-0 transition-colors ${currentIndex === index ? "" : "group-hover:text-neutral-900"}`} />
                                    ) : (
                                        <img
                                            src={brand.frontCard.imgSrc}
                                            alt={brand.frontCard.label}
                                            className="size-6 object-contain flex-shrink-0"
                                        />
                                    )}
                                    <p
                                        className={`text-sm transition-colors whitespace-nowrap ${currentIndex === index
                                            ? "text-neutral-900"
                                            : "text-neutral-500 group-hover:text-neutral-900"
                                            }`}
                                    >
                                        {brand.frontCard.label}
                                    </p>
                                </div>

                                {/* Animated border progress - gradient stroke on top of gray border */}
                                {currentIndex === index && (
                                    <svg
                                        className="absolute inset-0 pointer-events-none"
                                        width="100%"
                                        height="100%"
                                    >
                                        <defs>
                                            <linearGradient id={`borderGradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" stopColor="#d4e2ff" />
                                                <stop offset="100%" stopColor="#3574f0" />
                                            </linearGradient>
                                        </defs>
                                        <motion.rect
                                            x="0.5"
                                            y="0.5"
                                            style={{ width: 'calc(100% - 1px)', height: 'calc(100% - 1px)' }}
                                            rx="8"
                                            fill="none"
                                            stroke={`url(#borderGradient-${index})`}
                                            strokeWidth="1"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            pathLength="100"
                                            strokeDasharray="100"
                                            initial={{ strokeDashoffset: 100 }}
                                            animate={{ strokeDashoffset: 100 - progress }}
                                            transition={{ duration: 0.05, ease: "linear" }}
                                        />
                                    </svg>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </FadeInElement>

            <FadeInElement delay={0.2}>
                <div className="max-w-full lg:max-w-7xl mx-auto my-6">
                    <div className="w-full">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-2 gap-x-8 lg:gap-x-8 lg:gap-y-8">
                            {cards.slice(0, maxCards).map((card, index) => (
                                <div key={`container-${index}`} className="relative overflow-hidden h-[80px] md:h-[90px] lg:h-[100px]">
                                    <AnimatePresence initial={false}>
                                        {card && (
                                            <motion.div
                                                key={`${changeCounter}-${card.product}`}
                                                initial={{ y: "150%", opacity: 0 }}
                                                animate={{ y: "0%", opacity: 1 }}
                                                exit={{ y: "-150%", opacity: 0 }}
                                                transition={{
                                                    duration: 1.2,
                                                    delay: index * 0.16,
                                                    ease: [0.25, 0.1, 0.25, 1]
                                                }}
                                                className="flex flex-row items-center gap-3 md:gap-4 lg:gap-5 absolute inset-0"
                                            >
                                                {card.iconComponent ? (
                                                    <card.iconComponent className="size-8 md:size-9 lg:size-10 flex-shrink-0 text-neutral-700" />
                                                ) : (
                                                    <img
                                                        src={card.imgSrc}
                                                        alt={`${card.brand} ${card.product}`}
                                                        className="size-8 md:size-9 lg:size-10 object-contain flex-shrink-0"
                                                    />
                                                )}
                                                <div className="flex flex-col items-start gap-0.5">
                                                    <p className="text-xs text-neutral-500 whitespace-nowrap">{card.brand}</p>
                                                    <p className="md:text-base text-neutral-700 font-semibold whitespace-nowrap">
                                                        {card.product}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </FadeInElement>
            <div className="mt-6 lg:mt-10 flex max-w-full md:max-w-2xl gap-3 md:gap-4 lg:pr-10">
                <div className="w-1 flex-shrink-0 rounded-full bg-blue-4"></div>
                <p className="text-pretty text-sm text-neutral-500">
                    Not all resource types come bundled with the app, only the basic ones (
                    <Tag label="HTTP" />,
                    <Tag label="gRPC" />,
                    <Tag label="GraphQL" />,
                    <Tag label="WebSocket" />,
                    <Tag label="SQLite" variant="pending" tooltip={{ text: "Coming soon", position: "bottom" }} />,
                    etc.
                    ). You can install the cloud provider resources you need yourself through our plugin registry.
                </p>
            </div>
        </LayoutContainer>
    );
};

export default ForDevelopersSection;
