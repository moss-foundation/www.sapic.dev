import LayoutContainer from "@/components/LayoutContainer";

const UseCasesSection = () => {
    const features = [
        {
            title: "Upvoting & reactions",
            description: "Users vote on what they want, best ideas rise to the top",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24"
                    className="h-6 w-6 text-gray-700 transition-all duration-300 group-hover:scale-110 group-hover:text-gray-900"
                    style={{ strokeWidth: 2 }}>
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="inherit"
                        d="M18 20V10M6 20v-6" opacity="0.4"></path>
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="inherit" d="M12 20V4">
                    </path>
                </svg>
            ),
            color: "text-pink-500",
        },
        {
            title: "AI duplicate detection",
            description: "Shows similar ideas as users type, consolidating votes",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24"
                    className="h-6 w-6 text-gray-700 transition-all duration-300 group-hover:scale-110 group-hover:text-gray-900"
                    style={{ strokeWidth: 2 }}>
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="inherit"
                        d="M21 21H4.6c-.56 0-.84 0-1.054-.109a1 1 0 0 1-.437-.437C3 20.24 3 19.96 3 19.4V3" opacity="0.4"></path>
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="inherit"
                        d="m20 8-3.919 4.183c-.148.158-.223.237-.312.278a.5.5 0 0 1-.253.044c-.098-.01-.194-.06-.387-.16l-3.258-1.69c-.193-.1-.289-.15-.387-.16a.5.5 0 0 0-.253.044c-.09.04-.164.12-.312.278L7 15">
                    </path>
                </svg>
            ),
            color: "text-purple-500",
        },
        {
            title: "Auto-categorization",
            description: "AI automatically tags and organizes by feature area",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24"
                    className="h-6 w-6 text-gray-700 transition-all duration-300 group-hover:scale-110 group-hover:text-gray-900"
                    style={{ strokeWidth: 2 }}>
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="inherit"
                        d="M22 21v-2a4 4 0 0 0-3-3.874M15.5 3.291a4.001 4.001 0 0 1 0 7.418" opacity="0.4"></path>
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="inherit"
                        d="M17 21c0-1.864 0-2.796-.305-3.53a4 4 0 0 0-2.164-2.165C13.796 15 12.864 15 11 15H8c-1.864 0-2.796 0-3.53.305a4 4 0 0 0-2.166 2.164C2 18.204 2 19.136 2 21M13.5 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0">
                    </path>
                </svg>
            ),
            color: "text-blue-500",
        },
        {
            title: "Discussion threads",
            description: "Users discuss ideas, add context, and refine together",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24"
                    className="h-6 w-6 text-gray-700 transition-all duration-300 group-hover:scale-110 group-hover:text-gray-900"
                    style={{ strokeWidth: 2 }}>
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="inherit"
                        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10" opacity="0.4"></path>
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="inherit"
                        d="M8.5 14.667A2.333 2.333 0 0 0 10.833 17H13a2.5 2.5 0 0 0 0-5h-2a2.5 2.5 0 0 1 0-5h2.167A2.333 2.333 0 0 1 15.5 9.333M12 5.5V7m0 10v1.5">
                    </path>
                </svg>
            ),
            color: "text-green-500",
        },
        {
            title: "Guest & anonymous",
            description: "Let anyone submit feedback without creating an account",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24"
                    className="h-6 w-6 text-gray-700 transition-all duration-300 group-hover:scale-110 group-hover:text-gray-900"
                    style={{ strokeWidth: 2 }}>
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="inherit"
                        d="M8 8h.01m.49 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" opacity="0.4"></path>
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="inherit"
                        d="M2.937 11.937c-.346-.346-.519-.519-.642-.72a2 2 0 0 1-.24-.578C2 10.409 2 10.164 2 9.675V5.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C3.52 2 4.08 2 5.2 2h4.475c.489 0 .733 0 .963.055.204.05.4.13.579.24.201.123.374.296.72.642l7.669 7.669c1.188 1.188 1.782 1.782 2.004 2.467a3 3 0 0 1 0 1.854c-.222.685-.816 1.28-2.004 2.467l-2.212 2.212c-1.188 1.188-1.782 1.782-2.467 2.004a3 3 0 0 1-1.854 0c-.685-.222-1.28-.816-2.467-2.004z">
                    </path>
                </svg>
            ),
            color: "text-orange-500",
        },
        {
            title: "Private boards",
            description: "Create internal boards for sensitive customer feedback",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24"
                    className="h-6 w-6 text-gray-700 transition-all duration-300 group-hover:scale-110 group-hover:text-gray-900"
                    style={{ strokeWidth: 2 }}>
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="inherit"
                        d="M18 20V10M6 20v-6" opacity="0.4"></path>
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="inherit" d="M12 20V4">
                    </path>
                </svg>
            ),
            color: "text-indigo-500",
        },
    ];

    return (
        <LayoutContainer>
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-5xl lg:text-6xl font-serif font-medium text-gray-900 leading-tight mb-6 text-center w-3/5 mx-auto">
                    One tool, <span className="text-blue-4">thousands of use cases</span>
                </h2>

                <p className="text-sm text-gray-600 max-w-4xl mx-auto text-center mb-16 leading-relaxed">
                    Give your users a dedicated space to share ideas, vote on features they want, and see what you're
                    building. Our AI-powered boards organize feedback automatically, detect duplicates, and help you
                    discover what really matters to your customers.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col">
                            <div className="mb-4">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-medium text-gray-900 mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-sm text-gray-500 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </LayoutContainer>
    );
};

export default UseCasesSection;
