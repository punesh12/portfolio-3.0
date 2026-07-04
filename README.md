# Portfolio 3.0

Personal portfolio for **Punesh Borkar**, Senior Frontend Engineer. Built with Next.js 15, React 19, and a token-driven design system.

**Live repo:** [github.com/punesh12/portfolio-3.0](https://github.com/punesh12/portfolio-3.0)

## Features

- Responsive sections: Hero, Impact, About, Experience, Work, Expertise, Contact
- Light / dark / system theme toggle
- Smooth scrolling (Lenis) with GSAP ScrollTrigger integration
- Scroll reveals and timeline animations (Framer Motion)
- Design tokens in JSON → generated CSS variables
- Design system showcase at `/design-system`
- Resume download and profile photo

## Tech stack

| Layer     | Tools                                         |
| --------- | --------------------------------------------- |
| Framework | Next.js 15 (App Router), React 19, TypeScript |
| Styling   | Tailwind CSS v4, CSS variables                |
| Motion    | Framer Motion, GSAP ScrollTrigger, Lenis      |
| Theming   | `next-themes`                                 |
| Tooling   | ESLint, Prettier, token generator             |

## Getting started

```bash
npm install
cp .env.example .env
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment variables

| Variable            | Description                                             |
| ------------------- | ------------------------------------------------------- |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 measurement ID (e.g. `G-XXXXXXXXXX`) |

Copy `.env.example` to `.env` and fill in values. `.env` is gitignored and never pushed.

Set the same variables in your hosting provider (e.g. Vercel) for production.

## Scripts

| Command                | Description                                        |
| ---------------------- | -------------------------------------------------- |
| `npm run dev`          | Generate tokens, then start dev server (Turbopack) |
| `npm run build`        | Generate tokens, then production build             |
| `npm run start`        | Start production server                            |
| `npm run tokens`       | Regenerate `src/styles/tokens.css` from `tokens/`  |
| `npm run lint`         | Run ESLint                                         |
| `npm run format`       | Format with Prettier                               |
| `npm run format:check` | Check Prettier formatting                          |

## Project structure

```
tokens/                 # Design token source of truth (JSON)
scripts/
  generate-tokens.mjs   # tokens/*.json → src/styles/tokens.css
public/
  about/                # Profile image
  projects/             # Project screenshots
  resume/               # Resume PDF
src/
  animations/           # Framer Motion variants
  app/                  # App Router pages & layout
  components/
    layout/             # Navbar, footer, container
    sections/           # Page sections
    ui/                 # Reusable UI primitives
    design-system/      # Living style guide
  constants/            # Content & config
  hooks/                # Scroll, motion, theme helpers
  providers/            # Theme + smooth scroll
  styles/               # globals.css + generated tokens.css
  utils/                # Shared utilities (scroll-to, etc.)
```

## Design tokens

Edit values in `tokens/` (colors, spacing, motion, layout, breakpoints, etc.), then run:

```bash
npm run tokens
```

`predev` and `prebuild` run this automatically. Core CSS variables live in `src/styles/tokens.css` (generated — do not edit by hand). Component-level tokens and utilities stay in `src/styles/globals.css`.

### Breakpoints

Defined once in `tokens/breakpoints.json`:

| Token     | Default | Tailwind prefix |
| --------- | ------- | --------------- |
| `mobile`  | 390px   | `sm:`           |
| `tablet`  | 768px   | `md:`           |
| `desktop` | 1024px  | `lg:`           |
| `wide`    | 1280px  | `xl:`           |
| `max`     | 1440px  | `2xl:`          |

Use `md:` / `lg:` / `xl:` in components (mapped from tokens). In CSS, use `theme(--breakpoint-md)` etc. In JS, import `BREAKPOINT` / `IMAGE_SIZES` from `@/constants/breakpoints`.

## Sections

| Section    | Content                                                       |
| ---------- | ------------------------------------------------------------- |
| Hero       | Role, headline, CTAs, social links, illustration              |
| Impact     | Key metrics (performance, quality, delivery)                  |
| About      | Profile photo, bio, focus areas                               |
| Experience | Timeline with product links (PHYND, ArcadiaX, LNQ, Amplifier) |
| Work       | Featured projects                                             |
| Expertise  | Skill marquees                                                |
| Contact    | Email, LinkedIn, GitHub                                       |

## License

Private portfolio project. All rights reserved.
