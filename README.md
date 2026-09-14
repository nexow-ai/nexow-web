# nexow-web

[![License](https://img.shields.io/badge/license-Apache--2.0-blue.svg)](LICENSE)
[![CI](https://github.com/nexow-ai/nexow-web/actions/workflows/ci.yml/badge.svg)](https://github.com/nexow-ai/nexow-web/actions/workflows/ci.yml)
[![Nexow, Inc.](https://img.shields.io/badge/copyright-Nexow%2C%20Inc.-111.svg)](NOTICE)

Public marketing site for **[Nexow](https://x.nexow.ai)** — describe what you
need, get live widgets on a canvas. This repository is the
[nexow.ai](https://nexow.ai) website: landing pages, features, plans,
community, connectors, legal docs, and the blog.

**Copyright © 2026 [Nexow, Inc.](https://nexow.ai)**  
Open source under the [Apache License 2.0](LICENSE). Ownership, trademarks,
and brand stay with Nexow, Inc. Forks and reuse must keep the
[NOTICE](NOTICE) attribution. See [TRADEMARKS.md](TRADEMARKS.md).

The product application is **not** this repo. It runs at
[x.nexow.ai](https://x.nexow.ai).

## Stack

- **Astro 7** — static site generation, near-zero client JS
- **Tailwind CSS v4** (`@tailwindcss/vite`) with a custom brand token system
- **@astrojs/sitemap** — i18n sitemap with `hreflang` alternates
- **@astrojs/mdx** + content collections — the blog
- Self-hosted variable fonts (Space Grotesk, Inter, JetBrains Mono)
- **Bun** as the package manager (`bun.lock`)

## Features

- **17 locales** — English at `/`, others at `/{lang}/`, with `hreflang`,
  canonical tags, and an i18n sitemap
- **Full marketing site** — home, features, community, connectors, plans,
  about, blog, changelog, help, legal, privacy, security
- **SEO** — per-page titles and descriptions, Open Graph + Twitter cards,
  canonical URLs, JSON-LD (`Organization`, `WebSite`, `SoftwareApplication`,
  `FAQPage`, `BlogPosting`)
- **GEO** — `llms.txt` for answer engines and an AI-crawler-friendly
  `robots.txt`
- **Design** — hybrid light hero + dark product showcases, scroll-reveal
  (progressively enhanced; content is visible without JS)

## Commands

Requires Node.js 22.16+ (see `.nvmrc`) and [Bun](https://bun.sh) 1.2+.

```bash
bun install
bun run content:sync   # generate the Astro content store
bun run dev            # http://localhost:4321
bun run build          # static output in ./dist
bun run preview        # preview the production build
bun run check          # astro + TypeScript diagnostics
bun run test           # vitest (syncs content first)
bun run test:e2e       # Playwright (builds first)
```

## Structure

```
src/
  components/            UI, page bodies, landing sections
  content/blog/<lang>/   blog posts (Markdown / MDX)
  i18n/                  locales, legal copy, routing helpers
  layouts/               Layout.astro, BlogPost.astro
  lib/                   shared TypeScript
  pages/                 EN at root, other locales under /{lang}/
  styles/global.css      Tailwind v4 theme + design tokens
public/                  logos, favicons, og.png, robots.txt, llms.txt
scripts/                 asset + OG image generators
tests/                   unit, integration, build, e2e
```

## Editing content

- **Copy** lives in `src/i18n/locales/<lang>.ts`. English is the source of
  truth — new strings must be added to every locale.
- **Legal documents** live in `src/i18n/legal-en.ts` and
  `src/i18n/legal/<lang>.ts`.
- **Blog posts** are Markdown/MDX under `src/content/blog/<lang>/`. Use
  matching slugs across locales so `hreflang` aligns.
- **Brand tokens** (colors, fonts) live in `src/styles/global.css` under
  `@theme`.

## Regenerating assets

```bash
bun run scripts/optimize-assets.mjs   # resize logos + favicons
bun run scripts/make-og.mjs           # regenerate public/og.png
```

## Deployment

Static output in `dist/` — Cloudflare Pages via `bun run deploy`
(`wrangler pages deploy`). Production `site` is set in `astro.config.mjs`
to `https://nexow.ai`.

## Contributing

We welcome issues and pull requests. Please read
**[CONTRIBUTING.md](CONTRIBUTING.md)** (also at [contribution.md](contribution.md))
before you start.

By contributing you agree to the **[CLA](CLA.md)**: copyright in your
contribution is assigned to **Nexow, Inc.** so this project stays company
property while remaining Apache-2.0.

- [Code of Conduct](CODE_OF_CONDUCT.md)
- [Security policy](SECURITY.md)
- [Trademark policy](TRADEMARKS.md)

## License, ownership, and attribution

```
Copyright 2026 Nexow, Inc.

Licensed under the Apache License, Version 2.0.
```

| | |
| --- | --- |
| Legal entity | **Nexow, Inc.** |
| Brand | [nexow.ai](https://nexow.ai) · [x.nexow.ai](https://x.nexow.ai) |
| Address | 2810 N Church St STE 89080, Wilmington, DE 19802, United States |
| License | [Apache License 2.0](LICENSE) |
| Required notice | [NOTICE](NOTICE) — **must** ship with every fork and redistributed copy |
| Trademarks | [TRADEMARKS.md](TRADEMARKS.md) — not licensed |

The Apache License grants a copyright and patent license to use this Work.
It does **not** transfer ownership of the project, and it does **not** grant
rights in the Nexow name, logo, or other marks.

If you fork or reuse this repository, keep `LICENSE` and `NOTICE`, credit
Nexow, Inc., and do not present your fork as an official Nexow product.

Suggested credit:

```
Based on nexow-web by Nexow, Inc. (https://nexow.ai)
Copyright 2026 Nexow, Inc. Licensed under Apache-2.0.
```

## Contact

- General: [hello@nexow.ai](mailto:hello@nexow.ai)
- Support: [support@nexow.ai](mailto:support@nexow.ai)
- Partners: [partners@nexow.ai](mailto:partners@nexow.ai)
- Legal pages: [nexow.ai/legal](https://nexow.ai/legal)
