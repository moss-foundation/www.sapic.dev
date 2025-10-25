import LayoutContainer from "./LayoutContainer";

interface BlockTitleHintProps {
    text: string;
}

const BlockTitleHint = ({ text }: BlockTitleHintProps) => {
    return (
        <div className="absolute top-0 left-0 right-0 mt-3.5 z-20">
            <LayoutContainer>
                <div className="relative h-0 w-full">
                    <div className="absolute -left-3.5 -translate-x-full -translate-y-1/2 -rotate-90 origin-right">
                        <span className="text-[#3574F0] font-medium text-sm tracking-wider font-mono whitespace-nowrap">
                            {text}
                        </span>
                    </div>
                </div>
            </LayoutContainer>
        </div>
    );
};

export default BlockTitleHint;
