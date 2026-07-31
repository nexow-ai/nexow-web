import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import path from 'node:path';
import { createSharpMock } from '../../helpers/sharp-mock';

const mock = createSharpMock();
const execSync = vi.fn();

vi.mock('sharp', () => ({ default: mock.sharp }));
vi.mock('node:child_process', () => ({ execSync }));

const PUBLIC = path.resolve(import.meta.dirname, '../../..', 'public');
const p = (file: string) => path.join(PUBLIC, file);

let exitSpy: ReturnType<typeof vi.spyOn>;
let logSpy: ReturnType<typeof vi.spyOn>;
let errorSpy: ReturnType<typeof vi.spyOn>;

async function run() {
  vi.resetModules();
  await import('../../../scripts/optimize-assets.mjs');
  await vi.waitFor(() => {
    expect(logSpy.mock.calls.length + errorSpy.mock.calls.length).toBeGreaterThan(0);
  });
}

beforeEach(() => {
  mock.reset();
  execSync.mockReset();
  exitSpy = vi.spyOn(process, 'exit').mockImplementation((() => undefined) as never);
  logSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
  errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
});

afterEach(() => {
  exitSpy.mockRestore();
  logSpy.mockRestore();
  errorSpy.mockRestore();
});

describe('optimize-assets', () => {
  it('processes both wordmarks', async () => {
    await run();

    const inputs = mock.calls.map((c) => c.input).filter((i) => i !== '<buffer>');
    expect(inputs).toEqual([p('logo-white.png'), p('logo-black.png')]);
  });

  it('caps the wordmark width at 640px without upscaling a smaller source', async () => {
    await run();

    for (const name of ['logo-white', 'logo-black']) {
      const call = mock.calls.find((c) => c.input === p(`${name}.png`))!;
      expect(call.args.resize, name).toEqual([{ width: 640, withoutEnlargement: true }]);
    }
  });

  it('recompresses at maximum PNG compression', async () => {
    await run();

    const call = mock.calls.find((c) => c.input === p('logo-white.png'))!;
    expect(call.args.png).toEqual([{ compressionLevel: 9, quality: 90 }]);
  });

  it('writes each wordmark back over itself', async () => {
    await run();
    expect(mock.written).toEqual([p('logo-white.png'), p('logo-black.png')]);
  });

  it('buffers before writing, so the source is not truncated mid-read', async () => {
    await run();

    const read = mock.calls.find((c) => c.input === p('logo-white.png'))!;
    expect(read.ops).toEqual(['resize', 'png', 'toBuffer']);

    const write = mock.calls.find((c) => c.input === '<buffer>' && c.ops.includes('toFile'))!;
    expect(write.ops).toEqual(['toFile']);
  });

  it('delegates the favicon variants to make-favicon rather than duplicating them', async () => {
    await run();

    expect(execSync).toHaveBeenCalledOnce();
    expect(execSync).toHaveBeenCalledWith('bun run scripts/make-favicon.mjs', { stdio: 'inherit' });
  });

  it('reports success', async () => {
    await run();
    expect(logSpy).toHaveBeenCalledWith('assets optimized');
    expect(exitSpy).not.toHaveBeenCalled();
  });

  it('reports a sharp failure and exits non-zero without shelling out', async () => {
    mock.failNext(new Error('bad png'));
    await run();

    expect(errorSpy).toHaveBeenCalledWith(expect.objectContaining({ message: 'bad png' }));
    expect(exitSpy).toHaveBeenCalledWith(1);
    expect(execSync).not.toHaveBeenCalled();
  });

  it('reports a failing favicon step and exits non-zero', async () => {
    execSync.mockImplementation(() => {
      throw new Error('make-favicon failed');
    });
    await run();

    expect(errorSpy).toHaveBeenCalledWith(
      expect.objectContaining({ message: 'make-favicon failed' }),
    );
    expect(exitSpy).toHaveBeenCalledWith(1);
    expect(logSpy).not.toHaveBeenCalled();
  });
});
