import SimpleButton from "@/components/SimpleButton";
import LayoutContainer from "@/components/LayoutContainer";
import { useEffect, useState } from "react";

import screen from "@assets/images/screen.png";

const HeroSection = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            // Calculate progress from 0 to 1 based on scroll for image animation
            // Animation completes with a single scroll event (~100-150px)
            const progress = Math.min(scrollY / 150, 1);
            setScrollProgress(progress);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial call

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Calculate rotation angle: starts at 25 degrees, ends at 0
    const rotateY = 25 - (scrollProgress * 25);
    // Calculate opacity: starts at 0.6, ends at 1
    const opacity = 0.6 + (scrollProgress * 0.4);
    // Calculate blur: starts at 8px, ends at 0px
    const blur = 8 - (scrollProgress * 8);

    return (
        <>
            <LayoutContainer className="relative w-full">
                {/* Content section with minimal extra height for scroll animation */}
                <div className="pt-8 lg:pt-36 min-h-screen pb-12 relative overflow-hidden">
                    {/* Container for the content */}
                    <LayoutContainer className="h-full flex flex-col items-center justify-center relative z-10">
                        <div className="flex flex-col items-center justify-center w-full mx-auto text-center gap-4 px-4">
                            <h1 className="text-7xl font-serif font-medium text-gray-900 leading-tight">
                                One console for every backend resource
                            </h1>

                            <p className="text-base max-w-3xl mx-auto leading-relaxed text-[#5A5D6B]">
                                Design, invoke, subscribe, and observe your APIs, queues, and{" "}
                                <br className="hidden sm:block" />
                                databases, etc. with integration tests, mocks, and environments.
                                <br className="hidden sm:block" />
                                AI & Git native with batteries included.
                            </p>

                            <SimpleButton variant="primary" size="medium">
                                Sign up for Sapic Beta
                            </SimpleButton>
                        </div>
                    </LayoutContainer>

                    {/* 3D perspective container - full width outside LayoutContainer */}
                    <div
                        className="w-full max-w-7xl mx-auto mt-20 px-4"
                        style={{
                            perspective: "2000px",
                        }}
                    >
                        <div
                            className="transition-all duration-100 ease-out"
                            style={{
                                transform: `rotateX(${rotateY}deg)`,
                                transformOrigin: "center center",
                                opacity: opacity,
                                filter: `blur(${blur}px)`,
                            }}
                        >
                            {/* Outer border: 1px gray-200 */}
                            <div className="border rounded-2xl p-1 border-gray-200">
                                {/* Screenshot image */}
                                <img
                                    src={screen}
                                    alt="Sapic Console Screenshot"
                                    className="w-full h-auto rounded-xl border border-gray-200"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Icons section below image */}
                    <div className="w-full max-w-7xl mx-auto px-4 flex justify-center mt-8">
                        <div className="flex flex-row items-center gap-10">
                            <div className="flex flex-row items-center gap-1.5">
                                <svg height="1em" width="1em" className="h-4 w-4 text-gray-400" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                                    <title>badge 13</title>
                                    <g fill="currentColor">
                                        <path
                                            d="m11.15,16.127l5.397-7.987c.112-.166-.007-.39-.207-.39h-4.779l.846-5.707c.037-.252-.293-.381-.436-.169l-5.397,7.987c-.112.166.007.39.207.39h4.779l-.846,5.707c-.037.252.293.381.436.169Z"
                                            fill="currentColor" opacity=".3" stroke-width="0"></path>
                                        <path
                                            d="m11.15,16.127l5.397-7.987c.112-.166-.007-.39-.207-.39h-4.779l.846-5.707c.037-.252-.293-.381-.436-.169l-5.397,7.987c-.112.166.007.39.207.39h4.779l-.846,5.707c-.037.252.293.381.436.169Z"
                                            fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path>
                                        <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" x1=".75"
                                            x2="4" y1="9" y2="9"></line>
                                        <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                                            x1="3.25" x2="5.25" y1="5.75" y2="5.75"></line>
                                        <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                                            x1="3.25" x2="5.25" y1="12.25" y2="12.25"></line>
                                    </g>
                                </svg>
                                <p className="text-sm text-gray-500">30-second setup</p>
                            </div>
                            <div className="flex flex-row items-center gap-1.5">
                                <svg height="1em" width="1em" className="h-4 w-4 text-gray-400" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                                    <title>badge 13</title>
                                    <g fill="currentColor">
                                        <path
                                            d="M16.75 9C16.75 10.7951 15.3622 12.25 13.65 12.25C10.0333 12.25 7.9667 5.75 4.35 5.75C2.6378 5.75 1.25 7.2049 1.25 9C1.25 10.7951 2.6378 12.25 4.35 12.25C7.9667 12.25 10.0333 5.75 13.65 5.75C15.3622 5.75 16.75 7.2049 16.75 9Z"
                                            fill="currentColor" fill-opacity="0.3" stroke="none"></path>
                                        <path
                                            d="M6.907 6.8364C6.1229 6.1881 5.2887 5.75 4.35 5.75C2.6378 5.75 1.25 7.205 1.25 9C1.25 10.795 2.6378 12.25 4.35 12.25C7.9667 12.25 10.0333 5.75 13.65 5.75C15.3622 5.75 16.75 7.205 16.75 9C16.75 10.795 15.3622 12.25 13.65 12.25C12.7113 12.25 11.877 11.8119 11.093 11.1636"
                                            fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path>
                                        <path d="M4.35004 12.25C7.96674 12.25 10.0333 5.75 13.65 5.75" fill="none" stroke="currentColor"
                                            stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path>
                                    </g>
                                </svg>
                                <p className="text-sm text-gray-500">30-second setup</p>
                            </div>
                            <div className="flex flex-row items-center gap-1.5">
                                <svg height="1em" width="1em" className="h-4 w-4 text-gray-400" viewBox="0 0 18 18"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <title>badge 13</title>
                                    <g fill="currentColor">
                                        <path
                                            d="M15.75 14.25C15.75 15.355 14.855 16.25 13.75 16.25H4.25C3.145 16.25 2.25 15.355 2.25 14.25V7.25C2.25 6.145 3.145 5.25 4.25 5.25H13.75C14.855 5.25 15.75 6.145 15.75 7.25V14.25Z"
                                            fill="currentColor" fill-opacity="0.3" stroke="none"></path>
                                        <path d="M9 2.25V5.25" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="1"></path>
                                        <path
                                            d="M15.75 14.25C15.75 15.355 14.855 16.25 13.75 16.25H4.25C3.145 16.25 2.25 15.355 2.25 14.25V7.25C2.25 6.145 3.145 5.25 4.25 5.25H13.75C14.855 5.25 15.75 6.145 15.75 7.25V14.25Z"
                                            fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path>
                                        <path d="M6 11C6.552 11 7 10.552 7 10C7 9.448 6.552 9 6 9C5.448 9 5 9.448 5 10C5 10.552 5.448 11 6 11Z"
                                            fill="currentColor" stroke="none"></path>
                                        <path
                                            d="M12 11C12.552 11 13 10.552 13 10C13 9.448 12.552 9 12 9C11.448 9 11 9.448 11 10C11 10.552 11.448 11 12 11Z"
                                            fill="currentColor" stroke="none"></path>
                                        <path d="M2.25 10.75H1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="1"></path>
                                        <path d="M15.75 10.75H17" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="1"></path>
                                        <path
                                            d="M9 3.25C9.897 3.25 10.625 2.5224 10.625 1.625C10.625 0.7276 9.897 0 9 0C8.103 0 7.375 0.7276 7.375 1.625C7.375 2.5224 8.103 3.25 9 3.25Z"
                                            fill="currentColor" stroke="none"></path>
                                        <path
                                            d="M7.83327 11.5H10.1666C10.4886 11.5 10.7499 11.7613 10.7499 12.0833C10.7499 13.0493 9.96588 13.8333 8.99988 13.8333C8.03388 13.8333 7.24988 13.0493 7.24988 12.0833C7.24988 11.7613 7.51127 11.5 7.83327 11.5Z"
                                            fill="currentColor" stroke="none"></path>
                                    </g>
                                </svg>
                                <p className="text-sm text-gray-500">30-second setup</p>
                            </div>
                            <div className="flex flex-row items-center gap-1.5">
                                <svg height="1em" width="1em" className="h-4 w-4 text-gray-400" viewBox="0 0 18 18"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <title>badge 13</title>
                                    <g fill="currentColor">
                                        <path
                                            d="M13.1707 10.0588C16.6759 6.381 16.2472 2.0942 16.2108 1.7892C15.9049 1.7528 11.619 1.3241 7.94118 4.8293C5.71338 6.9526 4.96349 9.3233 4.74579 10.1164L7.88368 13.2543C8.67678 13.0366 11.0474 12.2865 13.1707 10.0588Z"
                                            fill="currentColor" fill-opacity="0.3" stroke="none"></path>
                                        <path
                                            d="M11.75 7.5C12.44 7.5 13 6.9404 13 6.25C13 5.5596 12.44 5 11.75 5C11.06 5 10.5 5.5596 10.5 6.25C10.5 6.9404 11.06 7.5 11.75 7.5Z"
                                            fill="currentColor" stroke="none"></path>
                                        <path
                                            d="M2.85699 12.4692C2.20309 12.7981 1.75 13.468 1.75 14.25V16.25H3.75C4.5317 16.25 5.2016 15.7971 5.5305 15.1433"
                                            fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path>
                                        <path
                                            d="M13.1707 10.0588C16.6759 6.381 16.2472 2.0942 16.2108 1.7892C15.9049 1.7528 11.619 1.3241 7.94118 4.8293C5.71338 6.9526 4.96349 9.3233 4.74579 10.1164L7.88368 13.2543C8.67678 13.0366 11.0474 12.2865 13.1707 10.0588Z"
                                            fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path>
                                        <path
                                            d="M8.26601 4.5279L6.892 4.2819C5.637 4.0569 4.737 3.959 4 5L1.75 8.2699C1.75 8.2699 3.3528 7.6568 5.5921 7.9669"
                                            fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path>
                                        <path
                                            d="M10.033 12.4078C10.3431 14.647 9.72998 16.2499 9.72998 16.2499L13 14C14.041 13.263 13.943 12.3629 13.718 11.1079L13.472 9.7339"
                                            fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path>
                                    </g>
                                </svg>
                                <p className="text-sm text-gray-500">30-second setup</p>
                            </div>
                        </div>
                    </div>

                </div>
            </LayoutContainer>
        </>
    );
};

export default HeroSection;
