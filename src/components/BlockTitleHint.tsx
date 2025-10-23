import type { ReactNode } from "react";

interface BlockTitleHintProps {
    icon: ReactNode;
    text: string;
}

const BlockTitleHint = ({ icon, text }: BlockTitleHintProps) => {
    return (
        <div className="flex items-center gap-3 py-2 px-4 border-t border-b border-dashed border-[#DFE1E5]">
            <div className="text-[#3574F0]">
                {icon}
            </div>
            <span className="text-[#3574F0] font-medium text-base font-mono">
                {text}
            </span>
        </div>
    );
};

export default BlockTitleHint;
