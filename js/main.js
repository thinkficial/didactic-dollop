"use strict";

// Navigation works on every page. Without JavaScript, mobile links stay visible.
document.documentElement.classList.add("js");

document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-btn");
  const navigation = document.querySelector("#site-navigation");

  const closeMenu = () => {
    if (!menuButton || !navigation) return;
    navigation.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation menu");
    menuButton.textContent = "☰";
  };

  menuButton?.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu",
    );
    menuButton.textContent = isOpen ? "×" : "☰";
  });

  navigation?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
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

  // Mark the active page, including '/' when hosted as a website.
  const current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("#site-navigation a").forEach((link) => {
    const target =
      new URL(link.href, location.href).pathname.split("/").pop() ||
      "index.html";
    if (target === current) link.setAttribute("aria-current", "page");
  });

  document.querySelectorAll("[data-year]").forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });
});
