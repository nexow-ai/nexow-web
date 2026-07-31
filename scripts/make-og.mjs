// Generate the social share image public/og.png (1200×630).
// Dark brand card: grid + glow + the white wordmark + tagline.
import sharp from 'sharp';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const pub = fileURLToPath(new URL('../public/', import.meta.url));
const W = 1200;
const H = 630;

/**
 * Live connector count, read from the catalog rather than typed into the card —
 * the previous hard-coded "28+" was three months and 60 connectors stale by the
 * time anyone noticed. The catalog is TypeScript, so parse rather than import.
 */
export function liveConnectorCount(
  source = readFileSync(fileURLToPath(new URL('../src/data/connectors.ts', import.meta.url)), 'utf8'),
) {
  return (source.match(/"status":\s*"live"/g) ?? []).length;
}

const LIVE = liveConnectorCount();

const bg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0b0d13"/>
      <stop offset="1" stop-color="#08090d"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="30%" r="55%">
      <stop offset="0" stop-color="#06a086" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#06a086" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
      <path d="M48 0H0V48" fill="none" stroke="#ffffff" stroke-opacity="0.05" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#grid)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  <!-- brand hairline top -->
  <rect x="0" y="0" width="${W}" height="4" fill="#10c5a3"/>
  <!-- eyebrow -->
  <text x="${W / 2}" y="250" text-anchor="middle"
    font-family="'DejaVu Sans Mono','Liberation Mono',monospace" font-size="22"
    letter-spacing="6" fill="#5cf0d0">AI-NATIVE MARKET DASHBOARDS</text>
  <!-- tagline -->
  <text x="${W / 2}" y="430" text-anchor="middle"
    font-family="'DejaVu Sans','Liberation Sans',Arial,sans-serif" font-weight="bold"
    font-size="46" fill="#ffffff">Describe it. Nexow builds it. Trade it.</text>
  <!-- subline -->
  <text x="${W / 2}" y="480" text-anchor="middle"
    font-family="'DejaVu Sans','Liberation Sans',Arial,sans-serif" font-size="24" fill="#8b93a7">
    Plain-language widgets · ${LIVE} live connectors · 100K starter credits</text>
  <!-- url -->
  <text x="${W / 2}" y="560" text-anchor="middle"
    font-family="'DejaVu Sans Mono','Liberation Mono',monospace" font-size="20" fill="#5b6472">nexow.ai</text>
</svg>`;

async function main() {
  const logo = await sharp(path.join(pub, 'logo-white.png'))
    .resize({ width: 300 })
    .toBuffer();
  const { height: lh = 187 } = await sharp(logo).metadata();

  await sharp(Buffer.from(bg))
    .composite([{ input: logo, top: Math.round(150 - lh / 2), left: Math.round(W / 2 - 150) }])
    .png()
    .toFile(path.join(pub, 'og.png'));

  console.log('og.png generated');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
