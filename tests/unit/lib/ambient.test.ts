import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import {
  CHORD_SECONDS,
  MELODY,
  PROGRESSION,
  createAmbient,
  hz,
  type Ambient,
} from '../../../src/lib/ambient';

/* ------------------------------------------------------------------ *
 * A paper Web Audio: enough surface for the engine to build its graph,
 * nothing rendered. Every node remembers what it was connected to and every
 * param keeps a log of the automation it was given.
 * ------------------------------------------------------------------ */

class Param {
  log: string[] = [];
  constructor(public value: number) {}
  setValueAtTime(value: number, at: number) {
    this.value = value;
    this.log.push(`set ${value} @${at}`);
    return this;
  }
  linearRampToValueAtTime(value: number, at: number) {
    this.log.push(`lin ${value} @${at}`);
    return this;
  }
  exponentialRampToValueAtTime(value: number, at: number) {
    this.log.push(`exp ${value} @${at}`);
    return this;
  }
  cancelScheduledValues(at: number) {
    this.log.push(`cancel @${at}`);
    return this;
  }
}

class Node {
  outputs: unknown[] = [];
  connect<T>(target: T): T {
    this.outputs.push(target);
    return target;
  }
  disconnect() {
    this.outputs = [];
  }
}

class Source extends Node {
  startedAt?: number;
  stops = 0;
  onended: (() => void) | null = null;
  start(at = 0) {
    this.startedAt = at;
  }
  stop() {
    this.stops += 1;
  }
}

class Oscillator extends Source {
  type = 'sine';
  frequency = new Param(440);
  detune = new Param(0);
}

class BufferSource extends Source {
  buffer: Buffer | null = null;
  loop = false;
}

class Gain extends Node {
  gain = new Param(1);
}

class Filter extends Node {
  type = 'lowpass';
  frequency = new Param(350);
  Q = new Param(1);
}

class Panner extends Node {
  pan = new Param(0);
}

class Convolver extends Node {
  buffer: Buffer | null = null;
}

class Compressor extends Node {
  threshold = new Param(-24);
  knee = new Param(30);
  ratio = new Param(12);
  attack = new Param(0.003);
  release = new Param(0.25);
}

class Buffer {
  channels: Float32Array[];
  constructor(
    public numberOfChannels: number,
    public length: number,
    public sampleRate: number,
  ) {
    this.channels = Array.from({ length: numberOfChannels }, () => new Float32Array(length));
  }
  getChannelData(channel: number) {
    return this.channels[channel];
  }
}

class Context {
  currentTime = 0;
  /** Tiny on purpose: the hall is 4.5 s of samples and the test does not need 200k of them. */
  sampleRate = 200;
  destination = new Node();
  made: Node[] = [];
  buffers: Buffer[] = [];

  private make<T extends Node>(node: T): T {
    this.made.push(node);
    return node;
  }
  createGain() {
    return this.make(new Gain());
  }
  createOscillator() {
    return this.make(new Oscillator());
  }
  createBiquadFilter() {
    return this.make(new Filter());
  }
  createStereoPanner() {
    return this.make(new Panner());
  }
  createConvolver() {
    return this.make(new Convolver());
  }
  createDynamicsCompressor() {
    return this.make(new Compressor());
  }
  createBufferSource() {
    return this.make(new BufferSource());
  }
  createBuffer(channels: number, length: number, rate: number) {
    const buffer = new Buffer(channels, length, rate);
    this.buffers.push(buffer);
    return buffer;
  }

  oscillators() {
    return this.made.filter((n): n is Oscillator => n instanceof Oscillator);
  }
  sources() {
    return this.made.filter((n): n is Source => n instanceof Source);
  }
  only<T extends Node>(kind: new () => T): T {
    const found = this.made.filter((n): n is T => n instanceof kind);
    expect(found).toHaveLength(1);
    return found[0];
  }
}

const audio = (ctx: Context) => ctx as unknown as BaseAudioContext;

/** The struck-bar notes, by fundamental. Bells are the only sines above the pad. */
const bells = (ctx: Context) =>
  ctx
    .oscillators()
    .filter((o) => o.type === 'sine' && o.frequency.value > 500)
    // Each note is three partials made in a row: fundamental, octave, twelfth.
    .filter((_, i) => i % 3 === 0);

/** The sub sines, one per chord, in the order the chords were scheduled. */
const subs = (ctx: Context) =>
  ctx.oscillators().filter((o) => o.type === 'sine' && o.frequency.value > 30 && o.frequency.value < 120);

const pitchClass = (midi: number) => midi % 12;
const D_MAJOR = new Set([2, 4, 6, 7, 9, 11, 1]);
const D_PENTATONIC = new Set([2, 4, 6, 9, 11]);

describe('the score', () => {
  it('tunes to A440', () => {
    expect(hz(69)).toBe(440);
    expect(hz(81)).toBeCloseTo(880);
    expect(hz(57)).toBeCloseTo(220);
  });

  it('keeps every pad and sub note in D major', () => {
    for (const chord of PROGRESSION) {
      for (const midi of [...chord.pad, chord.sub]) {
        expect(D_MAJOR.has(pitchClass(midi)), `MIDI ${midi}`).toBe(true);
      }
    }
  });

  it('keeps the melody on the pentatonic, above the pad', () => {
    for (const midi of MELODY) expect(D_PENTATONIC.has(pitchClass(midi)), `MIDI ${midi}`).toBe(true);
    const padTop = Math.max(...PROGRESSION.flatMap((c) => c.pad));
    expect(Math.min(...MELODY)).toBeGreaterThan(padTop);
  });

  it('carries a voice from each chord into the next, and pedals F#4', () => {
    PROGRESSION.forEach((chord, i) => {
      const next = PROGRESSION[(i + 1) % PROGRESSION.length];
      const shared = chord.pad.filter((midi) => next.pad.includes(midi));
      expect(shared.length, `chord ${i}`).toBeGreaterThanOrEqual(1);
      expect(chord.pad).toContain(66);
    });
  });

  it('puts every sub at least an octave under its pad', () => {
    for (const chord of PROGRESSION) {
      expect(chord.sub).toBeLessThanOrEqual(Math.min(...chord.pad) - 12);
    }
  });
});

describe('createAmbient', () => {
  let ctx: Context;

  beforeEach(() => {
    vi.useFakeTimers();
    ctx = new Context();
  });
  afterEach(() => {
    vi.useRealTimers();
  });

  /** Advance both clocks — the context's and the timers' — by `seconds`. */
  const elapse = (seconds: number) => {
    ctx.currentTime += seconds;
    vi.advanceTimersByTime(seconds * 1000);
  };

  const still = (value: number) => ({ random: () => value });

  it('is silent until asked', () => {
    const ambient = createAmbient(audio(ctx), still(0.5));
    expect(ambient.playing).toBe(false);
    expect(ctx.made).toHaveLength(0);
  });

  it('builds the mix into the speakers and swells the first chord in', () => {
    const ambient = createAmbient(audio(ctx), still(0.5));
    ambient.start();
    expect(ambient.playing).toBe(true);

    const squash = ctx.only(Compressor);
    expect(squash.outputs).toContain(ctx.destination);
    expect(ctx.only(Convolver).buffer).toBe(ctx.buffers[0]);
    expect(ctx.only(BufferSource).loop).toBe(true);

    // Eight detuned saws — a pair per pad note — and the sub on the root.
    const saws = ctx.oscillators().filter((o) => o.type === 'sawtooth');
    expect(saws.map((o) => o.frequency.value)).toEqual(PROGRESSION[0].pad.flatMap((m) => [hz(m), hz(m)]));
    expect(saws.map((o) => o.detune.value)).toEqual([-6, 6, -6, 6, -6, 6, -6, 6]);
    expect(subs(ctx).map((o) => o.frequency.value)).toEqual([hz(PROGRESSION[0].sub)]);

    // Everything with a clock has been started, just ahead of now — and the
    // first note lands half a second in, so play is answered at once.
    for (const source of ctx.sources()) expect(source.startedAt).toBeGreaterThanOrEqual(0.05);
    expect(ctx.sources().filter((s) => s.startedAt === 0.05).length).toBe(ctx.sources().length - 3);
    expect(bells(ctx)[0].startedAt).toBeCloseTo(0.5);

    // The master comes up from nothing rather than clicking on.
    const [master] = ctx.made.filter((n): n is Gain => n instanceof Gain);
    expect(master.gain.log[0]).toBe('set 0 @0.05');
    expect(master.gain.log[1]).toMatch(/^lin 0\.85 @/);
  });

  it('routes to a given destination instead of the speakers', () => {
    const sink = new Node();
    createAmbient(audio(ctx), { destination: sink as unknown as AudioNode, random: () => 0.5 }).start();
    expect(ctx.only(Compressor).outputs).toEqual([sink]);
  });

  it('takes its chance from Math.random when none is given', () => {
    const ambient = createAmbient(audio(ctx));
    ambient.start();
    expect(ambient.playing).toBe(true);
    expect(bells(ctx).length).toBeGreaterThanOrEqual(1);
  });

  it('starts once', () => {
    const ambient = createAmbient(audio(ctx), still(0.5));
    ambient.start();
    const built = ctx.made.length;
    ambient.start();
    expect(ctx.made).toHaveLength(built);
  });

  it('walks the chord cycle on time and wraps around', () => {
    createAmbient(audio(ctx), still(0.5)).start();
    expect(subs(ctx)).toHaveLength(1);

    // Not yet: the second chord is due at 14.05 and the scheduler looks 1.2 s ahead.
    elapse(12);
    expect(subs(ctx)).toHaveLength(1);

    elapse(1.2);
    expect(subs(ctx)).toHaveLength(2);
    expect(subs(ctx)[1].startedAt).toBeCloseTo(CHORD_SECONDS + 0.05);

    // A long stall (a background tab) schedules everything that is due, in order.
    elapse(CHORD_SECONDS * 3);
    expect(subs(ctx).map((o) => o.frequency.value)).toEqual(
      [0, 1, 2, 3, 0].map((i) => hz(PROGRESSION[i].sub)),
    );
  });

  it('lets the melody climb in steps and hold at the top', () => {
    // Chance pinned high: every move is +2, never a grace note, the longest gap.
    createAmbient(audio(ctx), still(0.999)).start();
    expect(bells(ctx).map((o) => o.frequency.value)).toEqual([hz(MELODY[5])]);
    expect(bells(ctx)[0].startedAt).toBeCloseTo(0.5);

    elapse(5);
    elapse(5);
    expect(bells(ctx).map((o) => o.frequency.value)).toEqual([hz(MELODY[5]), hz(MELODY[7]), hz(MELODY[7])]);
  });

  it('lets the melody fall in steps, hold at the bottom, and add grace notes', () => {
    // Chance pinned low: every move is -2, always a grace note a step up, the shortest gap.
    createAmbient(audio(ctx), still(0)).start();
    expect(bells(ctx).map((o) => o.frequency.value)).toEqual([hz(MELODY[1]), hz(MELODY[2])]);
    const [note, grace] = bells(ctx);
    expect(grace.startedAt! - note.startedAt!).toBeCloseTo(0.34);

    elapse(2);
    expect(bells(ctx).map((o) => o.frequency.value)).toEqual(
      [1, 2, 0, 1].map((i) => hz(MELODY[i])),
    );
    // The grace note is the quieter of the pair.
    const strikes = ctx.made.filter((n): n is Gain => n instanceof Gain && n.gain.log[0] === `set 0 @${note.startedAt}`);
    expect(strikes.length).toBeGreaterThan(0);
  });

  it('fades out, then frees every node', () => {
    const ambient = createAmbient(audio(ctx), still(0.5));
    ambient.start();
    const [master] = ctx.made.filter((n): n is Gain => n instanceof Gain);
    const breath = ctx.only(BufferSource);
    elapse(3);

    ambient.stop();
    expect(ambient.playing).toBe(false);
    expect(master.gain.log.slice(-3)).toEqual(['cancel @3', 'set 0 @3', 'lin 0 @4.6']);
    // Still sounding through the fade…
    expect(breath.stops).toBe(0);
    expect(master.outputs).toHaveLength(1);

    elapse(1.7);
    // …then silenced and cut loose.
    expect(breath.stops).toBe(1);
    expect(master.outputs).toHaveLength(0);

    // And the scheduler is gone: nothing new gets built, however long we wait.
    const built = ctx.made.length;
    elapse(CHORD_SECONDS * 2);
    expect(ctx.made).toHaveLength(built);
  });

  it('stops only once', () => {
    const ambient = createAmbient(audio(ctx), still(0.5));
    ambient.start();
    ambient.stop(0);
    const [master] = ctx.made.filter((n): n is Gain => n instanceof Gain);
    const entries = master.gain.log.length;
    ambient.stop(0);
    expect(master.gain.log).toHaveLength(entries);
  });

  it('forgets a source once it has ended by itself', () => {
    const ambient = createAmbient(audio(ctx), still(0.5));
    ambient.start();
    const [gone, kept] = ctx.oscillators();
    gone.onended?.();

    ambient.stop(0);
    elapse(0.1);
    expect(kept.stops).toBe(2); // once when scheduled, once at teardown
    expect(gone.stops).toBe(1); // scheduled only; it had already ended
  });

  it('reuses the hall and the air between plays', () => {
    const ambient: Ambient = createAmbient(audio(ctx), still(0.5));
    ambient.start();
    expect(ctx.buffers).toHaveLength(2);
    ambient.stop(0);
    elapse(0.1);
    ambient.start();
    expect(ctx.buffers).toHaveLength(2);
    const rooms = ctx.made.filter((n): n is Convolver => n instanceof Convolver);
    expect(rooms).toHaveLength(2);
    expect(rooms[1].buffer).toBe(ctx.buffers[0]);
  });

  it('shapes the hall as a decaying tail at unit energy', () => {
    createAmbient(audio(ctx), still(0.7)).start();
    const hall = ctx.buffers[0];
    expect(hall.numberOfChannels).toBe(2);
    expect(hall.length).toBe(900);
    for (const data of hall.channels) {
      let energy = 0;
      for (const sample of data) energy += sample * sample;
      expect(energy).toBeCloseTo(1, 5);
      expect(Math.abs(data[0]!)).toBeGreaterThan(Math.abs(data[data.length - 1]!));
    }
  });
});
