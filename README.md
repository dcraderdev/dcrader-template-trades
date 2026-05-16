# dcrader-template-trades

**5 Local Trade Business Landing Page Templates** — Plumber · Electrician · HVAC · Handyman

> Outreach hooks for first clients. One codebase, five distinct aesthetics, one file to white-label each.

**Live site →** [dcrader-template-trades.vercel.app](https://dcrader-template-trades.vercel.app)

---

## The 5 Templates

| Route | Variant | Company | Palette | Font Pairing | Best For |
|---|---|---|---|---|---|
| `/` | Gallery index | — | — | Inter | Browse all 5 |
| `/v1-classic-trust` | Classic Trust | Crader Plumbing & Drain | Navy + Orange | Barlow Condensed + DM Sans | Established trades, BBB-type credibility |
| `/v2-modern-tech` | Modern Tech | BrightWatt Electric | Near-black + Teal | Sora + JetBrains Mono | EV charging, smart home, tech-forward |
| `/v3-family-warm` | Family Warm | Three Generations Heating | Cream + Forest Green | Playfair Display + Nunito Sans | Multi-generational family businesses |
| `/v4-emergency-bold` | Emergency Bold | Rapid Response Plumbing | Black + Red | Anton + DM Sans | 24/7 emergency-only operations |
| `/v5-luxury-trade` | Luxury Trade | Cedar Hill Custom Electric | Cream + Sage + Gold | Cormorant Garamond + Outfit | Premium custom/estate work |

---

## Stack

| Layer | Choice |
|---|---|
| Framework | [Astro](https://astro.build) 4.x (static output) |
| Styling | [Tailwind CSS](https://tailwindcss.com) 3.x |
| Fonts | Google Fonts (different pairing per variant) |
| Deploy | [Vercel](https://vercel.com) (auto-deploys from `main`) |
| Future subdomain | `trades.dcrader.dev` |

---

## White-labeling: one file, five minutes

Each variant has its own config file:

```
src/data/v1.ts   → Crader Plumbing & Drain (Classic Trust)
src/data/v2.ts   → BrightWatt Electric (Modern Tech)
src/data/v3.ts   → Three Generations Heating (Family Warm)
src/data/v4.ts   → Rapid Response Plumbing (Emergency Bold)
src/data/v5.ts   → Cedar Hill Custom Electric (Luxury Trade)
```

Change the company name, phone, services, cities, testimonials — **all components import from that file only**. No component hunting, no find-and-replace across files.

```ts
// src/data/v1.ts (excerpt)
export const business = {
  name: "Crader Plumbing & Drain",
  phone: "(619) 555-0182",
  phoneHref: "tel:+16195550182",
  email: "service@craderplumbing.com",
  license: "C-36 #987654",
  services: [...],
  testimonials: [...],
  // all content here
} as const;
```

---

## Sections (all 5 variants)

| # | Section | Description |
|---|---|---|
| 1 | **Nav** | Sticky header — phone always visible, scroll behavior varies by variant |
| 2 | **Hero** | Headline + phone number + CTA + trust badges (layout differs per variant) |
| 3 | **Services** | 6–8 service tiles (grid vs. list vs. editorial per variant) |
| 4 | **Service Area** | Coverage map / city list / neighborhood grid (varies) |
| 5 | **Why Us** | Trust pillars (cards / checklist / timeline / guarantees per variant) |
| 6 | **Testimonials** | Review cards (style varies from star-rating grid to editorial pull-quotes) |
| 7 | **Recent Projects** | Before/after drag-slider carousel |
| 8 | **Quote/Contact Form** | Lead capture (tone ranges from "Request Service" to "Schedule a Consultation") |
| 9 | **Footer** | Phone, email, hours, license #, social links |

---

## Design distinctions

**V1 — Classic Trust**: Barlow Condensed 900 hammer-blow headlines, navy/orange, phone at 5rem in hero, dot-grid texture, concentric-circle SVG coverage map, industrial pillar cards.

**V2 — Modern Tech**: Sora 800 headlines, near-black/teal, JetBrains Mono phone with `>_` cursor prefix, PCB circuit SVG decoration, terminal-style why-us, glass-morphism form.

**V3 — Family Warm**: Playfair Display serif headers, warm cream background (light!), "Since 1981" badge, centered hero with owner quote, letter-style testimonials, no SVG map — personal copy instead.

**V4 — Emergency Bold**: Anton ultra-condensed, true black/red, phone dominates 60% of the hero viewport, warning-stripe background, dispatch-board service list with response times, pulsing red ring animation.

**V5 — Luxury Trade**: Cormorant Garamond italic display, sage/gold/cream, editorial two-column service list, gold decorative rules, numbered "Our Approach" section, pull-quote testimonials, appointment-booking form with project type + timeline dropdowns.

---

## Dev

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # → dist/
npm run preview   # preview the build
```

---

## Deploying a new client

1. Pick the variant that fits their brand (v1–v5)
2. Duplicate the route: `cp src/pages/v1-classic-trust.astro src/pages/client-name.astro`
3. Edit `src/data/v1.ts` (or whichever variant) with real info
4. Replace `picsum.photos` placeholder images with real job photos
5. `git push` — Vercel auto-deploys

---

## Repo

**GitHub** → [github.com/dcraderdev/dcrader-template-trades](https://github.com/dcraderdev/dcrader-template-trades)
