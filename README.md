# Michael Ehondor's cybersecurity portfolio

A static, single-page portfolio built with React, TypeScript, Vite, Tailwind CSS, Motion, and MDX tooling. The current site presents Michael's profile, projects, credentials, field notes link, and contact details.

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

## Validation and production build

```bash
npm test
npm run lint
npm run build
npm run preview
```

The regression suite uses Vitest and Testing Library to cover the section links, mobile-menu accessibility/state behavior, and compilation of the unpublished MDX drafts. The production output is written to `dist/`, which is intentionally ignored by Git.

## Project structure

```text
src/
  components/     Page sections, tests, and shared animation wrapper
  content/        Unpublished MDX drafts and compile tests
  App.tsx         Single-page composition
  index.css       Tailwind import and global/writeup styles
  main.tsx        React entry point
public/           Static logo and icon assets
vite.config.ts    React, Tailwind, and MDX build configuration
```

Navigation uses same-page anchors (`#about`, `#projects`, `#credentials`, `#field-notes`, and `#contact`). There is no client-side router and no backend/API.

## Deployment

The portfolio's actual hosting provider cannot be identified from repository evidence. Git history contains no deployment workflow or provider configuration, and the only remote is the GitHub source repository. The Netlify URL in the site is for the separately hosted field-notes project and is not evidence that this portfolio uses Netlify.

Use these provider-neutral settings once the hosting account is identified:

- Node version: 22 (`.nvmrc`; compatible versions are also declared in `package.json`)
- Install command: `npm ci`
- Build command: `npm run build`
- Publish directory: `dist`
- Environment variables: none

No redirect rule is currently necessary because this site uses fragment links rather than client-side routes. No provider-specific file was added without evidence of the provider. Confirm the production URL, hosting account, and domain ownership before deployment.

## Content updates

- Update portfolio sections in `src/components/`.
- Update project cards in the `projects` array in `src/components/Projects.tsx`.
- The MDX files under `src/content/` are drafts only; they are not imported, routed, or published by this app.
- Motion follows `prefers-reduced-motion`; the CSS media query also disables smooth scrolling and shortens CSS animation/transition durations for users who request reduced motion.
- External field notes are linked from `src/components/Writeups.tsx`.

See `AI_HANDOFF.md` for the maintenance status, verified issues, and recommended next steps.
