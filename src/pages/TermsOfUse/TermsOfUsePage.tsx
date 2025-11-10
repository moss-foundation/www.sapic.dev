import LayoutContainer from "@/components/LayoutContainer";
import { useEffect } from "react";

export const TermsOfUsePage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const currentDate = new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });

    return (
        <div className="min-h-screen bg-white py-12 md:py-16 lg:py-20">
            <LayoutContainer>
                <div className="max-w-4xl mx-auto">
                    <div className="mb-8 md:mb-12">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold font-serif !leading-[1.2] tracking-tight text-neutral-900 mb-4">
                            Sapic Terms of Use
                        </h1>
                        <p className="text-sm md:text-base text-neutral-600">
                            Last Updated: {currentDate}
                        </p>
                    </div>

                    <div className="prose prose-neutral max-w-none">
                        <div className="space-y-8 md:space-y-10">
                            <section>
                                <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 mb-4">
                                    1. Agreement to Terms
                                </h2>
                                <p className="text-sm md:text-base leading-relaxed text-neutral-700">
                                    These Terms of Use ("Terms") govern your access to and use of the Sapic website, waitlist, and the Sapic platform (the "Service"), provided by Sapic AS ("we," "us," "our"), a company registered in Norway. By accessing our website, joining our waitlist, or using our Service, you agree to be bound by these Terms. If you are using the Service on behalf of a company or other entity, you represent you have the authority to bind them to these Terms.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 mb-4">
                                    2. The Sapic Service
                                </h2>
                                <p className="text-sm md:text-base leading-relaxed text-neutral-700">
                                    Sapic is a unified, AI-powered console for designing, running, and managing modern backend cloud resources. The Service includes features for integration testing, environment management, resource policy enforcement, observability, and mocking, all integrated with Git and powered by AI.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 mb-4">
                                    3. Eligibility
                                </h2>
                                <p className="text-sm md:text-base leading-relaxed text-neutral-700">
                                    You must be at least 16 years old to use our Service. By using the Service, you represent and warrant that you have the legal capacity to form a binding contract.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 mb-4">
                                    4. Waitlist and Accounts
                                </h2>
                                <p className="text-sm md:text-base leading-relaxed text-neutral-700">
                                    To access the full Service, you may initially join a waitlist. You agree to provide accurate, current, and complete information during the waitlist and registration process. You are responsible for safeguarding any account credentials and for all activities that occur under your account.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 mb-4">
                                    5. Intellectual Property Rights
                                </h2>
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="text-lg md:text-xl font-semibold text-neutral-900 mb-3">
                                            5.1. Our Rights.
                                        </h3>
                                        <p className="text-sm md:text-base leading-relaxed text-neutral-700">
                                            The Service, including its "look and feel," source code, databases, functionality, software, website designs, and all other elements, are owned by Sapic AS and are protected by copyright, trademark, and other laws. The "Sapic" name and logo are our trademarks.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-lg md:text-xl font-semibold text-neutral-900 mb-3">
                                            5.2. Your Data.
                                        </h3>
                                        <p className="text-sm md:text-base leading-relaxed text-neutral-700">
                                            You retain all intellectual property rights in the data, specifications, code, and configurations you submit to the Service ("Customer Data"). By submitting Customer Data, you grant Sapic AS a limited, worldwide, non-exclusive license to use, host, and process this data solely for the purpose of providing and improving the Service to you.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 mb-4">
                                    6. Acceptable Use
                                </h2>
                                <p className="text-sm md:text-base leading-relaxed text-neutral-700 mb-4">
                                    You agree not to, and will not assist others to:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-sm md:text-base leading-relaxed text-neutral-700 ml-4">
                                    <li>Use the Service for any illegal purpose or in violation of any laws.</li>
                                    <li>Probe, scan, or test the vulnerability of any system or network.</li>
                                    <li>Bypass or breach any security or authentication measures.</li>
                                    <li>Interfere with or disrupt the integrity or performance of the Service.</li>
                                    <li>Use the Service to generate or disseminate harmful or fraudulent content.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 mb-4">
                                    7. API Terms
                                </h2>
                                <p className="text-sm md:text-base leading-relaxed text-neutral-700">
                                    If we provide an API for the Service, its use is subject to these Terms and any additional API-specific terms we may provide. You may not use the API in a manner that exceeds rate limits, or that compromises the stability of our Service.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 mb-4">
                                    8. Termination
                                </h2>
                                <p className="text-sm md:text-base leading-relaxed text-neutral-700">
                                    We may suspend or terminate your access to the Service immediately, without prior notice, if you breach these Terms. You may terminate your account at any time.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 mb-4">
                                    9. Disclaimer of Warranties
                                </h2>
                                <p className="text-sm md:text-base leading-relaxed text-neutral-700 font-medium">
                                    THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMISSIBLE BY LAW, SAPIC AS DISCLAIMS ALL WARRANTIES, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 mb-4">
                                    10. Limitation of Liability
                                </h2>
                                <p className="text-sm md:text-base leading-relaxed text-neutral-700 font-medium">
                                    TO THE FULLEST EXTENT PERMITTED BY LAW, SAPIC AS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR USE OF THE SERVICE.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 mb-4">
                                    11. Governing Law and Dispute Resolution
                                </h2>
                                <p className="text-sm md:text-base leading-relaxed text-neutral-700">
                                    These Terms and any action related thereto will be governed by the laws of Norway, without regard to its conflict of law provisions. Any dispute shall be settled exclusively by the courts of Oslo, Norway.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 mb-4">
                                    12. Changes to Terms
                                </h2>
                                <p className="text-sm md:text-base leading-relaxed text-neutral-700">
                                    We reserve the right to modify these Terms at any time. We will provide notice of changes by updating the "Last Updated" date. Your continued use of the Service after any change constitutes your acceptance of the new Terms.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 mb-4">
                                    13. Contact Us
                                </h2>
                                <p className="text-sm md:text-base leading-relaxed text-neutral-700">
                                    If you have any questions about these Terms, please contact us at: <a href="mailto:legal@sapic.com" className="text-blue-4 hover:text-blue-5 underline">legal@sapic.com</a>.
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
            </LayoutContainer>
        </div>
    );
};

