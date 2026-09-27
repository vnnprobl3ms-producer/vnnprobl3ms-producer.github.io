const init = () => {
    initRevealAnimations();
    initNavigation();
};

const initRevealAnimations = () => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;

                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            });
        },
        {
            threshold: 0.15
        }
    );

    elements.forEach((element) => {
        observer.observe(element);
    });
};

const initNavigation = () => {
    const header = document.querySelector(".site-header");

    if (!header) return;

    window.addEventListener(
        "scroll",
        () => {
            header.classList.toggle(
                "is-scrolled",
                window.scrollY > 50
            );
        },
        { passive: true }
    );
};

document.addEventListener("DOMContentLoaded", init);
