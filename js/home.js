"use strict";

// Loaded only by index.html. Shared navigation remains in main.js.
(() => {
  const home = document.querySelector(".home-page");
  if (!home) return;
  home.classList.add("home-motion-ready");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const motionButton = home.querySelector(".home-motion-toggle");
  const revealElements = home.querySelectorAll("[data-reveal]");
  let manuallyPaused = false;
  let observer;

  const updateMotion = () => {
    const paused = manuallyPaused || reducedMotion.matches;
    home.classList.toggle("home-motion-paused", paused);
    if (motionButton) {
      motionButton.hidden = reducedMotion.matches;
      motionButton.setAttribute("aria-pressed", String(manuallyPaused));
      motionButton.querySelector("[data-motion-label]").textContent =
        manuallyPaused ? "Resume animation" : "Pause animation";
      motionButton.querySelector(".home-pause-symbol").textContent =
        manuallyPaused ? "▶" : "Ⅱ";
    }
    if (paused) {
      // Finish the entrance so pausing never freezes the hero at partial opacity.
      home.classList.remove("home-enter");
      revealElements.forEach((element) => element.classList.add("is-visible"));
      observer?.disconnect();
    }
  };
  if (!reducedMotion.matches && "IntersectionObserver" in window) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12 },
    );
    revealElements.forEach((element) => observer.observe(element));
    home.classList.add("home-reveal-ready", "home-enter");
    home
      .querySelector(".home-network")
      ?.addEventListener("animationend", (event) => {
        if (event.animationName === "home-network-enter")
          home.classList.remove("home-enter");
      });
    home.addEventListener("focusin", (event) => {
      event.target.closest("[data-reveal]")?.classList.add("is-visible");
    });
  }
  motionButton?.addEventListener("click", () => {
    manuallyPaused = !manuallyPaused;
    updateMotion();
  });
  reducedMotion.addEventListener("change", updateMotion);
  updateMotion();
  document.addEventListener("visibilitychange", () => {
    home.classList.toggle("home-tab-hidden", document.hidden);
  });

  const track = home.querySelector(".home-service-track");
  const controls = home.querySelector(".home-slider-controls");
  if (!track || !controls) return;
  const cards = [...track.querySelectorAll(".home-service-card")];
  const previous = controls.querySelector('[data-slide="previous"]');
  const next = controls.querySelector('[data-slide="next"]');
  const status = controls.querySelector(".home-slider-status");
  let scrollFrame;

  const updateSlider = () => {
    const limit = track.scrollWidth - track.clientWidth;
    // Snap positions can retain a few pixels of padding after browser rounding.
    const edgeTolerance =
      Math.ceil(parseFloat(getComputedStyle(track).paddingLeft)) + 2;
    previous.disabled = track.scrollLeft <= edgeTolerance;
    next.disabled = track.scrollLeft >= limit - edgeTolerance;
    const bounds = track.getBoundingClientRect();
    const visible = cards
      .map((card, index) => ({ index, bounds: card.getBoundingClientRect() }))
      .filter(
        ({ bounds: cardBounds }) =>
          cardBounds.left >= bounds.left - 3 &&
          cardBounds.right <= bounds.right + 3,
      );
    const first = visible[0]?.index ?? 0;
    const last = visible.at(-1)?.index ?? first;
    const message =
      first === last
        ? `${first + 1} of ${cards.length}`
        : `${first + 1}–${last + 1} of ${cards.length}`;
    if (status.textContent !== message) status.textContent = message;
    controls.hidden = limit <= 3;
  };
  const slide = (direction) => {
    const distance =
      cards[0].getBoundingClientRect().width +
      parseFloat(getComputedStyle(track).columnGap);
    track.scrollBy({
      left: distance * direction,
      behavior: reducedMotion.matches ? "instant" : "smooth",
    });
  };
  previous.addEventListener("click", () => slide(-1));
  next.addEventListener("click", () => slide(1));
  track.addEventListener("keydown", (event) => {
    if (
      event.target !== track ||
      !["ArrowLeft", "ArrowRight"].includes(event.key)
    )
      return;
    event.preventDefault();
    slide(event.key === "ArrowLeft" ? -1 : 1);
  });
  track.addEventListener(
    "scroll",
    () => {
      cancelAnimationFrame(scrollFrame);
      scrollFrame = requestAnimationFrame(updateSlider);
    },
    { passive: true },
  );
  if ("ResizeObserver" in window)
    new ResizeObserver(updateSlider).observe(track);
  else window.addEventListener("resize", updateSlider);
  updateSlider();
})();
