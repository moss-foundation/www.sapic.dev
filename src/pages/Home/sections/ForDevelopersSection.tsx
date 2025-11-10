import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState, useRef } from "react";
import LayoutContainer from "@/components/LayoutContainer";
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

interface PartnersProps {
    frontCard: {
        title: string;
        imgSrc: string;
        description: string;
    };
    cards: CardProps[];
}

export interface CardProps {
    brand: string;
    product: string;
    imgSrc: string;
}

const brandCards: PartnersProps[] = [
    {
        frontCard: {
            title: "Amazon Web Services",
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
            title: "Google",
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
            title: "Azure",
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
                <div className="flex flex-col items-start mx-auto">
                    <h2 className="max-w-full lg:max-w-xl text-3xl md:text-4xl lg:text-5xl font-semibold font-serif !leading-[1.2] tracking-tight text-neutral-900">Everything your team needs and more</h2>
                    <div className="mt-4 md:mt-6 max-w-full md:max-w-2xl space-y-4">
                        <p className="text-pretty text-sm md:text-base leading-normal text-neutral-600">
                            Modern backends span dozens of services — APIs, queues, storage, and event streams — each with its own console and quirks. <span className="font-medium text-neutral-900">Sapic unifies them all</span> into one Git-native workspace where developers can design, test, and manage resources without switching tools.
                        </p>
                        <p className="text-pretty text-sm md:text-base leading-normal text-neutral-600">
                            Whether your team works on <span className="font-medium text-neutral-900">AWS, Google Cloud, or Azure</span>, Sapic automatically maps services, keeps contracts in sync, and gives you full visibility across environments.
                        </p>
                        <p className="text-pretty text-sm md:text-base leading-normal text-neutral-600">
                            Run integration tests, mock any resource, enforce policies, and observe data flow — <span className="font-medium text-neutral-900">all from a single desktop app</span> built for real engineering speed and reliability.
                        </p>
                        <p className="text-pretty text-sm md:text-base leading-normal font-medium text-neutral-900 mt-6">
                            One console. Every service. Full control.
                        </p>
                    </div>
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
                                    <div className={`flex flex-row items-center justify-center gap-2.5 px-2 py-1 rounded-md transition-all duration-300 ${currentIndex === index
                                        ? "text-neutral-900 bg-neutral-100 rounded-md"
                                        : "text-neutral-500 hover:text-neutral-600"
                                        }`}>
                                        <img
                                            src={brand.frontCard.imgSrc}
                                            alt={brand.frontCard.title}
                                            className="size-5 object-contain flex-shrink-0"
                                        />
                                        <span
                                            className={`text-sm transition-colors cursor-pointer ${currentIndex === index
                                                ? "text-neutral-900"
                                                : "text-neutral-500 hover:text-neutral-600"
                                                }`}
                                        >
                                            {brand.frontCard.title}
                                        </span>
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
                            <div className="grid grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-12 lg:gap-x-10 lg:gap-y-14">
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
                                                    <img
                                                        src={card.imgSrc}
                                                        alt={`${card.brand} ${card.product}`}
                                                        className="size-9 lg:size-10 object-contain flex-shrink-0"
                                                    />
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
                                            <img
                                                src={brand.frontCard.imgSrc}
                                                alt={brand.frontCard.title}
                                                className="size-6 object-contain flex-shrink-0"
                                            />
                                            <span
                                                className={`text-base transition-colors cursor-pointer ${currentIndex === index
                                                    ? "text-neutral-900"
                                                    : "text-neutral-500 hover:text-neutral-600"
                                                    }`}
                                            >
                                                {brand.frontCard.title}
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
                                                    <img
                                                        src={card.imgSrc}
                                                        alt={`${card.brand} ${card.product}`}
                                                        className="size-8 object-contain flex-shrink-0"
                                                    />
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
        </LayoutContainer>
    );
};

export default ForDevelopersSection;
