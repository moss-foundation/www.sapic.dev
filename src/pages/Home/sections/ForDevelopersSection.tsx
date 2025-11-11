import { AnimatePresence, motion } from "motion/react";
import React, { useEffect, useState, useRef } from "react";
import LayoutContainer from "@/components/LayoutContainer";
import FadeInElement from "@/components/FadeInElement";

import awsLogo from "@assets/images/aws_logo.png";
import azureLogo from "@assets/images/azure_logo.png";
import googleLogo from "@assets/images/google_cloud_logo.png";

// TODO: replace with actual icons
const GeneralIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
);


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
            iconComponent: GeneralIcon,
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

            {/* Desktop Version - Horizontal Tabs */}
            <div className="hidden md:block">
                <FadeInElement delay={0.1}>
                    <div className="max-w-full lg:max-w-7xl mx-auto mt-10 md:mt-14">
                        <div className="flex flex-row gap-4 border-b border-neutral-200">
                            {brandCards.map((brand, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleTabClick(index)}
                                    className="relative pb-2.5 transition-colors"
                                >
                                    <div className={`group flex flex-row items-center cursor-pointer gap-2.5 px-3 py-1.5 rounded-md transition-all duration-300 ${currentIndex === index
                                        ? "text-neutral-900 bg-neutral-100 rounded-md"
                                        : "text-neutral-500 hover:bg-neutral-100"
                                        }`}>
                                        {brand.frontCard.iconComponent ? (
                                            <brand.frontCard.iconComponent className={`size-5 flex-shrink-0 transition-colors ${currentIndex === index ? "" : "group-hover:text-neutral-900"}`} />
                                        ) : (
                                            <img
                                                src={brand.frontCard.imgSrc}
                                                alt={brand.frontCard.label}
                                                className="size-6 object-contain flex-shrink-0"
                                            />
                                        )}
                                        <p
                                            className={`text-base transition-colors  ${currentIndex === index
                                                ? "text-neutral-900"
                                                : "text-neutral-500 group-hover:text-neutral-900"
                                                }`}
                                        >
                                            {brand.frontCard.label}
                                        </p>
                                    </div>

                                    {currentIndex === index && (
                                        <motion.div
                                            className="absolute bottom-0 left-0 h-0.5 bg-blue-4"
                                            initial={{ width: "0%" }}
                                            animate={{ width: `${progress}%` }}
                                            transition={{ duration: 0.05, ease: "linear" }}
                                        />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </FadeInElement>

                <FadeInElement delay={0.2}>
                    <div className="max-w-full lg:max-w-7xl mx-auto my-6">
                        <div className="w-full">
                            <div className="grid grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-12 lg:gap-y-14">
                                {cards.slice(0, maxCards).map((card, index) => (
                                    <div key={`container-${index}`} className="relative overflow-hidden h-[90px] lg:h-[100px]">
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
                                                    className="flex flex-row items-center gap-4 lg:gap-5 absolute inset-0"
                                                >
                                                    {card.iconComponent ? (
                                                        <card.iconComponent className="size-9 lg:size-10 flex-shrink-0 text-neutral-700" />
                                                    ) : (
                                                        <img
                                                            src={card.imgSrc}
                                                            alt={`${card.brand} ${card.product}`}
                                                            className="size-9 lg:size-10 object-contain flex-shrink-0"
                                                        />
                                                    )}
                                                    <div className="flex flex-col items-start gap-0.5">
                                                        <p className="text-sm text-neutral-500">{card.brand}</p>
                                                        <p className="text-lg lg:text-xl text-black font-semibold">
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
            </div>

            {/* Mobile Version - Vertical Tabs */}
            <div className="md:hidden">
                <FadeInElement delay={0.1}>
                    <div className="mt-10">
                        <div className="flex flex-col gap-2">
                            {brandCards.map((brand, index) => (
                                <div key={index} className="flex flex-row gap-[5px] items-stretch">
                                    <div className="w-1 flex-shrink-0 relative self-stretch">
                                        {currentIndex === index && (
                                            <motion.div
                                                className="absolute top-0 left-0 right-0 rounded-full bg-blue-4 origin-top"
                                                initial={{ scaleY: 0 }}
                                                animate={{ scaleY: progress / 100 }}
                                                style={{ height: '100%' }}
                                                transition={{ duration: 0.05, ease: "linear" }}
                                            />
                                        )}
                                    </div>
                                    <button
                                        onClick={() => handleTabClick(index)}
                                        className="flex-1 transition-colors"
                                    >
                                        <div className={`flex flex-row items-center gap-2.5 px-3 py-1 rounded-md transition-all duration-300 ${currentIndex === index
                                            ? "text-neutral-900 bg-neutral-100 rounded-md"
                                            : "text-neutral-500 hover:text-neutral-600"
                                            }`}>
                                            {brand.frontCard.iconComponent ? (
                                                <brand.frontCard.iconComponent className="size-6 flex-shrink-0" />
                                            ) : (
                                                <img
                                                    src={brand.frontCard.imgSrc}
                                                    alt={brand.frontCard.label}
                                                    className="size-6 object-contain flex-shrink-0"
                                                />
                                            )}
                                            <span
                                                className={`text-base transition-colors cursor-pointer ${currentIndex === index
                                                    ? "text-neutral-900"
                                                    : "text-neutral-500 hover:text-neutral-600"
                                                    }`}
                                            >
                                                {brand.frontCard.label}
                                            </span>
                                        </div>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Horizontal line - Mobile only */}
                    <hr className="my-6 border-t border-gray-100" />
                </FadeInElement>

                <FadeInElement delay={0.2}>
                    <div className="my-4">
                        <div className="w-full">
                            <div className="grid grid-cols-2 gap-x-4 gap-y-4">
                                {cards.slice(0, maxCards).map((card, index) => (
                                    <div key={`container-${index}`} className="relative overflow-hidden h-[80px]">
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
                                                    className="flex flex-row items-center gap-3 absolute inset-0"
                                                >
                                                    {card.iconComponent ? (
                                                        <card.iconComponent className="size-8 flex-shrink-0 text-neutral-700" />
                                                    ) : (
                                                        <img
                                                            src={card.imgSrc}
                                                            alt={`${card.brand} ${card.product}`}
                                                            className="size-8 object-contain flex-shrink-0"
                                                        />
                                                    )}
                                                    <div className="flex flex-col items-start gap-0.5">
                                                        <p className="text-sm text-neutral-500">{card.brand}</p>
                                                        <p className="text-lg text-black font-semibold">
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
            </div>
            <div className="mt-6 lg:mt-10 flex max-w-full md:max-w-2xl gap-3 md:gap-4 lg:pr-10">
                <div className="w-1 flex-shrink-0 rounded-full bg-blue-4"></div>
                <p className="text-pretty text-sm text-neutral-500">
                    All resource types don't come bundled with the app — only the basic ones (
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
