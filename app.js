
"use strict";

/* TEN ACADEMY — SHARED INTERACTIONS */

document.documentElement.classList.add("js-motion");

document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    function closeMenu() {
        if (!menuButton || !navLinks) return;

        navLinks.classList.remove("open", "show");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation menu");
        menuButton.textContent = "☰";
    }

    function toggleMenu() {
        if (!menuButton || !navLinks) return;

        const opening = !navLinks.classList.contains("open");

        navLinks.classList.toggle("open", opening);
        navLinks.classList.toggle("show", opening);
        menuButton.setAttribute("aria-expanded", String(opening));
        menuButton.setAttribute(
            "aria-label",
            opening ? "Close navigation menu" : "Open navigation menu"
        );
        menuButton.textContent = opening ? "×" : "☰";
    }

    menuButton?.addEventListener("click", toggleMenu);

    navLinks?.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") closeMenu();
    });

    document.addEventListener("click", event => {
        if (
            navLinks &&
            menuButton &&
            !navLinks.contains(event.target) &&
            !menuButton.contains(event.target)
        ) {
            closeMenu();
        }
    });

    // Highlight the navigation link for the current page.
    const currentPage =
        location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll(".nav-links a").forEach(link => {
        const target = new URL(link.href, location.href);
        const targetPage = target.pathname.split("/").pop();

        if (targetPage === currentPage) {
            link.classList.add("active");
            link.setAttribute("aria-current", "page");
        }
    });

    // Automatically update the footer year.
    document.querySelectorAll("[data-year]").forEach(element => {
        element.textContent = new Date().getFullYear();
    });

    // Reveal sections as they enter the viewport.
    const revealElements = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });

        revealElements.forEach(element => observer.observe(element));
    } else {
        revealElements.forEach(element =>
            element.classList.add("is-visible")
        );
    }

    // Contact form actions.
    const form = document.getElementById("contactForm");

    if (form) {
        const status = document.getElementById("formStatus");
        const emailAddress =
            "thinkficialengineeringnetwork@gmail.com";
        const whatsappNumber = "2349082965308";

        function getDetails() {
            return {
                name: document.getElementById("name")?.value.trim() || "",
                email: document.getElementById("email")?.value.trim() || "",
                phone: document.getElementById("phone")?.value.trim() || "",
                message:
                    document.getElementById("message")?.value.trim() || ""
            };
        }

        function formatMessage(d) {
            return (
                "Hello Thinkficial Engineering Network,\n\n" +
                "I am contacting you through your website.\n\n" +
                "Name: " + d.name + "\n" +
                "Email: " + d.email + "\n" +
                "Phone: " + d.phone + "\n\n" +
                "Message:\n" + d.message
            );
        }

        function setStatus(message) {
            if (status) status.textContent = message;
        }

        form.addEventListener("submit", event => {
            event.preventDefault();

            if (!form.reportValidity()) return;

            const d = getDetails();
            const subject = "Website Enquiry - TEN Academy";

            const url =
                "mailto:" + emailAddress +
                "?subject=" + encodeURIComponent(subject) +
                "&body=" + encodeURIComponent(formatMessage(d));

            setStatus(
                "Opening your email application. Please review and send your message there."
            );

            window.location.href = url;
        });

        document.getElementById("whatsappBtn")?.addEventListener(
            "click",
            () => {
                if (!form.reportValidity()) return;

                const d = getDetails();

                if (!d.name || !d.email || !d.phone || !d.message) {
                    setStatus("Please complete all fields first.");
                    return;
                }

                const url =
                    "https://wa.me/" + whatsappNumber +
                    "?text=" + encodeURIComponent(formatMessage(d));

                setStatus("Opening WhatsApp with your message prepared.");

                window.open(url, "_blank", "noopener,noreferrer");
            }
        );
    }
});