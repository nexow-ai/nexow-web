import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import {
  OUT_DIR,
  QUALITY,
  RANGE,
  SAMPLE_RATE,
  TARGET_LUFS,
  TRUE_PEAK,
  download,
  encodeArgs,
  fetchTrack,
  ffmpeg,
  main,
  measureArgs,
  parseMeasurement,
} from '../../../scripts/fetch-tour-music.mjs';
import { TRACKS, TRACK_DIR, type Track } from '../../../src/lib/soundtrack';

/** What loudnorm prints after pass one, give or take the numbers. */
const REPORT = `
[Parsed_loudnorm_0 @ 0x1] 
{
	"input_i" : "-10.61",
	"input_tp" : "0.23",
	"input_lra" : "3.70",
	"input_thresh" : "-21.09",
	"output_i" : "-18.19",
	"output_tp" : "-6.75",
	"output_lra" : "4.90",
	"output_thresh" : "-28.46",
	"normalization_type" : "dynamic",
	"target_offset" : "0.19"
}
`;

const record: Track = {
  id: 'test-record',
  title: 'Test Record',
  artist: 'Somebody',
  style: 'test',
  seconds: 10,
  src: `${TRACK_DIR}/test-record.mp3`,
  source: 'https://example.test/record.mp3',
};

/** A fetch that answers with `status` and the bytes of `body`. */
const stubFetch = (status: number, body = 'mp3-bytes') =>
  vi.fn(async () => ({
    ok: status < 400,
    status,
    arrayBuffer: async () => new TextEncoder().encode(body).buffer,
  })) as unknown as typeof fetch;

/** An ffmpeg that writes `output` on the encode pass and answers as told. */
const stubRun = (measureCode = 0, encodeCode = 0) =>
  vi.fn(async (args: string[]) => {
    if (args.includes('-f')) return { code: measureCode, stderr: REPORT };
    await writeFile(args[args.length - 1], 'encoded');
    return { code: encodeCode, stderr: 'size=1kB' };
  });

let work: string;
let out: string;

beforeEach(async () => {
  work = await mkdtemp(path.join(tmpdir(), 'nexow-music-'));
  out = path.join(work, 'out');
});
afterEach(() => rm(work, { recursive: true, force: true }));

describe('the recipe', () => {
  it('brings every record to one quiet level with headroom', () => {
    expect(TARGET_LUFS).toBeLessThanOrEqual(-16);
    expect(TRUE_PEAK).toBeLessThan(0);
    expect(RANGE).toBeGreaterThan(0);
    expect(SAMPLE_RATE).toBe(44_100);
    expect(QUALITY).toBeGreaterThanOrEqual(0);
    expect(QUALITY).toBeLessThanOrEqual(9);
  });

  it('writes into the public dir the catalogue points at', () => {
    expect(OUT_DIR.replaceAll(path.sep, '/')).toMatch(new RegExp(`/public${TRACK_DIR}/$`));
  });

  it('measures without writing anything', () => {
    const args = measureArgs('/in.mp3');
    expect(args.slice(-3)).toEqual(['-f', 'null', '-']);
    expect(args[args.indexOf('-i') + 1]).toBe('/in.mp3');
    expect(args[args.indexOf('-af') + 1]).toBe(
      `loudnorm=I=${TARGET_LUFS}:TP=${TRUE_PEAK}:LRA=${RANGE}:print_format=json`,
    );
  });

  it('reads the measurement back as numbers', () => {
    expect(parseMeasurement(REPORT)).toEqual({
      i: -10.61,
      tp: 0.23,
      lra: 3.7,
      thresh: -21.09,
      offset: 0.19,
    });
  });

  it('complains when ffmpeg printed no measurement', () => {
    expect(() => parseMeasurement('size=0kB time=00:00:00')).toThrow(/no measurement/);
  });

  it('encodes with a linear gain from the measurement, resampled and tagged', () => {
    const args = encodeArgs('/in.mp3', parseMeasurement(REPORT), record, '/out.mp3');
    const after = (flag: string) => args[args.indexOf(flag) + 1];
    expect(after('-i')).toBe('/in.mp3');
    expect(after('-af')).toBe(
      `loudnorm=I=${TARGET_LUFS}:TP=${TRUE_PEAK}:LRA=${RANGE}` +
        ':measured_I=-10.61:measured_TP=0.23:measured_LRA=3.7:measured_thresh=-21.09:offset=0.19:linear=true',
    );
    expect(after('-ar')).toBe(String(SAMPLE_RATE));
    expect(after('-codec:a')).toBe('libmp3lame');
    expect(after('-q:a')).toBe(String(QUALITY));
    expect(after('-map_metadata')).toBe('-1');
    const tags = args.filter((_, i) => args[i - 1] === '-metadata');
    expect(tags).toEqual([
      'title=Test Record',
      'artist=Somebody',
      'genre=test',
      'comment=Source: https://example.test/record.mp3',
    ]);
    expect(args[args.length - 1]).toBe('/out.mp3');
    expect(args).toContain('-y');
  });
});

describe('ffmpeg', () => {
  it('collects the exit code and stderr of the process', async () => {
    const result = await ffmpeg(['-e', 'process.stderr.write("said"); process.exit(3)'], process.execPath);
    expect(result).toEqual({ code: 3, stderr: 'said' });
  });

  it('rejects when the binary is not there', async () => {
    await expect(ffmpech()).rejects.toThrow();
    function ffmpech() {
      return ffmpeg(['-version'], path.join(work, 'no-such-ffmpeg'));
    }
  });
});

describe('download', () => {
  it('writes the body to the given path', async () => {
    const fetchImpl = stubFetch(200, 'hello');
    const to = path.join(work, 'raw');
    await download('https://example.test/x', to, fetchImpl);
    expect(await readFile(to, 'utf8')).toBe('hello');
    expect(fetchImpl).toHaveBeenCalledWith(
      'https://example.test/x',
      expect.objectContaining({ headers: expect.objectContaining({ 'user-agent': expect.stringContaining('nexow') }) }),
    );
  });

  it('fails on a bad status rather than writing an error page', async () => {
    const to = path.join(work, 'raw');
    await expect(download('https://example.test/x', to, stubFetch(404))).rejects.toThrow('https://example.test/x → 404');
    expect(existsSync(to)).toBe(false);
  });
});

describe('fetchTrack', () => {
  it('downloads, measures, encodes, and cleans up the raw file', async () => {
    const run = stubRun();
    const written = await fetchTrack(record, { outDir: work, workDir: work, fetchImpl: stubFetch(200), run });
    expect(written).toBe(path.join(work, 'test-record.mp3'));
    expect(await readFile(written, 'utf8')).toBe('encoded');
    expect(run).toHaveBeenCalledTimes(2);
    const raw = path.join(work, 'test-record.src');
    expect(run.mock.calls[0][0]).toEqual(measureArgs(raw));
    expect(run.mock.calls[1][0]).toEqual(encodeArgs(raw, parseMeasurement(REPORT), record, written));
    expect(existsSync(raw)).toBe(false);
  });

  it('reports a failed measurement, with what ffmpeg said', async () => {
    await expect(
      fetchTrack(record, { outDir: work, workDir: work, fetchImpl: stubFetch(200), run: stubRun(1) }),
    ).rejects.toThrow(/could not measure it:\n[\s\S]*input_i/);
    expect(existsSync(path.join(work, 'test-record.src'))).toBe(false);
  });

  it('reports a failed encode', async () => {
    await expect(
      fetchTrack(record, { outDir: work, workDir: work, fetchImpl: stubFetch(200), run: stubRun(0, 1) }),
    ).rejects.toThrow(/could not encode it:\nsize=1kB/);
  });
});

describe('main', () => {
  const log = vi.fn();
  const error = vi.fn();
  const another: Track = {
    ...record,
    id: 'another',
    title: 'Another',
    src: `${TRACK_DIR}/another.mp3`,
    source: 'https://example.test/another.mp3',
  };
  const generative: Track = { id: 'made-up', title: 'Made Up', artist: 'Nexow', style: 'generative', seconds: 1 };
  const crate = [generative, record, another];

  beforeEach(() => {
    log.mockClear();
    error.mockClear();
  });

  it('fetches every record that has a source, and only those', async () => {
    const run = stubRun();
    const ok = await main({ tracks: crate, argv: [], outDir: out, fetchImpl: stubFetch(200), run, log, error });
    expect(ok).toBe(true);
    expect(existsSync(path.join(out, 'test-record.mp3'))).toBe(true);
    expect(existsSync(path.join(out, 'another.mp3'))).toBe(true);
    expect(existsSync(path.join(out, 'made-up.mp3'))).toBe(false);
    expect(run).toHaveBeenCalledTimes(4);
    expect(log).toHaveBeenCalledWith('[music] test-record: Test Record — Somebody (test)');
    expect(log).toHaveBeenLastCalledWith(expect.stringMatching(/^\[music\] 2\/2 records in /));
    expect(error).not.toHaveBeenCalled();
  });

  it('leaves records already on disk alone', async () => {
    await main({ tracks: crate, argv: [], outDir: out, fetchImpl: stubFetch(200), run: stubRun(), log, error });
    const run = stubRun();
    const fetchImpl = stubFetch(200);
    await main({ tracks: crate, argv: [], outDir: out, fetchImpl, run, log, error });
    expect(run).not.toHaveBeenCalled();
    expect(fetchImpl).not.toHaveBeenCalled();
    expect(log).toHaveBeenCalledWith('[music] test-record: already here');
  });

  it('fetches them again with --force', async () => {
    await main({ tracks: crate, argv: [], outDir: out, fetchImpl: stubFetch(200), run: stubRun(), log, error });
    const run = stubRun();
    await main({ tracks: crate, argv: ['--force'], outDir: out, fetchImpl: stubFetch(200), run, log, error });
    expect(run).toHaveBeenCalledTimes(4);
  });

  it('fetches only the records named, whether or not they are on disk', async () => {
    await main({ tracks: crate, argv: [], outDir: out, fetchImpl: stubFetch(200), run: stubRun(), log, error });
    const run = stubRun();
    await main({ tracks: crate, argv: ['another'], outDir: out, fetchImpl: stubFetch(200), run, log, error });
    expect(run).toHaveBeenCalledTimes(2);
    expect(run.mock.calls[0][0]).toContain(path.join(tmpdir(), 'another.src'));
    expect(log).toHaveBeenLastCalledWith(expect.stringMatching(/^\[music\] 1\/1 records/));
  });

  it('carries on past a record that fails, and says so', async () => {
    const fetchImpl = vi.fn(async (url: string) =>
      url === record.source ? { ok: false, status: 503 } : { ok: true, status: 200, arrayBuffer: async () => new ArrayBuffer(1) },
    ) as unknown as typeof fetch;
    const ok = await main({ tracks: crate, argv: [], outDir: out, fetchImpl, run: stubRun(), log, error });
    expect(ok).toBe(false);
    expect(error).toHaveBeenCalledWith(`[music] ✗ test-record: ${record.source} → 503`);
    expect(existsSync(path.join(out, 'another.mp3'))).toBe(true);
    expect(log).toHaveBeenLastCalledWith(expect.stringMatching(/^\[music\] 1\/2 records/));
  });

  it('reports a failure that is not an Error as it is', async () => {
    const run = vi.fn(async () => {
      throw 'ffmpeg is not installed';
    });
    const ok = await main({ tracks: [record], argv: [], outDir: out, fetchImpl: stubFetch(200), run, log, error });
    expect(ok).toBe(false);
    expect(error).toHaveBeenCalledWith('[music] ✗ test-record: ffmpeg is not installed');
  });

  it('reads the real catalogue and the CLI flags by default', async () => {
    // Every real record is already on disk, so a default run touches nothing.
    const run = stubRun();
    const fetchImpl = stubFetch(200);
    const argv = process.argv;
    process.argv = [argv[0], argv[1]];
    try {
      const ok = await main({ fetchImpl, run, log, error });
      expect(ok).toBe(true);
    } finally {
      process.argv = argv;
    }
    expect(run).not.toHaveBeenCalled();
    for (const track of TRACKS.filter((t) => t.source)) {
      expect(log).toHaveBeenCalledWith(`[music] ${track.id}: already here`);
    }
  });
});
