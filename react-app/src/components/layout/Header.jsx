import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Academy", to: "/academy" },
  { label: "Management", to: "/management" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navRef = useRef(null);
  const menuButtonRef = useRef(null);

  const { pathname } = useLocation();

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    function handleOutsideClick(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="shared-header">
      <nav
        ref={navRef}
        className="shared-nav shared-container"
        aria-label="Main navigation"
      >
        <Link
          className="shared-brand"
          to="/"
          aria-label="Thinkficial Engineering Network, home"
          onClick={closeMenu}
        >
          <img
            src={`${import.meta.env.BASE_URL}assets/images/TEN_Logo.png`}
            alt="Thinkficial Engineering Network"
            width="1184"
            height="461"
          />
        </Link>

        <button
          ref={menuButtonRef}
          className="shared-menu"
          type="button"
          aria-controls="site-navigation"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsOpen((previous) => !previous)}
        >
          {isOpen ? "×" : "☰"}
        </button>

        <ul
          className={`shared-nav-links${isOpen ? " is-open" : ""}`}
          id="site-navigation"
        >
          {navLinks.map((item) => (
            <li key={item.to}>
              <NavLink to={item.to} end={item.to === "/"} onClick={closeMenu}>
                {item.label}
              </NavLink>
            </li>
          ))}

          <li>
            {pathname === "/contact" ? (
              <a
                className="shared-nav-contact"
                href="#enquiry-form"
                aria-current="page"
                onClick={closeMenu}
              >
                Let&apos;s Talk
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7 17 17 7M7 7h10v10" />
                </svg>
              </a>
            ) : (
              <Link
                className="shared-nav-contact"
                to="/contact"
                onClick={closeMenu}
              >
                Let&apos;s Talk
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7 17 17 7M7 7h10v10" />
                </svg>
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}
