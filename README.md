# Thinkficial Engineering Network — TEN Academy

A single-page business website introducing Thinkficial Engineering Network, also known as TEN Academy. It presents the organization's technology services, training, management team, and contact options.

The project uses plain HTML, CSS, and JavaScript. It has no framework, build step, package dependencies, backend, or database.

## Current website

- **Home:** Organization introduction and links to services and contact.
- **About:** Overview of the business, consultancy, and training.
- **Services:** Consulting, web application development, information research, and ICT training.
- **Management team:** Nine team members displayed with initials, names, and roles.
- **Contact:** Name, email, phone, and message fields with email and WhatsApp actions.
- **Layout:** Sticky navigation, grid-based sections, and CSS breakpoints for smaller screens. Responsive rendering still needs browser verification.

### How contact works

The website does not send or store enquiries itself.

- **Send via Email** builds a `mailto:` link and asks the visitor's configured email application to open a draft. The visitor must send that draft themselves.
- **Send via WhatsApp** opens a `wa.me` link with a prefilled message. The visitor must complete sending in WhatsApp.

Delivery is not confirmed by the website. An email application or WhatsApp must be available for the corresponding handoff to work.

## Project files

| File | Purpose |
| --- | --- |
| `index.html` | Page content and inline email/WhatsApp handlers. |
| `style.css` | Colors, typography, layouts, and responsive rules. |
| `app.js` | Mobile navigation functions and leftover testimonial/contact code. Currently not loaded by `index.html`. |
| `TEN Logo (1) (1).png` | Logo currently used in the navigation and hero section. |
| `TEN Logo (2).png` | Additional logo asset, currently not referenced by the page. |
| `README.md` | Project overview, setup instructions, and improvement backlog. |

## Run locally

Open `index.html` in a web browser. No installation or build command is required.

For an HTTP preview, if Python is installed, run this command from the project folder:

```sh
python -m http.server 8000 --bind 127.0.0.1
```

Visit `http://127.0.0.1:8000`. Stop the server with `Ctrl+C`.

For deployment, the files can be served by a static website host. Keep the relative file paths intact. No deployment URL or deployment procedure has been verified for this project.

## Known limitations

These findings are documented for future work; the fixes have not been implemented.

| Area | Current limitation |
| --- | --- |
| Mobile navigation | The button calls `toggleMenu()`, but its definition is in `app.js`, which the HTML does not load. At narrower widths, the navigation links are hidden and the button cannot reveal them. |
| Contact validation | The WhatsApp action checks only for nonempty values. Invalid email addresses and whitespace-only fields can pass. Validation differs between the email and WhatsApp actions. |
| Form accessibility | Inputs use placeholders without visible labels. The menu button lacks a descriptive accessible label and expanded/collapsed state. |
| Text contrast | White text on the cyan button background (`#63cee1`) has approximately 1.83:1 contrast. Some cyan text on white also has low contrast. |
| Markup and copy | The About heading contains `around0`, the contact introduction nests paragraph tags, and the document leaves `<main>` unclosed. |
| Unused code | Testimonial functions refer to undefined variables/functions. An older contact handler and CSS for absent elements remain in the project. |
| Documentation and checks | There is no configured automated test suite or build pipeline. Browser behavior and message delivery have not been verified. |

## Recommended improvements

The items below are a proposed backlog, not completed features or a commitment to implementation.

### 1. Functionality

- Load the mobile navigation code and verify opening and closing the menu.
- Consolidate active JavaScript and remove unused handlers and testimonial code.
- Use shared validation for both contact actions, including trimming whitespace and checking email validity.
- Explain that contact buttons open another application and require the visitor to send the message there.
- Turn the displayed email address and phone/WhatsApp contact into actionable links.
- Correct the malformed markup and copy errors.

### 2. Accessibility and responsive behavior

- Add visible form labels associated with their inputs and suitable autocomplete attributes.
- Add a descriptive menu-button label, `aria-controls`, and a synchronized `aria-expanded` state.
- Improve text contrast while retaining the existing brand palette; consider dark text on cyan buttons.
- Verify visible keyboard focus, keyboard navigation, and usable touch targets.
- Check small-screen layouts for horizontal overflow, especially the contact section's viewport-width positioning.
- Ensure section links account for the sticky header and respect reduced-motion preferences.

For reference, WCAG specifies at least 4.5:1 contrast for ordinary text and 3:1 for large text. See [W3C contrast guidance](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) and [W3C form-label guidance](https://www.w3.org/WAI/tutorials/forms/labels/).

### 3. Content and credibility

- Clarify how the IT agency and academy offerings relate to each other.
- Give business clients and prospective trainees distinct next steps, such as “Discuss a Project” and “Explore Training.”
- Describe service deliverables and intended audiences. Explain recruitment if it remains part of the advertised offering.
- Add genuine project examples, training outcomes, and approved client testimonials.
- Add approved team photographs and short expertise summaries.
- Standardize capitalization, titles, and wording throughout the page.

### 4. Presentation and maintenance

- Add a useful footer, favicon, and social-sharing metadata.
- Remove unused CSS and keep shared colors and spacing consistent.
- Document the actual hosting and deployment process once selected and verified.
- Keep the existing lightweight stack unless future requirements justify more complexity.

## Verification status

During the initial source review:

- `node --check app.js` passed.
- The inline JavaScript parsed successfully.
- An isolated check with browser actions stubbed confirmed the missing loaded menu function and the WhatsApp validation gap. No message was sent.
- Contrast ratios were calculated from the declared CSS colors.
- The Git working tree was unchanged after the review.

A local browser preview was blocked by the review environment's browser policy. Rendered desktop/mobile layouts, keyboard interaction, and real email/WhatsApp handoffs remain unverified.

### Manual checks before launch

- [ ] Check desktop, tablet, and narrow mobile layouts for clipping and horizontal scrolling.
- [ ] Open and close mobile navigation and follow every section link.
- [ ] Navigate the page using only the keyboard and inspect focus visibility.
- [ ] Check form labels, validation errors, empty values, whitespace-only values, and invalid email addresses.
- [ ] Verify email and WhatsApp drafts contain the expected details without claiming delivery before the visitor sends them.
- [ ] Confirm contact details, team information, and service descriptions with the organization.
- [ ] Check browser-console errors, image loading, text contrast, and the deployed site.
