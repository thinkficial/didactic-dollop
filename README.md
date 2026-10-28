# Thinkficial Engineering Network (TEN)

Official website project — HTML5, CSS3, and vanilla JavaScript

Thinkficial Engineering Network (TEN) is presented in this website as a technology-focused organization offering technology consulting, web application development, information research, ICT training, and AI-related support. **TEN Academy** is the training arm featured on the site, with course information and a way to make enquiries.

This project is a reorganized, six-page version of the earlier `didactic-dollop` website. It keeps the site lightweight while making the code easier to maintain, review, and extend.

> **Project status:** Refactored static website, ready for local preview and review. It is **not** a verified production release. Confirm organizational content, contact details, courses, team profiles, and browser behavior before deployment.

## Table of contents

- [Thinkficial Engineering Network (TEN)](#thinkficial-engineering-network-ten)
  - [Table of contents](#table-of-contents)
  - [Website pages](#website-pages)
  - [Features](#features)
  - [Technology stack](#technology-stack)
  - [Project structure](#project-structure)
  - [Getting started](#getting-started)
    - [Requirements](#requirements)
    - [1. Open the project](#1-open-the-project)
    - [2. Start a local server](#2-start-a-local-server)
    - [3. Explore the pages](#3-explore-the-pages)
  - [How the files work together](#how-the-files-work-together)
    - [HTML](#html)
    - [CSS](#css)
    - [JavaScript](#javascript)
  - [Contact form behavior](#contact-form-behavior)
  - [How to customize the website](#how-to-customize-the-website)
    - [Image guidance](#image-guidance)
  - [Migration from the original project](#migration-from-the-original-project)
  - [Testing checklist](#testing-checklist)
    - [Navigation and usability](#navigation-and-usability)
    - [Content and visuals](#content-and-visuals)
    - [Contact functionality](#contact-functionality)
    - [Technical checks](#technical-checks)
  - [Deployment](#deployment)
  - [Known limitations and future improvements](#known-limitations-and-future-improvements)
  - [Contributing and asset usage](#contributing-and-asset-usage)

## Website pages

| Page | File | Purpose |
| --- | --- | --- |
| Home | `index.html` | Introduces TEN, previews services and TEN Academy, and links to enquiries. |
| About | `about.html` | Describes TEN's background, mission, vision, and values. |
| Services | `services.html` | Presents technology consulting, web development, research, ICT training, and AI-related services. |
| Academy | `academy.html` | Introduces training areas and listed courses; availability must be confirmed with TEN. |
| Management | `management.html` | Displays team names, roles, and available portraits. |
| Contact | `contact.html` | Displays contact channels and prepares email/WhatsApp enquiry drafts. |

## Features

- Responsive layout with desktop navigation and a collapsible mobile menu.
- Consistent header, navigation, footer, colors, and typography across six pages.
- Active-page indication using `aria-current="page"`.
- Semantic HTML sections, skip-to-content link, visible form labels, and keyboard-accessible controls.
- Reduced-motion CSS preference support and lazy-loaded team portraits.
- External CSS and JavaScript files rather than large embedded style or script blocks.
- Shared client-side validation for contact form fields before creating a draft.
- Automatic copyright year in the footer.
- Local organization logos and staff portraits.

## Technology stack

| Technology | Use |
| --- | --- |
| HTML5 | Page content, structure, forms, and accessibility markup. |
| CSS3 | Global design system, page-specific styles, and responsive layouts. |
| Vanilla JavaScript | Mobile navigation, current-page indicator, footer year, and enquiry handling. |
| Local image assets | Organization logos and available staff portraits. |

**No React, bundler, npm packages, database, backend, or build process are required.**

## Project structure

```text
ten-refactored/
├── index.html
├── about.html
├── services.html
├── academy.html
├── management.html
├── contact.html
├── css/
│   ├── style.css             # Global styling and shared components
│   └── pages.css             # Individual page layouts and form/team styles
├── js/
│   ├── main.js               # Navigation and footer interactions
│   └── contact.js            # Contact form validation and draft handoff
├── asssets/
│   └── images/
│       ├── TEN Logo.png
│       ├── TEN Logo 2.png
│       ├── TEN Logo (1) (1).png
│       ├── TEN Logo (2).png
│       ├── ENGR. AUGUSTINE.jpg
│       ├── MR RAPHAEL Alemoh.jpg
│       ├── MISS Lilian.jpg
│       ├── MISS Grace Ogbonna.jpg
│       └── MISS Favour Barrau.jpg
└── README.md
```

All paths are relative to the project root. The image folder is named `asssets` (with three `s` characters), matching the files in this checkout; **do not rename files without updating their references**.

## Getting started

### Requirements

- A modern web browser (Chrome, Firefox, Edge, or Safari).
- A code editor such as Visual Studio Code (recommended).
- Optional: Python 3 for a local HTTP server, or the VS Code **Live Server** extension.

### 1. Open the project

Extract the `ten-refactored.zip` archive and open the `ten-refactored` folder in VS Code.

### 2. Start a local server

Open the VS Code terminal in the project root and run:

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

On Windows, if `python3` is unavailable, try:

```powershell
py -m http.server 8000 --bind 127.0.0.1
```

Then open **<http://127.0.0.1:8000/>** in your browser. Stop the server with `Ctrl+C`.

Alternatively, open `index.html` with the **Live Server** extension in VS Code. You can also open the HTML file directly, but a local HTTP server is preferred for consistent testing.

### 3. Explore the pages

Visit the Home, About, Services, Academy, Management, and Contact pages. Check both the navigation bar and footer links.

> No `npm install`, `.env` configuration, or API key is needed.

## How the files work together

### HTML

Each `.html` file owns its page-specific content and loads these shared stylesheets:

```html
<link rel="stylesheet" href="css/style.css">
<link rel="stylesheet" href="css/pages.css">
```

Every page also loads the shared JavaScript:

```html
<script src="js/main.js" defer></script>
```

Only the contact page loads the additional form script:

```html
<script src="js/contact.js" defer></script>
```

### CSS

- `css/style.css`: color variables, resets, typography, navigation, buttons, sections, cards, footer, breakpoints, and accessibility-related styles.
- `css/pages.css`: page-specific layouts, academy/course cards, management profiles, and contact form styles.

### JavaScript

- `js/main.js`: opens/closes the mobile menu, updates its accessibility state, highlights the current page, and sets the footer year.
- `js/contact.js`: validates name, email, phone, and message before preparing an email or WhatsApp draft.

**Important maintenance note:** Header and footer markup is currently repeated across the six HTML pages. When changing navigation or footer links, update *every* page to keep them consistent. A shared template system is a possible future improvement, not part of the present dependency-free implementation.

## Contact form behavior

The site is **static**. It does **not** send, store, or track messages on its own.

1. A visitor fills in their name, email address, phone number, and message.
2. Clicking **Prepare Email** validates the fields and opens the visitor's configured email application via `mailto:` with a prepared draft.
3. Clicking **Prepare WhatsApp** validates the fields and opens a `wa.me` URL with the prepared message.
4. **The visitor must review and send the message from that application.** The website cannot confirm that delivery happened.

The currently configured destinations appear in `js/contact.js` and in the page's contact links. **Verify these with TEN before publishing:**

- Email: `thinkficialengineeringnetwork@gmail.com`
- Telephone: `+234 906 357 7772`
- WhatsApp: `+234 908 296 5308`

Neither button should be presented as successful submission or delivery. Visitors need a configured email application or access to WhatsApp for the selected option to work.

For direct form submissions in a later version, choose a reputable hosted form service or a secure backend with spam protection, server-side validation, privacy safeguards, and error reporting. Such integration is **not currently implemented**.

## How to customize the website

| Change | Where to edit |
| --- | --- |
| Homepage text or calls to action | `index.html` |
| Organization description, mission, or vision | `about.html` |
| Offered services | `services.html` |
| Course descriptions or training information | `academy.html` |
| Team members and roles | `management.html` |
| Visible contact details and form labels | `contact.html` |
| Email/WhatsApp draft destinations | `js/contact.js` |
| Site colors and shared design | `css/style.css` (`:root` variables) |
| Team photos, forms, or page layouts | `css/pages.css` |
| Navigation behavior | `js/main.js` |
| Logos and portrait images | `asssets/images/` |

### Image guidance

Keep image references accurate and encode spaces as `%20` in image URLs, e.g.:

```html
<img src="asssets/images/TEN%20Logo.png" alt="" width="52" height="55">
```

Use descriptive alternative text for informative images and `alt=""` for decorative images. Compress photographs before adding them and only use images you have permission to publish.

Five management portraits are mapped to the existing files in `asssets/images/`. The remaining four entries use initials as placeholders; **do not substitute unrelated photographs**. Confirm each identity, photograph, role, and spelling with the organization.

## Migration from the original project

The earlier `didactic-dollop` archive included alternative pages and overlapping implementations, including:

- Home variants: `index.html`, `home.html`, and `welcome.html`.
- About variants: `About.html` and `aboutus.html`.
- Service variants: `service.html` and `services.html`.
- Contact variants: `contact.html` and `contactus.html`.
- Management variants: `management.html` and `managementteam.html`.
- Styling/scripts in the root, including `style.css`, `academy.css`, and `app.js`.
- An image directory named `asssets/` (with three `s` characters).

The reorganized version uses one canonical file for each page, puts assets under `asssets/images/`, and separates shared styles and scripts into `css/` and `js/`. The Academy page is a single valid HTML document rather than containing two document structures.

The page text and presentation have been **edited and simplified**, not copied verbatim in every location. Treat this as a refactor and content refresh, **not a guaranteed one-to-one content preservation**.

**Safe migration procedure:**

1. Keep a copy of the original folder and its Git history.
2. Work in a new branch or folder rather than overwriting the original immediately.
3. Compare page text, branding, team details, and available images with the original.
4. Test all six replacement pages and obtain approval for changed content.
5. Replace the published version only after review and testing.

## Testing checklist

These are **manual checks required before launch**, not claims that live browser testing has passed.

### Navigation and usability

- [ ] Every page opens, including direct links such as `/academy.html`.
- [ ] Header and footer links point to the correct pages.
- [ ] Mobile menu opens, closes, and supports keyboard interaction.
- [ ] Current page is visually indicated; keyboard focus remains visible.
- [ ] No horizontal overflow at around 360px, 768px, and desktop widths.

### Content and visuals

- [ ] Logos and team photos load without broken paths.
- [ ] Names, titles, organization descriptions, and contact details are approved.
- [ ] Course availability and offered services are accurately described.
- [ ] Images have appropriate alternative text and permission for publication.
- [ ] No important content is clipped at mobile breakpoints.

### Contact functionality

- [ ] Empty or whitespace-only values show validation errors.
- [ ] Invalid email addresses are rejected.
- [ ] Both actions prepare the expected content and correct destination.
- [ ] Email and WhatsApp can be opened on actual target devices.
- [ ] No message is described as delivered until the visitor sends it externally.

### Technical checks

- [ ] Browser console shows no unexpected errors.
- [ ] Local stylesheet, script, and image URLs resolve correctly.
- [ ] Forms, page headings, labels, and links are usable with a keyboard.
- [ ] Test on at least one real mobile browser and one desktop browser.

Optional syntax checks if Node.js is installed:

```bash
node --check js/main.js
node --check js/contact.js
```

During the earlier refactor, local links/IDs and JavaScript syntax were checked. **Production behavior, visual layout, and message handoffs were not fully verified in a graphical browser.** There is no configured automated test suite or continuous integration pipeline.

## Deployment

Because this is a static site, it can be hosted on a service that serves plain HTML, CSS, JavaScript, and images—for example, GitHub Pages, Netlify, Cloudflare Pages, or another static host.

General steps:

1. Finish the pre-launch checklist and approve the content.
2. Upload the **contents** of the `ten-refactored` folder as the published site root.
3. Ensure `index.html` is at the host's site root.
4. Preserve the `css/`, `js/`, and `asssets/images/` folder paths.
5. After publishing, test every route, image, navigation control, and contact action on the live URL.

This README does not assert that a live deployment currently exists. Any host-specific configuration must be documented after the actual hosting provider is selected.

## Known limitations and future improvements

### Current limitations

- Static-only contact handoff; no backend, database, inbox integration, or delivery confirmation.
- Headers and footers are duplicated across HTML files.
- Four management profiles have initial-based placeholders, pending approved photos.
- No automated browser tests, deployment pipeline, or confirmed live hosting configuration.
- Course offerings, team details, contact numbers, and descriptive claims require organizational verification.

### Recommended future enhancements

1. Publish verified project examples, training outcomes, and approved testimonials.
2. Add real course details: duration, schedules, prerequisites, fees, and enrollment requirements.
3. Introduce a secure hosted enquiry form if direct submissions are required.
4. Add a privacy notice and data-handling information if collecting personal data through an integrated form.
5. Introduce HTML templating only if the number of pages or maintenance burden increases.
6. Add automated checks for links, HTML validity, accessibility, and responsive behavior.
7. Add page-specific social-sharing metadata and verify SEO content before launch.

## Contributing and asset usage

When contributing, make focused edits, keep file names and links consistent, and test affected pages before committing. Avoid introducing a JavaScript framework or dependency unless a clear project need justifies it.

**License:** No license has been confirmed for this project. Do not assume the website code, logos, or team photographs are freely reusable. Obtain approval from the relevant owners before distributing or reusing branded assets.

---

### Thinkficial Engineering Network — Technology • Training • Innovation
