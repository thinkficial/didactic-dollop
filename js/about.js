"use strict";

(() => {
  const page = document.querySelector(".about-page #main-content");

  if (!page) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  const revealTargets = page.querySelectorAll(
    ".page-hero, .about-layout, .section-heading, .grid .card, .highlight-panel, .cta",
  );

  if (!reduceMotion.matches && "IntersectionObserver" in window) {
    document.documentElement.classList.add("about-page-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");

          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
      },
    );

    revealTargets.forEach((element) => {
      element.setAttribute("data-about-reveal", "");

      observer.observe(element);
    });
  }
})();
