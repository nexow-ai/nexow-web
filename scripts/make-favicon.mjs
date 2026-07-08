// Generate favicon size variants from the brand PNGs in public/.
// Sources (never overwritten): favicon.png (light mark), favicon-black.png (dark mark).
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const pub = fileURLToPath(new URL('../public/', import.meta.url));
const p = (f) => path.join(pub, f);

/** Trim alpha, pad to a square, resize. */
async function squareIcon(input, size) {
  return sharp(p(input))
    .trim()
    .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
}

async function main() {
  const master = await squareIcon('favicon.png', 180);
  await sharp(master).toFile(p('apple-touch-icon.png'));
  await sharp(master).resize(32, 32).png().toFile(p('favicon-32.png'));
  await sharp(master).resize(16, 16).png().toFile(p('favicon-16.png'));
  await sharp(master).resize(32, 32).png().toFile(p('favicon.ico'));

  console.log('favicon variants generated from public/favicon.png');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
