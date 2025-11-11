import LayoutContainer from "@/components/containers/LayoutContainer";
import FadeInElement from "@/components/FadeInElement";

export const RoadmapPage = () => {
    return (
        <LayoutContainer>
            <div className="py-12 md:py-16 lg:py-20">
                <FadeInElement>
                    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center max-w-2xl mx-auto">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold font-serif !leading-[1.2] tracking-tight text-neutral-900 mb-6">
                            Roadmap
                        </h1>
                        <p className="text-pretty text-base md:text-lg leading-relaxed text-neutral-600">
                            Our roadmap will be available here soon. Stay tuned for updates on upcoming features and improvements!
                        </p>
                    </div>
                </FadeInElement>
            </div>
        </LayoutContainer>
    );
};

