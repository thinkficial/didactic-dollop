import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";

import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const pageClasses = {
  "/": "home-page",
  "/about": "about-page",
  "/services": "services-page",
  "/academy": "academy-page",
  "/management": "management-page",
  "/contact": "contact-page",
};

export default function SiteLayout() {
  const { pathname } = useLocation();

  const pageClass = pageClasses[pathname];

  useEffect(() => {
    if (!pageClass) return;

    document.body.classList.add(pageClass);

    return () => {
      document.body.classList.remove(pageClass);
    };
  }, [pageClass]);

  const skipClass =
    pathname === "/"
      ? "skip-link home-skip"
      : pathname === "/contact"
        ? "skip-link contact-skip"
        : "skip-link";

  return (
    <>
      <a className={skipClass} href="#main-content">
        Skip to main content
      </a>

      <Header />

      <main id="main-content">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
