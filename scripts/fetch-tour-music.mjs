/**
 * Fetch the scroll tour's records.
 *
 * `src/lib/soundtrack.ts` lists the tracks and where each came from; this
 * pulls every one with a `source`, matches its loudness to the rest and
 * writes it to `public/audio/tour/<id>.mp3`. Run it with bun, which imports
 * the TypeScript catalogue directly:
 *
 *   bun run scripts/fetch-tour-music.mjs [--force] [id …]
 *
 * ffmpeg runs twice per track: once to measure, once to encode with the
 * linear gain that measurement asks for, so the dynamics of a piece stay what
 * its composer wrote and only its level is ours. Files already on disk are
 * left alone unless --force, or unless named.
 */
import { spawn } from 'node:child_process';
import { access, mkdir, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { TRACKS, TRACK_DIR } from '../src/lib/soundtrack.ts';

/** Integrated loudness every record is brought to, in LUFS. Quiet: it sits under a page. */
export const TARGET_LUFS = -18;
/** Ceiling for the true peak, in dBTP, so the encoder never clips. */
export const TRUE_PEAK = -1.5;
/** Loudness range the filter allows before it gives up on a linear gain. */
export const RANGE = 11;
/** libmp3lame VBR quality: about 115 kb/s, plenty for music under a page. */
export const QUALITY = 6;
export const SAMPLE_RATE = 44_100;

export const OUT_DIR = fileURLToPath(new URL(`../public${TRACK_DIR}/`, import.meta.url));

const loudnorm = (extra) => `loudnorm=I=${TARGET_LUFS}:TP=${TRUE_PEAK}:LRA=${RANGE}${extra}`;

/** Pass one: analyse only, results as JSON on stderr. */
export function measureArgs(input) {
  return ['-nostats', '-hide_banner', '-i', input, '-af', loudnorm(':print_format=json'), '-f', 'null', '-'];
}

/** The numbers pass two needs, from pass one's stderr. */
export function parseMeasurement(stderr) {
  const json = stderr.match(/\{[^{}]*"input_i"[^{}]*\}/);
  if (!json) throw new Error('loudnorm printed no measurement');
  const m = JSON.parse(json[0]);
  return {
    i: Number(m.input_i),
    tp: Number(m.input_tp),
    lra: Number(m.input_lra),
    thresh: Number(m.input_thresh),
    offset: Number(m.target_offset),
  };
}

/** Pass two: apply the gain the measurement asked for, resample, encode, tag. */
export function encodeArgs(input, measured, track, output) {
  const filter = loudnorm(
    `:measured_I=${measured.i}:measured_TP=${measured.tp}:measured_LRA=${measured.lra}` +
      `:measured_thresh=${measured.thresh}:offset=${measured.offset}:linear=true`,
  );
  return [
    '-nostats',
    '-hide_banner',
    '-y',
    '-i',
    input,
    '-af',
    filter,
    '-ar',
    String(SAMPLE_RATE),
    '-codec:a',
    'libmp3lame',
    '-q:a',
    String(QUALITY),
    // The source's own tags go; ours say what and whose it is.
    '-map_metadata',
    '-1',
    '-id3v2_version',
    '3',
    '-metadata',
    `title=${track.title}`,
    '-metadata',
    `artist=${track.artist}`,
    '-metadata',
    `genre=${track.style}`,
    '-metadata',
    `comment=Source: ${track.source}`,
    output,
  ];
}

/** Run ffmpeg to the end; resolves with its exit code and everything it said. */
export function ffmpeg(args, bin = 'ffmpeg') {
  return new Promise((resolve, reject) => {
    const child = spawn(bin, args, { stdio: ['ignore', 'ignore', 'pipe'] });
    let stderr = '';
    child.stderr.on('data', (chunk) => {
      stderr += chunk;
    });
    child.on('error', reject);
    child.on('close', (code) => resolve({ code, stderr }));
  });
}

export async function download(url, to, fetchImpl = globalThis.fetch) {
  const response = await fetchImpl(url, {
    headers: { 'user-agent': 'nexow-web/1.0 (+https://nexow.ai)' },
  });
  if (!response.ok) throw new Error(`${url} → ${response.status}`);
  await writeFile(to, new Uint8Array(await response.arrayBuffer()));
}

const exists = (file) =>
  access(file).then(
    () => true,
    () => false,
  );

/** Fetch one record and write it, loudness-matched, to `outDir`. */
export async function fetchTrack(
  track,
  { outDir = OUT_DIR, workDir = tmpdir(), fetchImpl = globalThis.fetch, run = ffmpeg } = {},
) {
  const raw = path.join(workDir, `${track.id}.src`);
  const out = path.join(outDir, `${track.id}.mp3`);
  await download(track.source, raw, fetchImpl);
  try {
    const measure = await run(measureArgs(raw));
    if (measure.code !== 0) throw new Error(`ffmpeg could not measure it:\n${measure.stderr}`);
    const encode = await run(encodeArgs(raw, parseMeasurement(measure.stderr), track, out));
    if (encode.code !== 0) throw new Error(`ffmpeg could not encode it:\n${encode.stderr}`);
  } finally {
    await rm(raw, { force: true });
  }
  return out;
}

export async function main({
  tracks = TRACKS,
  argv = process.argv.slice(2),
  outDir = OUT_DIR,
  fetchImpl = globalThis.fetch,
  run = ffmpeg,
  log = console.log,
  error = console.error,
} = {}) {
  const force = argv.includes('--force');
  const named = argv.filter((arg) => !arg.startsWith('--'));
  const wanted = tracks.filter((t) => t.source && (named.length === 0 || named.includes(t.id)));

  await mkdir(outDir, { recursive: true });
  let failed = 0;
  for (const track of wanted) {
    if (!force && !named.includes(track.id) && (await exists(path.join(outDir, `${track.id}.mp3`)))) {
      log(`[music] ${track.id}: already here`);
      continue;
    }
    try {
      await fetchTrack(track, { outDir, fetchImpl, run });
      log(`[music] ${track.id}: ${track.title} — ${track.artist} (${track.style})`);
    } catch (e) {
      failed += 1;
      error(`[music] ✗ ${track.id}: ${e.message ?? e}`);
    }
  }
  log(`[music] ${wanted.length - failed}/${wanted.length} records in ${path.relative(process.cwd(), outDir)}`);
  return failed === 0;
}

// Only run when invoked directly, so the helpers stay unit-testable.
/* v8 ignore next 3 -- the CLI entry point; `main` itself is covered above. */
if (process.argv[1] && import.meta.url === new URL(`file://${process.argv[1]}`).href) {
  if (!(await main())) process.exit(1);
}
