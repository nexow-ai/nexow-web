#!/usr/bin/env node
/**
 * Add LATAM + African news coming-soon connectors with logos/banners.
 * Usage: bun scratchpad/add-latam-africa-news.mjs
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
 *  initials: string; domains?: string[]; wiki?: string[]; clearbit?: string;
 * }>} */
const NEW_CONNECTORS = [
  // —— LATAM ——
  {
    id: 'folha',
    name: 'Folha de S.Paulo',
    url: 'https://www.folha.uol.com.br/',
    notes:
      'Brazil newspaper of record — stream São Paulo and national politics, business, and culture coverage into research boards.',
    brandColor: '#003366',
    initials: 'FSP',
    domains: ['folha.uol.com.br', 'folha.com.br'],
    clearbit: 'folha.uol.com.br',
    wiki: ['https://upload.wikimedia.org/wikipedia/commons/8/8f/Folha_de_S.Paulo_logo.svg'],
  },
  {
    id: 'g1',
    name: 'G1',
    url: 'https://g1.globo.com/',
    notes:
      "Globo's Brazilian news portal — pull national headlines, politics, and breaking stories for LatAm briefing widgets.",
    brandColor: '#C4170C',
    initials: 'G1',
    domains: ['g1.globo.com', 'globo.com'],
    clearbit: 'globo.com',
  },
  {
    id: 'clarin',
    name: 'Clarín',
    url: 'https://www.clarin.com/',
    notes:
      "Argentina's largest daily — follow Buenos Aires politics, economy, and regional coverage on news dashboards.",
    brandColor: '#E30613',
    initials: 'CL',
    domains: ['clarin.com'],
    clearbit: 'clarin.com',
    wiki: ['https://upload.wikimedia.org/wikipedia/commons/4/4c/Clar%C3%ADn_logo.svg'],
  },
  {
    id: 'la_nacion',
    name: 'La Nación',
    url: 'https://www.lanacion.com.ar/',
    notes:
      'Leading Argentine broadsheet — surface politics, markets, and international desks for Spanish-language research boards.',
    brandColor: '#0033A0',
    initials: 'LN',
    domains: ['lanacion.com.ar'],
    clearbit: 'lanacion.com.ar',
  },
  {
    id: 'reforma',
    name: 'Reforma',
    url: 'https://www.reforma.com/',
    notes:
      'Major Mexican newspaper — track Mexico City politics, business, and national news for LatAm widgets.',
    brandColor: '#1A1A1A',
    initials: 'RF',
    domains: ['reforma.com'],
    clearbit: 'reforma.com',
  },
  {
    id: 'el_tiempo',
    name: 'El Tiempo',
    url: 'https://www.eltiempo.com/',
    notes:
      "Colombia's leading daily — bring Bogotá politics, economy, and Andean regional coverage into news boards.",
    brandColor: '#E30613',
    initials: 'ET',
    domains: ['eltiempo.com'],
    clearbit: 'eltiempo.com',
  },
  {
    id: 'emol',
    name: 'Emol',
    url: 'https://www.emol.com/',
    notes:
      "El Mercurio's Chilean digital portal — follow Santiago politics, markets, and Southern Cone headlines.",
    brandColor: '#003366',
    initials: 'EM',
    domains: ['emol.com'],
    clearbit: 'emol.com',
  },
  // —— Africa ——
  {
    id: 'news24',
    name: 'News24',
    url: 'https://www.news24.com/',
    notes:
      "South Africa's largest digital news site — stream national politics, business, and African desk coverage.",
    brandColor: '#E30613',
    initials: 'N24',
    domains: ['news24.com'],
    clearbit: 'news24.com',
  },
  {
    id: 'mail_guardian',
    name: 'Mail & Guardian',
    url: 'https://mg.co.za/',
    notes:
      'South African investigative weekly — surface in-depth politics, society, and continental analysis.',
    brandColor: '#1B5E20',
    initials: 'MG',
    domains: ['mg.co.za'],
    clearbit: 'mg.co.za',
  },
  {
    id: 'punch',
    name: 'Punch',
    url: 'https://punchng.com/',
    notes:
      "Nigeria's widely read daily — pull Lagos politics, business, and West Africa headlines into research widgets.",
    brandColor: '#E30613',
    initials: 'PN',
    domains: ['punchng.com'],
    clearbit: 'punchng.com',
  },
  {
    id: 'premium_times',
    name: 'Premium Times',
    url: 'https://www.premiumtimesng.com/',
    notes:
      'Nigerian investigative news outlet — follow accountability reporting and national politics for African boards.',
    brandColor: '#0D47A1',
    initials: 'PT',
    domains: ['premiumtimesng.com'],
    clearbit: 'premiumtimesng.com',
  },
  {
    id: 'daily_nation',
    name: 'Daily Nation',
    url: 'https://nation.africa/',
    notes:
      "Kenya's flagship Nation Media daily — track East Africa politics, business, and regional breaking news.",
    brandColor: '#C8102E',
    initials: 'DN',
    domains: ['nation.africa', 'nation.co.ke'],
    clearbit: 'nation.africa',
  },
  {
    id: 'al_ahram',
    name: 'Al-Ahram',
    url: 'https://english.ahram.org.eg/',
    notes:
      "Egypt's historic newspaper — bring Cairo politics, Middle East, and North Africa coverage into multilingual widgets.",
    brandColor: '#8B0000',
    initials: 'AH',
    domains: ['ahram.org.eg', 'english.ahram.org.eg'],
    clearbit: 'ahram.org.eg',
  },
  {
    id: 'africanews',
    name: 'Africanews',
    url: 'https://www.africanews.com/',
    notes:
      'Pan-African 24-hour news channel — stream continent-wide headlines and regional desks for research boards.',
    brandColor: '#FF6600',
    initials: 'AN',
    domains: ['africanews.com'],
    clearbit: 'africanews.com',
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

function wrapIconSvg(innerSvg, brandColor, label) {
  let body = innerSvg
    .replace(/<\?xml[^>]*>/i, '')
    .replace(/<!DOCTYPE[^>]*>/i, '')
    .trim();
  body = body.replace(/fill="(?:#?[0-9a-fA-F]{3,8}|black|currentColor)"/gi, 'fill="#ffffff"');
  if (!/fill=/.test(body) && /<path/.test(body)) {
    body = body.replace(/<path\b/i, '<path fill="#ffffff"');
  }
  const inner = body.replace(/^<svg[^>]*>/i, '').replace(/<\/svg>\s*$/i, '');
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128" role="img" aria-label="${label}">
  <rect width="128" height="128" rx="24" fill="${brandColor}"/>
  <g transform="translate(24 24) scale(3.333)" fill="#ffffff">${inner}</g>
</svg>
`;
}

async function tryLogo(c) {
  const attempts = [];
  if (c.wiki) for (const url of c.wiki) attempts.push({ kind: 'wiki', url });
  if (c.clearbit) attempts.push({ kind: 'clearbit', url: `https://logo.clearbit.com/${c.clearbit}` });
  if (c.domains) {
    for (const d of c.domains) {
      attempts.push({ kind: 'clearbit-d', url: `https://logo.clearbit.com/${d}` });
      attempts.push({
        kind: 'iconhorse',
        url: `https://icon.horse/icon/${d}`,
      });
      attempts.push({
        kind: 'google-fav',
        url: `https://www.google.com/s2/favicons?domain=${encodeURIComponent(d)}&sz=128`,
      });
      attempts.push({
        kind: 'ddg',
        url: `https://icons.duckduckgo.com/ip3/${d}.ico`,
      });
    }
  }

  const errors = [];
  for (const a of attempts) {
    try {
      const { buf } = await fetchBuf(a.url);
      if (looksLikeSvg(buf)) {
        let svg = buf.toString('utf8');
        if (buf.length < 8000 && !/<rect|<circle/i.test(svg) && c.brandColor) {
          svg = wrapIconSvg(svg, c.brandColor, c.name);
        }
        return { buf: Buffer.from(svg), source: a.url, kind: 'real-svg' };
      }
      if (looksLikeRaster(buf)) {
        // Skip tiny favicons (< 2KB often look bad) — try next
        if (buf.length < 1500 && a.kind.includes('fav')) {
          errors.push(`${a.kind}: too tiny favicon`);
          continue;
        }
        const png = await sharp(buf)
          .resize(256, 256, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
          .png()
          .toBuffer();
        // Reject nearly-empty / solid junk
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
  const existingIds = new Set(soon.map((c) => c.id));

  // Also check connectors.ts ids
  const ts = readFileSync(join(ROOT, 'src/data/connectors.ts'), 'utf8');
  for (const m of ts.matchAll(/"id":\s*"([^"]+)"/g)) existingIds.add(m[1]);

  const report = { added: [], skipped: [], logos: {}, banners: {} };

  for (const c of NEW_CONNECTORS) {
    if (existingIds.has(c.id)) {
      report.skipped.push(c.id);
      continue;
    }

    const logoPath = join(LOGOS, `${c.id}.svg`);
    const bannerPath = join(BANNERS, `${c.id}.png`);

    let logoResult;
    if (existsSync(logoPath) && !/<text[\s>]/.test(readFileSync(logoPath, 'utf8'))) {
      logoResult = { buf: readFileSync(logoPath), source: 'existing', kind: 'kept' };
    } else {
      logoResult = await tryLogo(c);
      writeFileSync(logoPath, logoResult.buf);
    }
    report.logos[c.id] = { kind: logoResult.kind, source: logoResult.source };

    await composeBanner({
      name: c.name,
      logoSvgBuf: logoResult.buf,
      brandColor: c.brandColor,
      outPath: bannerPath,
    });
    report.banners[c.id] = 'composed-brand-banner';

    const entry = {
      id: c.id,
      name: c.name,
      category: 'services',
      kind: 'news',
      status: 'soon',
      trading: false,
      assets: [],
      url: c.url,
      logo: `/connectors/${c.id}.svg`,
      banner: `/connectors/banners/${c.id}.png`,
      logoFit: 'cover',
      notes: c.notes,
    };
    soon.push(entry);
    existingIds.add(c.id);
    report.added.push(c.id);
  }

  writeFileSync(SOON_PATH, JSON.stringify(soon, null, 2) + '\n');
  writeFileSync(join(ROOT, 'scratchpad/latam-africa-news-report.json'), JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
