# Thinkficial Engineering Network (TEN)

A six-page website built with HTML, CSS, and vanilla JavaScript. There is no framework, package installation, build step, database, or backend.

## Pages

| Page       | File              | Page styles                        | Page JavaScript  |
| ---------- | ----------------- | ---------------------------------- | ---------------- |
| Home       | `index.html`      | `css/home.css`                     | `js/home.js`     |
| About      | `about.html`      | `css/about.css`                    | `js/about.js`    |
| Services   | `services.html`   | `css/services.css`                 | `js/services.js` |
| Academy    | `academy.html`    | `css/pages.css`, `css/academy.css` | None             |
| Management | `management.html` | `css/management.css`               | None             |
| Contact    | `contact.html`    | `css/contact.css`                  | `js/contact.js`  |

Every page also loads **`css/style.css` and `js/main.js`**. All six pages import the same navbar and footer.

## Preview locally

Open the project folder in VS Code, then open `index.html` using the **Live Server** extension. Other local HTTP servers also work, for example:

```powershell
py -m http.server 8000 --bind 127.0.0.1
```

Visit `http://127.0.0.1:8000/` when using that command.

Use HTTP rather than double-clicking HTML files. The shared layout loads through JavaScript `fetch()`, which browsers restrict for `file://` pages. With JavaScript disabled, a notice explains that navigation and the footer require JavaScript; the page content remains available.

## Project structure

```text
index.html
about.html
services.html
academy.html
management.html
contact.html
components/
  layout.html             # Navbar and footer templates; edit their markup here
css/
  style.css               # Shared tokens, base content styles, navbar, footer
  pages.css               # Academy content layout and course-card effects
  home.css
  about.css
  services.css
  academy.css
  management.css
  contact.css
js/
  main.js                 # Layout imports, menu, active link, year, retry behavior
  home.js                 # Home animations, motion control, service slider
  about.js                # About scroll reveals
  services.js             # Services scroll reveals
  contact.js              # Contact motion, counter, validation, message drafts
assets/images/
  TEN_Logo.png            # Navbar and footer logo
  TEN_svg.png             # Favicon and Management emblem
README.md
```

`pages.css` remains necessary for Academy. The other pages do not import it. Every remaining stylesheet and JavaScript file is loaded by at least one page.

## Shared navbar and footer

The source of truth is:

- **Markup:** `components/layout.html`, containing `site-header-template` and `site-footer-template`.
- **Styles:** `css/style.css`, using the `shared-` class prefix.
- **Behavior:** `js/main.js`.

Page files contain empty placeholders, with no copied navbar or footer links:

```html
<header data-site-header></header>

<main id="main-content">
  <!-- Page content -->
</main>

<footer data-site-footer></footer>
```

`main.js` fetches the HTML file once, validates both templates, and replaces the placeholders. It then initializes the menu, active-page indication, and copyright year. It dispatches `site:layout-ready` on `document` after successful initialization.

On Contact, the navbar's **Let's Talk** link jumps to `#enquiry-form`. On other pages, it opens `contact.html`.

If the import fails, the header displays a **Retry** button. Retrying loads the same shared templates; there is no second navigation implementation to maintain.

### Instructions for teammates

1. Save your own work and bring the updated shared files into your branch.
2. Remove your old header/footer markup and add the empty placeholders above. Keep `id="top"` on `<body>` and a skip link pointing to `#main-content`.
3. Load the shared stylesheet and script once, alongside your page files:

   ```html
   <link rel="stylesheet" href="css/style.css" />
   <link rel="stylesheet" href="css/your-page.css" />
   <script src="js/main.js" defer></script>
   ```

4. Include the same Google Fonts stylesheet used by the other pages:

   ```html
   <link rel="preconnect" href="https://fonts.googleapis.com" />
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
   <link
     href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap"
     rel="stylesheet"
   />
   ```

5. Scope page-specific typography and effects to page content, for example `.about-page main h2`, so they do not override the shared header/footer. Keep shared layout styles in `style.css` and its JavaScript in `main.js`.
6. Preview through Live Server. Check the active link, mobile menu, footer, and page-specific interactions.

These examples assume the HTML files sit beside `index.html`. Nested pages must adjust their stylesheet, script, and asset paths. The shared loader resolves its own links and images against the location of `js/main.js`, which also supports hosting beneath a repository subpath.

When publishing, include `components/`, `css/`, `js/`, and `assets/` alongside the HTML files.

## Visual system

Headings use **Manrope**; body text and shared navigation use **DM Sans**, with system-font fallbacks.

| Role           | Color     |
| -------------- | --------- |
| Deep navy      | `#091529` |
| Midnight blue  | `#122A48` |
| Signature blue | `#075CB5` |
| Ice cyan       | `#A5E7FF` |
| Porcelain      | `#F3F7FB` |
| White          | `#FFFFFF` |
| Slate          | `#18273A` |
| Muted slate    | `#506178` |

Shared tokens live in `css/style.css`. Management uses `var(--cyan)` for its cyan highlights, borders, and glows. Keep logo colors intact and use only approved organization assets. Management profiles currently use initials.

Animations respect reduced-motion preferences. Home and Contact also provide explicit pause controls. Academy's orbit retains its centered position when animation is disabled.

## Contact form behavior

The website prepares drafts; it does not send or store enquiries.

1. The visitor fills in their name, email, phone number, and message.
2. **Prepare Email** validates the fields and opens a populated `mailto:` draft in their email application.
3. **Prepare WhatsApp** validates the fields and opens WhatsApp with the prepared message.
4. The visitor reviews the draft and presses Send in that application. The website cannot confirm delivery.

Destinations in `js/contact.js` and shared contact links:

- Email: `thinkficialengineeringnetwork@gmail.com`
- Telephone: `+234 906 357 7772`
- WhatsApp: `+234 908 296 5308`

Confirm these details and all organization, team, and course information before publishing. A backend or hosted form integration would be separate work.

## Local verification

Checked in desktop Chrome on **2 November 2026**:

- All six pages loaded their shared layout and images without unexpected script errors or failed local resource requests.
- No horizontal overflow was detected at 320, 375, 620, 768, 1024, 1440, 1920, and 2560 CSS pixels.
- Mobile menus, Escape, active-page indicators, consistent footer typography, and Management's `#A5E7FF` cyan passed.
- Academy's orbit stayed centered under reduced motion; all 15 Services reveal targets matched and a scrolled target revealed successfully.
- A failed layout import displayed Retry, and retrying after recovery restored the navigation.
- Home/Contact animation controls, Contact's form jump, empty-field validation, and character counter passed. A browser stub captured the correct WhatsApp destination and enquiry text; no external message was sent.
- With JavaScript disabled, the notice and Home content remained visible.
- All five scripts passed `node --check`; CSS parsing and `git diff --check` passed.

## Maintenance and verification

The cleanup removes copied per-page navbar/footer links, obsolete legacy navigation/footer and team-card styles, unused animations/custom properties, duplicate footer-year handling, and the unreferenced `TEN Logo 2.png` asset. Page content and the existing contact draft destinations are preserved.

Syntax checks, when Node.js is installed:

```powershell
node --check js/main.js
node --check js/home.js
node --check js/about.js
node --check js/services.js
node --check js/contact.js
```

Before publishing, verify:

- All six pages, local assets, navbar/footer links, and active-page indicators.
- Layouts on small mobile, mobile, tablet, desktop, and large desktop.
- Mobile menu opening/closing, Escape, visible keyboard focus, and skip links.
- The shared-layout Retry button after a failed import.
- Services scroll reveals and Academy's centered orbit with reduced motion enabled.
- Contact's form jump, validation, character counter, and prepared draft contents.
- Actual email/WhatsApp handoff on target devices; local draft checks do not prove delivery.

There is no configured automated test suite, deployment pipeline, or backend. Local browser verification does not establish live-host behavior or real-device compatibility.

No license has been confirmed for the code, logos, or organization assets; obtain owner approval before reusing them elsewhere.
