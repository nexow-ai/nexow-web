/**
 * The scroll tour's record crate.
 *
 * The first time a visitor presses play, Posterity always comes up; after that,
 * every press pulls one track at random — never the one just played — so the
 * tour has a different soundtrack each time: one visit gets a deep-house piece,
 * the next a string quartet, the next a hard-techno record, the next a guest
 * cut from the crate, the next the synthesised ambient in D. The crate is a
 * mood board more than a playlist.
 *
 * Mixkit stock cuts under `public/audio/tour` ship with a `source` URL and are
 * re-encoded and loudness-matched to −18 LUFS by `scripts/fetch-tour-music.mjs`
 * (Stock Music Free License — commercial use, no attribution:
 * https://mixkit.co/license/#musicFree). Guest cuts live beside them as local
 * files with no `source` — drop the mp3 in as `<id>.mp3` and append an entry.
 * One track is the piece `lib/ambient` synthesises in the browser, which ships
 * no bytes at all and is also the fallback when a file will not play.
 *
 * To add a Mixkit record: append an entry with its `source`, run the script,
 * commit the file it writes. To add a guest cut: drop `<id>.mp3` in the folder
 * and append an entry without `source`; if it came from YouTube, set `youtube`.
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
  /** Original YouTube watch URL when the cut was taken from YouTube. */
  readonly youtube?: string;
}

/** Where the files live, from the site root. */
export const TRACK_DIR = '/audio/tour';

/** The record every visitor hears the first time they press play. */
export const INTRO_TRACK_ID = 'posterity';

/** Set when the visitor has pressed play on the tour soundtrack once. */
export const TOUR_FIRST_PLAY_KEY = 'nexow-tour-first-play';

const file = (id: string) => `${TRACK_DIR}/${id}.mp3`;
const mixkit = (n: number) => `https://assets.mixkit.co/music/${n}/${n}.mp3`;
const youtube = (id: string) => `https://www.youtube.com/watch?v=${id}`;

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
  {
    id: 'acho-pr',
    title: 'ACHO PR',
    artist: 'ACHO',
    style: 'latin trap',
    seconds: 359,
    src: file('acho-pr'),
    youtube: youtube('6ftxHrjREhE'),
  },
  {
    id: 'asimetria',
    title: 'Asimetría',
    artist: 'Zeballos',
    style: 'argentina trap',
    seconds: 178,
    src: file('asimetria'),
    youtube: youtube('WpNQDRHsOGo'),
  },
  {
    id: 'beautiful-things',
    title: 'Beautiful Things',
    artist: 'Benson Boone',
    style: 'indie pop',
    seconds: 192,
    src: file('beautiful-things'),
    youtube: youtube('Oa_RSwwpPaA'),
  },
  {
    id: 'the-animals',
    title: 'The Animals',
    artist: 'Cecilio G.',
    style: 'spanish rap',
    seconds: 227,
    src: file('the-animals'),
    youtube: youtube('XSW9gQ7yr6M'),
  },
  {
    id: 'road-to-zion',
    title: 'Road To Zion',
    artist: 'Damian Marley (EFIX & XKAEM)',
    style: 'reggae cover',
    seconds: 352,
    src: file('road-to-zion'),
    youtube: youtube('Jq2IfkMr_x0'),
  },
  {
    id: 'gfy',
    title: 'GFY',
    artist: 'Dennis Lloyd',
    style: 'indie electronic',
    seconds: 224,
    src: file('gfy'),
    youtube: youtube('CIqiB9zSLmM'),
  },
  {
    id: 'last-supper',
    title: 'Last Supper',
    artist: 'D Smoke',
    style: 'conscious hip hop',
    seconds: 225,
    src: file('last-supper'),
    youtube: youtube('BQ7IAbWKmzg'),
  },
  {
    id: 'branzino',
    title: 'Branzino',
    artist: 'Eladio Carrión, Big Sean',
    style: 'latin urban',
    seconds: 262,
    src: file('branzino'),
    youtube: youtube('qb0R28lV3ic'),
  },
  {
    id: 'que-cojones',
    title: 'Que Cojones',
    artist: 'Eladio Carrión',
    style: 'reggaeton',
    seconds: 158,
    src: file('que-cojones'),
    youtube: youtube('VDibXdkD6yQ'),
  },
  {
    id: 'si-lo-puedes-sonar',
    title: 'Si Lo Puedes Soñar',
    artist: 'Eladio Carrión',
    style: 'latin anthem',
    seconds: 197,
    src: file('si-lo-puedes-sonar'),
    youtube: youtube('eFB51JXs8XQ'),
  },
  {
    id: 'mockingbird',
    title: 'Mockingbird',
    artist: 'Eminem',
    style: 'storytelling rap',
    seconds: 257,
    src: file('mockingbird'),
    youtube: youtube('S9bCLPwzSC0'),
  },
  {
    id: 'dont-tell-your-dreams',
    title: "Don't Tell Your Dreams",
    artist: 'LOVIXX, STOSLIV',
    style: 'dream pop',
    seconds: 141,
    src: file('dont-tell-your-dreams'),
    youtube: youtube('oY4qlsP2FxY'),
  },
  {
    id: 'bittersweet-symphony',
    title: 'Bittersweet Symphony',
    artist: 'Ren',
    style: 'alt cover',
    seconds: 164,
    src: file('bittersweet-symphony'),
    youtube: youtube('JwtEOp7pC1A'),
  },
  {
    id: 'territory',
    title: 'Territory',
    artist: 'The Blaze',
    style: 'french electronic',
    seconds: 337,
    src: file('territory'),
    youtube: youtube('54fea7wuV6s'),
  },
  {
    id: 'another-love',
    title: 'Another Love',
    artist: 'Tom Odell (Zwette Edit)',
    style: 'indie remix',
    seconds: 393,
    src: file('another-love'),
    youtube: youtube('4ZHwu0uut3k'),
  },
  {
    id: 'habits',
    title: 'Habits (Stay High)',
    artist: 'Tove Lo (Hippie Sabotage Remix)',
    style: 'electropop remix',
    seconds: 263,
    src: file('habits'),
    youtube: youtube('SYM-RJwSGQ8'),
  },
  {
    id: 'bzrp-5966',
    title: 'BZRP Music Sessions #59',
    artist: 'Natanael Cano',
    style: 'corridos tumbados',
    seconds: 339,
    src: file('bzrp-5966'),
    youtube: youtube('kRlxTJSPKK8'),
  },
  {
    id: 'adentro',
    title: 'Adentro',
    artist: 'Unknown',
    style: 'deep latin',
    seconds: 292,
    src: file('adentro'),
    youtube: youtube('qCwo5RWqzT8'),
  },
  {
    id: 'a-million-on-my-soul',
    title: 'A Million on My Soul',
    artist: 'Alexiane',
    style: 'cinematic soul',
    seconds: 180,
    src: file('a-million-on-my-soul'),
    youtube: youtube('E6l5ezErGuw'),
  },
  {
    id: 'cancion-de-volteo',
    title: 'Canción de Volteo',
    artist: 'Unknown',
    style: 'latin folk',
    seconds: 203,
    src: file('cancion-de-volteo'),
    youtube: youtube('dSQab6aF0Ts'),
  },
  {
    id: 'daylight',
    title: 'Daylight',
    artist: 'David Kushner',
    style: 'folk pop',
    seconds: 229,
    src: file('daylight'),
    youtube: youtube('MoN9ql6Yymw'),
  },
  {
    id: 'help-me-lose-my-mind',
    title: 'Help Me Lose My Mind',
    artist: 'Disclosure (Mazde Remix)',
    style: 'UK garage remix',
    seconds: 236,
    src: file('help-me-lose-my-mind'),
    youtube: youtube('3jTjBt0Enyw'),
  },
  {
    id: 'dream-big',
    title: 'Dream Big',
    artist: 'Unknown',
    style: 'motivational ambient',
    seconds: 96,
    src: file('dream-big'),
    youtube: youtube('GFiJDp5mlrw'),
  },
  {
    id: 'grim-reaper',
    title: 'Grim Reaper',
    artist: 'Unknown',
    style: 'dark hip hop',
    seconds: 125,
    src: file('grim-reaper'),
    youtube: youtube('xkKhbSwt7YY'),
  },
  {
    id: 'interstellar-variations',
    title: 'Interstellar Variations',
    artist: "Jacob's Piano",
    style: 'piano cinematic',
    seconds: 288,
    src: file('interstellar-variations'),
    youtube: youtube('yqYVu--uvQo'),
  },
  {
    id: 'a-yo',
    title: 'A-YO',
    artist: 'Method Man, Redman',
    style: 'east coast rap',
    seconds: 271,
    src: file('a-yo'),
    youtube: youtube('W3w49zHXzco'),
  },
  {
    id: 'malo-muchacho',
    title: 'Malo Muchacho',
    artist: 'Mucho Muchacho',
    style: 'spanish hip hop',
    seconds: 213,
    src: file('malo-muchacho'),
    youtube: youtube('MoYDJfNvLXI'),
  },
  {
    id: 'my-life-is-real',
    title: 'My Life Is Real',
    artist: 'Unknown',
    style: 'melodic trap',
    seconds: 159,
    src: file('my-life-is-real'),
    youtube: youtube('9mFhY1c7tD4'),
  },
  {
    id: 'patience',
    title: 'Patience',
    artist: 'Unknown',
    style: 'soft rock',
    seconds: 345,
    src: file('patience'),
    youtube: youtube('y4NlW43QNQQ'),
  },
  {
    id: 'sen-emne-4ort',
    title: 'SEN EMNE 4ORT',
    artist: 'Unknown',
    style: 'underground rap',
    seconds: 152,
    src: file('sen-emne-4ort'),
    youtube: youtube('Az2TG6LnNGs'),
  },
  {
    id: 'south-side-312',
    title: 'South Side 312',
    artist: 'Unknown',
    style: 'chicago drill',
    seconds: 166,
    src: file('south-side-312'),
    youtube: youtube('z6VBXUS5H8M'),
  },
  {
    id: 'posterity',
    title: 'Posterity',
    artist: 'Ludwig Göransson',
    style: 'orchestral score',
    seconds: 762,
    src: file('posterity'),
    youtube: youtube('ZE5zXLOyEOQ'),
  },
  {
    id: 'rockstar',
    title: 'rockstar',
    artist: 'Unknown',
    style: 'pop rap',
    seconds: 218,
    src: file('rockstar'),
    youtube: youtube('AaxFIY-cWH0'),
  },
  {
    id: 'que-carajos-quieres',
    title: '¿Qué Carajos Quieres Tú Ahora?',
    artist: 'Unknown',
    style: 'latin rock',
    seconds: 155,
    src: file('que-carajos-quieres'),
    youtube: youtube('VkMqO_DxH3o'),
  },
  {
    id: 'bumerang',
    title: 'Бумеранг',
    artist: 'Unknown',
    style: 'russian pop',
    seconds: 149,
    src: file('bumerang'),
    youtube: youtube('KQ6C4LUpwc8'),
  },
  {
    id: 'became-who-i-feared-most',
    title: 'Became Who I Feared Most',
    artist: 'Unknown',
    style: 'dark electronic',
    seconds: 344,
    src: file('became-who-i-feared-most'),
    youtube: youtube('AfeLWtMuHIQ'),
  },
  {
    id: 'epilogo',
    title: 'Epílogo',
    artist: 'Unknown',
    style: 'spanish ballad',
    seconds: 428,
    src: file('epilogo'),
    youtube: youtube('zAcwc6SEQ_o'),
  },
  {
    id: 'ni-de-oro-ni-de-goldfield',
    title: 'Ni de Oro Ni de Goldfield',
    artist: 'Unknown',
    style: 'spanish indie',
    seconds: 184,
    src: file('ni-de-oro-ni-de-goldfield'),
    youtube: youtube('SJVL1JTZXjQ'),
  },
];

/** The first-play record; must stay in the crate. */
export function introTrack(tracks: readonly Track[] = TRACKS): Track {
  const track = tracks.find((t) => t.id === INTRO_TRACK_ID);
  if (!track) throw new Error(`Intro track ${INTRO_TRACK_ID} is missing from the crate`);
  return track;
}

export function tourPlayedBefore(): boolean {
  try {
    return localStorage.getItem(TOUR_FIRST_PLAY_KEY) === '1';
  } catch {
    return false;
  }
}

export function markTourPlayed(): void {
  try {
    localStorage.setItem(TOUR_FIRST_PLAY_KEY, '1');
  } catch {
    /* Storage blocked — Posterity still plays this session; next visit is random. */
  }
}

/**
 * Posterity on the visitor's first play; random after that. See `pickTrack`.
 */
export function pickTourTrack(
  random: () => number = Math.random,
  except?: Track,
  tracks: readonly Track[] = TRACKS,
): Track {
  if (!tourPlayedBefore()) {
    markTourPlayed();
    return introTrack(tracks);
  }
  return pickTrack(random, except, tracks);
}

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
