/**
 * Astro keeps the content-layer data store in different places:
 *   - `astro sync` / `astro build` → node_modules/.astro/data-store.json
 *   - `astro dev`                 → .astro/data-store.json
 *
 * If `.astro/data-store.json` is missing (cleared cache, interrupted sync,
 * or a race on first boot), `getCollection('blog')` returns [] and the blog
 * index renders empty. Rebuild / copy the store so local blog pages work.
 */
import { copyFileSync, existsSync, mkdirSync, statSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const prodStore = join(root, 'node_modules/.astro/data-store.json');
const devStore = join(root, '.astro/data-store.json');

function hasStore(path) {
  try {
    return existsSync(path) && statSync(path).size > 0;
  } catch {
    return false;
  }
}

if (hasStore(devStore)) {
  process.exit(0);
}

if (!hasStore(prodStore)) {
  console.log('[content] Rebuilding content data store…');
  const result = spawnSync('bunx', ['astro', 'sync', '--force'], {
    cwd: root,
    stdio: 'inherit',
    shell: false,
  });
  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

if (hasStore(prodStore) && !hasStore(devStore)) {
  mkdirSync(join(root, '.astro'), { recursive: true });
  copyFileSync(prodStore, devStore);
  console.log('[content] Restored .astro/data-store.json for local blog.');
}
