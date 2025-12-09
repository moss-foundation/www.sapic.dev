import { Accordion, LayoutContainer } from "@/components";
import FadeInElement from "@/components/FadeInElement";

const FaqSection = () => {
    const faqs = [
        {
            question: "Is Sapic open-source?",
            answer: "We plan to open-source the project and fully release the source code of the desktop app and the core after the first version is released.",
            defaultOpen: false,
        },
        {
            question: "Is the collaboration feature free?",
            answer: "Yes, using the collaboration feature is completely free. You can freely work together via Git or, if needed, connect your own backend for cloud-based workspace state storage to enable real-time collaboration.",
            defaultOpen: false,
        },
        {
            question: "Can the app work offline if needed?",
            answer: "Absolutely! Unlike other apps, we don't place any restrictions on your work or force you to use the cloud. You can work offline and sync your changes when you're back online.",
            defaultOpen: false,
        },
        {
            question: "What do the planning and validation stages mean when working with contract changes?",
            answer: "The planning and validation stages are a mechanism similar to the plan/validate process in Terraform. Before changes to contracts are applied and pushed to Git, users with the appropriate permissions can review the proposed edits, verify their correctness, and ensure the final system state looks as expected. After successful validation, these changes can be finalized and committed to the repository.",
            defaultOpen: false,
        },
        {
            question: "What is a backend in Sapic?",
            answer: "In Sapic, a backend is a workspace data-storage mechanism that supports safe, consistent collaboration between multiple users. The idea is similar to Terraform’s backend model but covers a broader set of responsibilities. Initially, the main backends include those used for storing workspace state (Local, S3, R2), for managing secrets (Local, AWS Secrets Manager), and for keeping contract data in VCS systems such as GitHub and GitLab.",
            defaultOpen: false,
        },
        {
            question: "What is Sapic and how is it different from a classical API client (Postman/cURL)?",
            answer: "Sapic is a unified console for modern backend ecosystems rather than a simple request execution tool. It goes beyond sending HTTP calls by understanding backend resources such as APIs, queues, and storage, and by managing contracts that are tightly connected to environments. Sapic provides contract-synced mock servers, end-to-end integration tests, policy guardrails, and observable traces within the context of each contract. All of this is tied to Git-native versioning, making the platform fundamentally more powerful and collaborative than classical API clients like Postman or cURL.",
            defaultOpen: false,
        },
        {
            question: "Which cloud resources and protocols does Sapic support?",
            answer: "Sapic is designed to interact with cloud-native components such as REST APIs, event and queue systems, databases, and other cloud services. In its initial v0 release, the focus is on AWS and REST, covering services like Lambda, SQS, S3, DynamoDB, and SNS, along with standard API specifications. Future versions are planned to extend support to additional clouds and communication protocols.",
            defaultOpen: false,
        },
        {
            question: "Can Sapic run integration tests in CI?",
            answer: "Yes. Sapic can author or automatically generate contract-aware integration tests that run both locally and in CI pipelines. These tests validate behaviors across services, events, and state boundaries, helping prevent flaky failures that often arise from contract drift.",
            defaultOpen: false,
        },
    ];

    return (
        <LayoutContainer className="bg-white">
            <div className="max-w-full lg:max-w-7xl mx-auto">
                <FadeInElement>
                    <div className="flex flex-col items-start mx-auto gap-y-1.5">
                        <h2 className="max-w-full lg:max-w-xl text-3xl md:text-4xl lg:text-5xl font-semibold font-serif !leading-[1.2] tracking-tight text-neutral-900">FAQ</h2>
                        <p className="mt-4 md:mt-6 max-w-full md:max-w-2xl text-pretty text-sm md:text-base leading-normal text-neutral-600">
                            Common questions about Sapic's capabilities, architecture, and how it fits into modern backend development workflows.
                        </p>
                    </div>
                </FadeInElement>

                <div className="flex flex-col gap-4 md:gap-6 mt-10 md:mt-14">
                    {faqs.map((faq, index) => (
                        <FadeInElement key={index} delay={0.1 + index * 0.05}>
                            <div className="border-b border-neutral-200 pb-4 md:pb-6">
                                <AccordionItem
                                    question={faq.question}
                                    answer={faq.answer}
                                    defaultOpen={faq.defaultOpen}
                                />
                            </div>
                        </FadeInElement>
                    ))}
                </div>

                <FadeInElement delay={0.4}>
                    <div className="mt-8 md:mt-10 flex max-w-full md:max-w-2xl gap-3 md:gap-4">
                        <div className="w-1 flex-shrink-0 rounded-full bg-blue-4"></div>
                        <p className="text-pretty text-sm text-neutral-500">Have more questions? Join our community on Discord, check out our roadmap on GitHub, or sign up for the waitlist to get early access and updates.</p>
                    </div>
                </FadeInElement>
            </div>
        </LayoutContainer>
    );
};

interface AccordionItemProps {
    question: string;
    answer: string;
    defaultOpen: boolean;
}

const AccordionItem = ({ question, answer, defaultOpen }: AccordionItemProps) => {
    return (
        <Accordion title={question} defaultOpen={defaultOpen} className="">
            <p className="text-neutral-600 text-sm md:text-base leading-normal mt-3 md:mt-4 pr-4 md:pr-8">{answer}</p>
        </Accordion>
    );
};

export default FaqSection;

