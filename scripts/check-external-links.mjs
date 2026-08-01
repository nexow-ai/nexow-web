/**
 * Verify that every outbound URL the site publishes still resolves.
 *
 * This is deliberately NOT part of the PR gate: it fails on someone else's
 * outage, not on our change. It runs on a schedule instead, so link rot in the
 * connector catalog surfaces within a week rather than when a visitor finds it.
 *
 *   node scripts/check-external-links.mjs [--json]
 *
 * Exits non-zero if any URL is unreachable or answers 4xx.
 */
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const root = new URL('../', import.meta.url);
const read = (relative) => readFileSync(fileURLToPath(new URL(relative, root)), 'utf8');

/** Every `url:` in the connector catalog, plus the social profiles. */
export function collectUrls(
  connectorSource = read('src/data/connectors.ts'),
  configSource = read('src/i18n/config.ts'),
) {
  const urls = new Map();

  for (const [, id, url] of connectorSource.matchAll(
    /"id":\s*"([^"]+)"[\s\S]*?"url":\s*"([^"]+)"/g,
  )) {
    urls.set(url, `connector:${id}`);
  }

  for (const [, label, url] of configSource.matchAll(
    /label:\s*'([^']+)',\s*href:\s*'(https:[^']+)'/g,
  )) {
    urls.set(url, `social:${label}`);
  }

  return [...urls].map(([url, source]) => ({ url, source }));
}

export const TIMEOUT_MS = 15_000;
export const CONCURRENCY = 8;

/**
 * A 429 or a 5xx is the other end having a bad day, not a dead link — only a
 * 4xx (other than rate limiting) or a transport failure counts as rot.
 */
export function isReachable(status) {
  return status < 400 || status === 429 || status >= 500;
}

/** `fetch` and the timeout are injected so this is testable without the network. */
export async function probe({ url, source }, fetchImpl = globalThis.fetch, timeoutMs = TIMEOUT_MS) {
  const attempt = async (method) => {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    try {
      const response = await fetchImpl(url, {
        method,
        redirect: 'follow',
        signal: controller.signal,
        headers: {
          // Some CDNs 403 an unknown agent; identify honestly.
          'user-agent': 'nexow-link-check/1.0 (+https://nexow.ai)',
          accept: 'text/html,*/*',
        },
      });
      return response.status;
    } finally {
      clearTimeout(timer);
    }
  };

  try {
    let status = await attempt('HEAD');
    // Some hosts reject HEAD but serve GET.
    if (status >= 400) status = await attempt('GET');
    return { url, source, status, ok: isReachable(status) };
  } catch (error) {
    return { url, source, status: 0, ok: false, error: String(error.message ?? error) };
  }
}

/** Run `probe` over `items` with a bounded number in flight. */
export async function checkAll(items, probeFn = probe, concurrency = CONCURRENCY) {
  const results = [];
  const queue = [...items];

  await Promise.all(
    Array.from({ length: Math.min(concurrency, queue.length) }, async () => {
      for (let next = queue.shift(); next; next = queue.shift()) {
        results.push(await probeFn(next));
      }
    }),
  );

  return results.sort((a, b) => a.source.localeCompare(b.source));
}

export async function main({
  urls = collectUrls(),
  run = checkAll,
  json = process.argv.includes('--json'),
  log = console.log,
  error = console.error,
} = {}) {
  log(`[links] checking ${urls.length} outbound URLs…`);

  const results = await run(urls);
  const broken = results.filter((r) => !r.ok);

  if (json) {
    log(JSON.stringify({ checked: results.length, broken }, null, 2));
  } else {
    for (const r of broken) {
      error(`[links] ✗ ${r.source} ${r.url} → ${r.error ?? r.status}`);
    }
    log(`[links] ${results.length - broken.length}/${results.length} reachable`);
  }

  return broken.length === 0;
}

// Only run when invoked directly, so the helpers stay unit-testable.
/* v8 ignore next 3 -- the CLI entry point; `main` itself is covered above. */
if (process.argv[1] && import.meta.url === new URL(`file://${process.argv[1]}`).href) {
  if (!(await main())) process.exit(1);
}
