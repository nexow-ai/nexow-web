#!/usr/bin/env node
/**
 * Download real logos/banners for connectors that currently have
 * letter-placeholder SVGs or "Coming soon on Nexow" banners.
 *
 * Usage: bun scratchpad/download-connector-assets.mjs
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { join, dirname, extname, basename } from 'node:path';
import sharp from 'sharp';

const ROOT = new URL('..', import.meta.url).pathname;
const LOGOS = join(ROOT, 'public/connectors');
const BANNERS = join(ROOT, 'public/connectors/banners');

mkdirSync(BANNERS, { recursive: true });

const ts = readFileSync(join(ROOT, 'src/data/connectors.ts'), 'utf8');
const match = ts.match(/export const CONNECTORS: Connector\[\] = (\[[\s\S]*\]);\n\nexport const CONNECTOR_COUNT/);
if (!match) throw new Error('Could not parse CONNECTORS');
const connectors = eval(match[1]);

/** @type {Record<string, { simpleIcons?: string[]; clearbit?: string; domains?: string[]; wiki?: string[]; github?: string[]; brandColor?: string; pngOnly?: boolean }>} */
const SOURCES = {
  adyen: { simpleIcons: ['adyen'], clearbit: 'adyen.com', brandColor: '#0ABF53' },
  afp: { domains: ['afp.com'], wiki: ['https://upload.wikimedia.org/wikipedia/commons/8/8b/Agence_France-Presse_logo.svg'], brandColor: '#E30613' },
  al_jazeera: { simpleIcons: ['aljazeera'], clearbit: 'aljazeera.com', brandColor: '#C8102E' },
  amplitude: { simpleIcons: ['amplitude'], clearbit: 'amplitude.com', brandColor: '#1D1D1F' },
  ap_news: { simpleIcons: ['apnews', 'associatedpress'], clearbit: 'apnews.com', wiki: ['https://upload.wikimedia.org/wikipedia/commons/0/0c/Associated_Press_logo_2012.svg'], brandColor: '#FF322E' },
  argent: { clearbit: 'argent.xyz', domains: ['argent.xyz'], github: ['https://raw.githubusercontent.com/argentlabs/argent-x/develop/packages/extension/src/ui/assets/argentLogo.svg'], brandColor: '#FF875B' },
  backpack: { clearbit: 'backpack.app', domains: ['backpack.app'], brandColor: '#E33E3F' },
  bbc: { simpleIcons: ['bbc'], clearbit: 'bbc.com', wiki: ['https://upload.wikimedia.org/wikipedia/commons/4/41/BBC_Logo_2021.svg'], brandColor: '#000000' },
  bitget_wallet: { clearbit: 'bitget.com', domains: ['web3.bitget.com', 'bitget.com'], brandColor: '#00F0FF' },
  bloomberg: { simpleIcons: ['bloomberg'], clearbit: 'bloomberg.com', brandColor: '#2800D7' },
  cnn: { simpleIcons: ['cnn'], clearbit: 'cnn.com', wiki: ['https://upload.wikimedia.org/wikipedia/commons/b/b1/CNN.svg'], brandColor: '#CC0000' },
  databricks: { simpleIcons: ['databricks'], clearbit: 'databricks.com', brandColor: '#FF3621' },
  datadog: { simpleIcons: ['datadog'], clearbit: 'datadoghq.com', brandColor: '#632CA6' },
  deutsche_welle: { simpleIcons: ['deutschewelle'], clearbit: 'dw.com', wiki: ['https://upload.wikimedia.org/wikipedia/commons/7/75/Deutsche_Welle_symbol_2012.svg'], brandColor: '#0098FF' },
  el_pais: { clearbit: 'elpais.com', domains: ['elpais.com'], wiki: ['https://upload.wikimedia.org/wikipedia/commons/3/3e/El_Pais_logo_2007.svg'], brandColor: '#0066A1' },
  etoro: { simpleIcons: ['etoro'], clearbit: 'etoro.com', brandColor: '#6AAC0E' },
  exodus: { simpleIcons: ['exodus'], clearbit: 'exodus.com', brandColor: '#1F2033' },
  fidelity: { clearbit: 'fidelity.com', domains: ['fidelity.com'], brandColor: '#4B8B2E' },
  financial_times: { simpleIcons: ['financialtimes'], clearbit: 'ft.com', wiki: ['https://upload.wikimedia.org/wikipedia/commons/8/8d/FT_logo_social.svg'], brandColor: '#FFF1E5' },
  france24: { clearbit: 'france24.com', domains: ['france24.com'], wiki: ['https://upload.wikimedia.org/wikipedia/commons/8/8a/France_24_logo.svg'], brandColor: '#00A7E1' },
  grafana: { simpleIcons: ['grafana'], clearbit: 'grafana.com', brandColor: '#F46800' },
  keplr: { clearbit: 'keplr.app', domains: ['keplr.app'], github: ['https://raw.githubusercontent.com/chainapsis/keplr-wallet/master/packages/extension/src/public/assets/logo-256.png'], brandColor: '#1B1B1B' },
  le_monde: { clearbit: 'lemonde.fr', domains: ['lemonde.fr'], wiki: ['https://upload.wikimedia.org/wikipedia/commons/b/b2/Le_Monde_logo.svg'], brandColor: '#000000' },
  linear: { simpleIcons: ['linear'], clearbit: 'linear.app', brandColor: '#5E6AD2' },
  looker: { simpleIcons: ['looker'], clearbit: 'looker.com', brandColor: '#4285F4' },
  metabase: { simpleIcons: ['metabase'], clearbit: 'metabase.com', brandColor: '#509EE3' },
  nhk: { clearbit: 'nhk.or.jp', domains: ['nhk.or.jp'], wiki: ['https://upload.wikimedia.org/wikipedia/commons/b/b6/NHK_logo_2020.svg'], brandColor: '#E60012' },
  notion: { simpleIcons: ['notion'], clearbit: 'notion.so', brandColor: '#000000' },
  nytimes: { simpleIcons: ['newyorktimes', 'nytimes'], clearbit: 'nytimes.com', wiki: ['https://upload.wikimedia.org/wikipedia/commons/5/58/NewYorkTimes.svg', 'https://upload.wikimedia.org/wikipedia/commons/7/77/The_New_York_Times_logo.svg'], brandColor: '#000000' },
  pagerduty: { simpleIcons: ['pagerduty'], clearbit: 'pagerduty.com', brandColor: '#06AC38' },
  paypal: { simpleIcons: ['paypal'], clearbit: 'paypal.com', brandColor: '#003087' },
  plaid: { simpleIcons: ['plaid'], clearbit: 'plaid.com', brandColor: '#000000' },
  posthog: { simpleIcons: ['posthog'], clearbit: 'posthog.com', brandColor: '#1D4AFF' },
  prometheus: { simpleIcons: ['prometheus'], clearbit: 'prometheus.io', brandColor: '#E6522C' },
  rabby: { clearbit: 'rabby.io', domains: ['rabby.io'], github: ['https://raw.githubusercontent.com/RabbyHub/Rabby/develop/src/ui/assets/logo-white.svg', 'https://raw.githubusercontent.com/RabbyHub/logo/main/rabby.svg'], brandColor: '#8697FF' },
  rainbow: { simpleIcons: ['rainbow'], clearbit: 'rainbow.me', brandColor: '#001E59' },
  redshift: { simpleIcons: ['amazonredshift', 'amazonaws'], clearbit: 'aws.amazon.com', brandColor: '#8C4FFF' },
  reuters: { simpleIcons: ['reuters'], clearbit: 'reuters.com', wiki: ['https://upload.wikimedia.org/wikipedia/commons/8/8d/Reuters_Logo.svg'], brandColor: '#FF8000' },
  revolut: { simpleIcons: ['revolut'], clearbit: 'revolut.com', brandColor: '#0075EB' },
  safe: { simpleIcons: ['safe'], clearbit: 'safe.global', brandColor: '#12FF80' },
  scmp: { clearbit: 'scmp.com', domains: ['scmp.com'], wiki: ['https://upload.wikimedia.org/wikipedia/commons/6/6c/South_China_Morning_Post_logo.svg'], brandColor: '#D7000F' },
  sentry: { simpleIcons: ['sentry'], clearbit: 'sentry.io', brandColor: '#362D59' },
  slack: { simpleIcons: ['slack'], clearbit: 'slack.com', brandColor: '#4A154B' },
  solflare: { clearbit: 'solflare.com', domains: ['solflare.com'], brandColor: '#FC822B' },
  stripe: { simpleIcons: ['stripe'], clearbit: 'stripe.com', brandColor: '#635BFF' },
  times_of_india: { clearbit: 'timesofindia.indiatimes.com', domains: ['timesofindia.indiatimes.com', 'indiatimes.com'], brandColor: '#ED1C24' },
  tradier: { clearbit: 'tradier.com', domains: ['tradier.com'], brandColor: '#1B5EAD' },
  tradingview: { simpleIcons: ['tradingview'], clearbit: 'tradingview.com', brandColor: '#131722' },
  trezor: { simpleIcons: ['trezor'], clearbit: 'trezor.io', brandColor: '#000000' },
  wise: { simpleIcons: ['wise'], clearbit: 'wise.com', brandColor: '#9FE870' },
};

const UA = 'Mozilla/5.0 (compatible; NexowAssetBot/1.0; +https://nexow.ai)';

async function fetchBuf(url, { accept } = {}) {
  const res = await fetch(url, {
    headers: {
      'User-Agent': UA,
      Accept: accept || '*/*',
      Referer: 'https://github.com/',
    },
    redirect: 'follow',
  });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 80) throw new Error(`too small (${buf.length}) ${url}`);
  const ct = res.headers.get('content-type') || '';
  return { buf, ct, url };
}

function looksLikeSvg(buf) {
  const t = buf.slice(0, 200).toString('utf8').trim();
  return t.startsWith('<svg') || t.startsWith('<?xml') || t.includes('<svg');
}

function looksLikeRaster(buf) {
  const hex = buf.slice(0, 4).toString('hex');
  return (
    hex === '89504e47' || // png
    hex.startsWith('ffd8') || // jpeg
    buf.slice(0, 4).toString() === 'RIFF'
  );
}

function wrapIconSvg(innerSvg, brandColor, label) {
  // Simple Icons are monochrome paths; wrap on brand-colored tile.
  let body = innerSvg
    .replace(/<\?xml[^>]*>/i, '')
    .replace(/<!DOCTYPE[^>]*>/i, '')
    .trim();
  // Force fill currentColor / white for visibility on colored bg
  body = body.replace(/fill="(?:#?[0-9a-fA-F]{3,8}|black|currentColor)"/gi, 'fill="#ffffff"');
  if (!/fill=/.test(body) && /<path/.test(body)) {
    body = body.replace(/<path\b/i, '<path fill="#ffffff"');
  }
  // Extract viewBox
  const vb = body.match(/viewBox="([^"]+)"/i)?.[1] || '0 0 24 24';
  const inner = body
    .replace(/^<svg[^>]*>/i, '')
    .replace(/<\/svg>\s*$/i, '');
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128" role="img" aria-label="${label}">
  <rect width="128" height="128" rx="24" fill="${brandColor}"/>
  <g transform="translate(24 24) scale(3.333)" fill="#ffffff">${inner}</g>
</svg>
`;
}

function isPlaceholderLogo(filePath) {
  if (!existsSync(filePath)) return true;
  if (!filePath.endsWith('.svg')) return false;
  const t = readFileSync(filePath, 'utf8');
  return /<text[\s>]/.test(t) && /font-/.test(t);
}

async function isPlaceholderBanner(filePath) {
  if (!existsSync(filePath)) return true;
  try {
    const meta = await sharp(filePath).metadata();
    // Generated soon-banners are always 1200x630 and relatively small
    if (meta.width === 1200 && meta.height === 630) {
      const size = Buffer.byteLength(readFileSync(filePath));
      if (size < 22000) return true;
    }
  } catch {
    return true;
  }
  return false;
}

async function tryLogoSources(id, name, src) {
  const attempts = [];

  if (src.wiki) {
    for (const url of src.wiki) attempts.push({ kind: 'wiki', url });
  }
  if (src.github) {
    for (const url of src.github) attempts.push({ kind: 'github', url });
  }
  if (src.simpleIcons) {
    for (const slug of src.simpleIcons) {
      attempts.push({ kind: 'simpleicons', url: `https://cdn.simpleicons.org/${slug}` });
      attempts.push({
        kind: 'simpleicons-jsdelivr',
        url: `https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/${slug}.svg`,
      });
    }
  }
  if (src.clearbit) {
    attempts.push({ kind: 'clearbit', url: `https://logo.clearbit.com/${src.clearbit}` });
  }
  if (src.domains) {
    for (const d of src.domains) {
      attempts.push({ kind: 'clearbit-domain', url: `https://logo.clearbit.com/${d}` });
      attempts.push({
        kind: 'google-fav',
        url: `https://www.google.com/s2/favicons?domain=${encodeURIComponent(d)}&sz=128`,
      });
      attempts.push({
        kind: 'duckduckgo',
        url: `https://icons.duckduckgo.com/ip3/${d}.ico`,
      });
    }
  }

  const errors = [];
  for (const a of attempts) {
    try {
      const { buf, ct } = await fetchBuf(a.url);
      if (looksLikeSvg(buf)) {
        let svg = buf.toString('utf8');
        // If monochrome simple-icons (tiny, no bg), wrap onto brand tile for consistency
        if (
          (a.kind.startsWith('simpleicons') || !/<rect|<circle/i.test(svg)) &&
          src.brandColor &&
          buf.length < 8000
        ) {
          svg = wrapIconSvg(svg, src.brandColor, name);
        }
        return { kind: 'svg', buf: Buffer.from(svg), source: a.url };
      }
      if (looksLikeRaster(buf) || ct.includes('image')) {
        // Convert raster to SVG-wrapped PNG data? Prefer keep as PNG for logo path that expects .svg
        // We'll save PNG content into .svg path only if we convert to embedded, OR change approach:
        // Prefer converting raster to a square PNG and then... the data file says .svg.
        // Best: convert raster logo to a proper SVG with embedded PNG, OR overwrite as PNG and update data.
        // Prefer downloading to match path — so embed PNG in SVG wrapper if needed.
        const png = await sharp(buf)
          .resize(256, 256, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
          .png()
          .toBuffer();
        const b64 = png.toString('base64');
        const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="256" height="256" role="img" aria-label="${name}">
  <image href="data:image/png;base64,${b64}" width="256" height="256" preserveAspectRatio="xMidYMid meet"/>
</svg>
`;
        return { kind: 'svg-embed', buf: Buffer.from(svg), source: a.url };
      }
      errors.push(`${a.kind}: not image`);
    } catch (e) {
      errors.push(`${a.kind}: ${e.message}`);
    }
  }
  throw new Error(errors.slice(0, 6).join(' | '));
}

function luminance(hex) {
  const h = hex.replace('#', '');
  const full = h.length === 3 ? h.split('').map((c) => c + c).join('') : h;
  const r = parseInt(full.slice(0, 2), 16) / 255;
  const g = parseInt(full.slice(2, 4), 16) / 255;
  const b = parseInt(full.slice(4, 6), 16) / 255;
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

async function composeBanner({ name, logoSvgBuf, brandColor, outPath }) {
  const W = 1200;
  const H = 630;
  let bg = brandColor || '#1a1a1a';
  // Prefer dark banners for readability when brand color is very light
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
  <text x="320" y="340" font-family="ui-sans-serif, system-ui, -apple-system, Segoe UI, Helvetica, Arial, sans-serif" font-size="72" font-weight="700" fill="${fg}">${safe}</text>
</svg>`;

  const base = await sharp(Buffer.from(svg)).png().toBuffer();
  return sharp(base)
    .composite([{ input: logoPng, left: 120, top: Math.round((H - 160) / 2) }])
    .png()
    .toFile(outPath);
}

async function downloadOgBanner(domain, outPath) {
  // Try common OG / brand banner URLs via Clearbit or site favicon scaled — prefer composing.
  // Attempt: logo.dev style or duckduckgo not useful for banners.
  // Use Wikipedia page images occasionally via clearbit company banner — skip.
  return null;
}

async function fixMislabeledFormats() {
  const fixes = [
    'public/connectors/bigquery.png',
    'public/connectors/bybit.png',
    'public/connectors/banners/mysql.png',
    'public/connectors/banners/pinecone.png',
    'public/connectors/banners/predictit.png',
    'public/connectors/banners/twelve_data.png',
    'public/connectors/banners/uniswap.png',
  ];
  const report = [];
  for (const rel of fixes) {
    const p = join(ROOT, rel);
    if (!existsSync(p)) continue;
    try {
      await sharp(p).png().toFile(p + '.tmp');
      const { renameSync, unlinkSync } = await import('node:fs');
      renameSync(p + '.tmp', p);
      report.push({ file: rel, status: 'converted-to-png' });
    } catch (e) {
      report.push({ file: rel, status: 'failed', error: e.message });
    }
  }
  return report;
}

const report = {
  logosDownloaded: [],
  logosFailed: [],
  logosSkippedReal: [],
  bannersDownloaded: [],
  bannersFailed: [],
  bannersSkipped: [],
  formatFixes: [],
};

async function main() {
  report.formatFixes = await fixMislabeledFormats();

  for (const c of connectors) {
    const logoRel = c.logo.replace(/^\//, '');
    const logoPath = join(ROOT, 'public', logoRel);
    const src = SOURCES[c.id];

    const needsLogo = isPlaceholderLogo(logoPath);
    if (!needsLogo) {
      report.logosSkippedReal.push(c.id);
    } else if (!src) {
      report.logosFailed.push({ id: c.id, reason: 'no source map' });
    } else {
      try {
        const result = await tryLogoSources(c.id, c.name, src);
        // Always write to the path referenced in data (usually .svg)
        writeFileSync(logoPath, result.buf);
        report.logosDownloaded.push({ id: c.id, path: c.logo, source: result.source, bytes: result.buf.length });
      } catch (e) {
        report.logosFailed.push({ id: c.id, reason: e.message });
      }
    }

    // Banners: empty string means intentionally none
    if (!c.banner) {
      report.bannersSkipped.push({ id: c.id, reason: 'intentionally empty' });
      continue;
    }
    const bannerRel = c.banner.replace(/^\//, '');
    const bannerPath = join(ROOT, 'public', bannerRel);

    // Only replace known soon-placeholder banners (SOURCES map = letter-logo connectors)
    if (!src) {
      report.bannersSkipped.push({ id: c.id, reason: 'not in placeholder set' });
      continue;
    }
    const needsBanner = await isPlaceholderBanner(bannerPath);
    if (!needsBanner) {
      report.bannersSkipped.push({ id: c.id, reason: 'looks real' });
      continue;
    }

    try {
      const logoBuf = readFileSync(logoPath);
      const outPath = bannerPath.endsWith('.svg')
        ? bannerPath.replace(/\.svg$/, '.png')
        : bannerPath;
      await composeBanner({
        name: c.name,
        logoSvgBuf: logoBuf,
        brandColor: src.brandColor || '#1a1a1a',
        outPath,
      });
      report.bannersDownloaded.push({
        id: c.id,
        path: c.banner,
        source: 'composed-brand-banner',
      });
    } catch (e) {
      report.bannersFailed.push({ id: c.id, reason: e.message });
    }
  }

  writeFileSync(join(ROOT, 'scratchpad/asset-download-report.json'), JSON.stringify(report, null, 2));
  console.log(
    JSON.stringify(
      {
        logosDownloaded: report.logosDownloaded.length,
        logosFailed: report.logosFailed,
        bannersDownloaded: report.bannersDownloaded.length,
        bannersFailed: report.bannersFailed,
        formatFixes: report.formatFixes,
        sampleLogos: report.logosDownloaded.slice(0, 5),
      },
      null,
      2,
    ),
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
