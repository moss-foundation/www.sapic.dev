import { Accordion } from "@/components";

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
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-row w-full gap-28">
                    <div className="flex flex-col w-2/5">
                        <h2 className="text-6xl font-serif font-medium mb-6">
                            FAQ
                        </h2>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Everything you need to know about customer feedback management and how UserJot helps you build better products.
                        </p>
                    </div>

                    <div className="flex flex-col gap-6 w-3/5">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="border-b border-gray-200 pb-6"
                            >
                                <AccordionItem
                                    question={faq.question}
                                    answer={faq.answer}
                                    defaultOpen={faq.defaultOpen}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
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
            <p className="text-gray-500 text-base leading-relaxed mt-4 pr-8">{answer}</p>
        </Accordion>
    );
};

export default FaqSection;

