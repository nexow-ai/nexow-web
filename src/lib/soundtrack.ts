/**
 * The scroll tour's record crate.
 *
 * Every press of play pulls one track from here at random — never the one
 * just played — so the tour has a different soundtrack each time: one visit
 * gets a deep-house piece, the next a string quartet, the next a hard-techno
 * record, the next a guest cut from the crate, the next the synthesised ambient
 * in D. The crate is a mood board more than a playlist.
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
 * and append an entry without `source`.
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
  {
    id: 'acho-pr',
    title: 'ACHO PR',
    artist: 'ACHO',
    style: 'latin trap',
    seconds: 359,
    src: file('acho-pr'),
  },
  {
    id: 'asimetria',
    title: 'Asimetría',
    artist: 'Zeballos',
    style: 'argentina trap',
    seconds: 178,
    src: file('asimetria'),
  },
  {
    id: 'beautiful-things',
    title: 'Beautiful Things',
    artist: 'Benson Boone',
    style: 'indie pop',
    seconds: 192,
    src: file('beautiful-things'),
  },
  {
    id: 'the-animals',
    title: 'The Animals',
    artist: 'Cecilio G.',
    style: 'spanish rap',
    seconds: 227,
    src: file('the-animals'),
  },
  {
    id: 'road-to-zion',
    title: 'Road To Zion',
    artist: 'Damian Marley (EFIX & XKAEM)',
    style: 'reggae cover',
    seconds: 352,
    src: file('road-to-zion'),
  },
  {
    id: 'gfy',
    title: 'GFY',
    artist: 'Dennis Lloyd',
    style: 'indie electronic',
    seconds: 224,
    src: file('gfy'),
  },
  {
    id: 'last-supper',
    title: 'Last Supper',
    artist: 'D Smoke',
    style: 'conscious hip hop',
    seconds: 225,
    src: file('last-supper'),
  },
  {
    id: 'branzino',
    title: 'Branzino',
    artist: 'Eladio Carrión, Big Sean',
    style: 'latin urban',
    seconds: 262,
    src: file('branzino'),
  },
  {
    id: 'que-cojones',
    title: 'Que Cojones',
    artist: 'Eladio Carrión',
    style: 'reggaeton',
    seconds: 158,
    src: file('que-cojones'),
  },
  {
    id: 'si-lo-puedes-sonar',
    title: 'Si Lo Puedes Soñar',
    artist: 'Eladio Carrión',
    style: 'latin anthem',
    seconds: 197,
    src: file('si-lo-puedes-sonar'),
  },
  {
    id: 'mockingbird',
    title: 'Mockingbird',
    artist: 'Eminem',
    style: 'storytelling rap',
    seconds: 257,
    src: file('mockingbird'),
  },
  {
    id: 'dont-tell-your-dreams',
    title: "Don't Tell Your Dreams",
    artist: 'LOVIXX, STOSLIV',
    style: 'dream pop',
    seconds: 141,
    src: file('dont-tell-your-dreams'),
  },
  {
    id: 'bittersweet-symphony',
    title: 'Bittersweet Symphony',
    artist: 'Ren',
    style: 'alt cover',
    seconds: 164,
    src: file('bittersweet-symphony'),
  },
  {
    id: 'territory',
    title: 'Territory',
    artist: 'The Blaze',
    style: 'french electronic',
    seconds: 337,
    src: file('territory'),
  },
  {
    id: 'another-love',
    title: 'Another Love',
    artist: 'Tom Odell (Zwette Edit)',
    style: 'indie remix',
    seconds: 393,
    src: file('another-love'),
  },
  {
    id: 'habits',
    title: 'Habits (Stay High)',
    artist: 'Tove Lo (Hippie Sabotage Remix)',
    style: 'electropop remix',
    seconds: 263,
    src: file('habits'),
  },
  {
    id: 'bzrp-5966',
    title: 'BZRP Music Sessions #59',
    artist: 'Natanael Cano',
    style: 'corridos tumbados',
    seconds: 339,
    src: file('bzrp-5966'),
  },
  {
    id: 'adentro',
    title: 'Adentro',
    artist: 'Unknown',
    style: 'deep latin',
    seconds: 292,
    src: file('adentro'),
  },
  {
    id: 'a-million-on-my-soul',
    title: 'A Million on My Soul',
    artist: 'Alexiane',
    style: 'cinematic soul',
    seconds: 180,
    src: file('a-million-on-my-soul'),
  },
  {
    id: 'cancion-de-volteo',
    title: 'Canción de Volteo',
    artist: 'Unknown',
    style: 'latin folk',
    seconds: 203,
    src: file('cancion-de-volteo'),
  },
  {
    id: 'daylight',
    title: 'Daylight',
    artist: 'David Kushner',
    style: 'folk pop',
    seconds: 229,
    src: file('daylight'),
  },
  {
    id: 'help-me-lose-my-mind',
    title: 'Help Me Lose My Mind',
    artist: 'Disclosure (Mazde Remix)',
    style: 'UK garage remix',
    seconds: 236,
    src: file('help-me-lose-my-mind'),
  },
  {
    id: 'dream-big',
    title: 'Dream Big',
    artist: 'Unknown',
    style: 'motivational ambient',
    seconds: 96,
    src: file('dream-big'),
  },
  {
    id: 'grim-reaper',
    title: 'Grim Reaper',
    artist: 'Unknown',
    style: 'dark hip hop',
    seconds: 125,
    src: file('grim-reaper'),
  },
  {
    id: 'interstellar-variations',
    title: 'Interstellar Variations',
    artist: "Jacob's Piano",
    style: 'piano cinematic',
    seconds: 288,
    src: file('interstellar-variations'),
  },
  {
    id: 'a-yo',
    title: 'A-YO',
    artist: 'Method Man, Redman',
    style: 'east coast rap',
    seconds: 271,
    src: file('a-yo'),
  },
  {
    id: 'malo-muchacho',
    title: 'Malo Muchacho',
    artist: 'Mucho Muchacho',
    style: 'spanish hip hop',
    seconds: 213,
    src: file('malo-muchacho'),
  },
  {
    id: 'my-life-is-real',
    title: 'My Life Is Real',
    artist: 'Unknown',
    style: 'melodic trap',
    seconds: 159,
    src: file('my-life-is-real'),
  },
  {
    id: 'patience',
    title: 'Patience',
    artist: 'Unknown',
    style: 'soft rock',
    seconds: 345,
    src: file('patience'),
  },
  {
    id: 'sen-emne-4ort',
    title: 'SEN EMNE 4ORT',
    artist: 'Unknown',
    style: 'underground rap',
    seconds: 152,
    src: file('sen-emne-4ort'),
  },
  {
    id: 'south-side-312',
    title: 'South Side 312',
    artist: 'Unknown',
    style: 'chicago drill',
    seconds: 166,
    src: file('south-side-312'),
  },
  {
    id: 'posterity',
    title: 'Posterity',
    artist: 'Ludwig Göransson',
    style: 'orchestral score',
    seconds: 762,
    src: file('posterity'),
  },
  {
    id: 'rockstar',
    title: 'rockstar',
    artist: 'Unknown',
    style: 'pop rap',
    seconds: 218,
    src: file('rockstar'),
  },
  {
    id: 'que-carajos-quieres',
    title: '¿Qué Carajos Quieres Tú Ahora?',
    artist: 'Unknown',
    style: 'latin rock',
    seconds: 155,
    src: file('que-carajos-quieres'),
  },
  {
    id: 'bumerang',
    title: 'Бумеранг',
    artist: 'Unknown',
    style: 'russian pop',
    seconds: 149,
    src: file('bumerang'),
  },
  {
    id: 'became-who-i-feared-most',
    title: 'Became Who I Feared Most',
    artist: 'Unknown',
    style: 'dark electronic',
    seconds: 344,
    src: file('became-who-i-feared-most'),
  },
  {
    id: 'epilogo',
    title: 'Epílogo',
    artist: 'Unknown',
    style: 'spanish ballad',
    seconds: 428,
    src: file('epilogo'),
  },
  {
    id: 'ni-de-oro-ni-de-goldfield',
    title: 'Ni de Oro Ni de Goldfield',
    artist: 'Unknown',
    style: 'spanish indie',
    seconds: 184,
    src: file('ni-de-oro-ni-de-goldfield'),
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
