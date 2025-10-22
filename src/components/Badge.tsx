import ArrowRight from "@/icons/ArrowRight";

interface BadgeProps {
    text: string;
    content: string;
}

const Badge = ({ text, content }: BadgeProps) => {
    return (
        <div className="inline-flex items-center p-1 rounded-full border border-[#D4E2FF] bg-[#EDF3FF] px-2 cursor-pointer">
            <p className="bg-white text-sm text-[#3369D6] py-0.5 px-2 rounded-full">{text}</p>
            <p className="text-sm text-[#3369D6] py-0.5 px-2">{content}</p>
            <ArrowRight color="#3369D6" />
        </div>
    );
};

export default Badge;
