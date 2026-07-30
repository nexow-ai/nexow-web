import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import path from 'node:path';

/**
 * `ensure-content-store.mjs` is a top-level `predev` script: importing it runs
 * it. Node's fs and child_process are mocked so each case can describe a
 * different on-disk state, and `process.exit` throws so control flow stops
 * exactly where the real process would.
 */
const ROOT = path.resolve(import.meta.dirname, '../../..');
const DEV_STORE = path.join(ROOT, '.astro/data-store.json');
const PROD_STORE = path.join(ROOT, 'node_modules/.astro/data-store.json');

class Exit extends Error {
  constructor(readonly code: number | undefined) {
    super(`process.exit(${code})`);
  }
}

/** Sizes keyed by path; a missing key means the file does not exist. */
let files: Map<string, number>;
/** Paths whose `statSync` should blow up (permission error, race, …). */
let unreadable: Set<string>;
let spawnResult: { status: number | null };

const copyFileSync = vi.fn((from: string, to: string) => {
  files.set(to, files.get(from) ?? 0);
});
const mkdirSync = vi.fn();
const spawnSync = vi.fn(() => spawnResult);

vi.mock('node:fs', () => ({
  existsSync: (p: string) => files.has(p),
  statSync: (p: string) => {
    if (unreadable.has(p)) throw new Error(`EACCES: ${p}`);
    return { size: files.get(p) ?? 0 };
  },
  copyFileSync: (from: string, to: string) => copyFileSync(from, to),
  mkdirSync: (p: string, opts: unknown) => mkdirSync(p, opts),
}));

vi.mock('node:child_process', () => ({
  spawnSync: (...args: unknown[]) => spawnSync(...(args as [])),
}));

let exitSpy: ReturnType<typeof vi.spyOn>;
let logSpy: ReturnType<typeof vi.spyOn>;

/** Run the script, returning the exit code it asked for (or null if it ran to completion). */
async function run(): Promise<number | undefined | null> {
  vi.resetModules();
  try {
    await import('../../../scripts/ensure-content-store.mjs');
    return null;
  } catch (error) {
    if (error instanceof Exit) return error.code;
    throw error;
  }
}

beforeEach(() => {
  files = new Map();
  unreadable = new Set();
  spawnResult = { status: 0 };
  copyFileSync.mockClear();
  mkdirSync.mockClear();
  spawnSync.mockClear();
  exitSpy = vi.spyOn(process, 'exit').mockImplementation(((code?: number) => {
    throw new Exit(code);
  }) as never);
  logSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
});

afterEach(() => {
  exitSpy.mockRestore();
  logSpy.mockRestore();
});

describe('ensure-content-store', () => {
  it('exits straight away when the dev store is already there', async () => {
    files.set(DEV_STORE, 1024);

    expect(await run()).toBe(0);
    expect(spawnSync).not.toHaveBeenCalled();
    expect(copyFileSync).not.toHaveBeenCalled();
  });

  it('restores the dev store from the build store without re-syncing', async () => {
    files.set(PROD_STORE, 2048);

    expect(await run()).toBeNull();
    expect(spawnSync).not.toHaveBeenCalled();
    expect(mkdirSync).toHaveBeenCalledWith(path.join(ROOT, '.astro'), { recursive: true });
    expect(copyFileSync).toHaveBeenCalledWith(PROD_STORE, DEV_STORE);
    expect(logSpy).toHaveBeenCalledWith('[content] Restored .astro/data-store.json for local blog.');
  });

  it('runs astro sync when neither store exists, then copies the result', async () => {
    spawnSync.mockImplementation(() => {
      files.set(PROD_STORE, 4096);
      return spawnResult;
    });

    expect(await run()).toBeNull();
    expect(spawnSync).toHaveBeenCalledWith('bunx', ['astro', 'sync', '--force'], {
      cwd: ROOT,
      stdio: 'inherit',
      shell: false,
    });
    expect(logSpy).toHaveBeenCalledWith('[content] Rebuilding content data store…');
    expect(copyFileSync).toHaveBeenCalledWith(PROD_STORE, DEV_STORE);
  });

  it('propagates a failing astro sync exit code', async () => {
    spawnResult = { status: 2 };

    expect(await run()).toBe(2);
    expect(copyFileSync).not.toHaveBeenCalled();
  });

  it('exits 1 when astro sync dies without a status (signal)', async () => {
    spawnResult = { status: null };

    expect(await run()).toBe(1);
    expect(copyFileSync).not.toHaveBeenCalled();
  });

  it('leaves the dev store alone when sync produced nothing to copy', async () => {
    // Sync "succeeded" but wrote no store — nothing to restore, no crash.
    expect(await run()).toBeNull();
    expect(spawnSync).toHaveBeenCalledOnce();
    expect(copyFileSync).not.toHaveBeenCalled();
    expect(mkdirSync).not.toHaveBeenCalled();
  });

  it('treats a zero-byte store as missing', async () => {
    files.set(DEV_STORE, 0);
    files.set(PROD_STORE, 512);

    expect(await run()).toBeNull();
    expect(copyFileSync).toHaveBeenCalledWith(PROD_STORE, DEV_STORE);
  });

  it('treats an unstattable store as missing', async () => {
    files.set(DEV_STORE, 1024);
    unreadable.add(DEV_STORE);
    files.set(PROD_STORE, 512);

    expect(await run()).toBeNull();
    expect(copyFileSync).toHaveBeenCalledWith(PROD_STORE, DEV_STORE);
  });

  it('does not overwrite a healthy dev store when both exist', async () => {
    files.set(DEV_STORE, 10);
    files.set(PROD_STORE, 20);

    expect(await run()).toBe(0);
    expect(copyFileSync).not.toHaveBeenCalled();
  });
});
