import { useState, useEffect } from "react";

// Import product logos - Amazon
import amazonLambda from "@assets/images/amazon/AmazonLambdas.webp";
import amazonS3 from "@assets/images/amazon/AmazonS3.webp";
import amazonDynamoDB from "@assets/images/amazon/AmazonDynamoDB.webp";
import amazonSQS from "@assets/images/amazon/AmazonSQS.webp";

// Import product logos - Google
import googlePubSub from "@assets/images/google/GooglePubSub.webp";
import googleCloudTasks from "@assets/images/google/GoogleCloudTasks.webp";
import googleStorage from "@assets/images/google/GoogleStorage.webp";
import googleFunctions from "@assets/images/google/GoogleFunctions.webp";

// Import product logos - Azure
import azureCosmosDB from "@assets/images/azure/AzureCosmosDB.webp";
import azureServiceBus from "@assets/images/azure/AzureServiceBus.webp";
import { SimpleButton } from "@/components";

interface FloatingLogo {
    src: string;
    brand: string;
    product: string;
    position: { top: string; left: string };
    delay: number;
    duration: number;
}

const floatingLogos: FloatingLogo[] = [
    // Far left side
    { src: amazonLambda, brand: "Amazon", product: "Lambda", position: { top: "5%", left: "5%" }, delay: 1, duration: 20 },
    { src: amazonS3, brand: "Amazon", product: "S3", position: { top: "18%", left: "5%" }, delay: 2.5, duration: 25 },
    { src: amazonDynamoDB, brand: "Amazon", product: "DynamoDB", position: { top: "36%", left: "6%" }, delay: 1.5, duration: 23 },

    { src: amazonSQS, brand: "Amazon", product: "SQS", position: { top: "12%", left: "16%" }, delay: 3.5, duration: 24 },

    // Far right side
    { src: googleCloudTasks, brand: "Google", product: "Cloud Tasks", position: { top: "25%", left: "12%" }, delay: 0.5, duration: 26 },
    { src: azureServiceBus, brand: "Azure", product: "Service Bus", position: { top: "26%", left: "75%" }, delay: 2.8, duration: 22 },
    { src: googleStorage, brand: "Google", product: "Storage", position: { top: "19%", left: "88%" }, delay: 2.5, duration: 21 },

    // Right side (closer to center but still far)
    { src: azureCosmosDB, brand: "Azure", product: "CosmosDB", position: { top: "5%", left: "85%" }, delay: 1.8, duration: 25 },
    { src: googleFunctions, brand: "Google", product: "Functions", position: { top: "12%", left: "78%" }, delay: 1, duration: 22 },

    // Top - very far from title
    { src: googlePubSub, brand: "Google", product: "Pub/Sub", position: { top: "34%", left: "86%" }, delay: 3, duration: 21 },
];

const IntegrationsSection = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const sectionElement = document.getElementById("integrations-section");
            if (!sectionElement) return;

            const rect = sectionElement.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Calculate visibility progress
            if (rect.top < windowHeight && rect.bottom > 0) {
                // Element is in viewport
                const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
                const progress = visibleHeight / windowHeight;
                setScrollProgress(Math.min(progress, 1));
            } else {
                setScrollProgress(0);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial call

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section id="integrations-section" className="py-20 bg-white relative overflow-hidden flex items-center justify-center">
            {/* Floating logos with 80px padding from edges */}
            <div className="absolute inset-0 p-20 pointer-events-none">
                {floatingLogos.map((logo, index) => (
                    <div
                        key={index}
                        className="absolute hidden lg:flex flex-row items-center gap-4 transition-opacity duration-500 ease-out"
                        style={{
                            top: logo.position.top,
                            left: logo.position.left,
                            animation: `float ${logo.duration}s ease-in-out infinite`,
                            animationDelay: `${logo.delay}s`,
                            opacity: scrollProgress,
                        }}
                    >
                        <img
                            src={logo.src}
                            alt={`${logo.brand} ${logo.product}`}
                            className="size-10 object-contain flex-shrink-0 opacity-50"
                        />
                        {logo.brand && (
                            <div className="flex flex-col items-start opacity-50">
                                <p className="text-xs text-gray-500">{logo.brand}</p>
                                <p className="text-lg text-black font-semibold whitespace-nowrap">
                                    {logo.product}
                                </p>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Content */}
            <div className="flex flex-col items-center justify-center">
                <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
                    <h2 className="text-6xl font-serif font-medium text-gray-900 leading-tight mb-6">
                        Seamless integrations with your favorite tools
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Connect with Amazon Web Services, Google Cloud, Azure, and more.
                        Build powerful workflows across all your cloud infrastructure.
                    </p>
                </div>


                <SimpleButton variant="primary" size="medium">
                    See all integrations
                </SimpleButton>
            </div>
        </section>
    );
};

export default IntegrationsSection;

