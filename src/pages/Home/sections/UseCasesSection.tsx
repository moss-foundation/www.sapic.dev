import LayoutContainer from "@/components/LayoutContainer";
import FadeInElement from "@/components/FadeInElement";

const UseCasesSection = () => {
    const features = [
        {
            title: "Upvoting & reactions",
            description: "Users vote on what they want, best ideas rise to the top",
            icon: (
                <svg height="1em" width="1em" className="mb-3 h-8 w-8 md:h-10 md:w-10 text-pink-600" viewBox="0 0 18 18"
                    xmlns="http://www.w3.org/2000/svg">
                    <title>badge 13</title>
                    <g fill="currentColor">
                        <path
                            d="M5.02539 6.32811C4.63105 5.60571 4.66304 4.72608 5.10742 4.03417L5.44113 3.5147L5.02539 2.9711C3.36745 3.91845 2.25 5.70379 2.25 7.74999C2.25 10.7875 4.7125 13.25 7.75 13.25C10.7875 13.25 13.25 10.7875 13.25 7.74999L12.5524 6.49602L10.6426 9.46678C10.0737 10.3513 8.97349 10.7185 7.99707 10.3711L7.80371 10.292C6.78185 9.81838 6.27115 8.66359 6.59863 7.59178L6.63574 7.46874C6.00824 7.36578 5.44893 7.00211 5.10352 6.46092L5.02539 6.32811Z"
                            fill="currentColor" fillOpacity="0.3" stroke="none"></path>
                        <path d="M15.75 15.75L11.6386 11.6386" fill="none" stroke="currentColor" strokeLinecap="round"
                            strokeLinejoin="round" strokeWidth="1"></path>
                        <path
                            d="M4.8121 3.10599C3.274 4.08109 2.25 5.79419 2.25 7.74999C2.25 10.7876 4.7125 13.25 7.75 13.25C10.7875 13.25 13.25 10.7876 13.25 7.74999C13.25 7.46289 13.2213 7.18309 13.1789 6.90799"
                            fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                        <path d="M9.66701 5.25H7L9.25 1.75L8.33299 4.75H11L8.75 8.25L9.66701 5.25Z" fill="currentColor"
                            stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                    </g>
                </svg>
            ),
            color: "text-pink-500",
        },
        {
            title: "AI duplicate detection",
            description: "Shows similar ideas as users type, consolidating votes",
            icon: (
                <svg height="1em" width="1em" className="mb-3 h-8 w-8 md:h-10 md:w-10 text-red-600" viewBox="0 0 18 18"
                    xmlns="http://www.w3.org/2000/svg">
                    <title>badge 13</title>
                    <g fill="currentColor">
                        <path
                            d="M13.25 6.75H4.75C4.19772 6.75 3.75 7.19772 3.75 7.75V12.25C3.75 12.8023 4.19772 13.25 4.75 13.25H13.25C13.8023 13.25 14.25 12.8023 14.25 12.25V7.75C14.25 7.19772 13.8023 6.75 13.25 6.75Z"
                            fill="currentColor" fillOpacity="0.3" stroke="none"></path>
                        <path d="M5.75 6.75V4C5.75 2.205 7.205 0.75 9 0.75C10.795 0.75 12.25 2.205 12.25 4V6.75" fill="none"
                            stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                        <path
                            d="M13.25 6.75H4.75C4.19772 6.75 3.75 7.19772 3.75 7.75V12.25C3.75 12.8023 4.19772 13.25 4.75 13.25H13.25C13.8023 13.25 14.25 12.8023 14.25 12.25V7.75C14.25 7.19772 13.8023 6.75 13.25 6.75Z"
                            fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                        <path
                            d="M2.25 18C2.94036 18 3.5 17.4404 3.5 16.75C3.5 16.0596 2.94036 15.5 2.25 15.5C1.55964 15.5 1 16.0596 1 16.75C1 17.4404 1.55964 18 2.25 18Z"
                            fill="currentColor" stroke="none"></path>
                        <path
                            d="M6.75 18C7.44036 18 8 17.4404 8 16.75C8 16.0596 7.44036 15.5 6.75 15.5C6.05964 15.5 5.5 16.0596 5.5 16.75C5.5 17.4404 6.05964 18 6.75 18Z"
                            fill="currentColor" stroke="none"></path>
                        <path
                            d="M11.25 18C11.9404 18 12.5 17.4404 12.5 16.75C12.5 16.0596 11.9404 15.5 11.25 15.5C10.5596 15.5 10 16.0596 10 16.75C10 17.4404 10.5596 18 11.25 18Z"
                            fill="currentColor" stroke="none"></path>
                        <path
                            d="M15.75 18C16.4404 18 17 17.4404 17 16.75C17 16.0596 16.4404 15.5 15.75 15.5C15.0596 15.5 14.5 16.0596 14.5 16.75C14.5 17.4404 15.0596 18 15.75 18Z"
                            fill="currentColor" stroke="none"></path>
                        <path d="M9 9.5V10.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                            strokeWidth="1"></path>
                    </g>
                </svg>
            ),
            color: "text-purple-500",
        },
        {
            title: "Auto-categorization",
            description: "AI automatically tags and organizes by feature area",
            icon: (
                <svg height="1em" width="1em" className="mb-3 h-8 w-8 md:h-10 md:w-10 text-green-600" viewBox="0 0 18 18"
                    xmlns="http://www.w3.org/2000/svg">
                    <title>badge 13</title>
                    <g fill="currentColor">
                        <path
                            d="M1.75 11.25C1.75 10.6977 2.19772 10.25 2.75 10.25H9V15.25H2.75C2.19772 15.25 1.75 14.8023 1.75 14.25V11.25Z"
                            fill="currentColor" fillOpacity="0.3" stroke="none"></path>
                        <path
                            d="M9.48497 6.975L11.455 3.598C11.673 3.224 11.403 2.754 10.97 2.754H7.02997C6.59697 2.754 6.32697 3.224 6.54497 3.598L8.51497 6.975C8.73197 7.346 9.26797 7.346 9.48497 6.975Z"
                            fill="currentColor" fillOpacity="0.3" stroke="none"></path>
                        <path d="M9 10.25V15" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                            strokeWidth="1"></path>
                        <path
                            d="M15.25 10.25H2.75C2.19772 10.25 1.75 10.6977 1.75 11.25V14.25C1.75 14.8023 2.19772 15.25 2.75 15.25H15.25C15.8023 15.25 16.25 14.8023 16.25 14.25V11.25C16.25 10.6977 15.8023 10.25 15.25 10.25Z"
                            fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                        <path
                            d="M9.48497 6.975L11.455 3.598C11.673 3.224 11.403 2.754 10.97 2.754H7.02997C6.59697 2.754 6.32697 3.224 6.54497 3.598L8.51497 6.975C8.73197 7.346 9.26797 7.346 9.48497 6.975Z"
                            fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                    </g>
                </svg>
            ),
            color: "text-blue-500",
        },
        {
            title: "Discussion threads",
            description: "Users discuss ideas, add context, and refine together",
            icon: (
                <svg height="1em" width="1em" className="mb-3 h-8 w-8 md:h-10 md:w-10 text-purple-600" viewBox="0 0 18 18"
                    xmlns="http://www.w3.org/2000/svg">
                    <title>badge 13</title>
                    <g fill="currentColor">
                        <path d="M7.75 7.75H10.25C10.802 7.75 11.25 8.198 11.25 8.75V15.25H6.75V8.75C6.75 8.198 7.198 7.75 7.75 7.75Z"
                            fill="currentColor" fillOpacity="0.3" stroke="none"></path>
                        <path d="M7.75 7.75H10.25C10.802 7.75 11.25 8.198 11.25 8.75V15.25H6.75V8.75C6.75 8.198 7.198 7.75 7.75 7.75Z"
                            fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                        <path
                            d="M3.25 11.75H6.75V15.25H3.25C2.698 15.25 2.25 14.802 2.25 14.25V12.75C2.25 12.198 2.698 11.75 3.25 11.75Z"
                            fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                        <path
                            d="M11.25 10.25H14.75C15.302 10.25 15.75 10.698 15.75 11.25V14.25C15.75 14.802 15.302 15.25 14.75 15.25H11.25V10.25Z"
                            fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                        <path d="M9.25 4.75V0.75C9.25 0.75 8.792 1.556 7.819 1.742" fill="none" stroke="currentColor"
                            strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                    </g>
                </svg>
            ),
            color: "text-green-500",
        },
    ];

    return (
        <LayoutContainer className="flex flex-col gap-8 md:gap-10 w-full">
            <div className="w-full">
                <FadeInElement>
                    <div className="flex flex-col items-start gap-y-1.5">
                        <h2 className="max-w-full lg:max-w-xl text-3xl md:text-4xl lg:text-5xl font-semibold font-serif !leading-[1.2] tracking-tight text-neutral-900">One tool, <span className="text-blue-4">thousands of use cases</span></h2>
                        <p className="mt-4 md:mt-6 max-w-full md:max-w-2xl text-pretty text-sm md:text-base leading-relaxed text-neutral-600">
                            When users take time to share feedback, they're invested in your success.
                            <span className="font-medium text-neutral-900">
                                When you show them you're listening—really listening—they become your biggest champions.
                            </span>
                            That's not just good product management. That's good business.
                        </p>
                    </div>
                </FadeInElement>

                <div className="grid grid-cols-2 gap-6 md:gap-12 lg:gap-16 mt-10 md:mt-14">
                    {features.map((feature, index) => (
                        <FadeInElement key={index} delay={0.1 + index * 0.1}>
                            <div className="flex flex-col">
                                <div className="mb-3 md:mb-4">
                                    {feature.icon}
                                </div>
                                <h3 className="text-base md:text-lg font-medium text-neutral-900 mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-sm md:text-base text-neutral-500 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </FadeInElement>
                    ))}
                </div>

                <FadeInElement delay={0.5}>
                    <div className="mt-10 md:mt-16 lg:mt-20 flex max-w-full md:max-w-2xl gap-3 md:gap-4">
                        <div className="w-1 flex-shrink-0 rounded-full bg-blue-4"></div>
                        <p className="text-pretty text-sm md:text-base text-neutral-500">Users check back 4x more often. They submit more ideas. All emails are beautifully designed by us. You don't set up anything. Just turn it on and watch engagement soar.</p>
                    </div>
                </FadeInElement>
            </div>
        </LayoutContainer>
    );
};

export default UseCasesSection;
