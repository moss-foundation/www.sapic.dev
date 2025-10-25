// import LayoutContainer from "@/components/LayoutContainer";
import { LayoutContainer } from "@/components";
import Badge from "@components/Badge";
import Button from "@components/Button";


import screen from "@assets/images/screen.png";
import Cube from "@/icons/Cube";


const HeroSection = () => {
    return (
        <>
            <LayoutContainer className="relative w-full z-0 mt-10 pt-32 border-l border-r border-dashed border-[var(--default-border-color)] pb-32">
                <div className=" flex flex-col items-center justify-center w-full mx-auto text-center gap-4">
                    <Badge text="Roadmap" content="Check out the project roadmap" />
                    <h1 className="text-6xl font-serif font-medium text-gray-900 leading-tight px-48">
                        One console for every backend resource
                    </h1>

                    <div className="flex flex-col items-center justify-center gap-6">
                        <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed text-[#5A5D6B]">
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

                <div className="relative border-t border-b border-dashed border-[var(--default-border-color)] mt-48">
                    <div className="grid grid-cols-4 divide-x divide-dashed divide-[var(--default-border-color)] border-b border-dashed border-[var(--default-border-color)]">
                        <div className="py-4 px-6 flex flex-col gap-0.5 items-start">
                            <div className="flex items-center justify-center gap-1.5">
                                <Cube className="text-[#3369D6]" />
                                <p className="text-base text-[var(--default-primary-text-color)]">Cloud Console</p>
                            </div>
                            <p className="text-[var(--default-secondary-text-color)] text-left text-balance text-sm">
                                Design, invoke, subscribe, and observe your APIs, queues, and databases, etc.
                            </p>
                        </div>
                        <div className="py-4 px-5 flex flex-col gap-0.5 items-start">
                            <div className="flex items-center justify-center gap-1.5">
                                <Cube className="text-[#3369D6]" />
                                <p className="text-base text-[var(--default-primary-text-color)]">API Client</p>
                            </div>
                            <p className="text-[var(--default-secondary-text-color)] text-left text-balance text-sm">
                                Design, invoke, subscribe, and observe your APIs, queues, and databases, etc.
                            </p>
                        </div>
                        <div className="py-4 px-5 flex flex-col gap-0.5 items-start">
                            <div className="flex items-center justify-center gap-1.5">
                                <Cube className="text-[#3369D6]" />
                                <p className="text-base text-[var(--default-primary-text-color)]">Integration Tests</p>
                            </div>
                            <p className="text-[var(--default-secondary-text-color)] text-left text-balance text-sm">
                                Design, invoke, subscribe, and observe your APIs, queues, and databases, etc.
                            </p>
                        </div>
                        <div className="py-4 px-5 flex flex-col gap-0.5 items-start">
                            <div className="flex items-center justify-center gap-1.5">
                                <Cube className="text-[#3369D6]" />
                                <p className="text-base text-[var(--default-primary-text-color)]">Database Viewer</p>
                            </div>
                            <p className="text-[var(--default-secondary-text-color)] text-left text-balance text-sm">
                                Design, invoke, subscribe, and observe your APIs, queues, and databases, etc.
                            </p>
                        </div>
                    </div>


                    <div className="p-5 bg-[#e5e7e0]/50 relative before:absolute before:inset-0 before:opacity-5 before:bg-[url(@assets/images/noise.png)] before:bg-[length:200px_200px] before:bg-repeat before:mix-blend-multiply before:pointer-events-none">
                        <div className="border border-[var(--default-border-color)] relative z-10 rounded-xl">
                            <img src={screen} alt="Hero Screen" className="w-full h-full object-cover block border-5 border-[var(--default-border-color)]/50 rounded-xl" />
                        </div>
                    </div>
                </div>


            </LayoutContainer>



            {/* <Line /> */}


        </>
    );
}

export default HeroSection;