/**
 * The scroll tour's record crate.
 *
 * Every press of play pulls one track from here at random — never the one
 * just played — so the tour has a different soundtrack each time: one visit
 * gets a deep-house piece, the next a string quartet, the next a hard-techno
 * record, the next the synthesised ambient in D. The crate is a mood board
 * more than a playlist, with a small techno run for nights that want to go
 * harder.
 *
 * Thirteen are files under `public/audio/tour`, fetched the moment play is
 * pressed and never before. They come from Mixkit under its Stock Music Free License —
 * commercial use, no attribution (https://mixkit.co/license/#musicFree) — and
 * are re-encoded and loudness-matched to −18 LUFS by
 * `scripts/fetch-tour-music.mjs`, so a random pick never jumps in level. The
 * eleventh is the piece `lib/ambient` synthesises in the browser, which ships
 * no bytes at all and is also the fallback when a file will not play.
 *
 * To add a record: append an entry with its `source`, run the script, commit
 * the file it writes.
 */

export interface Track {
  /** Stable slug; also the file's name under `public/audio/tour`. */
  readonly id: string;
  readonly title: string;
  readonly artist: string;
  /** A style word, for a listener wondering what they are hearing. */
  readonly style: string;
  /** Length in whole seconds. Informational only. */
  readonly seconds: number;
  /** Public path of the file. The generative piece has none — see `lib/ambient`. */
  readonly src?: string;
  /** Where the file was fetched from; `scripts/fetch-tour-music.mjs` reads it. */
  readonly source?: string;
}

/** Where the files live, from the site root. */
export const TRACK_DIR = '/audio/tour';

const file = (id: string) => `${TRACK_DIR}/${id}.mp3`;
const mixkit = (n: number) => `https://assets.mixkit.co/music/${n}/${n}.mp3`;

/** The piece synthesised on the spot by `lib/ambient`. */
export const GENERATIVE: Track = {
  id: 'piece-in-d',
  title: 'Piece in D',
  artist: 'Nexow',
  style: 'generative ambient',
  seconds: Infinity,
};

export const TRACKS: readonly Track[] = [
  GENERATIVE,
  {
    id: 'vastness',
    title: 'Vastness',
    artist: 'Andrew Ev',
    style: 'ambient',
    seconds: 230,
    src: file('vastness'),
    source: mixkit(184),
  },
  {
    id: 'digital-clouds',
    title: 'Digital Clouds',
    artist: 'Alejandro Magaña',
    style: 'chillout',
    seconds: 101,
    src: file('digital-clouds'),
    source: mixkit(175),
  },
  {
    id: 'deep-techno-ambience',
    title: 'Deep Techno Ambience',
    artist: 'Alejandro Magaña',
    style: 'techno',
    seconds: 123,
    src: file('deep-techno-ambience'),
    source: mixkit(134),
  },
  {
    id: 'sun-in-your-eyes',
    title: 'Sun in Your Eyes',
    artist: 'Alejandro Magaña',
    style: 'synthwave',
    seconds: 106,
    src: file('sun-in-your-eyes'),
    source: mixkit(131),
  },
  {
    id: 'tapis',
    title: 'Tapis',
    artist: 'Eugenio Mininni',
    style: 'film score',
    seconds: 163,
    src: file('tapis'),
    source: mixkit(615),
  },
  {
    id: 'smooth-like-jazz',
    title: 'Smooth Like Jazz',
    artist: 'Ahjay Stelino',
    style: 'jazz',
    seconds: 158,
    src: file('smooth-like-jazz'),
    source: mixkit(24),
  },
  {
    id: 'skyline',
    title: 'Skyline',
    artist: 'Eugenio Mininni',
    style: 'classical',
    seconds: 206,
    src: file('skyline'),
    source: mixkit(601),
  },
  {
    id: 'sweet-september',
    title: 'Sweet September',
    artist: 'Arulo',
    style: 'hip hop',
    seconds: 99,
    src: file('sweet-september'),
    source: mixkit(282),
  },
  {
    id: 'sun-and-his-daughter',
    title: 'Sun and His Daughter',
    artist: 'Eugenio Mininni',
    style: 'world',
    seconds: 168,
    src: file('sun-and-his-daughter'),
    source: mixkit(580),
  },
  {
    id: 'deep-urban',
    title: 'Deep Urban',
    artist: 'Eugenio Mininni',
    style: 'house',
    seconds: 289,
    src: file('deep-urban'),
    source: mixkit(623),
  },
  {
    id: 'machine-drum-vibes',
    title: 'Machine Drum Vibes',
    artist: 'Alejandro Magaña',
    style: 'hard techno',
    seconds: 132,
    src: file('machine-drum-vibes'),
    source: mixkit(117),
  },
  {
    id: 'techno-fest-vibes',
    title: 'Techno Fest Vibes',
    artist: 'Alejandro Magaña',
    style: 'festival techno',
    seconds: 134,
    src: file('techno-fest-vibes'),
    source: mixkit(124),
  },
  {
    id: 'infected-vibes',
    title: 'Infected Vibes',
    artist: 'Alejandro Magaña',
    style: 'dark techno',
    seconds: 91,
    src: file('infected-vibes'),
    source: mixkit(157),
  },
];

/**
 * One track at random from `tracks`, never `except` while there is a choice.
 * `random` is injected so a test can hold the dice still.
 */
export function pickTrack(
  random: () => number = Math.random,
  except?: Track,
  tracks: readonly Track[] = TRACKS,
): Track {
  const pool = except && tracks.length > 1 ? tracks.filter((t) => t.id !== except.id) : tracks;
  // `random()` is [0, 1), but a stub may hand back 1; clamp rather than trust it.
  return pool[Math.min(pool.length - 1, Math.floor(random() * pool.length))];
}
