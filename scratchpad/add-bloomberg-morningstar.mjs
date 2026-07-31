#!/usr/bin/env node
/**
 * Ensure Bloomberg + Morningstar coming-soon connectors with logos/banners.
 * Usage: bun scratchpad/add-bloomberg-morningstar.mjs
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import sharp from 'sharp';

const ROOT = new URL('..', import.meta.url).pathname;
const LOGOS = join(ROOT, 'public/connectors');
const BANNERS = join(ROOT, 'public/connectors/banners');
const SOON_PATH = join(ROOT, 'src/data/coming-soon-connectors.json');

mkdirSync(BANNERS, { recursive: true });

const UA = 'Mozilla/5.0 (compatible; NexowAssetBot/1.0; +https://nexow.ai)';

/** @type {Array<{
 *  id: string; name: string; url: string; notes: string; brandColor: string;
 *  initials: string; category: string; kind: string; assets: string[];
 *  domains?: string[]; wiki?: string[]; clearbit?: string; forceRefresh?: boolean;
 * }>} */
const CONNECTORS = [
  {
    id: 'bloomberg',
    name: 'Bloomberg',
    url: 'https://www.bloomberg.com/professional/',
    notes:
      'Terminal-grade market data and news — stream prices, curves, and headlines into research and trading dashboards.',
    brandColor: '#2800D7',
    initials: 'BB',
    category: 'finance',
    kind: 'data',
    assets: ['equities', 'indices', 'fixed_income', 'fx', 'commodities'],
    domains: ['bloomberg.com'],
    wiki: [
      'https://upload.wikimedia.org/wikipedia/commons/9/9d/Bloomberg_logo-2556aaa618.svg',
      'https://upload.wikimedia.org/wikipedia/commons/5/5d/New_Bloomberg_Logo.svg',
    ],
    // Keep existing real assets unless missing; only refresh if placeholder
    forceRefresh: false,
  },
  {
    id: 'morningstar',
    name: 'Morningstar',
    url: 'https://www.morningstar.com/',
    notes:
      'Investment research and fund ratings — pull equity/fund analytics, star ratings, and market commentary into research widgets.',
    brandColor: '#FA4F00',
    initials: 'MS',
    category: 'finance',
    kind: 'data',
    assets: ['equities', 'indices', 'fixed_income', 'fx'],
    domains: ['morningstar.com'],
    clearbit: 'morningstar.com',
    wiki: ['https://upload.wikimedia.org/wikipedia/commons/6/67/Morningstar_Logo.svg'],
    forceRefresh: true,
  },
];

async function fetchBuf(url) {
  const res = await fetch(url, {
    headers: { 'User-Agent': UA, Accept: '*/*' },
    redirect: 'follow',
  });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 80) throw new Error(`too small (${buf.length}) ${url}`);
  return { buf, ct: res.headers.get('content-type') || '', url };
}

function looksLikeSvg(buf) {
  const t = buf.slice(0, 200).toString('utf8').trim();
  return t.startsWith('<svg') || t.startsWith('<?xml') || t.includes('<svg');
}

function looksLikeRaster(buf) {
  const hex = buf.slice(0, 4).toString('hex');
  return hex === '89504e47' || hex.startsWith('ffd8') || buf.slice(0, 4).toString() === 'RIFF';
}

function monogramSvg(initials, brandColor, name) {
  const fontSize = initials.length >= 3 ? 42 : 52;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128" role="img" aria-label="${name}">
  <rect width="128" height="128" rx="24" fill="${brandColor}"/>
  <text x="64" y="72" text-anchor="middle" font-family="ui-sans-serif, system-ui, -apple-system, Segoe UI, Helvetica, Arial, sans-serif" font-size="${fontSize}" font-weight="700" fill="#ffffff">${initials}</text>
</svg>
`;
}

function isPlaceholderLogo(filePath) {
  if (!existsSync(filePath)) return true;
  if (!filePath.endsWith('.svg')) return false;
  const t = readFileSync(filePath, 'utf8');
  return /<text[\s>]/.test(t) && /font-/.test(t);
}

/** Place a wide wordmark onto a brand-colored square tile as a white mark. */
async function tileWordmarkSvg(svgBuf, brandColor, label) {
  // Recolor common dark/brand fills to white for contrast on the tile
  let recolored = svgBuf
    .toString('utf8')
    .replace(/fill="#[0-9a-fA-F]{3,8}"/g, 'fill="#ffffff"')
    .replace(/fill:#[0-9a-fA-F]{3,8}/g, 'fill:#ffffff')
    .replace(/stroke="#[0-9a-fA-F]{3,8}"/g, 'stroke="#ffffff"');

  const whiteMark = await sharp(Buffer.from(recolored))
    .resize(210, 70, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();

  const tile = await sharp({
    create: {
      width: 256,
      height: 256,
      channels: 4,
      background: hexToRgba(brandColor),
    },
  })
    .composite([{ input: whiteMark, gravity: 'centre' }])
    .png()
    .toBuffer();

  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="256" height="256" role="img" aria-label="${label}">
  <image href="data:image/png;base64,${tile.toString('base64')}" width="256" height="256"/>
</svg>
`);
}

function hexToRgba(hex) {
  const h = hex.replace('#', '');
  const full = h.length === 3 ? h.split('').map((c) => c + c).join('') : h;
  return {
    r: parseInt(full.slice(0, 2), 16),
    g: parseInt(full.slice(2, 4), 16),
    b: parseInt(full.slice(4, 6), 16),
    alpha: 1,
  };
}

async function tryLogo(c) {
  const attempts = [];
  if (c.wiki) for (const url of c.wiki) attempts.push({ kind: 'wiki', url });
  if (c.clearbit) attempts.push({ kind: 'clearbit', url: `https://logo.clearbit.com/${c.clearbit}` });
  if (c.domains) {
    for (const d of c.domains) {
      attempts.push({ kind: 'clearbit-d', url: `https://logo.clearbit.com/${d}` });
      attempts.push({ kind: 'iconhorse', url: `https://icon.horse/icon/${d}` });
      attempts.push({
        kind: 'google-fav',
        url: `https://www.google.com/s2/favicons?domain=${encodeURIComponent(d)}&sz=128`,
      });
      attempts.push({ kind: 'ddg', url: `https://icons.duckduckgo.com/ip3/${d}.ico` });
    }
  }

  const errors = [];
  for (const a of attempts) {
    try {
      const { buf } = await fetchBuf(a.url);
      if (looksLikeSvg(buf)) {
        // Wide brand wordmarks → tile on brand color
        const meta = await sharp(buf).metadata().catch(() => ({}));
        const wide =
          meta.width && meta.height ? meta.width / meta.height > 1.6 : buf.length > 1500;
        if (wide && c.brandColor) {
          const tiled = await tileWordmarkSvg(buf, c.brandColor, c.name);
          return { buf: tiled, source: a.url, kind: 'tiled-wordmark' };
        }
        return { buf, source: a.url, kind: 'real-svg' };
      }
      if (looksLikeRaster(buf)) {
        if (buf.length < 1500 && a.kind.includes('fav')) {
          errors.push(`${a.kind}: too tiny favicon`);
          continue;
        }
        const png = await sharp(buf)
          .resize(256, 256, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
          .png()
          .toBuffer();
        if (png.length < 400) {
          errors.push(`${a.kind}: empty raster`);
          continue;
        }
        const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="256" height="256" role="img" aria-label="${c.name}">
  <image href="data:image/png;base64,${png.toString('base64')}" width="256" height="256" preserveAspectRatio="xMidYMid meet"/>
</svg>
`;
        return { buf: Buffer.from(svg), source: a.url, kind: 'real-embed' };
      }
      errors.push(`${a.kind}: not image`);
    } catch (e) {
      errors.push(`${a.kind}: ${e.message}`);
    }
  }
  return {
    buf: Buffer.from(monogramSvg(c.initials, c.brandColor, c.name)),
    source: 'monogram',
    kind: 'monogram',
    errors,
  };
}

function luminance(hex) {
  const h = hex.replace('#', '');
  const full = h.length === 3 ? h.split('').map((x) => x + x).join('') : h;
  const r = parseInt(full.slice(0, 2), 16) / 255;
  const g = parseInt(full.slice(2, 4), 16) / 255;
  const b = parseInt(full.slice(4, 6), 16) / 255;
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

async function composeBanner({ name, logoSvgBuf, brandColor, outPath }) {
  const W = 1200;
  const H = 630;
  let bg = brandColor || '#1a1a1a';
  if (luminance(bg) > 0.72) bg = '#111111';
  const fg = luminance(bg) > 0.55 ? '#111111' : '#ffffff';
  const glow = fg === '#ffffff' ? '#ffffff' : '#000000';

  let logoPng;
  try {
    logoPng = await sharp(logoSvgBuf)
      .resize(160, 160, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toBuffer();
  } catch {
    logoPng = await sharp({
      create: { width: 160, height: 160, channels: 4, background: { r: 255, g: 255, b: 255, alpha: 0.2 } },
    })
      .png()
      .toBuffer();
  }

  const safe = String(name)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="${bg}"/>
  <circle cx="280" cy="315" r="260" fill="${glow}" fill-opacity="0.08"/>
  <circle cx="980" cy="520" r="220" fill="${glow}" fill-opacity="0.06"/>
  <text x="320" y="340" font-family="ui-sans-serif, system-ui, -apple-system, Segoe UI, Helvetica, Arial, sans-serif" font-size="64" font-weight="700" fill="${fg}">${safe}</text>
</svg>`;

  const base = await sharp(Buffer.from(svg)).png().toBuffer();
  return sharp(base)
    .composite([{ input: logoPng, left: 120, top: Math.round((H - 160) / 2) }])
    .png()
    .toFile(outPath);
}

async function main() {
  const soon = JSON.parse(readFileSync(SOON_PATH, 'utf8'));
  const soonById = new Map(soon.map((c) => [c.id, c]));

  const ts = readFileSync(join(ROOT, 'src/data/connectors.ts'), 'utf8');
  const tsIds = new Set([...ts.matchAll(/"id":\s*"([^"]+)"/g)].map((m) => m[1]));

  const report = { added: [], updated: [], skipped: [], logos: {}, banners: {} };

  for (const c of CONNECTORS) {
    const logoPath = join(LOGOS, `${c.id}.svg`);
    const bannerPath = join(BANNERS, `${c.id}.png`);

    let logoResult;
    const keepExisting = existsSync(logoPath) && !isPlaceholderLogo(logoPath) && !c.forceRefresh;
    if (keepExisting) {
      logoResult = { buf: readFileSync(logoPath), source: 'existing', kind: 'kept' };
    } else {
      logoResult = await tryLogo(c);
      writeFileSync(logoPath, logoResult.buf);
    }
    report.logos[c.id] = {
      kind: logoResult.kind,
      source: logoResult.source,
      errors: logoResult.errors,
    };

    const bannerMissing = !existsSync(bannerPath);
    if (bannerMissing || c.forceRefresh || logoResult.kind !== 'kept') {
      await composeBanner({
        name: c.name,
        logoSvgBuf: logoResult.buf,
        brandColor: c.brandColor,
        outPath: bannerPath,
      });
      report.banners[c.id] = 'composed-brand-banner';
    } else {
      report.banners[c.id] = 'kept-existing';
    }

    const entry = {
      id: c.id,
      name: c.name,
      category: c.category,
      kind: c.kind,
      status: 'soon',
      trading: false,
      assets: c.assets,
      url: c.url,
      logo: `/connectors/${c.id}.svg`,
      banner: `/connectors/banners/${c.id}.png`,
      logoFit: 'cover',
      notes: c.notes,
    };

    if (soonById.has(c.id)) {
      const idx = soon.findIndex((x) => x.id === c.id);
      soon[idx] = { ...soon[idx], ...entry };
      report.updated.push(c.id);
    } else if (tsIds.has(c.id)) {
      // Present in generated catalog (from app or prior extras) — still ensure in soon JSON
      soon.push(entry);
      report.added.push(c.id);
    } else {
      soon.push(entry);
      report.added.push(c.id);
    }
  }

  writeFileSync(SOON_PATH, JSON.stringify(soon, null, 2) + '\n');
  writeFileSync(join(ROOT, 'scratchpad/bloomberg-morningstar-report.json'), JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
