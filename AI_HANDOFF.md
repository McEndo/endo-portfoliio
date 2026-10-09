# AI handoff

Last reviewed: 2026-10-09

## Architecture

This is a static React 19 single-page portfolio built by Vite 8. `src/main.tsx` mounts `App`, and `src/App.tsx` renders each page section in a fixed order. Navigation is implemented with same-page fragment links rather than React Router. Tailwind CSS is loaded through the Vite plugin and `src/index.css`. Motion provides entrance/reveal animations. There is no server, database, API, authentication, analytics integration, or environment-variable dependency.

The MDX plugin is configured in `vite.config.ts`, and draft files exist in `src/content/`, but no MDX file is imported or exposed in the current application. Published field notes live on a separately linked Netlify site.

## Key files

- `src/main.tsx`: React entry point.
- `src/App.tsx`: page composition and section order.
- `src/components/Navbar.tsx`: desktop/mobile navigation and scroll behavior.
- `src/components/Navbar.test.tsx`: navigation and mobile-menu regression tests.
- `src/components/Hero.tsx`: landing section and primary calls to action.
- `src/components/Projects.tsx`: project data and rendering.
- `src/components/Credentials.tsx`: learning and certification content.
- `src/components/Writeups.tsx`: external field-notes link.
- `src/components/Footer.tsx`: contact and social links.
- `src/components/Reveal.tsx`: shared scroll-reveal animation.
- `src/index.css`: Tailwind import and global/MDX article styles.
- `src/content/mdx.test.ts`: compile checks for unpublished MDX drafts.
- `vite.config.ts`: React, Tailwind, and MDX plugins.
- `package.json` / `package-lock.json`: scripts and locked dependencies.
- `public/endo-logo2.png`: logo and favicon image.

## Commands

```bash
npm ci
npm run dev
npm test
npm run lint
npm run build
npm run preview
npm audit
```

Node.js 20.19+, 22.12+, or 24+ is supported; `.nvmrc` selects Node 22 for development and deployment. No environment variables are required.

## Deployment evidence and settings

The portfolio's hosting provider is not identifiable from repository evidence. Current and historical commits contain no provider configuration or deployment workflow, there is no deployment branch, and the only Git remote is the GitHub source repository `https://github.com/McEndo/endo-portfoliio`. The Netlify field-notes link is a separate site and does not establish this portfolio's provider.

Provider-neutral settings:

- Install: `npm ci`
- Build: `npm run build`
- Publish: `dist`
- Node: 22 from `.nvmrc`
- Environment variables: none
- SPA fallback/redirects: not required while navigation remains fragment-based

No provider-specific configuration was added because doing so would be speculative. The owner must identify the hosting account, production URL, and any domain before deployment.

## Review status

As of 2026-10-09:

- Production build passes.
- ESLint passes for the repository.
- Vitest passes 4 tests across 2 files, covering section links, mobile-menu behavior, and MDX compilation.
- Desktop (1440 x 900) and mobile (375 x 812) rendered without horizontal overflow or broken local images.
- All in-page navigation targets exist; mobile navigation opens, closes, and reaches the selected section.
- The portfolio, field-notes site, GitHub profile, and EndoScan repository URLs respond. LinkedIn and TryHackMe rejected automated checks, so those two links require occasional manual verification.
- No deployment-provider configuration, CI workflow, or environment files exist. Provider-neutral build settings are documented in this file, README, `.nvmrc`, and `package.json`.
- The repository's code does not reference environment variables.
- The dependency audit is clean after the 2026-10-09 lockfile update.
- Motion honors `prefers-reduced-motion`, and reduced-motion CSS disables smooth scrolling and effectively removes CSS animation delays.
- Both unpublished MDX drafts have valid fenced code blocks and compile in the regression suite.

## Changes made during the review

- Made the closed mobile menu unavailable to keyboard and assistive-technology users with `inert`/`aria-hidden`, and exposed its expanded state and controlled region on the menu button.
- Added a descriptive document title and meta description.
- Updated vulnerable build/content dependencies and removed packages with no imports in the repository.
- Replaced the stock Vite README with project-specific setup, validation, architecture, deployment, and content guidance.
- Added Vitest and Testing Library regression coverage for navigation, the mobile menu, and MDX syntax.
- Added reduced-motion behavior without changing the default visual design.
- Repaired only the missing MDX code-fence delimiters; draft content remains unpublished.
- Added provider-neutral Node version and build settings without guessing a hosting provider.

## Known issues

### Medium priority

- There is no CI gate. Tests, lint, build, and audit must be run manually before each deployment.
- The hosting provider, hosting account, production URL, and any custom domain are still unknown from repository evidence.
- Several muted text colors use very low opacity. A formal WCAG contrast audit is still needed before claiming conformance.
- The draft MDX files remain intentionally unreachable from the production site. A publishing decision is still needed before adding routes or an index.
- The portfolio has no custom 404 behavior; this is currently low risk because it has no client-side routes.

### Low priority

- `src/App.css`, `src/assets/react.svg`, `src/assets/vite.svg`, and `src/assets/hero.png` appear unused and can be removed in a separate cleanup after manual confirmation.

### Local tooling note

During this review, the installed `npm` launcher on the review machine pointed to a missing global npm CLI. Repository commands were validated through the checked-in local binaries, and a temporary package-manager workaround regenerated and audited the npm lockfile. This is a machine installation issue, not repository code. Reinstalling Node.js/npm locally is recommended before routine maintenance.

## Recommended next steps

1. Identify the actual hosting provider/account and production URL, then add provider-specific configuration only if that platform benefits from a checked-in file.
2. Add CI that runs `npm ci`, `npm test`, `npm run lint`, `npm run build`, and `npm audit` on pull requests.
3. Run Lighthouse and an automated accessibility scanner in the deployed environment, then manually verify keyboard focus order and color contrast.
4. Decide whether MDX is part of this repository's intended product. If yes, implement routes/indexing; if no, remove the unused MDX pipeline and drafts.
5. Add a dependency-update process (Dependabot or Renovate) and run `npm audit` regularly.
