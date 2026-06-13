/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");

        const icon = menuBtn.querySelector("i");

        if (mobileMenu.classList.contains("hidden")) {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        } else {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        }
    });
}

/* =========================
   CLOSE MOBILE MENU
========================= */

document.querySelectorAll("#mobile-menu a").forEach(link => {
    link.addEventListener("click", () => {

        mobileMenu.classList.add("hidden");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    });
});

/* =========================
   ACTIVE NAVIGATION
========================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

function activeNavigation() {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 120;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.classList.remove(
            "text-blue-400"
        );

        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {
            link.classList.add(
                "text-blue-400"
            );
        }
    });
}

window.addEventListener(
    "scroll",
    activeNavigation
);

/* =========================
   NAVBAR SCROLL EFFECT
========================= */

const header =
    document.querySelector("header");

window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 50) {

            header.style.backdropFilter =
                "blur(25px)";

            header.style.background =
                "rgba(2,6,23,.85)";
        } else {

            header.style.background =
                "rgba(2,6,23,.70)";
        }
    }
);

/* =========================
   PARALLAX HERO IMAGE
========================= */

const profileImage =
    document.querySelector(
        ".profile-image"
    );

window.addEventListener(
    "scroll",
    () => {

        if (!profileImage) return;

        const offset =
            window.pageYOffset * 0.08;

        profileImage.style.transform =
            `translateY(${offset}px)`;
    }
);

/* =========================
   PROJECT HOVER GLOW
========================= */

const projectCards =
    document.querySelectorAll(
        ".project-card"
    );

projectCards.forEach(card => {

    card.addEventListener(
        "mousemove",
        e => {

            const rect =
                card.getBoundingClientRect();

            const x =
                e.clientX - rect.left;

            const y =
                e.clientY - rect.top;

            card.style.background =
                `
                radial-gradient(
                circle at ${x}px ${y}px,
                rgba(59,130,246,.15),
                #0f172a 40%
                )
                `;
        }
    );

    card.addEventListener(
        "mouseleave",
        () => {

            card.style.background =
                "#0f172a";
        }
    );
});

/* =========================
   REVEAL COUNTER
========================= */

const counters =
    document.querySelectorAll(
        "[data-counter]"
    );

const counterObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    const counter =
                        entry.target;

                    const target =
                        +counter.dataset.counter;

                    let current = 0;

                    const increment =
                        target / 50;

                    const updateCounter =
                        () => {

                            if (
                                current <
                                target
                            ) {

                                current +=
                                    increment;

                                counter.innerText =
                                    Math.ceil(
                                        current
                                    );

                                requestAnimationFrame(
                                    updateCounter
                                );

                            } else {

                                counter.innerText =
                                    target;
                            }
                        };

                    updateCounter();

                    counterObserver.unobserve(
                        counter
                    );
                }
            });
        },
        {
            threshold: 0.5
        }
    );

counters.forEach(counter => {
    counterObserver.observe(counter);
});

/* =========================
   TYPING EFFECT
========================= */

const typingElement =
    document.querySelector(
        "[data-typing]"
    );

if (typingElement) {

    const texts = [
        "Web Developer",
        "Laravel Developer",
        "Front-End Developer",
        "Full Stack Developer"
    ];

    let textIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {

        const currentText =
            texts[textIndex];

        if (!deleting) {

            typingElement.textContent =
                currentText.substring(
                    0,
                    charIndex + 1
                );

            charIndex++;

            if (
                charIndex ===
                currentText.length
            ) {

                deleting = true;

                setTimeout(
                    typeEffect,
                    1500
                );

                return;
            }

        } else {

            typingElement.textContent =
                currentText.substring(
                    0,
                    charIndex - 1
                );

            charIndex--;

            if (charIndex === 0) {

                deleting = false;

                textIndex =
                    (textIndex + 1) %
                    texts.length;
            }
        }

        setTimeout(
            typeEffect,
            deleting ? 50 : 100
        );
    }

    typeEffect();
}

/* =========================
   SCROLL TO TOP BUTTON
========================= */

const scrollBtn =
    document.createElement("button");

scrollBtn.innerHTML =
    '<i class="fa-solid fa-arrow-up"></i>';

scrollBtn.className =
    `
    fixed
    bottom-6
    right-6
    w-12
    h-12
    rounded-full
    bg-blue-600
    text-white
    shadow-lg
    z-50
    opacity-0
    pointer-events-none
    transition-all
    duration-300
`;

document.body.appendChild(
    scrollBtn
);

window.addEventListener(
    "scroll",
    () => {

        if (
            window.scrollY > 500
        ) {

            scrollBtn.classList.remove(
                "opacity-0",
                "pointer-events-none"
            );

        } else {

            scrollBtn.classList.add(
                "opacity-0",
                "pointer-events-none"
            );
        }
    }
);

scrollBtn.addEventListener(
    "click",
    () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
);

/* =========================
   PRELOADER FADE
========================= */

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "loaded"
        );
    }
);

console.log(
    "%cPortfolio by Gies Septiara",
    "color:#60a5fa;font-size:16px;font-weight:bold;"
);