# Mohammad Sufiyan — Portfolio

A premium, frontend-only React + Vite portfolio for Mohammad Sufiyan, Full Stack Developer.

No backend, no database — 100% static frontend, deployable to GitHub Pages, Vercel, Netlify or
Cloudflare Pages.

## Features

- Light & dark theme (persisted, respects system preference, no flash on load)
- Fully responsive, mobile-first design (tested 320px → 1920px)
- Sticky, blur navbar with active-section highlighting and a mobile menu
- Hero with real profile photo, quick-contact links and subtle load-in animation
- About, categorized Skills (no fake percentage bars), Experience & Education timelines,
  a "Development Journey" milestone strip
- Featured Projects with client-side filtering (All / Full Stack / Java / React / AI):
  - **EduManage** — full case study (Overview → Future Scope) + screenshot gallery + lightbox
  - **AI Resume Builder & ATS Analyzer** — feature breakdown + live demo link + gallery
- Certificates section with a fullscreen viewer (zoom, download, keyboard navigation) and a
  data-driven placeholder slot for a second certificate
- Resume section (view / download the real PDF)
- Contact section: info cards with copy-to-clipboard, and a contact form
- EmailJS integration for the contact form, with a graceful fallback (WhatsApp / Email buttons)
  when EmailJS isn't configured — the form never pretends to send when it can't
- Floating contact button (WhatsApp / Email / Call / Contact form)
- Toast notifications, accessible modals (ESC to close, keyboard navigation, focus-visible states)
- SEO: title/meta description, Open Graph, Twitter card, canonical placeholder, robots.txt, sitemap.xml

## Tech Stack

React 18 · Vite 5 · JavaScript (no TypeScript) · CSS (custom design tokens, no framework) ·
lucide-react (icons) · @emailjs/browser (contact form) · framer-motion (available, used sparingly)

No backend, no database, no custom API server — everything ships as static files.

## Getting Started

```bash
npm install
npm run dev       # start local dev server
npm run build     # production build → dist/
npm run preview   # preview the production build locally
```

## Environment Variables (EmailJS)

Copy `.env.example` to `.env` and fill in your EmailJS credentials:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

**The site works fine without these set.** If any variable is missing, the contact form
automatically shows a "not configured yet" message with WhatsApp / Email fallback buttons
instead of pretending to send a message.

### EmailJS setup, step by step

1. Create a free account at [emailjs.com](https://www.emailjs.com/).
2. Add an **Email Service** (e.g. connect your Gmail) → copy its **Service ID**.
3. Create an **Email Template** with these variables in the body:
   `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`, `{{phone}}` → copy the
   **Template ID**. Recommended subject line: `Portfolio Contact — {{subject}}`.
4. Go to **Account → General** and copy your **Public Key**.
5. Put all three values into `.env` (see above) and restart `npm run dev`.

Never commit real secrets — `.env` is already git-ignored. EmailJS public keys are safe to
expose client-side by design; there is no SMTP password anywhere in this project.

## Editing Content — Centralized Data Files

Everything editable lives in `src/data/`. You should never need to touch a component to update
your own information.

| File | Controls |
|---|---|
| `src/data/personal.js` | Name, title, email, phone/WhatsApp number, hero copy |
| `src/data/socialLinks.js` | GitHub & LinkedIn URLs |
| `src/data/skills.js` | Skill categories and items |
| `src/data/projects.js` | Both featured projects, their features, tech tags, links and EduManage's case study copy |
| `src/data/experience.js` | Work experience timeline |
| `src/data/education.js` | Education timeline |
| `src/data/certificates.js` | Certificates shown (and the second-certificate placeholder) |
| `src/data/journey.js` | "Development Journey" milestones + the four highlight cards under the hero |
| `src/data/assets.js` | **The one place every image/PDF is imported from** (see below) |

### Replacing the profile photo

1. Add your new photo to `src/assets/profile/`.
2. In `src/data/assets.js`, update the `profilePhoto` import path to your new filename.

### Replacing the resume

1. Add the new PDF to `src/assets/resume/`.
2. In `src/data/assets.js`, update the `resumePdf` import and `resume.fileName`.

### Adding / editing projects

1. Add screenshots to `src/assets/projects/<project-name>/`.
2. Register them in `src/data/assets.js` under `assets.projects.<projectName>`.
3. Add or edit the project entry in `src/data/projects.js` (title, description, tech, category
   tags for the filter, features, and — optionally — a `caseStudy` object for a full case-study
   layout like EduManage's).
4. Only include `liveUrl` / `githubUrl` if the link is real — the UI hides buttons for links
   that don't exist rather than showing a dead link.

### Adding the second certificate

Edit the second entry in `src/data/certificates.js`: add the image to
`src/assets/certificates/`, register it in `src/data/assets.js`, then set `placeholder: false`
and fill in `title`, `issuer`, `date` and `image`.

### Editing contact information

Update `src/data/personal.js` (email, phone/WhatsApp) and `src/data/socialLinks.js`
(GitHub, LinkedIn) — every button, link and card across the site reads from these two files.

## Deployment

**Vercel / Netlify / Cloudflare Pages:** point the build command to `npm run build` and the
output directory to `dist`. No extra configuration needed — remember to add the `VITE_EMAILJS_*`
environment variables in the platform's dashboard if you want the live contact form to work.

**GitHub Pages:**
1. If deploying to a *project* page (`username.github.io/repo-name`), set `base: '/repo-name/'`
   in `vite.config.js` (it currently defaults to `'/'`, which is correct for a *user* page or
   a custom domain).
2. `npm run build`, then publish the `dist/` folder (e.g. via the `gh-pages` package or a GitHub
   Actions workflow).
3. This site is a single page with in-page smooth-scroll navigation and no React Router routes,
   so there's nothing further to configure for GitHub Pages compatibility.

## Project Structure

```
src/
  assets/       real images, certificate, resume PDF (organized by type)
  components/   reusable UI: Navbar, ThemeToggle, ContactForm, Lightbox, CertificateViewer, ...
  data/         all editable content — see table above
  hooks/        useTheme, useActiveSection
  sections/     one file per page section (Hero, About, Skills, Projects, ...)
  services/     emailService.js (EmailJS abstraction)
  utils/        small helpers (clipboard)
  App.jsx       assembles all sections
  main.jsx      React entry point
  index.css     design tokens + base styles
```

## Notes

- No fake data: every number, feature and project detail reflects only what was supplied — the
  second certificate is left as a clearly labeled placeholder rather than invented.
- No `href="#"` placeholder links — every button either performs a real action or is hidden.
- Respects `prefers-reduced-motion`.
