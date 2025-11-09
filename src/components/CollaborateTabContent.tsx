import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import Tag from "./Tag";
import GitHubIcon from "@/icons/GitHub";
import GitLabIcon from "@/icons/GitLab";
import CollaborativeCursor from "./CollaborativeCursor";
import InfoIcon from "@/icons/Info";

const CollaborateTabContent = () => {
    const [myCursorPos, setMyCursorPos] = useState({ x: 0, y: 0 });
    const [teammatePos, setTeammatePos] = useState({ x: 0, y: 0 });
    const [initialPositionsSet, setInitialPositionsSet] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    const leftBlockRef = useRef<HTMLDivElement>(null);
    const rightBlockRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!isVisible || !leftBlockRef.current || !rightBlockRef.current) return;

        const updatePositions = () => {
            if (!leftBlockRef.current || !rightBlockRef.current) return;

            const leftRect = leftBlockRef.current.getBoundingClientRect();
            const rightRect = rightBlockRef.current.getBoundingClientRect();

            if (leftRect.width === 0 || rightRect.width === 0) return;

            const leftCenterX = leftRect.left + leftRect.width / 2;
            const leftCenterY = leftRect.top + leftRect.height / 2;
            const rightCenterX = rightRect.left + rightRect.width / 2;
            const rightCenterY = rightRect.top + rightRect.height / 2;

            setMyCursorPos({ x: leftCenterX, y: leftCenterY });
            setTeammatePos({ x: rightCenterX, y: rightCenterY });

            if (!initialPositionsSet) {
                setInitialPositionsSet(true);
            }
        };

        const timer = setTimeout(updatePositions, 100);
        return () => clearTimeout(timer);
    }, [isVisible, initialPositionsSet]);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const checkVisibility = () => {
            if (!container) return;

            const parent = container.parentElement;
            if (!parent) {
                setIsVisible(true);
                return;
            }

            const computedStyle = window.getComputedStyle(parent);
            const pointerEvents = computedStyle.pointerEvents;
            const opacity = parseFloat(computedStyle.opacity);

            setIsVisible(pointerEvents === 'auto' && opacity >= 0.99);
        };

        const interval = setInterval(checkVisibility, 300);
        setTimeout(checkVisibility, 100);

        return () => clearInterval(interval);
    }, []);

    const handleLeftMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const relativeX = e.clientX - rect.left;
        const relativeY = e.clientY - rect.top;

        setMyCursorPos({ x: e.clientX, y: e.clientY });

        if (rightBlockRef.current) {
            const rightRect = rightBlockRef.current.getBoundingClientRect();
            setTeammatePos({
                x: rightRect.left + relativeX,
                y: rightRect.top + relativeY
            });
        }
    };

    return (
        <div className="flex flex-col gap-y-8">
            <p className="text-pretty text-base leading-relaxed text-balance text-neutral-900 pr-10">
                Work together in real time and/or through Git: remote workspaces for collaborative editing and a review flow for plans. Everything is built in.
            </p>
            <div ref={containerRef} className="flex divide-x divide-neutral-200 gap-x-20">
                <div
                    ref={leftBlockRef}
                    className="w-1/2 max-h-[50vh] overflow-y-auto relative [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] cursor-none"
                    onMouseMove={handleLeftMouseMove}
                >
                    <div className="flex flex-col divide-y divide-neutral-200">
                        <div className="flex flex-col gap-y-1.5 py-8">
                            <div className="mb-2.5 flex h-6 w-6 items-center justify-center rounded-full bg-purple-600">
                                <span className="text-xs font-semibold text-white">1</span>
                            </div>
                            <h3 className="mb-1 text-lg font-semibold text-gray-900">VCS Collaboration</h3>
                            <p className="text-sm text-neutral-600">
                                This is the basic and always-available way to collaborate, with native Git integration
                                built into the core of the app, supporting branches, code owners, and checks.
                            </p>

                            <div className="flex flex-row gap-x-1.5 mt-1.5">
                                <Tag label="GitHub" leadingIcon={<GitHubIcon />} variant="default" />
                                <Tag label="GitLab" leadingIcon={<GitLabIcon />} variant="default" />
                                <Tag label="Bitbucket" variant="pending" tooltip={{ text: "Coming soon", position: "bottom" }} />
                                <Tag label="Other" variant="placeholder" />
                            </div>

                            <div className="mt-5 flex max-w-full md:max-w-2xl gap-3 md:gap-4 pr-10">
                                <div className="w-1 flex-shrink-0 rounded-full bg-blue-4"></div>
                                <p className="text-pretty text-sm text-neutral-500">
                                    Collaboration through Git is always available with a first-class UI and is completely free forever!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div ref={rightBlockRef} className="w-1/2 max-h-[50vh] overflow-hidden">
                    <div className="flex flex-col gap-y-1.5 py-8">
                        <div className="mb-2.5 flex h-6 w-6 items-center justify-center rounded-full bg-lime-600">
                            <span className="text-xs font-semibold text-white">2</span>
                        </div>
                        <h3 className="mb-1 text-lg font-semibold text-gray-900">Cloud Collaboration</h3>
                        <p className="text-sm text-neutral-600">
                            An advanced collaboration mode for larger teams. Remote workspaces with roles and contract ownership.
                            You can see who is editing what, and changes sync instantly. Work locally and connect to the shared workspace when needed.
                        </p>
                        <div className="flex flex-row gap-x-1.5 mt-1.5">
                            <Tag label="Local" tooltip={{ text: "Default", position: "bottom" }} />
                            <Tag label="Cloud" />
                            <Tag label="AWS S3 Bucket" />
                            <Tag label="Cloudflare R2 Bucket" />
                        </div>
                        <div className="flex flex-row items-center gap-x-1 mt-4">
                            <InfoIcon />
                            <p className="text-xs text-neutral-600">You can connect your own cloud <span className="underline">backend</span> or use our cloud solution.</p>
                        </div>
                    </div>
                </div>
            </div>

            {typeof document !== 'undefined' && createPortal(
                <>
                    <CollaborativeCursor
                        x={myCursorPos.x}
                        y={myCursorPos.y}
                        name="You"
                        color="#3574F0"
                        isVisible={initialPositionsSet && isVisible}
                    />
                    <CollaborativeCursor
                        x={teammatePos.x}
                        y={teammatePos.y}
                        name="Alex"
                        color="#fe9a00"
                        isVisible={initialPositionsSet && isVisible}
                    />
                </>,
                document.body
            )}
        </div>
    );
};

export default CollaborateTabContent;
