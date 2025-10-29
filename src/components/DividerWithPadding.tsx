import Divider from "./Divider";
import LayoutContainer from "./LayoutContainer";

export const DividerWithPadding = () => {
    return (
        <>
            <div className="w-full border-b border-dashed border-(--default-border-color)" />

            <LayoutContainer>
                <div className="h-32 border-l border-r  border-dashed border-(--default-border-color) w-full " />
            </LayoutContainer>

            <Divider />

            <LayoutContainer>
                <div className="h-32 border-l border-r  border-dashed border-(--default-border-color) w-full " />
            </LayoutContainer>

            <div className="w-full border-t border-dashed border-(--default-border-color)  " />
        </>
    );
};
