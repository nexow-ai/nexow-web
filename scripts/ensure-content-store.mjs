/**
 * Astro keeps the content-layer data store in different places:
 *   - `astro sync` / `astro build` → node_modules/.astro/data-store.json
 *   - `astro dev` / Vitest          → .astro/data-store.json
 *
 * If `.astro/data-store.json` is missing (fresh CI checkout, cleared cache,
 * interrupted sync), `getCollection('blog')` returns [] and the blog index,
 * changelog and related tests render empty. Rebuild / copy the store so those
 * consumers see the same entries `astro sync` just wrote.
 *
 * Usage:
 *   node ./scripts/ensure-content-store.mjs          # copy only if missing
 *   node ./scripts/ensure-content-store.mjs --force  # always refresh from prod
 */
import { copyFileSync, existsSync, mkdirSync, statSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const prodStore = join(root, 'node_modules/.astro/data-store.json');
const devStore = join(root, '.astro/data-store.json');
const force = process.argv.includes('--force');

function hasStore(path) {
  try {
    return existsSync(path) && statSync(path).size > 0;
  } catch {
    return false;
  }
}

if (!force && hasStore(devStore)) {
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

if (hasStore(prodStore)) {
  mkdirSync(join(root, '.astro'), { recursive: true });
  copyFileSync(prodStore, devStore);
  console.log(
    force
      ? '[content] Refreshed .astro/data-store.json from sync output.'
      : '[content] Restored .astro/data-store.json for local blog.',
  );
}
