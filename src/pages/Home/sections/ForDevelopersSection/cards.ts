import awsLogo from "@assets/images/amazon/AWSLogo.webp";

import amazonDynamoDB from "@assets/images/amazon/AmazonDynamoDB.webp";
import amazonLambda from "@assets/images/amazon/AmazonLambdas.webp";
import amazonS3 from "@assets/images/amazon/AmazonS3.webp";
import amazonSNS from "@assets/images/amazon/AmazonSNS.webp";
import amazonSQS from "@assets/images/amazon/AmazonSQS.webp";

import azureBusRelay from "@assets/images/azure/AzureBusRelay.webp";
import azureCosmosDB from "@assets/images/azure/AzureCosmosDB.webp";
import azureFunctions from "@assets/images/azure/AzureFunctions.webp";
import azureLogo from "@assets/images/azure/AzureLogo.webp";
import azureServiceBus from "@assets/images/azure/AzureServiceBus.webp";

import googleCloudTasks from "@assets/images/google/GoogleCloudTasks.webp";
import googleFirestore from "@assets/images/google/GoogleFirestore.webp";
import googleFunctions from "@assets/images/google/GoogleFunctions.webp";
import googleLogo from "@assets/images/google/GoogleLogo.webp";
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

export const partners: PartnersProps[] = [
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
