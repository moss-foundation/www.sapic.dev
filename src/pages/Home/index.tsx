import Button from "@components/Button";

const HomePage = () => {
    return (
        <div className="min-h-screen pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">Welcome to Sapic</h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Your next generation platform for amazing experiences
                    </p>
                    <Button size="medium">Get Started</Button>
                </div>

                {/* Button Demo Section */}
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                        Button Components
                    </h2>

                    {/* Primary Buttons */}
                    <div className="mb-12">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">
                            Primary Buttons
                        </h3>
                        <div className="bg-white p-8 rounded-lg border border-gray-200">
                            <div className="space-y-6">
                                <div>
                                    <p className="text-sm text-gray-600 mb-3">Medium Size</p>
                                    <div className="flex gap-4 items-center flex-wrap">
                                        <Button variant="primary" size="medium">
                                            Click Me
                                        </Button>
                                        <Button variant="primary" size="medium" disabled>
                                            Disabled
                                        </Button>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600 mb-3">Small Size</p>
                                    <div className="flex gap-4 items-center flex-wrap">
                                        <Button variant="primary" size="small">
                                            Click Me
                                        </Button>
                                        <Button variant="primary" size="small" disabled>
                                            Disabled
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Default Buttons */}
                    <div className="mb-12">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">
                            Default Buttons
                        </h3>
                        <div className="bg-white p-8 rounded-lg border border-gray-200">
                            <div className="space-y-6">
                                <div>
                                    <p className="text-sm text-gray-600 mb-3">Medium Size</p>
                                    <div className="flex gap-4 items-center flex-wrap">
                                        <Button variant="default" size="medium">
                                            Click Me
                                        </Button>
                                        <Button variant="default" size="medium" disabled>
                                            Disabled
                                        </Button>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600 mb-3">Small Size</p>
                                    <div className="flex gap-4 items-center flex-wrap">
                                        <Button variant="default" size="small">
                                            Click Me
                                        </Button>
                                        <Button variant="default" size="small" disabled>
                                            Disabled
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* All Variants Together */}
                    <div className="mb-12">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">All Variants</h3>
                        <div className="bg-white p-8 rounded-lg border border-gray-200">
                            <div className="flex gap-4 items-center flex-wrap">
                                <Button variant="primary" size="medium">
                                    Primary Medium
                                </Button>
                                <Button variant="primary" size="small">
                                    Primary Small
                                </Button>
                                <Button variant="default" size="medium">
                                    Default Medium
                                </Button>
                                <Button variant="default" size="small">
                                    Default Small
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
