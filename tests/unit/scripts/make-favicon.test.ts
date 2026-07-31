import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import path from 'node:path';
import { createSharpMock } from '../../helpers/sharp-mock';

/**
 * `make-favicon.mjs` runs on import, so each case resets the module registry
 * and re-imports it with a fresh `sharp` stand-in.
 */
const mock = createSharpMock();
vi.mock('sharp', () => ({ default: mock.sharp }));

const PUBLIC = path.resolve(import.meta.dirname, '../../..', 'public');
const p = (file: string) => path.join(PUBLIC, file);

let exitSpy: ReturnType<typeof vi.spyOn>;
let logSpy: ReturnType<typeof vi.spyOn>;
let errorSpy: ReturnType<typeof vi.spyOn>;

/** Import the script and wait for its top-level `main()` to settle. */
async function run() {
  vi.resetModules();
  await import('../../../scripts/make-favicon.mjs');
  await vi.waitFor(() => {
    expect(logSpy.mock.calls.length + errorSpy.mock.calls.length).toBeGreaterThan(0);
  });
}

beforeEach(() => {
  mock.reset();
  exitSpy = vi.spyOn(process, 'exit').mockImplementation((() => undefined) as never);
  logSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
  errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
});

afterEach(() => {
  exitSpy.mockRestore();
  logSpy.mockRestore();
  errorSpy.mockRestore();
});

describe('make-favicon', () => {
  it('reads both brand marks and never overwrites them', async () => {
    await run();

    const inputs = mock.calls.map((c) => c.input).filter((i) => i !== '<buffer>');
    expect(inputs).toEqual([p('favicon.png'), p('favicon-black.png')]);
    expect(mock.written).not.toContain(p('favicon.png'));
    expect(mock.written).not.toContain(p('favicon-black.png'));
  });

  it('emits every size variant for both colour schemes', async () => {
    await run();

    expect(mock.written).toEqual([
      p('apple-touch-icon.png'),
      p('favicon-32.png'),
      p('favicon-16.png'),
      p('favicon.ico'),
      p('favicon-32-black.png'),
      p('favicon-16-black.png'),
      p('favicon-black.ico'),
    ]);
  });

  it('only writes an apple-touch-icon for the unprefixed (white) mark', async () => {
    await run();
    expect(mock.written.filter((f) => f.includes('apple-touch-icon'))).toHaveLength(1);
  });

  it('squares the source at 180px before downscaling', async () => {
    await run();

    const master = mock.calls.find((c) => c.input === p('favicon.png'))!;
    expect(master.ops).toEqual(['trim', 'resize', 'png', 'toBuffer']);
    expect(master.args.resize).toEqual([
      180,
      180,
      { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } },
    ]);
  });

  it('writes 32px and 16px variants at those exact sizes', async () => {
    await run();

    const sizes = mock.calls
      .filter((c) => c.ops.includes('toFile') && c.args.resize)
      .map((c) => c.args.resize);
    expect(sizes).toEqual([
      [32, 32],
      [16, 16],
      [32, 32],
      [32, 32],
      [16, 16],
      [32, 32],
    ]);
  });

  it('reports success', async () => {
    await run();
    expect(logSpy).toHaveBeenCalledWith('favicon variants generated (light + dark system schemes)');
    expect(exitSpy).not.toHaveBeenCalled();
  });

  it('reports a failure and exits non-zero', async () => {
    mock.failNext(new Error('unreadable source'));
    await run();

    expect(errorSpy).toHaveBeenCalledWith(expect.objectContaining({ message: 'unreadable source' }));
    expect(exitSpy).toHaveBeenCalledWith(1);
    expect(logSpy).not.toHaveBeenCalled();
  });
});
