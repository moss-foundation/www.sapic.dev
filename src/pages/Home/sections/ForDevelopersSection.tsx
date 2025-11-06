import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState, useRef } from "react";

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
        <section className="bg-white">
            <div className="flex flex-col items-start py-10 mx-auto">
                <h2 className="text-6xl font-serif font-medium w-3/5">Everything your team needs and more</h2>
                <p className="text-pretty text-sm leading-relaxed text-gray-500 mt-6 max-w-2xl ">
                    Never update a spreadsheet again. Change feedback status → roadmap reflects it instantly. Show users what's coming and keep them engaged.
                </p>
            </div>

            <div className="max-w-7xl mx-auto">
                <div className="flex gap-4 border-b border-gray-200">
                    {brandCards.map((brand, index) => (
                        <button
                            key={index}
                            onClick={() => handleTabClick(index)}
                            className="relative pb-2.5 transition-colors"
                        >
                            <div className={`flex flex-row items-center justify-center gap-2.5 px-2 py-1 rounded-md transition-all duration-300 ${currentIndex === index
                                ? "text-gray-900 bg-gray-100 rounded-md"
                                : "text-gray-500 hover:text-gray-600"
                                }`}>
                                <img
                                    src={brand.frontCard.imgSrc}
                                    alt={brand.frontCard.title}
                                    className="size-5 object-contain flex-shrink-0"
                                />
                                <span
                                    className={`text-sm transition-colors cursor-pointer ${currentIndex === index
                                        ? "text-gray-900"
                                        : "text-gray-500 hover:text-gray-600"
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

            <div className="max-w-7xl mx-auto my-10">
                <div className="w-full">
                    <div className="grid grid-cols-5 gap-x-14 gap-y-14">
                        {cards.slice(0, maxCards).map((card, index) => (
                            <div key={`container-${index}`} className="relative overflow-hidden h-[100px]">
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
                                            className="flex flex-row items-center gap-5 absolute inset-0"
                                        >
                                            <img
                                                src={card.imgSrc}
                                                alt={`${card.brand} ${card.product}`}
                                                className="size-12 object-contain flex-shrink-0"
                                            />
                                            <div className="flex flex-col items-start gap-0.5">
                                                <p className="text-sm text-gray-500">{card.brand}</p>
                                                <p className="text-xl text-black font-semibold">
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
        </section>
    );
};

export default ForDevelopersSection;
