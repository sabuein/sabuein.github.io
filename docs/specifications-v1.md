# Specifications v1

## Project
Personal website redesign for `sabuein.github.io`

## Status
Planning only — no implementation yet.

## Purpose of v1
Define the structure, architecture, scope, and technical direction for a redesigned personal website built with plain HTML, CSS, and JavaScript, with Progressive Web App support and separate home, resume, and portfolio redirect experiences.

---

## 1. Project goals

Build a clean, installable personal site in **plain HTML, CSS, and JavaScript** that serves three purposes:

1. **Home page**  
   A concise public landing page introducing Salaheddin AbuEin, highlighting his identity as a **Ghost Expert** and **full-stack web developer**, and directing visitors to key destinations.

2. **Resume page**  
   A modern, recruiter-friendly resume/CV with improved writing, dark/light theme support, strong mobile presentation, and print/PDF friendliness.

3. **Portfolio redirect page**  
   A branded redirect page that sends visitors to `https://abuein.dev/portfolio/` with a short countdown and clear messaging.

The site should support:
- responsive design
- dark/light theme
- PWA installation
- offline support for core static content
- downloadable and cached PDF resume
- accessible contact actions
- subtle keffiyeh-inspired visual identity

---

## 2. Information architecture

```text
/
├─ index.html
├─ app.webmanifest
├─ sw.js
├─ favicon.ico
├─ robots.txt                 (optional)
├─ sitemap.xml                (optional)
├─ assets/
│  ├─ css/
│  │  ├─ reset.css
│  │  ├─ tokens.css
│  │  ├─ base.css
│  │  ├─ utilities.css
│  │  ├─ home.css
│  │  ├─ resume.css
│  │  ├─ portfolio.css
│  │  └─ print.css
│  ├─ js/
│  │  ├─ application.mjs
│  │  └─ mods/
│  │     ├─ pwa.mjs
│  │     ├─ theme.mjs
│  │     ├─ ui.mjs
│  │     ├─ share.mjs
│  │     ├─ contact.mjs
│  │     ├─ redirect.mjs
│  │     ├─ helpers.mjs
│  │     └─ storage.mjs
│  ├─ icons/
│  │  ├─ icon-192.png
│  │  ├─ icon-512.png
│  │  ├─ maskable-192.png
│  │  └─ maskable-512.png
│  ├─ images/
│  │  ├─ og-cover.jpg
│  │  └─ profile/...
│  ├─ pdf/
│  │  └─ salaheddin-abuein-cv.pdf
│  ├─ contact/
│  │  └─ salaheddin-abuein.vcf
│  └─ patterns/
│     ├─ keffiyeh-net.svg
│     ├─ keffiyeh-stripe.svg
│     └─ keffiyeh-wave.svg
├─ portfolio/
│  └─ index.html
└─ resume/
   └─ index.html
```

---

## 3. Page responsibilities

### 3.1 Home page `/`
Purpose: concise, branded landing page.

#### Includes
- name
- role/title
- Ghost Expert credential
- brief professional summary
- primary CTA links
- secondary contact links
- theme toggle
- install/share/contact conveniences
- subtle keffiyeh-inspired visual accents

#### Should not include
- full job history
- full project archive
- large marketing-style website sections
- too much duplicate content already present on resume/portfolio

#### Proposed content blocks
1. Hero
2. Short intro
3. Focus / services
4. Credentials / current work
5. Primary links
6. Footer/contact

---

### 3.2 Resume page `/resume/`
Purpose: standalone detailed CV/resume.

#### Includes
- polished summary
- technical skills
- detailed experience
- education
- optional certifications
- AI tooling mention in current role
- PDF download
- print-friendly layout
- optional share/copy actions

#### Tone
- modern
- concise
- recruiter-friendly
- senior and credible
- technical without hype

---

### 3.3 Portfolio page `/portfolio/`
Purpose: redirect page only.

#### Includes
- heading
- short explanatory message
- AbuEin Technologies mention
- 5-second countdown
- continue button
- back home button
- meta refresh
- JS redirect
- canonical link

---

## 4. Branding and positioning

### Primary identity
**Salaheddin AbuEin**

### Recommended headline
**Ghost Expert, Full-Stack Web Developer**

### Alternate document/page title
**Salaheddin AbuEin — Ghost Expert, Full-Stack Web Developer**

### Positioning goals
Communicate:
- strong Ghost credibility
- full-stack breadth
- freelance/professional readiness
- technical delivery capability
- practical AI-assisted workflow adoption
- mobile-friendly modern presence

---

## 5. Ghost Expert placement

### Home page
Ghost Expert should be prominently featured.

#### Best placement
- title/subtitle area
- small badge or credential line
- optional link to official Ghost Expert profile

#### Recommended approach
Keep the main title clean, then show Ghost Expert as a credential.

Example structure:
- H1: `Salaheddin AbuEin`
- subtitle: `Full-Stack Web Developer`
- credential badge: `Official Ghost Expert`

### Resume page
Mention Ghost naturally through experience. No need to over-emphasize it separately.

### Portfolio redirect page
Optional small mention if it supports freelance positioning.

---

## 6. Home page content strategy

### Hero
Must include:
- name
- role
- Ghost Expert badge
- short positioning statement
- CTA buttons

Example direction:
`Full-stack web developer with 10+ years of experience building performant, accessible, maintainable websites and digital platforms. Official Ghost Expert with strong experience across Ghost, JavaScript, Java, SQL, AWS, and production support.`

### Focus/services block
A short section with 3–4 items only:
- Ghost development
- full-stack web development
- performance/accessibility
- freelance & contract delivery

### Credentials/current block
Could include:
- Official Ghost Expert
- Current Developer at Rapid Information Systems
- 10+ years experience
- London, UK

### CTA structure
Primary:
- View Resume
- View Portfolio
- Email Me

Secondary:
- WhatsApp
- LinkedIn
- GitHub
- Call
- Download vCard
- Share

---

## 7. Resume content strategy

### Summary direction
Should be tighter than the current LinkedIn summary and CV profile.

#### Draft direction
`Full-stack web developer with 10+ years of experience building, maintaining, and improving production websites, digital platforms, and hosted infrastructure. Strong background in HTML, CSS, JavaScript, Ghost/Node.js, Java, SQL, AWS, and CMS-driven delivery, with hands-on experience across front-end, back-end, support, and systems administration. Known for combining technical delivery, client collaboration, and practical problem-solving, and for using AI-assisted workflows to accelerate debugging, research, implementation, and communication.`

### Current role AI wording
Use a version close to this:

`Apply AI-assisted workflows using Claude, ChatGPT, Gemini, Copilot, and related tools to accelerate debugging, feature delivery, code review, UI refinement, technical research, and written communication across production websites and platform work.`

This should appear in the **current Rapid role**, not repeatedly across the site.

---

## 8. Visual design system

### Overall tone
**Clean modern technical**, with subtle personal/cultural identity through keffiyeh-inspired motifs.

### Theme palette
Preferred palette:
- black
- white
- olive
- stone

### Light theme direction
- background: warm white / stone
- surface: white
- text: charcoal / black
- muted text: gray-stone
- accent: olive
- border: soft stone-gray

### Dark theme direction
- background: near-black / graphite
- surface: charcoal
- text: off-white
- muted text: stone-gray
- accent: muted olive / sage
- border: deep gray

### Typography direction
- one strong sans-serif for body and UI
- optional serif or restrained display face for emphasis only
- monospace for technical details, metadata, or tags if needed

---

## 9. Keffiyeh-inspired design usage

This is an identity accent, not the main layout texture.

### Approved use areas
1. hero background accent
2. section dividers/bands
3. footer/header ornamental treatment
4. small card/detail accents

### Avoid
- full-page heavy repeated background
- high-contrast large overlays behind body text
- decorative overload

### Pattern set
- `keffiyeh-net.svg`
- `keffiyeh-stripe.svg`
- `keffiyeh-wave.svg`

### Intensity
**Subtle to moderate**
- home page: subtle
- portfolio redirect: subtle to moderate
- resume page: very subtle

---

## 10. CSS architecture

### Shared imports
Pages should import only required CSS files, but share the design system.

#### Common layers
- `reset.css`
- `tokens.css`
- `base.css`
- `utilities.css`

#### Page-specific
- `home.css`
- `resume.css`
- `portfolio.css`

#### Print
- `print.css` especially for `/resume/`

---

## 11. JavaScript architecture

### Entry file
- `assets/js/application.mjs`

### Module folder
- `assets/js/mods/`

### Modules
- `pwa.mjs`
- `theme.mjs`
- `ui.mjs`
- `share.mjs`
- `contact.mjs`
- `redirect.mjs`
- `helpers.mjs`
- `storage.mjs`

### Rules
- keep modules small and focused
- initialize only features needed on the current page
- avoid unnecessary JS for static content
- prioritize accessibility and resilience if JS is unavailable

---

## 12. PWA scope

### Included in v1
- installable web app
- `app.webmanifest`
- `sw.js`
- offline caching of core pages/assets
- resume PDF cached
- icons and maskable icons
- theme-color/meta support
- app name and short name
- share integration where supported

### Service worker scope
Cache:
- root page
- resume page
- portfolio redirect page
- CSS
- JS modules
- icons
- SVG patterns
- PDF
- manifest
- key images

### PWA principle
Enhanced but simple. No push notifications in v1.

---

## 13. Contact features

### Supported actions
- `mailto:`
- `tel:`
- WhatsApp link
- LinkedIn
- GitHub
- copy email
- copy phone
- download vCard
- Web Share API if supported

### vCard
A `.vcf` file should be included.

### Calendar/scheduling
Not required in v1.

---

## 14. Redirect page behavior

### URL
`/portfolio/`

### Destination
`https://abuein.dev/portfolio/`

### Behavior
- branded redirect page
- visible heading/message
- 5-second countdown
- auto redirect
- immediate manual button
- home button
- meta refresh + JS redirect

### Recommended wording
**Heading:** `Redirecting to Portfolio`

**Body:** `You are being redirected to my freelance and professional portfolio at AbuEin Technologies.`

**Fallback:** `If you are not redirected automatically, use the link below.`

---

## 15. SEO / metadata direction

### Home page title
`Salaheddin AbuEin — Ghost Expert, Full-Stack Web Developer`

### Resume page title
`Resume — Salaheddin AbuEin`

### Portfolio redirect page title
`Portfolio — Salaheddin AbuEin`

### Metadata goals
- clear titles
- concise descriptions
- Open Graph image
- canonical URLs
- installable app metadata
- theme colors for light/dark contexts where appropriate

---

## 16. Accessibility goals

Must include:
- semantic landmarks
- proper heading order
- visible focus styles
- sufficient contrast
- reduced-motion support
- keyboard-friendly controls
- accessible countdown text
- accessible theme toggle labels
- no essential feature blocked by JS only

---

## 17. Performance goals

- plain HTML/CSS/JS only
- optimized SVG and icons
- minimal JS on initial load
- cache static assets
- responsive images only if needed
- no unnecessary libraries/frameworks

---

## 18. Intentionally excluded from v1

- push notifications
- subscription system
- blog/CMS integration
- complex booking/calendar logic
- animation-heavy design
- duplicated full portfolio content on the home page
- framework migration

---

## 19. Open decisions for v1.1 or later

- exact home page section order
- exact home page summary wording
- final hero badge wording for Ghost Expert
- final resume summary text
- final current-role bullets
- final redirect copy
- exact theme token values
- whether to include a profile image
- whether to include a “currently working with” line
- whether to include a downloadable PDF generated manually or from the resume page

---

## 20. Recommended next step
After v1, the next useful specification is:

- **v1.1 — content and UX wording**
