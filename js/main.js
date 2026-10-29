"use strict";

// Resolve against this script, so imports also work under a GitHub Pages subpath.
(() => {
  const siteRoot = new URL("../", document.currentScript.src);
  document.documentElement.classList.add("js");

  async function loadLayout() {
    const slots = [
      ...document.querySelectorAll("[data-site-header], [data-site-footer]"),
    ];
    if (!slots.length) return;
    try {
      const response = await fetch(new URL("components/layout.html", siteRoot));
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const layout = new DOMParser().parseFromString(
        await response.text(),
        "text/html",
      );
      // Validate both templates before replacing either fallback.
      const replacements = slots.map((slot) => {
        const kind = slot.hasAttribute("data-site-header")
          ? "header"
          : "footer";
        const template = layout.querySelector(`#site-${kind}-template`);
        const component = template?.content.firstElementChild?.cloneNode(true);
        if (!component || component.tagName.toLowerCase() !== kind)
          throw new Error(`Missing ${kind} template`);
        component.querySelectorAll("[href], [src]").forEach((element) => {
          for (const attribute of ["href", "src"]) {
            const value = element.getAttribute(attribute);
            if (value && !value.startsWith("#"))
              element.setAttribute(attribute, new URL(value, siteRoot).href);
          }
        });
        const contact = component.querySelector("[data-contact-link]");
        if (
          contact &&
          location.pathname.endsWith("/contact.html") &&
          document.querySelector("#enquiry-form")
        )
          contact.setAttribute("href", "#enquiry-form");
        return { slot, component };
      });
      replacements.forEach(({ slot, component }) =>
        slot.replaceWith(component),
      );
    } catch (error) {
      // Keep the fallback links usable if offline, opened via file://, or unavailable.
      console.warn(
        "Shared layout could not load; using fallback links.",
        error,
      );
    }
  }

  function initializeNavigation() {
    const menuButton = document.querySelector(".shared-menu, .menu-btn");
    const navigation = document.querySelector("#site-navigation");
    const closeMenu = (restoreFocus = false) => {
      if (!menuButton || !navigation) return;
      const wasOpen = navigation.classList.contains("is-open");
      navigation.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation menu");
      menuButton.textContent = "☰";
      if (restoreFocus && wasOpen) menuButton.focus();
    };
    menuButton?.addEventListener("click", () => {
      if (!navigation) return;
      const isOpen = navigation.classList.toggle("is-open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu",
      );
      menuButton.textContent = isOpen ? "×" : "☰";
    });
    navigation
      ?.querySelectorAll("a")
      .forEach((link) => link.addEventListener("click", () => closeMenu()));
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu(true);
    });
    document.addEventListener("click", (event) => {
      if (
        navigation &&
        menuButton &&
        !navigation.contains(event.target) &&
        !menuButton.contains(event.target)
      )
        closeMenu();
    });
    const current = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll("#site-navigation a").forEach((link) => {
      const target =
        new URL(link.href, location.href).pathname.split("/").pop() ||
        "index.html";
      link.removeAttribute("aria-current");
      if (target === current) link.setAttribute("aria-current", "page");
    });
    document.querySelectorAll("[data-year]").forEach((element) => {
      element.textContent = String(new Date().getFullYear());
    });
  }

  // Follow the existing page animation controls without coupling their scripts to imports.
  function initializeLayoutMotion() {
    const update = () =>
      document.documentElement.classList.toggle(
        "shared-motion-paused",
        document.hidden ||
          document.body.matches(".home-motion-paused, .contact-motion-paused"),
      );
    new MutationObserver(update).observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });
    document.addEventListener("visibilitychange", update);
    update();
  }

  document.addEventListener("DOMContentLoaded", async () => {
    initializeLayoutMotion();
    await loadLayout();
    initializeNavigation();
    document.dispatchEvent(new CustomEvent("site:layout-ready"));
  });
})();
