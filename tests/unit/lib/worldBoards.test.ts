/**
 * @vitest-environment jsdom
 */
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { buildBoardsAtlas, type BoardAtlasTarget } from '../../../src/lib/worldBoards';

type ImgMode = 'load' | 'error' | 'hang';

let imgMode: ImgMode = 'load';
const hung: Array<{ load: () => void; error: () => void }> = [];

class FakeImage {
  onload: (() => void) | null = null;
  onerror: (() => void) | null = null;
  #src = '';
  get src() {
    return this.#src;
  }
  set src(value: string) {
    this.#src = value;
    if (imgMode === 'hang') {
      hung.push({
        load: () => this.onload?.(),
        error: () => this.onerror?.(),
      });
      return;
    }
    queueMicrotask(() => {
      if (imgMode === 'error') this.onerror?.();
      else this.onload?.();
    });
  }
}

function mock2d() {
  return {
    fillStyle: '',
    font: '',
    textAlign: 'left',
    textBaseline: 'alphabetic',
    fillRect: vi.fn(),
    beginPath: vi.fn(),
    arc: vi.fn(),
    fill: vi.fn(),
    fillText: vi.fn(),
    drawImage: vi.fn(),
  };
}

function mockGl(tex: WebGLTexture | null = {} as WebGLTexture, maxTex = 8192) {
  return {
    TEXTURE0: 0,
    TEXTURE1: 1,
    TEXTURE_2D: 2,
    RGBA: 3,
    UNSIGNED_BYTE: 4,
    TEXTURE_MIN_FILTER: 5,
    TEXTURE_MAG_FILTER: 6,
    TEXTURE_WRAP_S: 7,
    TEXTURE_WRAP_T: 8,
    LINEAR: 9,
    CLAMP_TO_EDGE: 10,
    MAX_TEXTURE_SIZE: 11,
    createTexture: vi.fn(() => tex),
    activeTexture: vi.fn(),
    bindTexture: vi.fn(),
    texImage2D: vi.fn(),
    texParameteri: vi.fn(),
    useProgram: vi.fn(),
    uniform1f: vi.fn(),
    uniform3f: vi.fn(),
    getParameter: vi.fn(() => maxTex),
  };
}

function board(opts: {
  id: string;
  shown?: boolean;
  title?: string;
  meta?: string;
  svg?: boolean;
  riders?: boolean;
  style?: string;
  panel?: string;
}) {
  const el = document.createElement('article');
  el.dataset.heroBoard = opts.id;
  if (opts.shown) el.classList.add('is-shown');
  if (opts.style) el.setAttribute('style', opts.style);
  if (opts.panel) el.style.backgroundColor = opts.panel;
  el.style.borderColor = 'rgb(20, 24, 32)';
  el.style.color = 'rgb(200, 210, 222)';

  const title = document.createElement('span');
  title.className = 'hero-board__title';
  title.textContent = opts.title ?? `${opts.id} title`;
  title.style.color = 'rgb(51, 65, 85)';
  title.style.fontFamily = 'ui-monospace';
  el.append(title);

  const live = document.createElement('span');
  live.className = 'hero-board__live';
  live.textContent = opts.meta ?? 'live';
  live.style.color = 'rgb(13, 148, 136)';
  el.append(live);

  const dot = document.createElement('span');
  dot.className = 'hero-board__live-dot';
  dot.style.backgroundColor = 'rgb(94, 234, 212)';
  el.append(dot);

  if (opts.svg !== false) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 496 200');
    svg.setAttribute('class', 'hero-board__art');
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M0 0h10');
    path.setAttribute('class', 'draw fade');
    svg.append(path);
    if (opts.riders) {
      const rider = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      rider.setAttribute('class', 'path-rider');
      svg.append(rider);
      const slide = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      slide.setAttribute('class', 'slide pop grow-y grow-x');
      svg.append(slide);
      const loop = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      loop.setAttribute('class', 'draw-loop caret');
      svg.append(loop);
    }
    el.append(svg);
  }

  return el;
}

function target(partial: Partial<BoardAtlasTarget> = {}): BoardAtlasTarget {
  return {
    ctx: mockGl() as unknown as WebGLRenderingContext,
    prog: {} as WebGLProgram,
    uBoardsOn: {} as WebGLUniformLocation,
    uBoardLight: {} as WebGLUniformLocation,
    uBoardGrid: {} as WebGLUniformLocation,
    state: { gen: 0, tex: null },
    ...partial,
  };
}

let fontsReady: Promise<void> = Promise.resolve();

beforeEach(() => {
  imgMode = 'load';
  hung.length = 0;
  fontsReady = Promise.resolve();
  document.body.replaceChildren();
  document.documentElement.classList.remove('dark');
  vi.stubGlobal('Image', FakeImage);
  Object.defineProperty(document, 'fonts', {
    configurable: true,
    value: {
      get ready() {
        return fontsReady;
      },
    },
  });
});

afterEach(() => {
  vi.unstubAllGlobals();
  vi.useRealTimers();
  document.body.replaceChildren();
});

describe('buildBoardsAtlas', () => {
  it('is a no-op when the hero has not rendered any boards', async () => {
    const t = target();
    await buildBoardsAtlas(t);
    expect(t.state.tex).toBeNull();
    expect((t.ctx as unknown as ReturnType<typeof mockGl>).createTexture).not.toHaveBeenCalled();
  });

  it('paints shown and hidden cards onto one cell each and uploads the sheet', async () => {
    const g2 = mock2d();
    vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(
      g2 as unknown as CanvasRenderingContext2D,
    );
    document.body.append(
      board({ id: 'trading', shown: true, riders: true, panel: 'rgb(16, 20, 28)' }),
      board({ id: 'radar', style: 'opacity:0', panel: 'transparent' }),
    );

    const gl = mockGl();
    const t = target({ ctx: gl as unknown as WebGLRenderingContext });
    await buildBoardsAtlas(t);

    expect(g2.drawImage).toHaveBeenCalled();
    expect(g2.fillText).toHaveBeenCalled();
    expect(gl.createTexture).toHaveBeenCalled();
    expect(gl.texImage2D).toHaveBeenCalled();
    expect(gl.uniform1f).toHaveBeenCalledWith(t.uBoardsOn, 1);
    expect(gl.uniform1f).toHaveBeenCalledWith(t.uBoardLight, 1);
    // Two boards, so two columns of one row — and the shader is told so.
    expect(gl.uniform3f).toHaveBeenCalledWith(t.uBoardGrid, 2, 1, 2);
    expect(t.state.tex).toBeTruthy();
    // Hidden board style is put back after the snapshot.
    expect(document.querySelector('[data-hero-board="radar"]')?.getAttribute('style')).toMatch(
      /opacity:\s*0/,
    );
  });

  it('wraps a long board list onto six columns, one cell per board', async () => {
    const g2 = mock2d();
    vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(
      g2 as unknown as CanvasRenderingContext2D,
    );
    document.body.append(
      ...Array.from({ length: 15 }, (_, i) => board({ id: `b${i}`, shown: i < 4 })),
    );

    const gl = mockGl();
    const t = target({ ctx: gl as unknown as WebGLRenderingContext });
    await buildBoardsAtlas(t);

    expect(gl.uniform3f).toHaveBeenCalledWith(t.uBoardGrid, 6, 3, 15);
    // No board is painted twice to pad the tail of the last row.
    expect(g2.drawImage).toHaveBeenCalledTimes(15);
  });

  it('shrinks the cell to whatever the GPU will hold', async () => {
    const g2 = mock2d();
    const canvases: HTMLCanvasElement[] = [];
    vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockImplementation(function (
      this: HTMLCanvasElement,
    ) {
      canvases.push(this);
      return g2 as unknown as CanvasRenderingContext2D;
    });
    document.body.append(...Array.from({ length: 12 }, (_, i) => board({ id: `b${i}` })));

    const gl = mockGl({} as WebGLTexture, 1024);
    const t = target({ ctx: gl as unknown as WebGLRenderingContext });
    await buildBoardsAtlas(t);

    expect(canvases[0].width).toBeLessThanOrEqual(1024);
    expect(canvases[0].height).toBeLessThanOrEqual(1024);
    expect(canvases[0].width).toBeGreaterThan(0);
    expect(gl.uniform3f).toHaveBeenCalledWith(t.uBoardGrid, 6, 2, 12);
  });

  it('reuses an existing texture and marks a dark page as night', async () => {
    const g2 = mock2d();
    vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(
      g2 as unknown as CanvasRenderingContext2D,
    );
    document.documentElement.classList.add('dark');
    document.body.append(board({ id: 'trading', shown: true, svg: false }));

    const existing = { id: 'tex' } as unknown as WebGLTexture;
    const gl = mockGl(existing);
    const t = target({
      ctx: gl as unknown as WebGLRenderingContext,
      state: { gen: 4, tex: existing },
    });
    await buildBoardsAtlas(t);

    expect(gl.createTexture).not.toHaveBeenCalled();
    expect(gl.uniform1f).toHaveBeenCalledWith(t.uBoardLight, 0);
    expect(g2.drawImage).not.toHaveBeenCalled();
  });

  it('skips a transparent panel fill and still draws the chrome', async () => {
    const g2 = mock2d();
    vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(
      g2 as unknown as CanvasRenderingContext2D,
    );
    const shown = board({ id: 'trading', shown: true, panel: 'rgba(0, 0, 0, 0)' });
    shown.querySelector('.hero-board__title')?.remove();
    shown.querySelector('.hero-board__live')?.remove();
    shown.querySelector('.hero-board__live-dot')?.remove();
    document.body.append(shown);

    imgMode = 'error';
    const t = target();
    await buildBoardsAtlas(t);
    expect(g2.fillRect).toHaveBeenCalled();
    expect(g2.fillText).toHaveBeenCalledWith('', expect.any(Number), expect.any(Number), expect.any(Number));
  });

  it('gives up when the atlas canvas cannot be created', async () => {
    vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(null);
    document.body.append(board({ id: 'trading', shown: true }));
    const gl = mockGl();
    const t = target({ ctx: gl as unknown as WebGLRenderingContext });
    await buildBoardsAtlas(t);
    expect(gl.createTexture).not.toHaveBeenCalled();
  });

  it('gives up when the GPU will not allocate a texture', async () => {
    vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(
      mock2d() as unknown as CanvasRenderingContext2D,
    );
    document.body.append(board({ id: 'trading', shown: true }));
    const gl = mockGl(null);
    const t = target({ ctx: gl as unknown as WebGLRenderingContext });
    await buildBoardsAtlas(t);
    expect(gl.texImage2D).not.toHaveBeenCalled();
    expect(t.state.tex).toBeNull();
  });

  it('abandons a build whose generation was superseded while fonts load', async () => {
    let release!: () => void;
    fontsReady = new Promise<void>((resolve) => {
      release = resolve;
    });
    document.body.append(board({ id: 'trading', shown: true }));
    const gl = mockGl();
    const t = target({ ctx: gl as unknown as WebGLRenderingContext });
    const pending = buildBoardsAtlas(t);
    t.state.gen += 1;
    release();
    await pending;
    expect(gl.createTexture).not.toHaveBeenCalled();
  });

  it('abandons a build whose generation was superseded while a cell decodes', async () => {
    imgMode = 'hang';
    vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(
      mock2d() as unknown as CanvasRenderingContext2D,
    );
    document.body.append(board({ id: 'trading', shown: true }));
    const gl = mockGl();
    const t = target({ ctx: gl as unknown as WebGLRenderingContext });
    const pending = buildBoardsAtlas(t);
    await vi.waitFor(() => expect(hung.length).toBe(1));
    t.state.gen += 1;
    hung[0].load();
    await pending;
    expect(gl.createTexture).not.toHaveBeenCalled();
  });

  it('abandons a build whose generation was superseded between cells', async () => {
    vi.useFakeTimers();
    vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(
      mock2d() as unknown as CanvasRenderingContext2D,
    );
    document.body.append(board({ id: 'trading', shown: true }), board({ id: 'radar', shown: true }));
    const gl = mockGl();
    const t = target({ ctx: gl as unknown as WebGLRenderingContext });
    const pending = buildBoardsAtlas(t);
    await vi.advanceTimersByTimeAsync(0);
    t.state.gen += 1;
    await vi.runAllTimersAsync();
    await pending;
    expect(gl.createTexture).not.toHaveBeenCalled();
  });

  it('does not stall when the webfont set never settles', async () => {
    fontsReady = Promise.reject(new Error('fonts unavailable'));
    vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(
      mock2d() as unknown as CanvasRenderingContext2D,
    );
    document.body.append(board({ id: 'trading', shown: true }));
    const gl = mockGl();
    const t = target({ ctx: gl as unknown as WebGLRenderingContext });
    await buildBoardsAtlas(t);
    expect(gl.texImage2D).toHaveBeenCalled();
  });

  it('restores a hidden board that had no inline style of its own', async () => {
    vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(
      mock2d() as unknown as CanvasRenderingContext2D,
    );
    const hidden = document.createElement('article');
    hidden.dataset.heroBoard = 'bare';
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    hidden.append(svg);
    document.body.append(board({ id: 'trading', shown: true }), hidden);

    await buildBoardsAtlas(target());
    expect(hidden.hasAttribute('style')).toBe(false);
  });

  it('samples chrome from the board itself when none are shown', async () => {
    const g2 = mock2d();
    vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(
      g2 as unknown as CanvasRenderingContext2D,
    );
    document.body.append(board({ id: 'radar', shown: false, panel: 'rgb(16, 20, 28)' }));
    await buildBoardsAtlas(target());
    expect(g2.fillRect).toHaveBeenCalled();
  });

  it('falls back when computed styles are blank', async () => {
    vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(
      mock2d() as unknown as CanvasRenderingContext2D,
    );
    const orig = window.getComputedStyle.bind(window);
    vi.spyOn(window, 'getComputedStyle').mockImplementation((el) => {
      const style = orig(el);
      return new Proxy(style, {
        get(target, prop) {
          if (prop === 'getPropertyValue') {
            return () => '   ';
          }
          return Reflect.get(target, prop);
        },
      });
    });
    document.body.append(board({ id: 'trading', shown: true }));
    const gl = mockGl();
    const t = target({ ctx: gl as unknown as WebGLRenderingContext });
    await buildBoardsAtlas(t);
    expect(gl.texImage2D).toHaveBeenCalled();
  });

  it('gives every board its own cell — the sheet is not capped', async () => {
    const g2 = mock2d();
    vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(
      g2 as unknown as CanvasRenderingContext2D,
    );
    for (let i = 0; i < 37; i++) {
      document.body.append(board({ id: `b${i}`, shown: i === 0 }));
    }
    const gl = mockGl();
    const t = target({ ctx: gl as unknown as WebGLRenderingContext });
    await buildBoardsAtlas(t);
    const titles = g2.fillText.mock.calls
      .map((c) => String(c[0]))
      .filter((text) => text.endsWith('title'));
    expect(titles.length).toBe(37);
    expect(new Set(titles).size).toBe(37);
    expect(gl.uniform3f).toHaveBeenCalledWith(t.uBoardGrid, 6, 7, 37);
  });
});
