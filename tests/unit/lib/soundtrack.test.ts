import { beforeEach, describe, expect, it, vi } from 'vitest';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { GENERATIVE, INTRO_TRACK_ID, TRACKS, TRACK_DIR, TOUR_FIRST_PLAY_KEY, introTrack, markTourPlayed, pickTrack, pickTourTrack, tourPlayedBefore, type Track } from '../../../src/lib/soundtrack';

const PUBLIC = path.resolve(import.meta.dirname, '../../..', 'public');

describe('TRACKS', () => {
  it('has a distinct id for every record', () => {
    const ids = TRACKS.map((t) => t.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('uses slugs that can be file names', () => {
    for (const { id } of TRACKS) expect(id).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
  });

  it('includes the synthesised piece, with no file behind it', () => {
    expect(TRACKS).toContain(GENERATIVE);
    expect(GENERATIVE.src).toBeUndefined();
    expect(GENERATIVE.source).toBeUndefined();
  });

  it('is a crate, not a playlist: several files in several styles', () => {
    const files = TRACKS.filter((t) => t.src);
    expect(files.length).toBeGreaterThanOrEqual(8);
    expect(new Set(files.map((t) => t.style)).size).toBe(files.length);
  });

  it('names every file after its id, under the public audio dir', () => {
    for (const track of TRACKS.filter((t) => t.src)) {
      expect(track.src, track.id).toBe(`${TRACK_DIR}/${track.id}.mp3`);
    }
  });

  it('ships every file it points at', () => {
    for (const track of TRACKS.filter((t) => t.src)) {
      expect(existsSync(path.join(PUBLIC, track.src!)), `${track.src} is missing — run scripts/fetch-tour-music.mjs`).toBe(true);
    }
  });

  it('records a fetchable URL for every Mixkit cut (guest cuts ship without one)', () => {
    for (const track of TRACKS.filter((t) => t.src && t.source)) {
      expect(track.source, track.id).toMatch(/^https:\/\//);
    }
  });

  it('keeps YouTube credits as watch URLs, never on Mixkit cuts', () => {
    for (const track of TRACKS.filter((t) => t.youtube)) {
      expect(track.youtube, track.id).toMatch(/^https:\/\/www\.youtube\.com\/watch\?v=[\w-]{11}$/);
      expect(track.source, track.id).toBeUndefined();
    }
    for (const track of TRACKS.filter((t) => t.source)) {
      expect(track.youtube, track.id).toBeUndefined();
    }
  });

  it('says who made what', () => {
    for (const track of TRACKS) {
      expect(track.title.trim(), track.id).not.toBe('');
      expect(track.artist.trim(), track.id).not.toBe('');
      expect(track.style.trim(), track.id).not.toBe('');
      expect(track.seconds, track.id).toBeGreaterThan(0);
    }
  });
});

describe('pickTrack', () => {
  const crate: Track[] = [
    { id: 'a', title: 'A', artist: 'x', style: 'one', seconds: 1 },
    { id: 'b', title: 'B', artist: 'x', style: 'two', seconds: 1 },
    { id: 'c', title: 'C', artist: 'x', style: 'three', seconds: 1 },
  ];

  it('picks from the whole crate by default', () => {
    expect(pickTrack(() => 0)).toBe(TRACKS[0]);
    expect(pickTrack(() => 0.999)).toBe(TRACKS[TRACKS.length - 1]);
  });

  it('maps the dice evenly across the crate', () => {
    expect(pickTrack(() => 0, undefined, crate).id).toBe('a');
    expect(pickTrack(() => 0.5, undefined, crate).id).toBe('b');
    expect(pickTrack(() => 0.99, undefined, crate).id).toBe('c');
  });

  it('never returns the record just played', () => {
    for (const except of crate) {
      for (const dice of [0, 0.3, 0.6, 0.99]) {
        expect(pickTrack(() => dice, except, crate)).not.toBe(except);
      }
    }
  });

  it('can still reach every other record after any one', () => {
    const [a] = crate;
    const seen = new Set([pickTrack(() => 0, a, crate).id, pickTrack(() => 0.99, a, crate).id]);
    expect(seen).toEqual(new Set(['b', 'c']));
  });

  it('repeats when there is nothing else to play', () => {
    const only = crate.slice(0, 1);
    expect(pickTrack(() => 0.4, only[0], only)).toBe(only[0]);
  });

  it('ignores an exception that is not in the crate', () => {
    const stranger: Track = { id: 'z', title: 'Z', artist: 'x', style: 'zero', seconds: 1 };
    expect(pickTrack(() => 0, stranger, crate).id).toBe('a');
    expect(pickTrack(() => 0.99, stranger, crate).id).toBe('c');
  });

  it('survives a stub that rolls exactly 1', () => {
    expect(pickTrack(() => 1, undefined, crate).id).toBe('c');
    expect(pickTrack(() => 1)).toBe(TRACKS[TRACKS.length - 1]);
  });

  it('is random with the real dice', () => {
    const seen = new Set<string>();
    for (let i = 0; i < 2_000; i++) seen.add(pickTrack().id);
    expect(seen.size).toBe(TRACKS.length);
  });
});

describe('pickTourTrack', () => {
  const store = new Map<string, string>();

  beforeEach(() => {
    store.clear();
    vi.stubGlobal('localStorage', {
      getItem: (key: string) => store.get(key) ?? null,
      setItem: (key: string, value: string) => {
        store.set(key, value);
      },
      removeItem: (key: string) => {
        store.delete(key);
      },
    });
  });

  const crate: Track[] = [
    { id: INTRO_TRACK_ID, title: 'Posterity', artist: 'x', style: 'score', seconds: 1 },
    { id: 'a', title: 'A', artist: 'x', style: 'one', seconds: 1 },
    { id: 'b', title: 'B', artist: 'x', style: 'two', seconds: 1 },
  ];

  it('opens with the intro track on the visitor’s first play', () => {
    expect(tourPlayedBefore()).toBe(false);
    expect(pickTourTrack(() => 0.99, undefined, crate).id).toBe(INTRO_TRACK_ID);
    expect(tourPlayedBefore()).toBe(true);
    expect(store.get(TOUR_FIRST_PLAY_KEY)).toBe('1');
  });

  it('is random after the first play', () => {
    markTourPlayed();
    expect(pickTourTrack(() => 0, undefined, crate).id).toBe(INTRO_TRACK_ID);
    expect(pickTourTrack(() => 0.5, undefined, crate).id).toBe('a');
  });

  it('ships the intro track in the real crate', () => {
    expect(introTrack().id).toBe(INTRO_TRACK_ID);
    expect(TRACKS.some((t) => t.id === INTRO_TRACK_ID)).toBe(true);
  });
});
