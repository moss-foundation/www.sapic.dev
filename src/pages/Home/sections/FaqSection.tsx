import { Accordion, LayoutContainer } from "@/components";
import FadeInElement from "@/components/FadeInElement";

const FaqSection = () => {
    const faqs = [
        {
            question: "How quickly can I start collecting feedback?",
            answer: "You can start collecting user feedback immediately after signing up. Our feedback management software requires no complicated setup.",
            defaultOpen: true,
        },
        {
            question: "Can I customize the feedback experience?",
            answer: "Yes, you can fully customize the feedback experience to match your brand and workflow. Customize colors, fields, and notification settings.",
            defaultOpen: false,
        },
        {
            question: "What if I receive too much feedback?",
            answer: "Our platform helps you manage high volumes of feedback with smart filtering, prioritization tools, and automated categorization.",
            defaultOpen: false,
        },
        {
            question: "How does UserJot help me prioritize user feedback?",
            answer: "UserJot uses intelligent algorithms and user voting to help you identify the most important feedback and prioritize your roadmap accordingly.",
            defaultOpen: false,
        },
        {
            question: "Can UserJot help reduce customer churn?",
            answer: "Yes, by actively listening to and acting on customer feedback, you can address issues before they lead to churn and build stronger customer relationships.",
            defaultOpen: false,
        },
        {
            question: "Is UserJot suitable for SaaS companies?",
            answer: "Absolutely! UserJot is specifically designed for SaaS companies to collect, manage, and act on customer feedback efficiently.",
            defaultOpen: false,
        },
    ];

    return (
        <LayoutContainer className="bg-white">
            <div className="max-w-full lg:max-w-7xl mx-auto">
                <FadeInElement>
                    <div className="flex flex-col items-start mx-auto gap-y-1.5">
                        <h2 className="max-w-full lg:max-w-xl text-3xl md:text-4xl lg:text-5xl font-semibold font-serif !leading-[1.2] tracking-tight text-neutral-900">FAQ</h2>
                        <p className="mt-4 md:mt-6 max-w-full md:max-w-2xl text-pretty text-sm md:text-base leading-relaxed text-neutral-600">
                            Everything you need to know about customer feedback management and how UserJot helps you build better products.
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
                        <p className="text-pretty text-sm md:text-base text-neutral-500">Users check back 4x more often. They submit more ideas. All emails are beautifully designed by us. You don't set up anything. Just turn it on and watch engagement soar.</p>
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
            <p className="text-neutral-600 text-sm md:text-base leading-relaxed mt-3 md:mt-4 pr-4 md:pr-8">{answer}</p>
        </Accordion>
    );
};

export default FaqSection;

