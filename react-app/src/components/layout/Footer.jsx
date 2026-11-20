import { Link } from "react-router";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="shared-footer">
      <div className="shared-container shared-footer-grid">
        <div className="shared-footer-brand">
          <Link to="/" aria-label="Thinkficial Engineering Network, home">
            <img
              src={`${import.meta.env.BASE_URL}assets/images/TEN_Logo.png`}
              alt="Thinkficial Engineering Network"
              width="1184"
              height="461"
              loading="lazy"
            />
          </Link>

          <p>
            Ideas. Skills. Possibilities.
            <br />
            Thoughtfully connected.
          </p>
        </div>

        <div>
          <h2>Explore TEN</h2>

          <ul>
            <li>
              <Link to="/about">About Us</Link>
            </li>

            <li>
              <Link to="/services">Our Services</Link>
            </li>

            <li>
              <Link to="/academy">TEN Academy</Link>
            </li>

            <li>
              <Link to="/management">Our People</Link>
            </li>
          </ul>
        </div>

        <div>
          <h2>Get In Touch</h2>

          <ul>
            <li>
              <a href="mailto:thinkficialengineeringnetwork@gmail.com">
                Email Our Team
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7 17 17 7M7 7h10v10" />
                </svg>
              </a>
            </li>

            <li>
              <a href="tel:+2349063577772">Call Us</a>
            </li>

            <li>
              <a
                href="https://wa.me/2349082965308"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat On WhatsApp
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7 17 17 7M7 7h10v10" />
                </svg>
              </a>
            </li>

            <li>
              <Link to="/contact">Contact Details</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="shared-container shared-footer-bottom">
        <p>&copy; {year} Thinkficial Engineering Network.</p>

        <a href="#top">
          Back to top
          <span aria-hidden="true"> ↑</span>
        </a>
      </div>
    </footer>
  );
}
