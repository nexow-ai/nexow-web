// Generate static Nexow favicon fallbacks (default brand accent).
// Per-route accents are inlined in BaseHead via src/lib/favicon.ts.
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { writeFileSync } from 'node:fs';
import { faviconSvg } from '../src/lib/favicon.ts';

const pub = fileURLToPath(new URL('../public/', import.meta.url));
const p = (f) => path.join(pub, f);

async function main() {
  const master = 180;
  const svg = faviconSvg('brand', master);

  writeFileSync(p('favicon.svg'), svg);

  const buf = await sharp(Buffer.from(svg)).png().toBuffer();

  await sharp(buf).toFile(p('favicon.png'));
  await sharp(buf).resize(32, 32).png().toFile(p('favicon-32.png'));
  await sharp(buf).resize(16, 16).png().toFile(p('favicon-16.png'));
  await sharp(buf).resize(180, 180).png().toFile(p('apple-touch-icon.png'));
  await sharp(buf).resize(32, 32).png().toFile(p('favicon.ico'));

  console.log('favicons generated');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
