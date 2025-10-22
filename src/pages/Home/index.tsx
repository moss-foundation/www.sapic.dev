import Button from "@components/Button";
import Badge from "@components/Badge";

const HomePage = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative mt-14 mx-4 mb-24">
                <div className="w-full">
                    <div className="relative rounded-3xl bg-linear-to-br from-white to-[#3574F0]/10 border border-[#EBECF0] h-screen pt-20">
                        <div className=" flex flex-col items-center justify-center w-full mx-auto text-center gap-4">
                            <Badge text="New feature" content="Check out the team dashboard" />
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
                </div>
            </section>
        </div>
    );
};

export default HomePage;
