import { Accordion, LayoutContainer } from "@/components";
import FadeInElement from "@/components/FadeInElement";

const FaqSection = () => {
    const faqs = [
        {
            question: "What is Sapic and how is it different from a classical API client (Postman/cURL)?",
            answer: "Sapic is a one-console platform for modern backends, not just a request runner. Beyond issuing HTTP calls it understands resources (APIs, queues, storage), contracts, and environment wiring. Sapic gives contract-synced mock servers, end-to-end integration tests, policy guardrails, observable traces in contract context, and Git-native versioning — all aimed at preventing drift and catching failures earlier.",
            defaultOpen: true,
        },
        {
            question: "Which cloud resources and protocols does Sapic support?",
            answer: "Sapic is built to work with cloud-native backends (REST APIs, event/queue systems, databases, object stores). v0 focuses on AWS + REST (examples: Lambda, SQS, S3, DynamoDB, SNS) and standard API specs — with plans to expand cloud and protocol coverage.",
            defaultOpen: false,
        },
        {
            question: "What are contract-synced mocks?",
            answer: "Mocks generated from your API/event contracts that stay in sync as the spec evolves. Toggle mock ↔ real, seed scenarios, and reproduce edge cases without brittle manual stubs.",
            defaultOpen: false,
        },
        {
            question: "Can Sapic run integration tests in CI?",
            answer: "Yes. Sapic can author or auto-generate contract-aware tests that run locally or in CI. Tests assert behaviors across services, events, and state, reducing flaky false positives caused by contract drift.",
            defaultOpen: false,
        },
        {
            question: "How does Sapic help prevent contract drift?",
            answer: "Contracts are first-class, versioned artifacts in Git. Sapic ties tests, mocks, monitors, and policies to those contracts so any mismatch surfaces as deterministic failures (pre-merge or pre-deploy), not surprises in prod.",
            defaultOpen: false,
        },
        {
            question: "What is the policy engine / guardrails story?",
            answer: "Define access, data, and change policies as code. Sapic enforces those checks in the workflow (pre-merge, pre-deploy) and explains violations so engineers can fix issues before shipping.",
            defaultOpen: false,
        },
        {
            question: "How does Sapic integrate with our existing Git and CI workflows?",
            answer: "Sapic is Git-native: specs, tests, and environment definitions live in your repo. It emits CI-friendly results and can be hooked into PR checks or run as a CI step to provide blocking validation and clear failure output.",
            defaultOpen: false,
        },
        {
            question: "Is Sapic safe to use with production data?",
            answer: "Sapic supports isolated, reproducible workspaces with separate credentials and datasets so teams can test without touching production secrets. Policies and role-based guardrails further limit risky actions. (You control credential access and workspace scope.)",
            defaultOpen: false,
        },
        {
            question: "What observability does Sapic provide?",
            answer: "Sapic surfaces logs, traces, and metrics in the contract context so you can see which contract, test, or policy a given event relates to — making root cause faster and more precise.",
            defaultOpen: false,
        },
        {
            question: "How is AI used inside Sapic?",
            answer: "AI assists (not replaces) engineers: generate tests, propose contracts, detect duplicate or flaky tests, and summarize telemetry anomalies. The goal is to speed routine tasks while keeping decisions deterministic and reviewable.",
            defaultOpen: false,
        },
        {
            question: "Is Sapic open source? How can I contribute?",
            answer: "Yes — Sapic is developed in public. Contributors can file issues, submit PRs (bugs, features, integrations), write docs/examples, and join SIGs. Contributors get early access to features and roadmap influence.",
            defaultOpen: false,
        },
        {
            question: "What about pricing and OSS usage limits?",
            answer: "The desktop app and core repo are open source. Commercial features (multi-team hosting, advanced drift monitors, enterprise policy connectors) will be offered under a licensing/hosting plan. Exact packaging will be published on the roadmap and repo.",
            defaultOpen: false,
        },
        {
            question: "How do I get started / try Sapic?",
            answer: "Sign up for the waitlist to get early releases and contributor invites. Once you have the app, connect a repo or import your API spec to instantly generate mocks, run integration tests, and spin up a reproducible workspace.",
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
                        <p className="text-pretty text-sm md:text-base text-neutral-500">Have more questions? Join our community on Discord, check out our roadmap on GitHub, or sign up for the waitlist to get early access and updates.</p>
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

