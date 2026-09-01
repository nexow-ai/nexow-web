/**
 * Rasterises the hero dashboards (HeroDashboards.astro) from the live
 * DOM into a grid atlas — one cell per board, six to a row — uploaded for the
 * world's screens to sample: the whole channel table in WorldField's fragment
 * shader, so the wall runs the same instruments the cards around the composer
 * do, and is bare glass until this atlas lands.
 *
 * Every board gets a cell. It used to be the first sixteen, wrapped to fill a
 * fixed 4×4 sheet, and with the wall now cutting channel every seven seconds
 * that table came round often enough to read as a loop — a dozen panels drawn
 * from sixteen pictures is the same wall twice. The grid the shader reads is a
 * uniform (uBoardGrid: columns, rows, count) rather than a constant, so the
 * board list is the only place the number lives.
 *
 * Each cell is the full card, not the SVG alone: panel ground, title bar,
 * live mark, then the instrument. The 3D screens used to dress a transparent
 * plot in a thick family-tinted bezel, which is why the wall read as toy
 * tablets. Painting the real card means the wall and the composer cards are
 * the same object.
 *
 * The SVGs are cloned with their computed styles inlined, because an <img>
 * renders SVG in a blank document: the scoped classes, the custom properties
 * and every color-mix() only resolve here, in the page. All but four of the
 * boards are display:none at any moment and never start their entrance
 * animations, so the states those animations land on are forced — drawn
 * strokes on, entrance transforms cleared — while the looping states (EQ
 * bars, blips, packets) are taken as they are, which scatters each build a
 * little and costs nothing.
 *
 * Dynamically imported by WorldField: this runs once, seconds after load (and
 * again on a theme flip), and has no business in that script's parse cost.
 */

const STYLE_PROPS = [
  'fill',
  'stroke',
  'stroke-width',
  'stroke-dasharray',
  'stroke-dashoffset',
  'stroke-linecap',
  'stroke-linejoin',
  'opacity',
  'font-family',
  'font-size',
  'font-weight',
  'letter-spacing',
  'transform',
  'transform-origin',
  'transform-box',
  'clip-path',
];

export interface BoardAtlasState {
  /** Bumped by the owner to abandon an in-flight build (teardown, re-theme). */
  gen: number;
  tex: WebGLTexture | null;
}

export interface BoardAtlasTarget {
  ctx: WebGLRenderingContext;
  prog: WebGLProgram;
  uBoardsOn: WebGLUniformLocation | null;
  uBoardLight: WebGLUniformLocation | null;
  /** (columns, rows, board count) — how the shader walks the sheet. */
  uBoardGrid: WebGLUniformLocation | null;
  /** Coarse pointer: smaller panels on screen, so smaller cells in the sheet. */
  coarse?: boolean;
  state: BoardAtlasState;
}

/* ---- the sheet ----
 * Six columns, and as many rows as the board list needs.
 *
 * A cell is 2:1 — the face the shader maps onto a panel — and 448 px across,
 * which is about what a ×2 screen covers as it sweeps the lens, so the ink
 * lands near 1:1 rather than being upscaled. On a coarse pointer the panels
 * are smaller and the whole sheet is 288 px cells: under half the bytes, and
 * a width that clears the 2048 limit the oldest mobile GL still reports.
 */
const COLS = 6;
const CELL_WIDE = 448;
const CELL_COARSE = 288;

function snapshotBoard(svg: SVGSVGElement): string {
  const clone = svg.cloneNode(true) as SVGSVGElement;
  const srcEls = [svg as SVGElement, ...svg.querySelectorAll<SVGElement>('*')];
  const dstEls = [clone as SVGElement, ...clone.querySelectorAll<SVGElement>('*')];
  for (let i = 0; i < srcEls.length; i++) {
    const cs = getComputedStyle(srcEls[i]);
    const st = dstEls[i].style;
    for (const p of STYLE_PROPS) st.setProperty(p, cs.getPropertyValue(p));
  }
  /* Riders position themselves with offset-path, which a detached SVG cannot
     honour — gone rather than parked at the origin. */
  for (const el of clone.querySelectorAll('.path-rider')) el.remove();
  /* Entrance animations land on visible; force that landing. Transforms too —
     a bar caught mid-grow inlined a squashed matrix above. */
  for (const el of clone.querySelectorAll<SVGElement>('.fade, .slide, .pop, .grow-y, .grow-x')) {
    el.style.opacity = '1';
    el.style.transform = 'none';
  }
  for (const el of clone.querySelectorAll<SVGElement>('.draw, .draw-loop, .caret')) {
    el.style.strokeDashoffset = '0';
    el.style.opacity = '1';
  }
  clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  clone.setAttribute('width', '496');
  clone.setAttribute('height', '200');
  clone.setAttribute('preserveAspectRatio', 'xMidYMid meet');
  clone.removeAttribute('class');
  return new XMLSerializer().serializeToString(clone);
}

function resolved(el: Element | null, prop: string, fallback: string): string {
  if (!el) return fallback;
  const v = getComputedStyle(el).getPropertyValue(prop).trim();
  return v || fallback;
}

function paintCard(
  g2: CanvasRenderingContext2D,
  board: HTMLElement,
  img: HTMLImageElement | null,
  x: number,
  y: number,
  w: number,
  h: number,
  light: boolean,
): void {
  /* Hidden boards still own their title copy; chrome colours come from a
     shown card so display:none never hands back a transparent panel. */
  const sample =
    (board.classList.contains('is-shown')
      ? board
      : document.querySelector<HTMLElement>('[data-hero-board].is-shown')) ?? board;
  const titleEl = board.querySelector('.hero-board__title');
  const metaEl = board.querySelector('.hero-board__live');
  const dotEl = sample.querySelector('.hero-board__live-dot');
  const panel = resolved(sample, 'background-color', light ? '#f4f6f8' : '#10141c');
  const line = resolved(sample, 'border-color', light ? 'rgba(15,18,24,0.12)' : 'rgba(255,255,255,0.12)');
  const titleFill = resolved(
    sample.querySelector('.hero-board__title') ?? titleEl,
    'color',
    light ? '#334155' : '#c8d2de',
  );
  const metaFill = resolved(
    sample.querySelector('.hero-board__live') ?? metaEl,
    'color',
    light ? '#0d9488' : '#5eead4',
  );
  const dotFill = resolved(dotEl, 'background-color', metaFill);
  const mono = resolved(titleEl, 'font-family', 'ui-monospace, monospace');
  const barH = Math.round(h * 0.168);

  /* Opaque ground first. The live card is a color-mix against transparent,
     and that alpha in the atlas is what let the world's pastel glass show
     through — empty coloured tiles instead of instruments. */
  g2.fillStyle = light ? '#f4f6f8' : '#10141c';
  g2.fillRect(x, y, w, h);
  if (panel && panel !== 'rgba(0, 0, 0, 0)' && panel !== 'transparent') {
    g2.fillStyle = panel;
    g2.fillRect(x, y, w, h);
  }
  g2.fillStyle = line;
  g2.fillRect(x, y + barH, w, 1);

  const cy = y + barH * 0.5;
  g2.beginPath();
  g2.fillStyle = dotFill;
  g2.arc(x + 16, cy, 3.4, 0, Math.PI * 2);
  g2.fill();

  g2.textBaseline = 'middle';
  g2.font = `600 ${Math.round(h * 0.05)}px ${mono}`;
  g2.fillStyle = titleFill;
  g2.fillText((titleEl?.textContent ?? '').trim(), x + 28, cy, w * 0.62);

  g2.textAlign = 'right';
  g2.font = `500 ${Math.round(h * 0.042)}px ${mono}`;
  g2.fillStyle = metaFill;
  g2.fillText((metaEl?.textContent ?? '').trim(), x + w - 12, cy, w * 0.28);
  g2.textAlign = 'left';

  if (img) g2.drawImage(img, x + 4, y + barH + 3, w - 8, h - barH - 6);
}

function revealHidden(boards: HTMLElement[]): () => void {
  const hidden = boards.filter((b) => !b.classList.contains('is-shown'));
  const prev = hidden.map((b) => b.getAttribute('style'));
  for (const b of hidden) {
    b.style.setProperty('display', 'block', 'important');
    b.style.setProperty('position', 'fixed');
    b.style.setProperty('left', '-200vw');
    b.style.setProperty('top', '0');
    b.style.setProperty('opacity', '0');
    b.style.setProperty('pointer-events', 'none');
  }
  void hidden[0]?.offsetHeight;
  return () => {
    hidden.forEach((b, i) => {
      if (prev[i] == null) b.removeAttribute('style');
      else b.setAttribute('style', prev[i]!);
    });
  };
}

export async function buildBoardsAtlas(t: BoardAtlasTarget): Promise<void> {
  const { ctx, state } = t;
  const boards = Array.from(document.querySelectorAll<HTMLElement>('[data-hero-board]'));
  if (!boards.length) return;
  const gen = ++state.gen;
  /* A webfont that never settles used to stall this forever, and the wall
     stayed on the toy tablets. Four hundred milliseconds is enough for the
     faces that are already in memory; the rest can miss a cell. */
  await Promise.race([
    document.fonts.ready.catch(() => undefined),
    new Promise<void>((resolve) => setTimeout(resolve, 400)),
  ]);
  if (gen !== state.gen) return;
  const restore = revealHidden(boards);
  const cols = Math.min(COLS, boards.length);
  const rows = Math.ceil(boards.length / cols);
  /* Shrink to whatever this GPU will actually hold. The spec floor is far
     below anything that runs this scene, but a sheet one pixel over the
     driver's limit uploads as nothing at all — a wall of blank slabs with no
     error to read. */
  const maxTex = Number(ctx.getParameter(ctx.MAX_TEXTURE_SIZE)) || 2048;
  const want = t.coarse ? CELL_COARSE : CELL_WIDE;
  const fit = Math.min(1, maxTex / (cols * want), maxTex / (rows * want * 0.5));
  const cellW = Math.max(64, Math.floor((want * fit) / 2) * 2);
  const cellH = cellW / 2;
  const atlas = document.createElement('canvas');
  atlas.width = cols * cellW;
  atlas.height = rows * cellH;
  const g2 = atlas.getContext('2d');
  if (!g2) {
    restore();
    return;
  }
  const light = !document.documentElement.classList.contains('dark');
  try {
    /* One cell per board, in order. The tail of the last row is never
       sampled — the shader picks from the count, not from the sheet — so a
       board list that does not divide by six costs a few unread pixels
       rather than a duplicate channel. */
    for (let i = 0; i < boards.length; i++) {
      const board = boards[i];
      const svg = board.querySelector<SVGSVGElement>('svg');
      const img = svg
        ? await new Promise<HTMLImageElement | null>((res) => {
            const el = new Image();
            el.onload = () => res(el);
            el.onerror = () => res(null);
            el.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(snapshotBoard(svg))}`;
          })
        : null;
      if (gen !== state.gen) return;
      paintCard(
        g2,
        board,
        img,
        (i % cols) * cellW,
        Math.floor(i / cols) * cellH,
        cellW,
        cellH,
        light,
      );
      // One board per macrotask — a sheet of style walks in one frame is a hitch.
      await new Promise((res) => setTimeout(res, 0));
      if (gen !== state.gen) return;
    }
  } finally {
    restore();
  }
  if (!state.tex) state.tex = ctx.createTexture();
  if (!state.tex) return;
  ctx.activeTexture(ctx.TEXTURE1);
  ctx.bindTexture(ctx.TEXTURE_2D, state.tex);
  ctx.texImage2D(ctx.TEXTURE_2D, 0, ctx.RGBA, ctx.RGBA, ctx.UNSIGNED_BYTE, atlas);
  /* No mip chain. Hairline ink averages to fog two levels down, and a
     screen mid-orbit is exactly when that fog reads as an empty tile. */
  ctx.texParameteri(ctx.TEXTURE_2D, ctx.TEXTURE_MIN_FILTER, ctx.LINEAR);
  ctx.texParameteri(ctx.TEXTURE_2D, ctx.TEXTURE_MAG_FILTER, ctx.LINEAR);
  ctx.texParameteri(ctx.TEXTURE_2D, ctx.TEXTURE_WRAP_S, ctx.CLAMP_TO_EDGE);
  ctx.texParameteri(ctx.TEXTURE_2D, ctx.TEXTURE_WRAP_T, ctx.CLAMP_TO_EDGE);
  ctx.activeTexture(ctx.TEXTURE0);
  ctx.useProgram(t.prog);
  /* Before the wall is told to light up, so the first lit frame already knows
     how to walk the sheet it is sampling. */
  ctx.uniform3f(t.uBoardGrid, cols, rows, boards.length);
  ctx.uniform1f(t.uBoardsOn, 1);
  ctx.uniform1f(t.uBoardLight, light ? 1 : 0);
}
