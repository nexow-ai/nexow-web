// Generate favicon size variants from the brand PNGs in public/.
// Sources (never overwritten):
//   favicon.png        — white mark (dark system color scheme)
//   favicon-black.png  — black mark (light system color scheme)
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

async function writeVariants(input, { master = 180, prefix = '' } = {}) {
  const buf = await squareIcon(input, master);
  const tag = prefix ? `-${prefix}` : '';
  if (!prefix) await sharp(buf).toFile(p('apple-touch-icon.png'));
  await sharp(buf).resize(32, 32).png().toFile(p(`favicon-32${tag}.png`));
  await sharp(buf).resize(16, 16).png().toFile(p(`favicon-16${tag}.png`));
  await sharp(buf).resize(32, 32).png().toFile(p(`favicon${tag}.ico`));
}

async function main() {
  await writeVariants('favicon.png');
  await writeVariants('favicon-black.png', { prefix: 'black' });
  console.log('favicon variants generated (light + dark system schemes)');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
