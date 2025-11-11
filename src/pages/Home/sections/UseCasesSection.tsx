import LayoutContainer from "@/components/containers/LayoutContainer";
import FadeInElement from "@/components/FadeInElement";

const UseCasesSection = () => {
    const features = [
        {
            title: "API Client",
            description: (
                <>
                    Design requests in UI and get contracts, JSON Schemas, and examples instantly. <span className="font-medium text-neutral-900">Reuse variables/function, keep everything versioned in Git.s</span>
                </>
            ),
            icon: (
                <svg className="size-8 mb-2" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 2.25C18 3.49264 16.9926 4.5 15.75 4.5C14.5074 4.5 13.5 3.49264 13.5 2.25C13.5 1.00736 14.5074 0 15.75 0C16.9926 0 18 1.00736 18 2.25Z" fill="#EBECF0" />
                    <path d="M11.25 9C11.25 10.2426 10.2426 11.25 9 11.25C7.75736 11.25 6.75 10.2426 6.75 9C6.75 7.75736 7.75736 6.75 9 6.75C10.2426 6.75 11.25 7.75736 11.25 9Z" fill="#EBECF0" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.75 4.5C16.9926 4.5 18 3.49264 18 2.25C18 1.00736 16.9926 0 15.75 0C14.5074 0 13.5 1.00736 13.5 2.25C13.5 2.66729 13.6136 3.05805 13.8116 3.39303L10.143 7.06155C9.80805 6.8636 9.41729 6.75 9 6.75C7.75736 6.75 6.75 7.75736 6.75 9C6.75 10.2426 7.75736 11.25 9 11.25C10.2426 11.25 11.25 10.2426 11.25 9C11.25 8.58276 11.1364 8.19204 10.9385 7.85707L14.6071 4.18851C14.942 4.38643 15.3328 4.5 15.75 4.5ZM15.75 3.375C16.3713 3.375 16.875 2.87132 16.875 2.25C16.875 1.62868 16.3713 1.125 15.75 1.125C15.1287 1.125 14.625 1.62868 14.625 2.25C14.625 2.87132 15.1287 3.375 15.75 3.375ZM9 10.125C9.62132 10.125 10.125 9.62132 10.125 9C10.125 8.37868 9.62132 7.875 9 7.875C8.37868 7.875 7.875 8.37868 7.875 9C7.875 9.62132 8.37868 10.125 9 10.125Z" fill="#6C707E" />
                    <path d="M7.77507 5.85429C8.15488 5.70624 8.56812 5.625 9.00032 5.625C9.30197 5.625 9.59511 5.66482 9.87436 5.73956L12.4899 3.12404C12.4151 2.84479 12.3753 2.55164 12.3753 2.25C12.3753 2.129 12.3817 2.0095 12.3941 1.89179C11.3664 1.40024 10.2155 1.125 9.00032 1.125C7.31609 1.125 5.75535 1.65372 4.47502 2.55425L7.77507 5.85429Z" fill="#F2FCF3" />
                    <path d="M5.81738 10.125H1.20508C1.75098 13.9414 5.03306 16.875 9.00032 16.875C13.3496 16.875 16.8753 13.3492 16.8753 9C16.8753 7.7848 16.6001 6.6339 16.1085 5.60622C15.9908 5.61863 15.8713 5.625 15.7503 5.625C15.4487 5.625 15.1556 5.58519 14.8764 5.51047L12.2608 8.1261C12.3355 8.40531 12.3753 8.69841 12.3753 9C12.3753 10.864 10.8643 12.375 9.00032 12.375C7.53084 12.375 6.28071 11.4359 5.81738 10.125Z" fill="#F2FCF3" />
                    <path d="M3.59869 3.26917C2.07568 4.70514 1.125 6.74152 1.125 8.99994L5.625 8.99998C5.625 7.98416 6.07379 7.07311 6.7839 6.45438L3.59869 3.26917Z" fill="#EBECF0" />
                    <path d="M5.28463 3.36385C6.35035 2.65984 7.62747 2.25 9.00032 2.25C10.2521 2.25 11.4244 2.59077 12.4293 3.1846L12.4899 3.12404C12.4151 2.84479 12.3753 2.55164 12.3753 2.25C12.3753 2.129 12.3817 2.0095 12.3941 1.89179C11.3664 1.40024 10.2155 1.125 9.00032 1.125C7.31609 1.125 5.75535 1.65372 4.47502 2.55425L5.28463 3.36385Z" fill="#208A3C" />
                    <path d="M2.34366 10.125H1.20508C1.75098 13.9414 5.03306 16.875 9.00032 16.875C13.3496 16.875 16.8753 13.3492 16.8753 9C16.8753 7.7848 16.6001 6.6339 16.1085 5.60622C15.9908 5.61863 15.8713 5.625 15.7503 5.625C15.4487 5.625 15.1556 5.58519 14.8764 5.51047L14.8158 5.57111C15.4096 6.57602 15.7503 7.74822 15.7503 9C15.7503 12.7279 12.7282 15.75 9.00032 15.75C5.65572 15.75 2.87926 13.3174 2.34366 10.125Z" fill="#208A3C" />
                    <path d="M3.59869 3.26917C2.07568 4.70514 1.125 6.74152 1.125 8.99994L2.25 8.99998C2.25 7.05222 3.07498 5.2971 4.39459 4.06506L3.59869 3.26917Z" fill="#6C707E" />
                </svg>

            ),
            color: "text-pink-500",
        },
        {
            title: "Integration Test Runner",
            description: (
                <>
                    Set up the interaction flow you need and just run tests like CI pipelines. <span className="font-medium text-neutral-900">One artifact, consistent results across environments.</span>
                </>
            ),
            icon: (
                <svg className="size-8 mb-2" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.4028 0.0428342C15.613 0.129899 15.75 0.335006 15.75 0.562516V2.25002H17.4375C17.6651 2.25002 17.8702 2.38707 17.9572 2.59726C18.0443 2.80745 17.9962 3.04939 17.8353 3.21026L15.5853 5.46026C15.4798 5.56575 15.3367 5.62502 15.1875 5.62502H13.1705L10.9385 7.85706C11.1364 8.19202 11.25 8.58275 11.25 9C11.25 10.2426 10.2426 11.25 9 11.25C7.75736 11.25 6.75 10.2426 6.75 9C6.75 7.75736 7.75736 6.75 9 6.75C9.41728 6.75 9.80803 6.86359 10.143 7.06155L12.375 4.82952V2.81252C12.375 2.66333 12.4343 2.52026 12.5398 2.41477L14.7898 0.164769C14.9507 0.003895 15.1926 -0.0442301 15.4028 0.0428342ZM13.5 4.50002H14.9545L16.0795 3.37502H15.1875C14.8769 3.37502 14.625 3.12318 14.625 2.81252V1.92051L13.5 3.04551V4.50002ZM9 10.125C9.62132 10.125 10.125 9.62132 10.125 9C10.125 8.37868 9.62132 7.875 9 7.875C8.37868 7.875 7.875 8.37868 7.875 9C7.875 9.62132 8.37868 10.125 9 10.125Z" fill="#6C707E" />
                    <path d="M11.2592 2.63733C10.5528 2.38652 9.79236 2.25 9 2.25C5.27208 2.25 2.25 5.27208 2.25 9C2.25 12.2707 4.57628 14.9981 7.66455 15.6179C7.70464 15.6672 7.74815 15.7145 7.79509 15.7597L8.95331 16.8749C4.62555 16.8497 1.125 13.3337 1.125 9C1.125 4.65076 4.65076 1.125 9 1.125C9.96597 1.125 10.8913 1.29892 11.7464 1.61716L11.7443 1.61931C11.4694 1.8942 11.2991 2.25417 11.2592 2.63733Z" fill="#6C707E" />
                    <path d="M16.352 11.8278L15.4583 10.9692C15.648 10.3462 15.75 9.68501 15.75 9C15.75 8.20768 15.6135 7.44725 15.3627 6.74094C15.7459 6.70096 16.1059 6.5307 16.3808 6.25579L16.3829 6.25369C16.7011 7.10877 16.875 8.03408 16.875 9C16.875 9.99669 16.6898 10.9501 16.352 11.8278Z" fill="#6C707E" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3023 14.3007C17.4865 14.4777 17.4866 14.7723 17.3024 14.9494L14.262 17.8735C13.9761 18.1485 13.5 17.9459 13.5 17.5492L13.5 11.7043C13.5 11.3077 13.9759 11.1051 14.2619 11.3798L17.3023 14.3007Z" fill="#55A76A" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.57537 14.9493C8.39147 14.7723 8.39155 14.4779 8.57555 14.3009L11.6118 11.3808C11.8977 11.1059 12.3738 11.3085 12.3738 11.7051V17.5485C12.3738 17.9453 11.8975 18.1478 11.6116 17.8726L8.57537 14.9493Z" fill="#E55765" />
                </svg>

            ),
            color: "text-red-500",
        },
        {
            title: "Cloud Console",
            description: (
                <>
                    No need to keep 100 browser tabs open with different project resources - <span className="font-medium text-neutral-900">gather everything you need in one place and let yourself focus on business tasks.</span>
                </>
            ),
            icon: (
                <svg className="size-8 mb-2" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1.5" y="2.5" width="15" height="13" rx="1.5" fill="#FFF2F3" stroke="#DB3B4B" />
                    <path d="M9.10645 10.5146C9.23938 10.5917 9.23938 10.7833 9.10645 10.8604L5.2998 13.0586C5.16652 13.1353 5 13.0386 5 12.8848L5 8.49023C5 8.33639 5.16652 8.23974 5.2998 8.31641L9.10645 10.5146Z" stroke="#DB3B4B" />
                    <rect x="1.40625" y="5.90625" width="15.1875" height="0.5625" stroke="#DB3B4B" stroke-width="0.5625" />
                </svg>

            ),
            color: "text-green-500",
        },
        {
            title: "Mock Server",
            description: (
                <>
                    Spin up realistic mocks directly from your environments. Test frontends and integrations early, without live dependencies.
                </>
            ),
            icon: (
                <svg className="size-8 mb-2" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="3" width="12" height="4" fill="#E6F7E9" />
                    <rect x="3" y="11" width="12" height="4" fill="#E6F7E9" />
                    <path d="M4.33333 4.33333H6.66667V5.5H4.33333V4.33333Z" fill="#208A3C" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 3.16667V6.66667C2 7.311 2.52233 7.83333 3.16667 7.83333H14.8333C15.4777 7.83333 16 7.311 16 6.66667V3.16667C16 2.52233 15.4777 2 14.8333 2H3.16667C2.52233 2 2 2.52233 2 3.16667ZM3.16667 6.66667V3.16667H14.8333L14.8333 6.66667H3.16667Z" fill="#208A3C" />
                    <path d="M6.66667 12.5H4.33333V13.6667H6.66667V12.5Z" fill="#208A3C" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 11.3333V14.8333C2 15.4777 2.52233 16 3.16667 16H14.8333C15.4777 16 16 15.4777 16 14.8333V11.3333C16 10.689 15.4777 10.1667 14.8333 10.1667H3.16667C2.52233 10.1667 2 10.689 2 11.3333ZM3.16667 14.8333V11.3333H14.8333L14.8333 14.8333H3.16667Z" fill="#208A3C" />
                </svg>

            ),
            color: "text-purple-500",
        },
    ];

    return (
        <LayoutContainer className="flex flex-col gap-8 md:gap-10 w-full">
            <div className="w-full">
                <FadeInElement>
                    <div className="flex flex-col items-start gap-y-1.5">
                        <h2 className="max-w-full lg:max-w-xl text-3xl md:text-4xl lg:text-5xl font-semibold font-serif !leading-[1.2] tracking-tight text-neutral-900">One tool, <span className="text-blue-4">thousands of use cases</span></h2>
                        <p className="mt-4 md:mt-6 max-w-full md:max-w-2xl text-pretty text-balance text-sm md:text-base leading-relaxed text-neutral-600">
                            When your backend lives across APIs, queues, functions, and data stores, context is everything. <span className="font-medium text-neutral-900">Sapic brings the whole system into one AI-powered console</span> so you can design, mock, test, enforce policies, and observe behavior without hopping tools. <span className="font-medium text-neutral-900">The result: </span>faster delivery, fewer regressions, lower MTTR.
                        </p>
                    </div>
                </FadeInElement>

                <div className="grid grid-cols-2 gap-6 md:gap-12 lg:gap-16 mt-10 md:mt-14">
                    {features.map((feature, index) => (
                        <FadeInElement key={index} delay={0.1 + index * 0.1}>
                            <div className="flex flex-col">
                                <div className="mb-3">
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
                        <div className="flex flex-col gap-3">
                            <p className="text-pretty text-sm md:text-base text-neutral-500">
                                View logs, metrics, and other data about your resources all in one place! Our functionality just works, whether you're online or offline. <span className="font-medium text-neutral-900">Just open the app and watch delivery speed (and confidence) climb.</span>
                            </p>
                        </div>
                    </div>
                </FadeInElement>
            </div>
        </LayoutContainer>
    );
};

export default UseCasesSection;

