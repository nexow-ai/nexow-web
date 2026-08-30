/**
 * The scroll tour's soundtrack — a slow, quiet ambient piece in D.
 *
 * Nothing is streamed or bundled. The music is synthesised on the spot with the
 * Web Audio API, so it ships no bytes, never repeats exactly and is nobody's
 * licence. It is written to sit under the page, not in front of it: one key,
 * no pulse, nothing above a murmur.
 *
 * Four layers:
 *   pad     eight detuned saws behind a slowly breathing lowpass, walking a
 *           four-chord cycle; each chord swells in over the last, so there is
 *           never a hard change;
 *   sub     a sine an octave under the pad's root, felt more than heard;
 *   melody  a struck-bar tone picking its way along the major pentatonic —
 *           mostly steps, the odd leap, a grace note now and then — sparse
 *           enough to read as detail rather than tune;
 *   air     a breath of band-passed noise, barely there, so the gaps between
 *           notes are a room and not a void.
 * All of it passes through one generated hall and one soft compressor.
 *
 * `createAmbient` builds nothing until `start()`, and `stop()` fades and frees
 * every node, so a page that never plays the tour pays for none of this. The
 * context is the caller's: browsers only unmute a context born inside a user
 * gesture, and which gesture that is belongs to the page, not to this file.
 */

/** One chord of the cycle: MIDI notes for the pad and one for the sub. */
export interface Chord {
  readonly pad: readonly number[];
  readonly sub: number;
}

/** How long each chord holds before the next one swells in over it. */
export const CHORD_SECONDS = 14;

/**
 * The cycle, in D. F#4 rides on top of all four as a pedal and every chord
 * keeps a second voice from the one before, so a crossfade moves two or three
 * notes and never lurches. Voiced low enough to sit under the melody and high
 * enough to stay out of the sub's way.
 */
export const PROGRESSION: readonly Chord[] = [
  { pad: [50, 57, 61, 66], sub: 38 }, // D maj7
  { pad: [47, 57, 62, 66], sub: 35 }, // B m7
  { pad: [55, 59, 62, 66], sub: 43 }, // G maj7
  { pad: [45, 52, 59, 66], sub: 33 }, // A add9
];

/**
 * D major pentatonic, two octaves above the pad. No semitones anywhere in it,
 * so any note lands on any chord of the cycle.
 */
export const MELODY: readonly number[] = [74, 76, 78, 81, 83, 86, 88, 90];

/** Equal temperament, A4 = 440. */
export function hz(midi: number): number {
  return 440 * 2 ** ((midi - 69) / 12);
}

export interface AmbientOptions {
  /** Where the mix goes. The context's speakers unless told otherwise. */
  destination?: AudioNode;
  /** The source of chance for the melody. Injected so a test can hold it still. */
  random?: () => number;
}

export interface Ambient {
  readonly playing: boolean;
  /** Fade the piece in from silence. A no-op while it is already playing. */
  start(): void;
  /** Fade out over `seconds`, then free every node. A no-op while silent. */
  stop(seconds?: number): void;
}

/* ---- the mix, in linear gain ---- */
const MASTER = 0.7;
const DRY = 0.75;
const WET = 0.5;
const PAD_VOICE = 0.045;
const SUB = 0.16;
const AIR = 0.09;
const NOTE_FLOOR = 0.22;
const NOTE_SPAN = 0.28;
const GRACE_CHANCE = 0.22;

/* ---- time, in seconds ---- */
const FADE_IN = 2.2;
const FADE_OUT = 1.6;
const PAD_ATTACK = 3.6;
const PAD_RELEASE = 5.2;
const FIRST_NOTE = 0.45;
const NOTE_GAP_MIN = 1.4;
const NOTE_GAP_SPAN = 3.2;
const GRACE_LATE = 0.34;
const HALL_SECONDS = 4.5;
const AIR_SECONDS = 2;
/** How far ahead of the clock the scheduler stays, and how often it looks. */
const LOOKAHEAD = 1.2;
const TICK_MS = 300;

/** Fundamental, octave, a slightly sharp twelfth: a struck bar, not a sine. */
const BAR: readonly (readonly [ratio: number, level: number, decay: number])[] = [
  [1, 1, 3.2],
  [2, 0.22, 1.6],
  [3.01, 0.07, 0.7],
];

interface Tables {
  hall: AudioBuffer;
  air: AudioBuffer;
}

interface Session {
  master: GainNode;
  dry: GainNode;
  wet: GainNode;
  /** Everything with a clock, so a stop can silence what has not ended by itself. */
  sources: Set<AudioScheduledSourceNode>;
  timer: ReturnType<typeof setInterval>;
  chordAt: number;
  chord: number;
  noteAt: number;
  /** Where the melody last landed, as an index into `MELODY`. */
  step: number;
}

/** The generated buffers, once per context: they are the same piece of room every time. */
const tables = new WeakMap<BaseAudioContext, Tables>();

/** A hall that does not exist: decaying noise that loses its highs as it fades, at unit energy. */
function makeHall(ctx: BaseAudioContext, random: () => number): AudioBuffer {
  const length = Math.floor(ctx.sampleRate * HALL_SECONDS);
  const buffer = ctx.createBuffer(2, length, ctx.sampleRate);
  for (let channel = 0; channel < buffer.numberOfChannels; channel++) {
    const data = buffer.getChannelData(channel);
    let smooth = 0;
    let energy = 0;
    for (let i = 0; i < length; i++) {
      const tail = (1 - i / length) ** 3.4;
      // A one-pole lowpass that closes as the tail dies.
      smooth += (random() * 2 - 1 - smooth) * (0.12 + 0.7 * tail);
      data[i] = smooth * tail;
      energy += data[i] * data[i];
    }
    // Unit energy, so the wet level below means what it says.
    const scale = 1 / Math.sqrt(energy);
    for (let i = 0; i < length; i++) data[i] *= scale;
  }
  return buffer;
}

/** Two seconds of pinkish noise, looped for the air layer. */
function makeAir(ctx: BaseAudioContext, random: () => number): AudioBuffer {
  const length = Math.floor(ctx.sampleRate * AIR_SECONDS);
  const buffer = ctx.createBuffer(1, length, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  let smooth = 0;
  for (let i = 0; i < length; i++) {
    smooth += (random() * 2 - 1 - smooth) * 0.08;
    data[i] = smooth;
  }
  return buffer;
}

function tablesFor(ctx: BaseAudioContext, random: () => number): Tables {
  const cached = tables.get(ctx);
  if (cached) return cached;
  const made = { hall: makeHall(ctx, random), air: makeAir(ctx, random) };
  tables.set(ctx, made);
  return made;
}

export function createAmbient(ctx: BaseAudioContext, options: AmbientOptions = {}): Ambient {
  const out = options.destination ?? ctx.destination;
  const random = options.random ?? Math.random;
  let current: Session | null = null;

  const keep = (s: Session, source: AudioScheduledSourceNode) => {
    s.sources.add(source);
    source.onended = () => s.sources.delete(source);
  };

  /** Swell in, hold, and dissolve while the next one arrives. */
  const swell = (gain: AudioParam, at: number, level: number) => {
    gain.setValueAtTime(0, at);
    gain.linearRampToValueAtTime(level, at + PAD_ATTACK);
    gain.setValueAtTime(level, at + CHORD_SECONDS);
    gain.linearRampToValueAtTime(0, at + CHORD_SECONDS + PAD_RELEASE);
  };

  /** A slow sine into an AudioParam: the breath on a filter. */
  const breathe = (s: Session, param: AudioParam, rate: number, depth: number, at: number, until: number) => {
    const lfo = ctx.createOscillator();
    lfo.frequency.value = rate;
    const amount = ctx.createGain();
    amount.gain.value = depth;
    lfo.connect(amount);
    amount.connect(param);
    lfo.start(at);
    lfo.stop(until);
    keep(s, lfo);
  };

  const playChord = (s: Session, chord: Chord, at: number) => {
    const until = at + CHORD_SECONDS + PAD_RELEASE;

    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 520;
    filter.Q.value = 0.7;
    breathe(s, filter.frequency, 0.06, 260, at, until);

    const level = ctx.createGain();
    swell(level.gain, at, 1);
    filter.connect(level);
    level.connect(s.dry);
    level.connect(s.wet);

    for (const midi of chord.pad) {
      for (const cents of [-6, 6]) {
        const osc = ctx.createOscillator();
        osc.type = 'sawtooth';
        osc.frequency.value = hz(midi);
        osc.detune.value = cents;
        const voice = ctx.createGain();
        voice.gain.value = PAD_VOICE;
        osc.connect(voice).connect(filter);
        osc.start(at);
        osc.stop(until);
        keep(s, osc);
      }
    }

    const sub = ctx.createOscillator();
    sub.frequency.value = hz(chord.sub);
    const weight = ctx.createGain();
    swell(weight.gain, at, SUB);
    sub.connect(weight).connect(s.dry);
    sub.start(at);
    sub.stop(until);
    keep(s, sub);
  };

  const ring = (s: Session, midi: number, at: number, velocity: number, pan: number) => {
    const fundamental = hz(midi);
    const panner = ctx.createStereoPanner();
    panner.pan.value = pan;
    panner.connect(s.dry);
    panner.connect(s.wet);
    for (const [ratio, level, decay] of BAR) {
      const osc = ctx.createOscillator();
      osc.frequency.value = fundamental * ratio;
      const strike = ctx.createGain();
      strike.gain.setValueAtTime(0, at);
      strike.gain.linearRampToValueAtTime(velocity * level, at + 0.012);
      strike.gain.exponentialRampToValueAtTime(0.0004, at + decay);
      osc.connect(strike).connect(panner);
      osc.start(at);
      osc.stop(at + decay + 0.05);
      keep(s, osc);
    }
  };

  /** One melody note: mostly a step from the last, the odd leap, sometimes a grace note after. */
  const wander = (s: Session, at: number) => {
    const move = Math.round((random() - 0.5) * 4);
    s.step = Math.min(MELODY.length - 1, Math.max(0, s.step + move));
    const velocity = NOTE_FLOOR + random() * NOTE_SPAN;
    ring(s, MELODY[s.step], at, velocity, (random() - 0.5) * 0.9);
    if (random() < GRACE_CHANCE) {
      const above = MELODY[Math.min(MELODY.length - 1, s.step + 1)];
      ring(s, above, at + GRACE_LATE, velocity * 0.55, (random() - 0.5) * 0.9);
    }
  };

  const air = (s: Session, buffer: AudioBuffer, at: number) => {
    const source = ctx.createBufferSource();
    source.buffer = buffer;
    source.loop = true;
    const band = ctx.createBiquadFilter();
    band.type = 'bandpass';
    band.frequency.value = 760;
    band.Q.value = 0.9;
    // Runs for as long as the piece does; the stop is the session's, below.
    breathe(s, band.frequency, 0.045, 380, at, Number.MAX_SAFE_INTEGER);
    const level = ctx.createGain();
    level.gain.value = AIR;
    source.connect(band).connect(level).connect(s.wet);
    source.start(at);
    keep(s, source);
  };

  /** Keep the next `LOOKAHEAD` seconds scheduled. Cheap: most calls do nothing. */
  const tick = (s: Session) => {
    const horizon = ctx.currentTime + LOOKAHEAD;
    while (s.chordAt < horizon) {
      playChord(s, PROGRESSION[s.chord % PROGRESSION.length], s.chordAt);
      s.chord += 1;
      s.chordAt += CHORD_SECONDS;
    }
    while (s.noteAt < horizon) {
      wander(s, s.noteAt);
      s.noteAt += NOTE_GAP_MIN + random() * NOTE_GAP_SPAN;
    }
  };

  const start = () => {
    if (current) return;
    const { hall, air: breath } = tablesFor(ctx, random);

    const master = ctx.createGain();
    const squash = ctx.createDynamicsCompressor();
    squash.threshold.value = -20;
    squash.knee.value = 16;
    squash.ratio.value = 2.5;
    squash.attack.value = 0.02;
    squash.release.value = 0.5;
    master.connect(squash).connect(out);

    const dry = ctx.createGain();
    dry.gain.value = DRY;
    dry.connect(master);
    const wet = ctx.createGain();
    wet.gain.value = WET;
    const room = ctx.createConvolver();
    room.buffer = hall;
    wet.connect(room).connect(master);

    const at = ctx.currentTime + 0.05;
    master.gain.setValueAtTime(0, at);
    master.gain.linearRampToValueAtTime(MASTER, at + FADE_IN);

    const s: Session = {
      master,
      dry,
      wet,
      sources: new Set(),
      timer: 0 as unknown as ReturnType<typeof setInterval>,
      chordAt: at,
      chord: 0,
      noteAt: at + FIRST_NOTE,
      step: 3,
    };
    air(s, breath, at);
    tick(s);
    s.timer = setInterval(() => tick(s), TICK_MS);
    current = s;
  };

  const stop = (seconds = FADE_OUT) => {
    const s = current;
    if (!s) return;
    current = null;
    clearInterval(s.timer);
    const at = ctx.currentTime;
    const { gain } = s.master;
    gain.cancelScheduledValues(at);
    gain.setValueAtTime(gain.value, at);
    gain.linearRampToValueAtTime(0, at + seconds);
    setTimeout(() => {
      for (const source of s.sources) source.stop();
      s.master.disconnect();
    }, seconds * 1000 + 80);
  };

  return {
    get playing() {
      return current !== null;
    },
    start,
    stop,
  };
}
