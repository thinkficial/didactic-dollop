/*
  TEN Services — 2026
  Scroll reveal animations
*/

(() => {
  const items = document.querySelectorAll(
    "[data-sv-reveal]"
  );

  if (
    !items.length ||
    !("IntersectionObserver" in window) ||
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches
  ) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("sv-visible");
          observer.unobserve(entry.target);
        }
      }
    },
    {
      threshold: 0.08,
      rootMargin: "0px 0px 40px 0px"
    }
  );

  document.documentElement.classList.add("sv-js");

  items.forEach((item) => {
    observer.observe(item);
  });
})();