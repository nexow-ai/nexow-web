# nexow-web

Marketing site & landing page for [Nexow](https://app.nexow.ai) — the AI-native
dashboard builder for markets. Built with **Astro** (static output), **Tailwind
CSS v4**, and self-hosted fonts. Optimized for SEO and GEO (generative /
answer-engine optimization).

## Stack

- **Astro 7** — static site generation, near-zero client JS
- **Tailwind CSS v4** (`@tailwindcss/vite`) with a custom brand token system
- **@astrojs/sitemap** — i18n sitemap with hreflang alternates
- **@astrojs/mdx** + content collections — the blog
- Self-hosted variable fonts (Space Grotesk, Inter, JetBrains Mono)

## Features

- **Bilingual (EN / ES)** — English at `/`, Spanish at `/es/`, wired with
  `hreflang` + canonical tags and an i18n sitemap.
- **Full marketing site** — home, features, pricing, about, blog, privacy, 404.
- **SEO** — per-page titles/descriptions, Open Graph + Twitter cards, canonical
  URLs, JSON-LD (`Organization`, `WebSite`, `SoftwareApplication`, `FAQPage`,
  `BlogPosting`).
- **GEO** — `llms.txt` summary for answer engines and an AI-crawler-friendly
  `robots.txt`.
- **Design** — hybrid light hero + dark product showcases, animated widget mock,
  scroll-reveal (progressively enhanced; content is visible without JS).

## Commands

```bash
bun install
bun run dev        # dev server at http://localhost:4321
bun run build      # static build to ./dist
bun run preview    # preview the production build
bun run check      # astro + TypeScript diagnostics
```

## Structure

```
src/
  components/          UI + section components (Hero, Features, …)
    pages/            per-route page bodies, rendered by both locales
    sections/         landing-page sections
  content/blog/<lang>/  blog posts (Markdown/MDX)
  i18n/               config, utils, content dictionary, blog helpers
  layouts/            Layout.astro, BlogPost.astro
  pages/              routes (EN at root, ES under /es/)
  styles/global.css   Tailwind v4 theme + design tokens
public/               logos, favicons, og.png, robots.txt, llms.txt
scripts/              one-off asset + OG image generators
```

## Editing content

- **Copy** lives in `src/i18n/content.ts` (typed, `en` + `es`). Section
  components read from it by locale — no copy is hard-coded in markup.
- **Blog posts** are Markdown/MDX under `src/content/blog/en/` and
  `src/content/blog/es/`. Use matching slugs across locales so hreflang aligns.
- **Brand tokens** (colors, fonts) live in `src/styles/global.css` under
  `@theme`.

## Regenerating assets

```bash
bun run scripts/optimize-assets.mjs   # resize logos + favicons
bun run scripts/make-og.mjs           # regenerate public/og.png
```

## Deployment

Static output in `dist/` — deploy to any static host (Netlify, Cloudflare Pages,
Vercel, S3…). The production domain is set in `astro.config.mjs` (`site`).
