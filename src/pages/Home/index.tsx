import Button from "@components/Button";
import Badge from "@components/Badge";
import LayoutContainer from "@/components/LayoutContainer";
import BlockTitleHint from "@components/BlockTitleHint";
import Cube from "@/icons/Cube";
import heroScreen from "@assets/images/hero-screen.png";

const HomePage = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative mt-14 mx-4 z-0">
                <div className="relative rounded-3xl bg-linear-to-br from-white to-[#3574F0]/8 border border-[#EBECF0] h-screen pt-28">
                    <div className=" flex flex-col items-center justify-center w-full mx-auto text-center gap-4">
                        <Badge text="Roadmap" content="Check out the project roadmap" />
                        <h1 className="text-7xl font-serif font-medium text-gray-900 leading-tight w-1/2">
                            One console for every backend resource
                        </h1>

                        <div className="flex flex-col items-center justify-center gap-6">
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed text-[#5A5D6B]">
                                Design, invoke, subscribe, and observe your APIs, queues, and <br />
                                databases, etc. with integration tests, mocks, and environments.
                                <br />
                                AI & Git native with batteries included.
                            </p>

                            <Button variant="primary" size="medium">
                                Sign up for Sapic Beta
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative -mt-48 z-10">
                <LayoutContainer>
                    <div className="border-t border-l border-r border-dashed border-[#DFE1E5] rounded-t-4xl pb-20">
                        <img src={heroScreen} alt="Hero Screen" className="w-full h-full object-cover block" />
                    </div>
                </LayoutContainer>
            </section>


            {/* <section className="relative z-10">
                <LayoutContainer>
                    <div className="flex items-center justify-center border border-dashed border-[#DFE1E5]">
                        <div className="w-full h-4" style={{
                            backgroundImage: 'linear-gradient(45deg, #DFE1E5 2.38%, #ffffff 2.38%, #ffffff 50%, #DFE1E5 50%, #DFE1E5 52.38%, #ffffff 52.38%, #ffffff 100%)',
                            backgroundSize: '15.00px 15.00px'
                        }}></div>
                    </div>
                </LayoutContainer>
            </section> */}

            <section>
                <LayoutContainer>
                    <div className="border-l border-r border-dashed border-[#DFE1E5]">
                        <BlockTitleHint icon={<Cube />} text="Use Cases" />
                        <div className="h-20">111</div>
                    </div>
                </LayoutContainer>
            </section>
        </div>
    );
};

export default HomePage;
