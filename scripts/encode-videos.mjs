#!/usr/bin/env node
/**
 * Encode raw captures from media-src/ into the site's looping clips.
 *
 *   media-src/<slug>.(mov|mp4|webm|mkv)  →  public/video/<slug>.{webm,mp4,webp}
 *
 * Usage: node scripts/encode-videos.mjs [slug ...]   (no args = every file in media-src/)
 * Needs ffmpeg. Each file must stay well under Cloudflare Pages' 25 MiB limit (we cap at 8 MB),
 * and posters under the 400 KB raster budget enforced by tests/build.
 * Slugs ending in "-phone" are scaled for portrait (720 wide); everything else 1280 wide.
 */
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readdirSync, statSync } from 'node:fs';
import { basename, extname, join } from 'node:path';

const SRC = 'media-src';
const OUT = 'public/video';
const MAX_BYTES = 8 * 1024 * 1024;
const POSTER_MAX = 380 * 1024;

if (!existsSync(SRC)) {
  console.error(`No ${SRC}/ directory — put raw captures there first.`);
  process.exit(1);
}
mkdirSync(OUT, { recursive: true });

const wanted = new Set(process.argv.slice(2));
const files = readdirSync(SRC).filter((f) => /\.(mov|mp4|webm|mkv)$/i.test(f));
const ff = (args) =>
  execFileSync('ffmpeg', ['-y', '-loglevel', 'error', ...args], { stdio: 'inherit' });

for (const file of files) {
  const slug = basename(file, extname(file));
  if (wanted.size && !wanted.has(slug)) continue;
  const input = join(SRC, file);
  const phone = slug.endsWith('-phone');
  const scale = phone ? 'scale=720:-2' : 'scale=1280:-2';
  const vf = `fps=30,${scale}`;

  // Raise the CRF until each file fits the budget.
  for (const [ext, codec, crfs] of [
    ['webm', ['-c:v', 'libvpx-vp9', '-b:v', '0', '-row-mt', '1'], [34, 38, 42, 46]],
    [
      'mp4',
      ['-c:v', 'libx264', '-preset', 'slow', '-pix_fmt', 'yuv420p', '-movflags', '+faststart'],
      [26, 29, 32, 35],
    ],
  ]) {
    const out = join(OUT, `${slug}.${ext}`);
    for (const crf of crfs) {
      ff(['-i', input, '-an', '-vf', vf, ...codec, '-crf', String(crf), out]);
      if (statSync(out).size <= MAX_BYTES) break;
    }
    const kb = Math.round(statSync(out).size / 1024);
    console.log(
      `${out}  ${kb} KB${statSync(out).size > MAX_BYTES ? '  ⚠ over 8 MB, trim the clip' : ''}`,
    );
  }

  const poster = join(OUT, `${slug}.webp`);
  for (const q of [80, 65, 50, 35]) {
    ff(['-ss', '1', '-i', input, '-frames:v', '1', '-vf', scale, '-quality', String(q), poster]);
    if (statSync(poster).size <= POSTER_MAX) break;
  }
  console.log(`${poster}  ${Math.round(statSync(poster).size / 1024)} KB`);
}
