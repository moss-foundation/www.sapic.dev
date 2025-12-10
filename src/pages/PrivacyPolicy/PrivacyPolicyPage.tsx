import LayoutContainer from "@/components/containers/LayoutContainer";
import { useEffect } from "react";

export const PrivacyPolicyPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <div className="min-h-screen bg-white">
            <LayoutContainer className="py-12 md:py-16 lg:py-20">
                <div className="max-w-4xl">
                    <div className="mb-8 md:mb-12">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold font-serif !leading-[1.2] tracking-tight text-neutral-900 mb-4">
                            Sapic Privacy Policy
                        </h1>
                        <p className="text-sm md:text-base text-neutral-600">
                            Last Updated: {currentDate}
                        </p>
                    </div>

                    <div className="prose prose-neutral max-w-none">
                        <div className="space-y-8 md:space-y-10">
                            <section>
                                <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 mb-4">
                                    1. Introduction
                                </h2>
                                <p className="text-sm md:text-base leading-relaxed text-neutral-700">
                                    Sapic AS ("we," "us," "our"), a company registered in Norway, is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website https://sapic.dev, join our waitlist, or use our Sapic platform (the "Service").
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 mb-4">
                                    2. Data Controller
                                </h2>
                                <p className="text-sm md:text-base leading-relaxed text-neutral-700">
                                    Sapic AS is the data controller for the personal data processed in accordance with this policy.
                                </p>
                                <p className="text-sm md:text-base leading-relaxed text-neutral-700 mt-3">
                                    Contact: <a href="mailto:privacy@sapic.dev" className="text-blue-4 hover:text-blue-5 underline">privacy@sapic.dev</a>
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 mb-4">
                                    3. Information We Collect
                                </h2>
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="text-lg md:text-xl font-semibold text-neutral-900 mb-3">
                                            a) Information You Provide:
                                        </h3>
                                        <ul className="list-disc list-inside space-y-2 text-sm md:text-base leading-relaxed text-neutral-700 ml-4">
                                            <li><strong>Waitlist and Account Data:</strong> Email address, name, company name.</li>
                                            <li><strong>Profile Information:</strong> Any information you add to your profile.</li>
                                            <li><strong>Communications:</strong> Records of your communication with us.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-lg md:text-xl font-semibold text-neutral-900 mb-3">
                                            b) Information Collected Automatically:
                                        </h3>
                                        <ul className="list-disc list-inside space-y-2 text-sm md:text-base leading-relaxed text-neutral-700 ml-4">
                                            <li><strong>Usage Data:</strong> With your consent, we use PostHog to collect information on how you interact with our website and Service. This includes events like page views, features used, and session duration. This helps us improve user experience.</li>
                                            <li><strong>Device Identifiers:</strong> With your consent, we use FingerprintJS to generate a unique identifier for your browser or device. This helps us prevent fraud and abuse of the Service (such as preventing duplicate waitlist registrations) and ensure platform security. We only collect this information after you have accepted our analytics cookies.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-lg md:text-xl font-semibold text-neutral-900 mb-3">
                                            c) Customer Data:
                                        </h3>
                                        <p className="text-sm md:text-base leading-relaxed text-neutral-700">
                                            When you use the Service, you will process your own data through our platform, such as API specifications, cloud resource identifiers, test scenarios, and logs. Sapic AS processes this data as a "data processor" on your instructions. This data is governed by our Data Processing Agreement (DPA), which is incorporated into our Terms of Use.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 mb-4">
                                    4. Legal Basis for Processing (EEA/UK)
                                </h2>
                                <p className="text-sm md:text-base leading-relaxed text-neutral-700 mb-4">
                                    We process your personal data on the following legal bases:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-sm md:text-base leading-relaxed text-neutral-700 ml-4">
                                    <li><strong>Performance of a Contract:</strong> To provide the Service and manage your account.</li>
                                    <li><strong>Consent:</strong> For using PostHog (analytics), FingerprintJS (device identification), session recording, and sending marketing communications. You can withdraw consent at any time by clicking "Cookie Settings" in the footer or by contacting us.</li>
                                    <li><strong>Legitimate Interests:</strong> For essential security measures and fraud prevention where strictly necessary for the operation of our Service.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 mb-4">
                                    5. How We Use Your Information
                                </h2>
                                <p className="text-sm md:text-base leading-relaxed text-neutral-700 mb-4">
                                    We use the information we collect to:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-sm md:text-base leading-relaxed text-neutral-700 ml-4">
                                    <li>Provide, operate, and maintain the Service.</li>
                                    <li>Manage your waitlist status and account.</li>
                                    <li>Improve, personalize, and expand the Service.</li>
                                    <li>Understand and analyze how you use our Service.</li>
                                    <li>Communicate with you, including for customer support and marketing.</li>
                                    <li>Prevent fraud, enhance security, and protect our rights.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 mb-4">
                                    6. Sharing Your Information
                                </h2>
                                <p className="text-sm md:text-base leading-relaxed text-neutral-700 mb-4">
                                    We may share your information with:
                                </p>
                                <div className="space-y-3">
                                    <div>
                                        <h3 className="text-lg md:text-xl font-semibold text-neutral-900 mb-3">
                                            Service Providers:
                                        </h3>
                                        <p className="text-sm md:text-base leading-relaxed text-neutral-700 mb-3">
                                            Trusted third parties who assist us, such as:
                                        </p>
                                        <ul className="list-disc list-inside space-y-2 text-sm md:text-base leading-relaxed text-neutral-700 ml-4">
                                            <li>PostHog (product analytics) - only with your consent</li>
                                            <li>FingerprintJS (device identification) - only with your consent</li>
                                            <li>Cloud hosting providers (e.g., AWS, Google Cloud)</li>
                                            <li>Communication platforms (e.g., for email)</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="text-sm md:text-base leading-relaxed text-neutral-700">
                                            <strong>Legal Requirements:</strong> If required to do so by law or in response to valid requests by public authorities.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 mb-4">
                                    7. International Transfers
                                </h2>
                                <p className="text-sm md:text-base leading-relaxed text-neutral-700">
                                    Your personal data may be processed outside the European Economic Area (EEA). When such transfers occur, we ensure they are protected by appropriate safeguards, such as the European Commission's Standard Contractual Clauses.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 mb-4">
                                    8. Data Retention
                                </h2>
                                <p className="text-sm md:text-base leading-relaxed text-neutral-700">
                                    We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required or permitted by law. You may request deletion of your account data at any time.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 mb-4">
                                    9. Your Data Protection Rights
                                </h2>
                                <p className="text-sm md:text-base leading-relaxed text-neutral-700 mb-4">
                                    You have the right to:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-sm md:text-base leading-relaxed text-neutral-700 ml-4">
                                    <li>Access and receive a copy of your personal data.</li>
                                    <li>Rectify inaccurate or incomplete data.</li>
                                    <li>Erase your personal data ("right to be forgotten").</li>
                                    <li>Restrict or object to our processing of your data.</li>
                                    <li>Data Portability.</li>
                                </ul>
                                <p className="text-sm md:text-base leading-relaxed text-neutral-700 mt-4">
                                    To exercise these rights, please contact us at <a href="mailto:privacy@sapic.dev" className="text-blue-4 hover:text-blue-5 underline">privacy@sapic.dev</a>. You also have the right to lodge a complaint with the Norwegian Data Protection Authority (Datatilsynet).
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 mb-4">
                                    10. Cookies and Tracking Technologies
                                </h2>
                                <p className="text-sm md:text-base leading-relaxed text-neutral-700 mb-4">
                                    We use cookies and similar tracking technologies to enhance your browsing experience and analyze our traffic. We respect your privacy and provide you with choices about the cookies we use.
                                </p>
                                
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="text-lg md:text-xl font-semibold text-neutral-900 mb-3">
                                            Types of Cookies We Use:
                                        </h3>
                                        <ul className="list-disc list-inside space-y-2 text-sm md:text-base leading-relaxed text-neutral-700 ml-4">
                                            <li><strong>Analytics Cookies:</strong> We use PostHog to collect information about how you interact with our website. This includes page views, button clicks, time spent on pages, and navigation patterns. This data is anonymized and helps us improve user experience.</li>
                                            <li><strong>Device Identification:</strong> With your consent, we use FingerprintJS to generate a unique identifier for your browser/device. This helps prevent fraud and abuse (such as duplicate waitlist registrations) and ensures platform security.</li>
                                            <li><strong>Session Recording:</strong> With your explicit consent, we may record your browsing session using PostHog. All sensitive information is automatically masked. Session recordings help us identify usability issues and improve our interface.</li>
                                            <li><strong>Necessary Cookies:</strong> Cookies required for the Service to function properly, such as storing your cookie consent preferences.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-lg md:text-xl font-semibold text-neutral-900 mb-3">
                                            Your Cookie Choices:
                                        </h3>
                                        <p className="text-sm md:text-base leading-relaxed text-neutral-700 mb-3">
                                            When you first visit our website, we will ask for your consent before placing any analytics or session recording cookies. You can:
                                        </p>
                                        <ul className="list-disc list-inside space-y-2 text-sm md:text-base leading-relaxed text-neutral-700 ml-4">
                                            <li>Accept all cookies</li>
                                            <li>Reject all non-essential cookies</li>
                                            <li>Customize your preferences to choose which types of cookies to accept</li>
                                        </ul>
                                        <p className="text-sm md:text-base leading-relaxed text-neutral-700 mt-3">
                                            You can change your cookie preferences at any time by clicking "Cookie Settings" in the footer of our website.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-lg md:text-xl font-semibold text-neutral-900 mb-3">
                                            Browser Settings:
                                        </h3>
                                        <p className="text-sm md:text-base leading-relaxed text-neutral-700">
                                            You can also instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-lg md:text-xl font-semibold text-neutral-900 mb-3">
                                            Data Storage:
                                        </h3>
                                        <p className="text-sm md:text-base leading-relaxed text-neutral-700">
                                            Cookie data is stored in your browser's local storage. When you withdraw consent or reject cookies, all tracking data is removed from your device.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 mb-4">
                                    11. Changes to This Policy
                                </h2>
                                <p className="text-sm md:text-base leading-relaxed text-neutral-700">
                                    We may update this Privacy Policy. The "Last Updated" date will indicate when changes were made. We will notify you of any material changes by posting the new Policy on this site.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 mb-4">
                                    12. Contact Us
                                </h2>
                                <p className="text-sm md:text-base leading-relaxed text-neutral-700">
                                    If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:privacy@sapic.dev" className="text-blue-4 hover:text-blue-5 underline">privacy@sapic.dev</a>.
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
            </LayoutContainer>
        </div>
    );
};

