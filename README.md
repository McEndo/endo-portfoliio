# Michael Ehondor's cybersecurity portfolio

A static, single-page portfolio built with React, TypeScript, Vite, Tailwind CSS, Motion, and MDX tooling. The site presents Michael's profile, projects, credentials, latest field notes, and contact details.

## Requirements

- Node.js 20.19+, 22.12+, or 24+ (`.nvmrc` selects Node 22)
- npm (the lockfile was generated with npm)

## Local setup

```bash
nvm use
npm ci
npm run dev
```

Vite prints the local development URL. No environment variables are currently required.

In development, `/field-notes.json` is proxied to a local Field Notes dev server on port 5174. If that server is not running, the Field Notes section shows only its "Explore Field Notes" link.

## Validation and production build

```bash
npm test
npm run lint
npm run build
npm run preview
```

The regression suite uses Vitest and Testing Library to cover the section links, mobile-menu accessibility/state behavior, Field Notes feed parsing, and compilation of the unpublished MDX draft. The production output is written to `dist/`, which is intentionally ignored by Git.

## Project structure

```text
src/
  components/     Page sections, tests, and shared animation wrapper
  content/        Unpublished MDX draft and compile test
  lib/            Field Notes feed parsing and tests
  App.tsx         Single-page composition
  index.css       Tailwind import and global/writeup styles
  main.tsx        React entry point
public/           Logo, icons, social preview image, and redirect rules
vite.config.ts    React, Tailwind, MDX, and dev proxy configuration
```

Navigation uses same-page anchors (`#about`, `#projects`, `#credentials`, `#field-notes`, and `#contact`). There is no client-side router and no backend/API.

## Deployment

- Node version: 22 (`.nvmrc`; compatible versions are also declared in `package.json`)
- Install command: `npm ci`
- Build command: `npm run build`
- Publish directory: `dist`
- Environment variables: none

`public/_redirects` (Netlify redirect syntax) rewrites `/field-notes.json` to the Field Notes feed at `https://notes.mcendo.dev/latest.json`, so the browser fetches it from the portfolio's own origin.

## Content updates

- Update portfolio sections in `src/components/`.
- Update project cards in the `projects` array in `src/components/Projects.tsx`.
- The MDX file under `src/content/` is a draft only; it is not imported, routed, or published by this app.
- Motion follows `prefers-reduced-motion`; the CSS media query also disables smooth scrolling and shortens CSS animation/transition durations for users who request reduced motion.
- The Field Notes section in `src/components/Writeups.tsx` shows the two latest published entries from the feed and links to the full site.
- Field notes themselves are published from the separate `endo-security-writeups` repository, not from this app.
