import { describe, expect, it } from 'vitest';
import {
  checkAll,
  collectUrls,
  isReachable,
  main,
  probe,
} from '../../../scripts/check-external-links.mjs';
import { CONNECTORS } from '../../../src/data/connectors';
import { SOCIALS } from '../../../src/i18n/config';

/**
 * The checker itself is unit-tested with a stubbed probe; the real network run
 * happens on a schedule, not in CI, because it fails on someone else's outage.
 */
describe('collectUrls', () => {
  it('finds every connector homepage in the catalog', () => {
    const urls = collectUrls();
    const found = new Set(urls.map((u) => u.url));
    for (const connector of CONNECTORS) {
      expect(found, `${connector.id} is not being checked`).toContain(connector.url);
    }
  });

  it('finds every social profile', () => {
    const found = new Set(collectUrls().map((u) => u.url));
    for (const social of SOCIALS) {
      expect(found, `${social.label} is not being checked`).toContain(social.href);
    }
  });

  it('labels each URL with where it came from', () => {
    for (const { url, source } of collectUrls()) {
      expect(source, url).toMatch(/^(connector|social):/);
    }
  });

  it('deduplicates URLs shared by more than one entry', () => {
    const urls = collectUrls().map((u) => u.url);
    expect(new Set(urls).size).toBe(urls.length);
  });

  it('parses from the given sources rather than only the real files', () => {
    const urls = collectUrls(
      '{ "id": "acme", "url": "https://acme.test/" }',
      "{ label: 'X', href: 'https://x.test/nexow' }",
    );
    expect(urls).toEqual([
      { url: 'https://acme.test/', source: 'connector:acme' },
      { url: 'https://x.test/nexow', source: 'social:X' },
    ]);
  });
});

describe('checkAll', () => {
  const items = Array.from({ length: 20 }, (_, i) => ({
    url: `https://example.test/${i}`,
    source: `connector:c${i}`,
  }));

  it('probes every URL exactly once', async () => {
    const seen: string[] = [];
    const results = await checkAll(items, async (item) => {
      seen.push(item.url);
      return { ...item, status: 200, ok: true };
    });

    expect(results).toHaveLength(items.length);
    expect(new Set(seen).size).toBe(items.length);
  });

  it('bounds how many run at once', async () => {
    let inFlight = 0;
    let peak = 0;

    await checkAll(
      items,
      async (item) => {
        inFlight += 1;
        peak = Math.max(peak, inFlight);
        await new Promise((resolve) => setTimeout(resolve, 5));
        inFlight -= 1;
        return { ...item, status: 200, ok: true };
      },
      4,
    );

    expect(peak).toBeLessThanOrEqual(4);
    expect(peak).toBeGreaterThan(1);
  });

  it('returns results sorted by source, so output is stable', async () => {
    const results = await checkAll(
      [
        { url: 'b', source: 'connector:b' },
        { url: 'a', source: 'connector:a' },
      ],
      async (item) => ({ ...item, status: 200, ok: true }),
    );
    expect(results.map((r) => r.source)).toEqual(['connector:a', 'connector:b']);
  });

  it('reports failures alongside successes rather than throwing', async () => {
    const results = await checkAll(
      [
        { url: 'ok', source: 'connector:ok' },
        { url: 'dead', source: 'connector:dead' },
      ],
      async (item) =>
        item.url === 'dead'
          ? { ...item, status: 404, ok: false }
          : { ...item, status: 200, ok: true },
    );

    expect(results.filter((r) => !r.ok).map((r) => r.source)).toEqual(['connector:dead']);
  });

  it('handles an empty list', async () => {
    expect(await checkAll([], async (i) => ({ ...i, status: 200, ok: true }))).toEqual([]);
  });
});

describe('isReachable', () => {
  it('accepts success and redirect statuses', () => {
    for (const status of [200, 204, 301, 302, 308, 399]) {
      expect(isReachable(status), String(status)).toBe(true);
    }
  });

  it('rejects the 4xx range that means the link is wrong', () => {
    for (const status of [400, 403, 404, 410]) {
      expect(isReachable(status), String(status)).toBe(false);
    }
  });

  it('forgives rate limiting and server errors — not our regression', () => {
    for (const status of [429, 500, 502, 503]) {
      expect(isReachable(status), String(status)).toBe(true);
    }
  });
});

describe('probe', () => {
  const item = { url: 'https://example.test/', source: 'connector:example' };

  it('tries HEAD first and reports the status', async () => {
    const calls: string[] = [];
    const result = await probe(item, async (_url, init) => {
      calls.push(init.method);
      return { status: 200 } as Response;
    });

    expect(calls).toEqual(['HEAD']);
    expect(result).toMatchObject({ status: 200, ok: true, source: item.source });
  });

  it('retries with GET when HEAD is rejected', async () => {
    const calls: string[] = [];
    const result = await probe(item, async (_url, init) => {
      calls.push(init.method);
      return { status: init.method === 'HEAD' ? 405 : 200 } as Response;
    });

    expect(calls).toEqual(['HEAD', 'GET']);
    expect(result.ok).toBe(true);
  });

  it('reports a link that is genuinely gone', async () => {
    const result = await probe(item, async () => ({ status: 404 }) as Response);
    expect(result).toMatchObject({ status: 404, ok: false });
  });

  it('identifies itself and follows redirects', async () => {
    let init: RequestInit | undefined;
    await probe(item, async (_url, options) => {
      init = options;
      return { status: 200 } as Response;
    });

    expect(init?.redirect).toBe('follow');
    expect((init?.headers as Record<string, string>)['user-agent']).toContain('nexow-link-check');
  });

  it('turns a transport failure into a result rather than throwing', async () => {
    const result = await probe(item, async () => {
      throw new Error('ENOTFOUND');
    });

    expect(result).toMatchObject({ status: 0, ok: false });
    expect(result.error).toContain('ENOTFOUND');
  });

  it('arms an abort signal so a hung host cannot stall the run', async () => {
    let signal: AbortSignal | undefined;
    await probe(item, async (_url, options) => {
      signal = options.signal;
      return { status: 200 } as Response;
    });

    expect(signal).toBeInstanceOf(AbortSignal);
    expect(signal!.aborted, 'the signal fires on timeout, not immediately').toBe(false);
  });

  it('surfaces an abort as a failed probe rather than an unhandled rejection', async () => {
    const result = await probe(item, async () => {
      throw new DOMException('The operation was aborted.', 'AbortError');
    });
    expect(result).toMatchObject({ status: 0, ok: false });
    expect(result.error).toContain('aborted');
  });
});

describe('main', () => {
  const urls = [{ url: 'https://a.test/', source: 'connector:a' }];

  it('reports success when everything resolves', async () => {
    const log: string[] = [];
    const ok = await main({
      urls,
      run: async (items) => items.map((i) => ({ ...i, status: 200, ok: true })),
      json: false,
      log: (m: string) => log.push(m),
      error: () => {},
    });

    expect(ok).toBe(true);
    expect(log.join('\n')).toContain('1/1 reachable');
  });

  it('reports each broken link and fails overall', async () => {
    const errors: string[] = [];
    const ok = await main({
      urls,
      run: async (items) => items.map((i) => ({ ...i, status: 404, ok: false })),
      json: false,
      log: () => {},
      error: (m: string) => errors.push(m),
    });

    expect(ok).toBe(false);
    expect(errors.join('\n')).toContain('connector:a');
    expect(errors.join('\n')).toContain('404');
  });

  it('emits machine-readable output on request', async () => {
    const log: string[] = [];
    await main({
      urls,
      run: async (items) => items.map((i) => ({ ...i, status: 404, ok: false })),
      json: true,
      log: (m: string) => log.push(m),
      error: () => {},
    });

    const payload = JSON.parse(log.at(-1)!);
    expect(payload).toMatchObject({ checked: 1 });
    expect(payload.broken).toHaveLength(1);
  });
});
