# Contributing to nexow-web

Thanks for helping improve the Nexow marketing site. This repository is
open source. Copyright and trademarks stay with **Nexow, Inc.**
([nexow.ai](https://nexow.ai)).

By submitting a pull request you agree to the
[Contributor License Agreement](CLA.md): your contribution is assigned
(or exclusively licensed) to Nexow, Inc. so the project remains company
property while staying licensed under Apache-2.0.

Please also follow the [Code of Conduct](CODE_OF_CONDUCT.md).

## What this repo is

`nexow-web` is the public marketing site for [Nexow](https://x.nexow.ai):
landing pages, plans, community, connectors, legal docs, and the blog.
It is an [Astro](https://astro.build) static site with Tailwind CSS v4
and 17 locales.

The product app itself lives at `https://x.nexow.ai` and is not this
repository.

## Ways to contribute

- **Bugs** — layout, routing, i18n gaps, broken links, a11y, SEO.
- **Copy and docs** — clearer English, missing translations, blog fixes.
- **Features** — new sections or pages that match the existing design
  system. Open an issue first if the change is large.
- **Tests** — unit, integration, build, or Playwright coverage.

Please do not open PRs that only reformat files, swap package managers,
or rewrite the brand.

## Prerequisites

- Node.js **22.16+** (see `.nvmrc`)
- [Bun](https://bun.sh) **1.2+** (this repo’s lockfile is `bun.lock`)

```bash
git clone https://github.com/nexow-ai/nexow-web.git
cd nexow-web
bun install
cp .env.example .env   # optional; social URLs have published fallbacks
bun run content:sync
bun run dev            # http://localhost:4321
```

Useful commands:

```bash
bun run check          # astro + TypeScript
bun run test           # vitest (syncs content first)
bun run test:unit
bun run test:integration
bun run test:build     # after a production build
bun run test:e2e       # Playwright (builds first)
bun run build
bun run preview
```

Start the Astro dev server in the background with `astro dev --background`
when you need the process detached. Manage it with `astro dev stop`,
`astro dev status`, and `astro dev logs`.

## Project map

```
src/
  components/          UI, page bodies, landing sections
  content/blog/<lang>/ Markdown / MDX posts (matching slugs per locale)
  i18n/                locales, legal copy, routing helpers
  layouts/             Layout.astro, BlogPost.astro
  lib/                 shared TS used by pages and tests
  pages/               EN at /, other locales under /{lang}/
  styles/global.css    Tailwind v4 tokens
public/                logos, favicons, og.png, robots.txt, llms.txt
scripts/               asset generators and content-store helpers
tests/                 unit, integration, build, e2e
```

## Editing content

- **Marketing copy** lives in `src/i18n/locales/<lang>.ts`. English
  (`en.ts`) is the source of truth. When you add a string, add it to
  every locale or the type-check fails.
- **Legal documents** live in `src/i18n/legal-en.ts` (English, governing)
  and `src/i18n/legal/<lang>.ts` for translations.
- **Blog posts** are Markdown/MDX under `src/content/blog/<lang>/`. Use
  the same slug in every language so `hreflang` stays aligned.
- **Brand tokens** (color, type) live in `src/styles/global.css` under
  `@theme`. Do not introduce a parallel palette.

## Branch promotion

Work lands only along this path:

```
feature/*  →  PR  →  dev  →  PR  →  stg  →  clone  →  main
```

- Open feature PRs into **`dev`**. That review is typecheck only.
- **`stg`** only accepts `dev`. That PR is the production gate
  (coverage, build, Playwright).
- **`main`** is a clone of `stg`, then semantic-release cuts a minor.
- Do not push directly to `stg` or `main`. The husky `pre-push` hook
  and CI reject those updates.

Releases and changelog are commit-driven. See the README
[Branch promotion](README.md#branch-promotion) and
[Releasing](README.md#releasing) sections.

## Pull requests

1. Fork the repository and branch from `dev`.
2. Keep the change focused. Prefer several small PRs over one mixed one.
3. Use [Conventional Commits](https://www.conventionalcommits.org/) — the
   message is what semantic-release uses to bump the version:

   ```
   feat(i18n): add Korean help-page CTAs
   fix(footer): keep the clock tabular on RTL locales
   test(build): cover sitemap hreflang for /tr/
   ```

   Allowed types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`,
   `test`, `build`, `ci`, `chore`. A scope is optional. Breaking changes
   use `feat!:` or a `BREAKING CHANGE:` footer.

4. Run what you touched:

   ```bash
   bun run check
   bun run test:unit
   ```

   If you changed routes, copy, or layout, also run
   `bun run test:integration`. If you changed HTML output or assets,
   `bun run build && bun run test:build`. If you changed interaction,
   `bun run test:e2e`.

5. Fill in the pull-request template, including the CLA checkbox.
6. Do not add `Co-authored-by` trailers for coding agents, and do not
   mention Cursor, Claude, Codex, or similar in commit messages.

Maintainers may request changes, squash, or decline a contribution.
Acceptance is at the discretion of Nexow, Inc.

## Attribution and forks

This project is © Nexow, Inc. Forks and reuse **must** keep
[LICENSE](LICENSE), [NOTICE](NOTICE), and the Nexow, Inc. copyright
notices. You may not present a fork as an official Nexow product.
See [TRADEMARKS.md](TRADEMARKS.md).

## Security

Do not file public issues for vulnerabilities. See [SECURITY.md](SECURITY.md).

## Questions

- Product / site: <hello@nexow.ai>
- Support: <support@nexow.ai>
- Legal: see [https://nexow.ai/legal](https://nexow.ai/legal)
