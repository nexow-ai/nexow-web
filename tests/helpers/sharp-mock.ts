/**
 * A chainable stand-in for `sharp`, so the asset scripts can be exercised
 * without touching real images or the filesystem. Every call is recorded, which
 * is what the tests assert on.
 */
import { vi } from 'vitest';

export interface SharpCall {
  /** What was passed to `sharp(...)` — a path, or `'<buffer>'`. */
  input: string;
  /** Chained operations, in order, e.g. `['trim', 'resize', 'png']`. */
  ops: string[];
  /** Arguments per operation, keyed by name (last call wins). */
  args: Record<string, unknown[]>;
}

export interface SharpMock {
  sharp: ReturnType<typeof vi.fn>;
  calls: SharpCall[];
  /** Paths passed to `.toFile(...)`, in order. */
  written: string[];
  /** Make the next `sharp(...)` chain reject from `toBuffer`/`toFile`. */
  failNext: (error: Error) => void;
  reset: () => void;
}

export function createSharpMock(options: { metadata?: Record<string, unknown> } = {}): SharpMock {
  const calls: SharpCall[] = [];
  const written: string[] = [];
  let pendingError: Error | null = null;

  const sharp = vi.fn((input: unknown) => {
    const call: SharpCall = {
      input: typeof input === 'string' ? input : '<buffer>',
      ops: [],
      args: {},
    };
    calls.push(call);

    const record = (name: string) => (...args: unknown[]) => {
      call.ops.push(name);
      call.args[name] = args;
      return chain;
    };

    const settle = <T>(value: T) => {
      const error = pendingError;
      pendingError = null;
      return error ? Promise.reject(error) : Promise.resolve(value);
    };

    const chain = {
      trim: record('trim'),
      resize: record('resize'),
      png: record('png'),
      jpeg: record('jpeg'),
      webp: record('webp'),
      composite: record('composite'),
      toBuffer: (...args: unknown[]) => {
        call.ops.push('toBuffer');
        call.args.toBuffer = args;
        return settle(Buffer.from('image'));
      },
      toFile: (...args: unknown[]) => {
        call.ops.push('toFile');
        call.args.toFile = args;
        if (typeof args[0] === 'string') written.push(args[0]);
        return settle({ format: 'png' });
      },
      metadata: (...args: unknown[]) => {
        call.ops.push('metadata');
        call.args.metadata = args;
        return settle({ width: 300, height: 187, format: 'png', ...options.metadata });
      },
    };

    return chain;
  });

  return {
    sharp,
    calls,
    written,
    failNext: (error: Error) => {
      pendingError = error;
    },
    reset: () => {
      calls.length = 0;
      written.length = 0;
      pendingError = null;
      sharp.mockClear();
    },
  };
}
