export const scrollToSection = (sectionId: string) => {
    const id = sectionId.replace("#", "");
    const isHomePage = window.location.pathname === "/";

    if (isHomePage) {
        const element = document.getElementById(id);
        if (element) {
            window.history.pushState(null, "", `#${id}`);

            setTimeout(() => {
                element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }, 0);
        }
    } else {
        window.location.href = `/#${id}`;
    }
};

export const handleHashNavigation = () => {
    const hash = window.location.hash;
    if (hash) {
        const id = hash.replace("#", "");
        setTimeout(() => {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        }, 100);
    }
};
