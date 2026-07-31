import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import path from 'node:path';
import { createSharpMock } from '../../helpers/sharp-mock';
import { CONNECTOR_LIVE_COUNT } from '../../../src/data/connectors';
import { SITE } from '../../../src/i18n/config';

const mock = createSharpMock();
vi.mock('sharp', () => ({ default: mock.sharp }));

const PUBLIC = path.resolve(import.meta.dirname, '../../..', 'public');
const p = (file: string) => path.join(PUBLIC, file);

let exitSpy: ReturnType<typeof vi.spyOn>;
let logSpy: ReturnType<typeof vi.spyOn>;
let errorSpy: ReturnType<typeof vi.spyOn>;

let mod: typeof import('../../../scripts/make-og.mjs');

async function run() {
  vi.resetModules();
  mod = await import('../../../scripts/make-og.mjs');
  await vi.waitFor(() => {
    expect(logSpy.mock.calls.length + errorSpy.mock.calls.length).toBeGreaterThan(0);
  });
}

/** The SVG card handed to sharp, decoded back to text. */
function cardSvg(): string {
  const buffer = mock.sharp.mock.calls
    .map(([input]) => input)
    .find((input): input is Buffer => Buffer.isBuffer(input) && input.includes('<svg'));
  expect(buffer, 'no SVG card was handed to sharp').toBeDefined();
  return buffer!.toString('utf8');
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

describe('make-og', () => {
  it('composites the wordmark onto a 1200×630 card and writes og.png', async () => {
    await run();

    expect(mock.sharp).toHaveBeenCalledWith(p('logo-white.png'));
    expect(mock.written).toEqual([p('og.png')]);

    const composite = mock.calls.find((c) => c.ops.includes('composite'))!;
    expect(composite.ops).toEqual(['composite', 'png', 'toFile']);
  });

  it('scales the wordmark to 300px and centres it horizontally', async () => {
    await run();

    const logo = mock.calls.find((c) => c.input === p('logo-white.png'))!;
    expect(logo.args.resize).toEqual([{ width: 300 }]);

    const composite = mock.calls.find((c) => c.ops.includes('composite'))!;
    const [layers] = composite.args.composite as [{ left: number; top: number }[]];
    expect(layers).toHaveLength(1);
    expect(layers[0].left).toBe(600 - 150);
    // Vertically centred on y=150 using the measured logo height (187).
    expect(layers[0].top).toBe(Math.round(150 - 187 / 2));
  });

  it('sizes the card to the Open Graph aspect the head advertises', async () => {
    await run();
    const svg = cardSvg();
    expect(svg).toContain('width="1200"');
    expect(svg).toContain('height="630"');
    expect(svg).toContain('viewBox="0 0 1200 630"');
  });

  it('prints the live connector count from the catalog, not a stale literal', async () => {
    await run();
    const svg = cardSvg();
    expect(svg).toContain(`${CONNECTOR_LIVE_COUNT} live connectors`);
    expect(svg).not.toContain('28+');
  });

  it('names the brand domain on the card', async () => {
    await run();
    expect(cardSvg()).toContain(SITE.domain);
  });

  it('reports success', async () => {
    await run();
    expect(logSpy).toHaveBeenCalledWith('og.png generated');
    expect(exitSpy).not.toHaveBeenCalled();
  });

  it('reports a failure and exits non-zero', async () => {
    mock.failNext(new Error('no wordmark'));
    await run();

    expect(errorSpy).toHaveBeenCalledWith(expect.objectContaining({ message: 'no wordmark' }));
    expect(exitSpy).toHaveBeenCalledWith(1);
  });
});

describe('liveConnectorCount', () => {
  beforeEach(async () => {
    await run();
  });

  it('counts only live entries', () => {
    expect(
      mod.liveConnectorCount('"status": "live" "status": "soon" "status":  "live"'),
    ).toBe(2);
  });

  it('is zero for a catalog with nothing live', () => {
    expect(mod.liveConnectorCount('"status": "soon"')).toBe(0);
    expect(mod.liveConnectorCount('')).toBe(0);
  });

  it('agrees with the catalog module when reading the real file', () => {
    expect(mod.liveConnectorCount()).toBe(CONNECTOR_LIVE_COUNT);
  });
});
