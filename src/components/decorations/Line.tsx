import LayoutContainer from "../containers/LayoutContainer";

interface LineProps {
    className?: string;
}

const Line = ({ className }: LineProps) => {
    return (
        <LayoutContainer>
            <hr className={className || "my-12 lg:my-20 border-t border-gray-100"} />
        </LayoutContainer>

    );
};

export default Line;