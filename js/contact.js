"use strict";

// Contact-page drafts, motion controls, scroll reveals and character counting.
// This static site prepares message drafts; visitors send them in the selected app.
document.addEventListener("DOMContentLoaded", () => {
  const page = document.querySelector(".contact-page");
  if (!page) return;
  page.classList.add("contact-motion-ready");

  const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
  const toggle = page.querySelector(".contact-motion-toggle");
  const reveals = page.querySelectorAll("[data-contact-reveal]");
  let paused = false;
  let observer;

  function updateMotion() {
    const stop = paused || preference.matches;
    page.classList.toggle("contact-motion-paused", stop);
    toggle.hidden = preference.matches;
    toggle.setAttribute("aria-pressed", String(paused));
    toggle.querySelector("[data-motion-label]").textContent = paused
      ? "Resume animation"
      : "Pause animation";
    toggle.querySelector("[data-motion-symbol]").textContent = paused
      ? "▶"
      : "Ⅱ";
    if (stop) {
      reveals.forEach((element) => element.classList.add("is-visible"));
      observer?.disconnect();
    }
  }

  if (!preference.matches && "IntersectionObserver" in window) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.1 },
    );
    reveals.forEach((element) => observer.observe(element));
    page.classList.add("contact-reveal-ready");
    page.addEventListener("focusin", (event) => {
      event.target
        .closest("[data-contact-reveal]")
        ?.classList.add("is-visible");
    });
  }
  toggle.addEventListener("click", () => {
    paused = !paused;
    updateMotion();
  });
  preference.addEventListener("change", updateMotion);
  document.addEventListener("visibilitychange", () => {
    page.classList.toggle("contact-tab-hidden", document.hidden);
  });
  updateMotion();

  const message = page.querySelector("#message");
  const count = page.querySelector("#message-count");
  if (message && count) {
    const updateCount = () => {
      count.textContent = `${message.value.length} / ${message.maxLength}`;
    };
    message.addEventListener("input", updateCount);
    window.addEventListener("pageshow", updateCount);
    updateCount();
  }

  const form = document.querySelector("#contactForm");
  if (!form) return;

  const status = document.querySelector("#formStatus");
  const destinationEmail = "thinkficialengineeringnetwork@gmail.com";
  const destinationWhatsApp = "2349082965308";
  const fields = ["name", "email", "phone", "message"];

  function validateAndRead() {
    for (const id of fields) {
      const field = form.elements.namedItem(id);
      field.setCustomValidity("");
      if (!field.value.trim())
        field.setCustomValidity("Please complete this field.");
    }

    if (!form.reportValidity()) return null;
    return Object.fromEntries(
      fields.map((id) => [id, form.elements.namedItem(id).value.trim()]),
    );
  }

  form.addEventListener("input", (event) => {
    if (
      event.target instanceof HTMLInputElement ||
      event.target instanceof HTMLTextAreaElement
    ) {
      event.target.setCustomValidity("");
    }
  });

  function buildMessage(data) {
    return (
      `Hello Thinkficial Engineering Network,\n\n` +
      `I am contacting you through your website.\n\n` +
      `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\n\n` +
      `Message:\n${data.message}`
    );
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = validateAndRead();
    if (!data) return;

    const subject = encodeURIComponent("TEN Website Enquiry");
    const body = encodeURIComponent(buildMessage(data));
    status.textContent =
      "Your email application will open. Please review and send the draft yourself.";
    window.location.href = `mailto:${destinationEmail}?subject=${subject}&body=${body}`;
  });

  document.querySelector("#whatsappBtn")?.addEventListener("click", () => {
    const data = validateAndRead();
    if (!data) return;

    const message = encodeURIComponent(buildMessage(data));
    status.textContent =
      "WhatsApp will open with a prepared message. Please press Send there.";
    const url = `https://wa.me/${destinationWhatsApp}?text=${message}`;
    window.open(url, "_blank", "noopener,noreferrer");
  });
});
