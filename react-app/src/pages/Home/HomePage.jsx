import { Link } from "react-router";

import "../../styles/home.css";

export default function HomePage() {
  return (
    <>
      {/* Home page SVG icons and sections go here */}
      <svg
        className="home-icons"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <symbol id="icon-arrow" viewBox="0 0 24 24">
            <path d="M5 12h14m-6-6 6 6-6 6" />
          </symbol>
          <symbol id="icon-diagonal" viewBox="0 0 24 24">
            <path d="M6 18 18 6M6 6h12v12" />
          </symbol>
          <symbol id="icon-code" viewBox="0 0 32 32">
            <path d="m11 8-8 8 8 8m10-16 8 8-8 8M19 4l-6 24" />
          </symbol>
          <symbol id="icon-network" viewBox="0 0 32 32">
            <circle cx="16" cy="16" r="5" />
            <circle cx="6" cy="6" r="3" />
            <circle cx="26" cy="6" r="3" />
            <circle cx="6" cy="26" r="3" />
            <circle cx="26" cy="26" r="3" />
            <path d="m8 8 5 5m6 6 5 5M24 8l-5 5m-6 6-5 5" />
          </symbol>
          <symbol id="icon-research" viewBox="0 0 32 32">
            <circle cx="14" cy="14" r="10" />
            <path d="m21 21 8 8M9 17l4-5 4 3 4-6" />
          </symbol>
          <symbol id="icon-learn" viewBox="0 0 32 32">
            <path d="m2 12 14-7 14 7-14 7-14-7Zm6 4v8c5 4 11 4 16 0v-8m6-4v12" />
          </symbol>
          <symbol id="icon-spark" viewBox="0 0 32 32">
            <path d="m16 3 3.5 9.5L29 16l-9.5 3.5L16 29l-3.5-9.5L3 16l9.5-3.5L16 3Z" />
          </symbol>
          <symbol id="icon-check" viewBox="0 0 24 24">
            <path d="m5 12 4 4L19 6" />
          </symbol>
        </defs>
      </svg>

      <section className="home-hero" aria-labelledby="hero-heading">
        <div className="home-container home-hero-layout">
          <div className="home-hero-copy">
            <p className="home-intro-line">
              <span aria-hidden="true"></span> Technology With Purpose
            </p>
            <h1 id="hero-heading">
              Engineering A<br />
              Better Digital
              <br />
              Future
            </h1>
            <p className="home-hero-description">
              Big ideas deserve thoughtful execution. We bring technology,
              creativity and practical learning together to help you move
              forward.
            </p>
            <div className="home-actions">
              <a className="home-button home-button-primary" to="/services">
                Explore Our Services
                <svg aria-hidden="true">
                  <use href="#icon-diagonal" />
                </svg>
              </a>
              <Link className="home-text-link" to="/academy">
                Discover TEN Academy
                <svg aria-hidden="true">
                  <use href="#icon-arrow" />
                </svg>
              </Link>
            </div>
            <div className="home-hero-footnote">
              <span className="home-small-mark" aria-hidden="true">
                ✳
              </span>
              <p>
                For people with ideas.
                <br />
                <strong>And the ambition to build them.</strong>
              </p>
            </div>
          </div>
          <div className="home-network" aria-hidden="true">
            <div className="home-network-grid"></div>
            <svg className="home-network-art" viewBox="0 0 640 640" fill="none">
              <defs>
                <radialGradient id="sphere-fill" cx=".35" cy=".25" r=".8">
                  <stop stopColor="var(--home-blue)" stop-opacity=".55" />
                  <stop
                    offset=".55"
                    stopColor="var(--home-navy-light)"
                    stop-opacity=".7"
                  />
                  <stop offset="1" stopColor="var(--home-navy)" />
                </radialGradient>
                <linearGradient
                  id="orbit-stroke"
                  x1="80"
                  y1="520"
                  x2="550"
                  y2="100"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="var(--home-navy-light)" stop-opacity="0" />
                  <stop offset=".45" stopColor="var(--home-cyan)" />
                  <stop offset=".75" stopColor="var(--home-white)" />
                  <stop
                    offset="1"
                    stopColor="var(--home-blue)"
                    stop-Opacity=".15"
                  />
                </linearGradient>
                <radialGradient id="sphere-halo">
                  <stop stopColor="var(--home-cyan)" stop-opacity=".19" />
                  <stop
                    offset="1"
                    stopColor="var(--home-cyan)"
                    stopOpacity="0"
                  />
                </radialGradient>
                <clipPath id="sphere-clip">
                  <circle cx="320" cy="320" r="185" />
                </clipPath>
              </defs>
              <circle cx="320" cy="320" r="310" fill="url(#sphere-halo)" />
              <g className="home-orbit-outer">
                <circle
                  cx="320"
                  cy="320"
                  r="275"
                  stroke="var(--home-cyan)"
                  stroke-opacity=".15"
                  stroke-dasharray="2 10"
                />
                <circle cx="320" cy="45" r="4" fill="var(--home-cyan)" />
                <circle cx="320" cy="595" r="3" fill="var(--home-cyan)" />
              </g>
              <circle
                cx="320"
                cy="320"
                r="235"
                stroke="var(--home-cyan)"
                stroke-opacity=".12"
              />
              <circle
                cx="320"
                cy="320"
                r="185"
                fill="url(#sphere-fill)"
                stroke="var(--home-cyan)"
                stroke-opacity=".6"
              />
              <g
                clip-path="url(#sphere-clip)"
                stroke="var(--home-cyan)"
                stroke-opacity=".23"
                stroke-width=".8"
              >
                <ellipse cx="320" cy="320" rx="52" ry="185" />
                <ellipse cx="320" cy="320" rx="112" ry="185" />
                <ellipse cx="320" cy="320" rx="164" ry="185" />
                <ellipse cx="320" cy="320" rx="185" ry="42" />
                <ellipse cx="320" cy="320" rx="185" ry="105" />
                <ellipse cx="320" cy="320" rx="185" ry="156" />
                <path d="M135 320h370M320 135v370" />
                <path
                  d="m166 217 90 47 89-72 70 80 70-20M154 393l102-37 89 90 70-78 75 26M256 264v92m89-164v254m70-174v96"
                  stroke-opacity=".5"
                />
              </g>
              <ellipse
                ClassName="home-orbit-sweep"
                cx="320"
                cy="320"
                rx="284"
                ry="90"
                transform="rotate(-32 320 320)"
                stroke="url(#orbit-stroke)"
                stroke-width="2"
              />
              <ellipse
                cx="320"
                cy="320"
                rx="260"
                ry="112"
                transform="rotate(48 320 320)"
                stroke="var(--home-cyan)"
                stroke-opacity=".26"
              />
              <g fill="var(--home-white)">
                <circle cx="256" cy="264" r="4" />
                <circle cx="345" cy="192" r="4" />
                <circle cx="415" cy="368" r="4" />
                <circle cx="256" cy="356" r="3" />
              </g>
              <g className="home-network-signal">
                <circle
                  cx="415"
                  cy="368"
                  r="13"
                  stroke="var(--home-cyan)"
                  stroke-opacity=".6"
                />
                <circle
                  cx="256"
                  cy="264"
                  r="11"
                  stroke="var(--home-cyan)"
                  stroke-opacity=".5"
                />
              </g>
            </svg>
            <div ClassName="home-orbit-label home-orbit-label-top">
              <svg>
                <use href="#icon-network" />
              </svg>
              <span>Thoughtful Strategy</span>
              <span ClassName="home-label-dot"></span>
            </div>
            <div ClassName="home-orbit-label home-orbit-label-bottom">
              <svg>
                <use href="#icon-code" />
              </svg>
              <span>Practical Solutions</span>
            </div>
            <div ClassName="home-network-caption">
              <span ClassName="home-caption-line"></span> A network of
              possibilities
            </div>
          </div>
        </div>
        <div ClassName="home-container home-hero-bottom">
          <a href="#our-approach" ClassName="home-scroll-link">
            <span ClassName="home-scroll-icon" aria-hidden="true">
              ↓
            </span>{" "}
            A little further. A lot to discover.
          </a>
          <button
            ClassName="home-motion-toggle"
            type="button"
            aria-pressed="false"
            hidden
          >
            <span ClassName="home-pause-symbol" aria-hidden="true">
              Ⅱ
            </span>
            <span data-motion-label>Pause animation</span>
          </button>
        </div>
      </section>
      <div ClassName="home-capabilities" aria-label="Our areas of expertise">
        <div ClassName="home-marquee">
          <div ClassName="home-marquee-group">
            <span>Technology Consulting</span>
            <i aria-hidden="true">✳</i>
            <span>Web Development</span>
            <i aria-hidden="true">✳</i>
            <span>AI Solutions</span>
            <i aria-hidden="true">✳</i>
            <span>Digital Skills</span>
            <i aria-hidden="true">✳</i>
            <span>Information Research</span>
            <i aria-hidden="true">✳</i> &gt;<span>ICT Training</span>
            <i aria-hidden="true">✳</i>
          </div>
          <div ClassName="home-marquee-group" aria-hidden="true">
            <span>Technology Consulting</span>
            <i>✳</i>
            <span>Web Development</span>
            <i>✳</i>
            <span>AI Solutions</span>
            <i>✳</i>
            <span>Digital Skills</span>
            <i>✳</i>
            <span>Information Research</span>
            <i>✳</i>
          </div>
        </div>
      </div>
      <section
        className="home-about home-section"
        id="our-approach"
        aria-labelledby="about-heading"
      >
        <div ClassName="home-container home-about-layout">
          <div ClassName="home-section-aside">
            <span ClassName="home-section-kicker">The TEN Approach</span>
            <div className="home-connection-mark" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div ClassName="home-about-copy" data-reveal>
            <h2 id="about-heading">
              Great Technology Starts With Understanding People.
            </h2>
            <div ClassName="home-about-detail">
              <p>
                We’re Thinkficial Engineering Network. A meeting point for
                technical thinking, creative ideas and the people ready to put
                them to work.
              </p>
              <div>
                <p>
                  From your next digital project to your first line of code, we
                  help turn complex challenges into clear, practical next steps.
                </p>
                <Link ClassName="home-text-link home-link-dark" to="/about">
                  Get To Know TEN
                  <svg aria-hidden="true">
                    <use href="#icon-arrow" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        ClassName="home-services home-section"
        aria-labelledby="services-heading"
      >
        <div ClassName="home-container">
          <div ClassName="home-section-top">
            <div>
              <span ClassName="home-section-kicker">Our Expertise</span>
              <h2 id="services-heading">
                Your Ambition. Our Thinking, In Action.
              </h2>
            </div>
            <a ClassName="home-text-link home-link-dark" href="services.html">
              Explore Our Services
              <svg aria-hidden="true">
                <use href="#icon-arrow" />
              </svg>
            </a>
          </div>
          <div
            ClassName="home-service-track"
            id="home-services-track"
            tabIndex={0}
            role="region"
            aria-label="Services. Scroll horizontally to explore."
          >
            <a ClassName="home-service-card" href="services.html">
              <span ClassName="home-service-icon">
                <svg aria-hidden="true">
                  <use href="#icon-network" />
                </svg>
              </span>
              <span ClassName="home-card-category">
                Clarity &amp; Direction
              </span>
              <h3>
                Technology
                <br />
                &amp; AI Consulting
              </h3>
              <p>
                Make informed decisions with technical guidance and a digital
                strategy shaped around your goals.
              </p>
              <span ClassName="home-card-footer">
                Find Your Direction
                <svg aria-hidden="true">
                  <use href="#icon-diagonal" />
                </svg>
              </span>
            </a>
            <a ClassName="home-service-card" href="services.html">
              <span ClassName="home-service-icon">
                <svg aria-hidden="true">
                  <use href="#icon-code" />
                </svg>
              </span>
              <span ClassName="home-card-category">Ideas &amp; Execution</span>
              <h3>
                Web &amp; Digital
                <br />
                Development
              </h3>
              <p>
                Bring your ideas to life with responsive websites and web
                applications built for real people.
              </p>
              <span ClassName="home-card-footer">
                Build Something Meaningful
                <svg aria-hidden="true">
                  <use href="#icon-diagonal" />
                </svg>
              </span>
            </a>
            <a ClassName="home-service-card" href="academy.html">
              <span ClassName="home-service-icon">
                <svg aria-hidden="true">
                  <use href="#icon-learn" />
                </svg>
              </span>
              <span ClassName="home-card-category">
                Learning &amp; Possibility
              </span>
              <h3>
                ICT &amp; Digital
                <br />
                Skills Training
              </h3>
              <p>
                Develop useful skills, build digital confidence and take your
                next step with practical learning.
              </p>
              <span ClassName="home-card-footer">
                Discover Your Next Skill
                <svg aria-hidden="true">
                  <use href="#icon-diagonal" />
                </svg>
              </span>
            </a>
            <a ClassName="home-service-card" href="services.html">
              <span ClassName="home-service-icon">
                <svg aria-hidden="true">
                  <use href="#icon-research" />
                </svg>
              </span>
              <span ClassName="home-card-category">Insight &amp; Support</span>
              <h3>
                Information
                <br />
                &amp; Research
              </h3>
              <p>
                Move forward with focused information research and digital
                support for your next challenge.
              </p>
              <span ClassName="home-card-footer">
                Turn information into insight
                <svg aria-hidden="true">
                  <use href="#icon-diagonal" />
                </svg>
              </span>
            </a>
          </div>
          <div ClassName="home-slider-footer">
            <p>Different disciplines. One connected approach.</p>
            <div ClassName="home-slider-controls" hidden>
              <span
                ClassName="home-slider-status"
                aria-live="polite"
                aria-atomic="true"
              ></span>
              <button
                ClassName="home-slider-button"
                type="button"
                data-slide="previous"
                aria-label="Previous services"
                aria-controls="home-services-track"
              >
                <svg aria-hidden="true">
                  <use href="#icon-arrow" />
                </svg>
              </button>
              <button
                ClassName="home-slider-button"
                type="button"
                data-slide="next"
                aria-label="Next services"
                aria-controls="home-services-track"
              >
                <svg aria-hidden="true">
                  <use href="#icon-arrow" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section
        ClassName="home-academy home-section"
        aria-labelledby="academy-heading"
      >
        <div ClassName="home-container home-academy-panel">
          <div ClassName="home-academy-copy" data-reveal>
            <span ClassName="home-section-kicker">Meet TEN Academy</span>
            <h2 id="academy-heading">
              Your Next Chapter
              <br />
              Starts With A Skill
            </h2>
            <p>
              Curiosity is a good beginning. Give it somewhere to go. Explore
              practical training that connects what you learn with what you can
              create.
            </p>
            <Link
              ClassName="home-button home-button-primary"
              href="academy.html"
            >
              Explore The Academy
              <svg aria-hidden="true">
                <use href="#icon-diagonal" />
              </svg>
            </Link>
            <div ClassName="home-academy-note">
              <svg aria-hidden="true">
                <use href="#icon-check" />
              </svg>
              <span>
                Guided learning. Practical projects. Real Possibilities.
              </span>
            </div>
          </div>
          <div ClassName="home-academy-visual">
            <div ClassName="home-academy-visual-heading">
              <span ClassName="home-academy-emblem" aria-hidden="true">
                <svg>
                  <use href="#icon-spark" />
                </svg>
              </span>
              <span>Find Your Starting Point</span>
              <span ClassName="home-academy-wordmark">
                TEN<span>ACADEMY</span>
              </span>
            </div>
            <div ClassName="home-learning-paths">
              <a href="academy.html" ClassName="home-learning-path">
                <span ClassName="home-path-icon">
                  <svg aria-hidden="true">
                    <use href="#icon-code" />
                  </svg>
                </span>
                <span>
                  <strong>Build for the Web</strong>
                  <small>Front-end development &amp; Python</small>
                </span>
                <svg ClassName="home-path-arrow" aria-hidden="true">
                  <use href="#icon-diagonal" />
                </svg>
              </a>
              <a href="academy.html" ClassName="home-learning-path">
                <span ClassName="home-path-icon">
                  <svg aria-hidden="true">
                    <use href="#icon-research" />
                  </svg>
                </span>
                <span>
                  <strong>Make Sense of Data</strong>
                  <small>Data analysis &amp; digital tools</small>
                </span>
                <svg ClassName="home-path-arrow" aria-hidden="true">
                  <use href="#icon-diagonal" />
                </svg>
              </a>
              <a href="academy.html" ClassName="home-learning-path">
                <span ClassName="home-path-icon">
                  <svg aria-hidden="true">
                    <use href="#icon-spark" />
                  </svg>
                </span>
                <span>
                  <strong>Think. Design. Create.</strong>
                  <small>Design &amp; digital marketing</small>
                </span>
                <svg ClassName="home-path-arrow" aria-hidden="true">
                  <use href="#icon-diagonal" />
                </svg>
              </a>
            </div>
            <p ClassName="home-course-note">
              Explore these and other training areas.
              <br />
              Contact TEN for current courses and availability.
            </p>
          </div>
        </div>
      </section>
      <section
        ClassName="home-contact home-section"
        aria-labelledby="contact-heading"
      >
        <div ClassName="home-container home-contact-layout">
          <div data-reveal>
            <span ClassName="home-section-kicker">Let’s Make a Start</span>
            <h2 id="contact-heading">
              What’s Your
              <br />
              Next Big Idea?
            </h2>
            <p>
              A project to build. A challenge to solve. A skill to learn.
              <br className="home-desktop-break" />
              We’d love to hear what’s on your mind.
            </p>
          </div>
          <link ClassName="home-contact-circle" to="/contact">
            <svg aria-hidden="true">
              <use href="#icon-diagonal" />
            </svg>
            <span>Start a Conversation</span>
          </link>
        </div>
        <span className="home-contact-watermark" aria-hidden="true">
          Together.
        </span>
      </section>
    </>
  );
}
