import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { PAGE_ORDER } from '../../../src/i18n/page-order';
import { languages, type Lang } from '../../../src/i18n/config';
import {
  langDirection,
  navigationDirection,
  slideDirection,
  slidePages,
} from '../../../src/lib/pageTransition';

const GLOBAL_CSS = fs.readFileSync(
  path.join(process.cwd(), 'src/styles/global.css'),
  'utf8',
);

const animations = [
  slidePages.forwards.old,
  slidePages.forwards.new,
  slidePages.backwards.old,
  slidePages.backwards.new,
  slidePages.down.old,
  slidePages.down.new,
  slidePages.up.old,
  slidePages.up.new,
].flat();

describe('slidePages', () => {
  it('names a distinct keyframe for each leg of the journey', () => {
    const names = animations.map((a) => a.name);
    expect(new Set(names).size).toBe(8);
  });

  it('only names keyframes global.css actually defines', () => {
    for (const { name } of animations) {
      expect(GLOBAL_CSS, name).toContain(`@keyframes ${name}`);
    }
  });

  it('runs every leg on the same duration and curve, so the two pages travel together', () => {
    for (const step of animations) {
      expect(step.duration).toBe(animations[0].duration);
      expect(step.easing).toBe(animations[0].easing);
      // Without `both` the page snaps to its resting place before it moves.
      expect(step.fillMode).toBe('both');
    }
  });

  it('sends the outgoing page opposite the incoming one', () => {
    expect(slidePages.forwards.old).not.toEqual(slidePages.backwards.old);
    expect(slidePages.forwards.new).not.toEqual(slidePages.backwards.new);
    expect(slidePages.down.old).not.toEqual(slidePages.up.old);
    expect(slidePages.down.new).not.toEqual(slidePages.up.new);
  });

  it('runs the language legs on the vertical axis and the page legs on the inline one', () => {
    const keyframes = (name: string) => {
      const match = GLOBAL_CSS.match(new RegExp(`@keyframes ${name} \\{([^}]*\\})\\s*\\}`));
      expect(match, name).not.toBeNull();
      return match![1];
    };
    for (const pair of [slidePages.down, slidePages.up]) {
      for (const step of [pair.old, pair.new].flat()) {
        expect(keyframes(step.name)).toMatch(/translate3d\(0, -?100vh, 0\)/);
      }
    }
    for (const pair of [slidePages.forwards, slidePages.backwards]) {
      for (const step of [pair.old, pair.new].flat()) {
        expect(keyframes(step.name)).toMatch(/translate3d\(calc\(-?100% \* var\(--page-slide\)\), 0, 0\)/);
      }
    }
  });
});

describe('langDirection', () => {
  const order = Object.keys(languages) as Lang[];

  it('travels down to a locale listed below the current one, up to one above', () => {
    expect(langDirection('en', 'es')).toBe('down');
    expect(langDirection('es', 'en')).toBe('up');
    expect(langDirection('en', 'tr')).toBe('down');
    expect(langDirection('tr', 'en')).toBe('up');
  });

  it('agrees with the order the picker lists every neighbouring pair in', () => {
    for (let i = 1; i < order.length; i++) {
      const [above, below] = [order[i - 1], order[i]];
      expect(langDirection(above, below), `${above} → ${below}`).toBe('down');
      expect(langDirection(below, above), `${below} → ${above}`).toBe('up');
    }
  });

  it('has nothing to say when the locale stays put', () => {
    expect(langDirection('en', 'en')).toBeUndefined();
    expect(langDirection('ja', 'ja')).toBeUndefined();
  });
});

describe('navigationDirection', () => {
  const url = (path: string) => new URL(path, 'https://nexow.ai');

  it('slides a language switch vertically, by picker position', () => {
    expect(navigationDirection(url('/features'), url('/es/features'))).toBe('down');
    expect(navigationDirection(url('/es/features'), url('/features'))).toBe('up');
    expect(navigationDirection(url('/ja/'), url('/de/'))).toBe('up');
    expect(navigationDirection(url('/de/'), url('/ja/'))).toBe('down');
  });

  it('lets the locale win when the switch also lands on a different route', () => {
    // A page with no translation sends the picker to its section index.
    expect(navigationDirection(url('/blog/nexow-launch'), url('/fr/blog'))).toBe('down');
    expect(navigationDirection(url('/fr/blog'), url('/blog/nexow-launch'))).toBe('up');
  });

  it('otherwise travels the strip, in whichever locale', () => {
    expect(navigationDirection(url('/'), url('/features'))).toBe('forward');
    expect(navigationDirection(url('/es/features'), url('/es/'))).toBe('back');
    expect(navigationDirection(url('/ar/plans/'), url('/ar/blog/'))).toBe('forward');
  });

  it('reads a reload of the same page as a step forwards', () => {
    expect(navigationDirection(url('/features'), url('/features'))).toBe('forward');
  });
});

describe('slideDirection', () => {
  it('moves forwards along the tour', () => {
    expect(slideDirection('/', '/features')).toBe('forward');
    expect(slideDirection('/features', '/community')).toBe('forward');
    expect(slideDirection('/', '/terms')).toBe('forward');
  });

  it('moves back against it, however far the jump', () => {
    expect(slideDirection('/features', '/')).toBe('back');
    expect(slideDirection('/community', '/features')).toBe('back');
    expect(slideDirection('/cookies', '/')).toBe('back');
  });

  it('agrees with the order every neighbouring pair is listed in', () => {
    for (let i = 1; i < PAGE_ORDER.length; i++) {
      const [prev, next] = [PAGE_ORDER[i - 1], PAGE_ORDER[i]];
      expect(slideDirection(prev, next), `${prev} → ${next}`).toBe('forward');
      expect(slideDirection(next, prev), `${next} → ${prev}`).toBe('back');
    }
  });

  it('ignores trailing slashes on either end', () => {
    expect(slideDirection('/features/', '/')).toBe('back');
    expect(slideDirection('/', '/features/')).toBe('forward');
    expect(slideDirection('/community/', '/features/')).toBe('back');
  });

  it('treats the same route on both ends as a step forwards', () => {
    // Nothing on the strip to mirror; `navigationDirection` handles the
    // language switch that usually produces this before it gets here.
    expect(slideDirection('/features', '/features')).toBe('forward');
  });

  it('reads climbing back up a path as going back', () => {
    expect(slideDirection('/blog/nexow-launch', '/blog')).toBe('back');
    expect(slideDirection('/blog/nexow-launch', '/')).toBe('back');
  });

  it('reads everything else off the tour as forwards', () => {
    expect(slideDirection('/blog', '/blog/nexow-launch')).toBe('forward');
    expect(slideDirection('/blog/one', '/blog/two')).toBe('forward');
    expect(slideDirection('/', '/blog/nexow-launch')).toBe('forward');
    // A sibling that merely shares a prefix is not a parent.
    expect(slideDirection('/blog-archive', '/blog')).toBe('forward');
  });
});
