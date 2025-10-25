import LayoutContainer from "./LayoutContainer";
import DividerLine from "./DividerLine";


const Divider = () => {
    return (
        <>
            <DividerLine />
            <LayoutContainer>
                <div className="flex items-center justify-center border-r border-l border-dashed border-[var(--default-border-color)]">
                    <div className="w-full h-5" style={{
                        backgroundImage: 'linear-gradient(45deg, #bfc1b7 2.38%, #FAFAF8 2.38%, #FAFAF8 50%, #bfc1b7 50%, #bfc1b7 52.38%, #FAFAF8 52.38%, #FAFAF8 100%)',
                        backgroundSize: '15.00px 15.00px'
                    }}></div>
                </div>
            </LayoutContainer>
            <DividerLine />
        </>
    );
};

export default Divider;