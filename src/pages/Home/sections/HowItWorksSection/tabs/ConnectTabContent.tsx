import Button from "@/components/ui/Button";
import Tag from "@/components/ui/Tag";
import GitHubIcon from "@/icons/GitHub";
import GitLabIcon from "@/icons/GitLab";
import { useNavigate } from "react-router-dom";
import { Underlined } from "@/components";

const ConnectTabContent = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col gap-y-6 lg:gap-y-8">
            <p className="text-pretty text-sm md:text-base leading-relaxed text-balance text-neutral-900 lg:pr-10">
                Connect your <Underlined text="backends" color="blue" style="solid" tooltip="Backends are the services where you store contracts, project stack state, secrets, and more." /> where you store contracts, project stack state, secrets, and more.
                You can start fully locally today and later link a Git repository, remote state storage, and secret storage.
                Everything is set up in just a couple of clicks.
            </p>
            <div className="w-full lg:max-h-[50vh] overflow-y-auto relative [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-8 lg:gap-x-10 md:gap-y-6 lg:gap-y-8">
                    <div className="flex flex-col gap-y-1.5 lg:gap-y-2">
                        <p className="text-neutral-900 text-base md:text-lg font-medium">VCS</p>
                        <p className="text-neutral-600 text-sm text-balance">Store contracts where your team works. Connect a repository — and Git becomes the source of truth.</p>
                        <div className="flex flex-row flex-wrap gap-1.5 mt-1.5">
                            <Tag label="GitHub" leadingIcon={<GitHubIcon />} />
                            <Tag label="GitLab" leadingIcon={<GitLabIcon />} />
                            <Tag label="Bitbucket" variant="pending" tooltip={{ text: "Coming soon", position: "bottom" }} />
                            <Tag label="Other" variant="placeholder" />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex flex-col gap-y-1.5 lg:gap-y-2">
                            <p className="text-neutral-900 text-base md:text-lg font-medium">State</p>
                            <p className="text-neutral-600 text-sm text-balance">Choose where to store your workspace state and plans.</p>
                            <div className="flex flex-row flex-wrap gap-1.5 mt-1.5">
                                <Tag label="Local" tooltip={{ text: "Default", position: "bottom" }} />
                                <Tag label="Cloud" variant="pending" tooltip={{ text: "Coming soon", position: "bottom" }} />
                                <Tag label="AWS S3 Bucket" variant="pending" tooltip={{ text: "Coming soon", position: "bottom" }} />
                                <Tag label="Cloudflare R2 Bucket" variant="pending" tooltip={{ text: "Coming soon", position: "bottom" }} />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:col-span-2">
                        <div className="flex flex-col gap-y-1.5 lg:gap-y-2">
                            <p className="text-neutral-900 text-base md:text-lg font-medium">Vault</p>
                            <p className="text-neutral-600 text-sm text-balance">Secrets and tokens stay under your control. Pick a storage option.</p>
                            <div className="flex flex-row flex-wrap gap-1.5 mt-1.5">
                                <Tag label="Local" />
                                <Tag label="AWS Secret Manager" variant="pending" tooltip={{ text: "Coming soon", position: "bottom" }} />
                                <Tag label="Azure Key Vault" variant="pending" tooltip={{ text: "Coming soon", position: "bottom" }} />
                                <Tag label="Other" variant="placeholder" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex flex-col gap-y-1.5 lg:gap-y-2">
                            <p className="text-neutral-900 text-base md:text-lg font-medium">What else?</p>
                            <p className="text-neutral-600 text-sm text-balance">
                                Let us know what else you'd like by adding a ticket to our roadmap.
                            </p>
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-x-2.5 mt-2">
                                <Button
                                    variant="primary"
                                    size="small"
                                    className="self-start w-full sm:w-auto"
                                    onClick={() => navigate("/roadmap")}
                                >
                                    Explore our roadmap
                                </Button>
                                <p className="text-neutral-600 text-xs hidden md:block">Or</p>
                                <Button variant="default" size="small" className="self-start w-full sm:w-auto">
                                    Join our Discord community
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConnectTabContent;


