# dcrader-template-trades

**Local Trade Business Landing Page Template** — Plumber · Electrician · HVAC · Handyman

> One of 5 industry outreach templates. Built to make a plumber say "I want that now."

**Live site →** [dcrader-template-trades.vercel.app](https://dcrader-template-trades.vercel.app)

---

## Stack

| Layer | Choice |
|---|---|
| Framework | [Astro](https://astro.build) 4.x (static output) |
| Styling | [Tailwind CSS](https://tailwindcss.com) 3.x |
| Fonts | Barlow Condensed (headlines) + DM Sans (body) via Google Fonts |
| Deploy | [Vercel](https://vercel.com) (auto-deploys from `main`) |
| Future subdomain | `trades.dcrader.dev` |

---

## White-labeling: one file, five minutes

Every piece of client-facing content lives in a single config file:

```
src/data/business.ts
```

Change the name, phone, services, cities, testimonials, hours, and social links — **all components import from this file only**. No component hunting.

```ts
// src/data/business.ts (excerpt)
export const business = {
  name: "Crader Plumbing & Drain",
  phone: "(619) 555-0182",
  phoneHref: "tel:+16195550182",
  email: "service@craderplumbing.com",
  license: "C-36 #987654",
  // ... services, cities, testimonials, whyUs, etc.
};
```

---

## Sections

| # | Section | Key elements |
|---|---|---|
| 1 | **Hero** | Barlow Condensed headline, huge clickable phone number, orange CTA, 4 trust badges |
| 2 | **Services grid** | 8 tiles, inline SVG icons, hover effects |
| 3 | **Service area** | SVG concentric-circle coverage map + 20-city list |
| 4 | **Why us** | 4 trust pillars + stats strip (jobs/years/rating/response) |
| 5 | **Testimonials** | 6 review cards with star rating, Google aggregate badge |
| 6 | **Recent projects** | Before/after drag-slider carousel (3 projects, auto-advances) |
| 7 | **Quote form** | Name / phone / address / problem description, 15-min callback CTA |
| 8 | **Footer** | Hours, license #, social links, emergency callout |

---

## Design

- **Palette**: Deep navy `#0f2855` + safety orange `#f97316`
- **Phone number is the MVP**: `clamp(2.25rem, 6.5vw, 5rem)` in the hero — impossible to miss on mobile
- **Mobile sticky bar**: orange "Tap to Call" banner fixed to the bottom on `< md` screens
- **Nav**: transparent over hero, scrolls to solid navy with blur backdrop
- **Accessibility**: semantic HTML, `aria-label` on all interactive elements, skip-to-content link, AA contrast throughout

---

## Dev

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # → dist/
npm run preview    # preview the build
```

---

## Deploying a new client

1. Edit `src/data/business.ts` — update name, phone, services, cities, testimonials
2. Replace placeholder images in `projects[].beforeImg / afterImg` with real job photos
3. `git push` — Vercel auto-deploys
4. Point the client's domain (or a subdomain) to Vercel

---

## Repo

**GitHub** → [github.com/dcraderdev/dcrader-template-trades](https://github.com/dcraderdev/dcrader-template-trades)

Demo business: *Crader Plumbing & Drain — Family-owned since 2008, San Diego County, CA*
