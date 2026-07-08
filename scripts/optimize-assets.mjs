// One-off asset optimizer: shrink the brand PNGs the app shipped (up to ~700 KB)
// into web-appropriate sizes and generate favicon variants. Run with `bun run
// scripts/optimize-assets.mjs`. Safe to re-run; it overwrites its outputs.
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const pub = fileURLToPath(new URL('../public/', import.meta.url));
const p = (f) => path.join(pub, f);

async function main() {
  // Wordmarks: cap width at 640px (retina-crisp for a ~200px display logo),
  // recompress. These are used in the header and footer.
  for (const name of ['logo-white', 'logo-black']) {
    const buf = await sharp(p(`${name}.png`))
      .resize({ width: 640, withoutEnlargement: true })
      .png({ compressionLevel: 9, quality: 90 })
      .toBuffer();
    await sharp(buf).toFile(p(`${name}.png`));
  }

  // Favicons — regenerate via scripts/make-favicon.mjs (rounded-square spike mark).
  const { execSync } = await import('node:child_process');
  execSync('bun run scripts/make-favicon.mjs', { stdio: 'inherit' });

  console.log('assets optimized');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
