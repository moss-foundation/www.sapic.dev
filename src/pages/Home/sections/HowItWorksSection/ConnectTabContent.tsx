import SimpleButton from "@/components/SimpleButton";
import Tag from "@/components/Tag";
import GitHubIcon from "@/icons/GitHub";
import GitLabIcon from "@/icons/GitLab";

const ConnectTabContent = () => {
    return (
        <div className="flex flex-col gap-y-8">
            <p className="text-pretty text-base leading-relaxed text-balance text-neutral-900 pr-10">
                Connect your <span className="underline decoration-blue-500 decoration-2 underline-offset-5">backends</span>  where you store contracts, project stack state, secrets, and more.
                You can start fully locally today and later link a Git repository, remote state storage, and secret storage.
                Everything is set up in just a couple of clicks.
            </p>
            <div className="w-full max-h-[50vh] overflow-y-auto relative [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                <div className="grid grid-cols-2 gap-x-10 gap-y-8">
                    <div className="flex flex-col gap-y-1.5">
                        <p className="text-neutral-900 text-base md:text-lg font-medium">VCS</p>
                        <p className="text-neutral-600 text-sm text-balance">Store contracts where your team works. Connect a repository — and Git becomes the source of truth.</p>
                        <div className="flex flex-row gap-x-1.5 mt-1.5">
                            <Tag label="GitHub" leadingIcon={<GitHubIcon />} />
                            <Tag label="GitLab" leadingIcon={<GitLabIcon />} />
                            <Tag label="Bitbucket" variant="pending" tooltip={{ text: "Coming soon", position: "bottom" }} />
                            <Tag label="Other" variant="placeholder" />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex flex-col gap-y-1.5">
                            <p className="text-neutral-900 text-base md:text-lg font-medium">State</p>
                            <p className="text-neutral-600 text-sm text-balance">Choose where to store your workspace state and plans.</p>
                            <div className="flex flex-row gap-x-1.5 mt-1.5">
                                <Tag label="Local" tooltip={{ text: "Default", position: "bottom" }} />
                                <Tag label="Cloud" />
                                <Tag label="AWS S3 Bucket" />
                                <Tag label="Cloudflare R2 Bucket" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col col-span-2">
                        <div className="flex flex-col gap-y-1.5">
                            <p className="text-neutral-900 text-base md:text-lg font-medium">Vault</p>
                            <p className="text-neutral-600 text-sm text-balance">Secrets and tokens stay under your control. Pick a storage option.</p>
                            <div className="flex flex-row gap-x-1.5 mt-1.5">
                                <Tag label="Local" />
                                <Tag label="AWS Secret Manager" variant="pending" />
                                <Tag label="Azure Key Vault" variant="pending" />
                                <Tag label="Other" variant="placeholder" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex flex-col gap-y-1.5">
                            <p className="text-neutral-900 text-base md:text-lg font-medium">What else?</p>
                            <p className="text-neutral-600 text-sm text-balance">
                                Let us know what else you'd like by adding a ticket to our roadmap.
                            </p>
                            <div className="flex flex-row items-center gap-x-2.5 mt-2">
                                <SimpleButton variant="primary" size="small">
                                    Explore our roadmap
                                </SimpleButton>
                                <p className="text-neutral-600 text-xs">Or</p>
                                <SimpleButton variant="default" size="small">
                                    Join our Discord community
                                </SimpleButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConnectTabContent;


