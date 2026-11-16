#!/usr/bin/env node
/**
 * Record the web-surface clips from the live app with Playwright's built-in video capture.
 *
 *   APP_URL=https://x-dev.nexow.ai E2E_EMAIL=... E2E_PASSWORD=... \
 *     node scripts/record/record-web.mjs [slug ...]
 *
 * Writes media-src/<slug>.webm, then run `node scripts/encode-videos.mjs` to produce the site
 * clips. Use a Sponsor demo account on a NON-production project (`bun run review:account` in
 * ../nexow). Prompt steps spend real AI credits, so record once and keep the output.
 *
 * The scripted steps here cover navigation, prompts and waiting. Anything that needs a precise
 * gesture (drag, group, invite) is a `TODO` selector until the app exposes stable test ids —
 * those clips can be recorded by hand with the in-app recorder and dropped into media-src/.
 */
import { mkdirSync, renameSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { chromium } from 'playwright';
import { SHOTS } from './shots.mjs';

const APP = process.env.APP_URL ?? 'https://x.nexow.ai';
if (/\/\/x\.nexow\.ai/.test(APP) && !process.env.ALLOW_PROD) {
  console.error(
    'Refusing to record against production. Set APP_URL to a dev project, or ALLOW_PROD=1.',
  );
  process.exit(1);
}
const wanted = new Set(process.argv.slice(2));
const OUT = 'media-src';
mkdirSync(OUT, { recursive: true });

async function login(page) {
  await page.goto(`${APP}/auth`);
  await page.getByLabel(/email/i).fill(process.env.E2E_EMAIL ?? '');
  await page.getByLabel(/password/i).fill(process.env.E2E_PASSWORD ?? '');
  await page.getByRole('button', { name: /sign in|continue/i }).click();
  await page.waitForURL((u) => !u.pathname.startsWith('/auth'), { timeout: 30_000 });
}

async function run(step, page) {
  const [kind, arg] = [step.split(':')[0], step.slice(step.indexOf(':') + 1)];
  if (kind === 'prompt') {
    const box = page.getByRole('textbox').first();
    await box.fill(arg);
    await box.press('Enter');
  } else if (kind === 'wait') {
    await page.waitForTimeout(arg === 'build' ? 12_000 : 4_000);
  } else if (kind === 'scroll') {
    await page.mouse.wheel(0, 600);
    await page.waitForTimeout(1500);
  } else {
    console.warn(`  step "${step}" has no automation yet — record this part by hand`);
    await page.waitForTimeout(1500);
  }
}

const browser = await chromium.launch();
for (const shot of SHOTS.filter(
  (s) => s.surface === 'web' && (!wanted.size || wanted.has(s.slug)),
)) {
  const dir = join(OUT, `.tmp-${shot.slug}`);
  const ctx = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    recordVideo: { dir, size: { width: 1440, height: 900 } },
  });
  const page = await ctx.newPage();
  console.log(`recording ${shot.slug}`);
  await login(page);
  await page.goto(`${APP}${shot.route}`);
  await page.waitForTimeout(1500);
  for (const step of shot.steps) await run(step, page);
  await page.waitForTimeout(Math.max(0, shot.seconds * 1000 - 4000));
  await ctx.close(); // flushes the video file
  const [file] = readdirSync(dir);
  renameSync(join(dir, file), join(OUT, `${shot.slug}.webm`));
}
await browser.close();
