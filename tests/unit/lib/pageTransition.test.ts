import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { PAGE_ORDER } from '../../../src/i18n/page-order';
import { slideDirection, slidePages } from '../../../src/lib/pageTransition';

const GLOBAL_CSS = fs.readFileSync(
  path.join(process.cwd(), 'src/styles/global.css'),
  'utf8',
);

const animations = [
  slidePages.forwards.old,
  slidePages.forwards.new,
  slidePages.backwards.old,
  slidePages.backwards.new,
].flat();

describe('slidePages', () => {
  it('names a distinct keyframe for each leg of the journey', () => {
    const names = animations.map((a) => a.name);
    expect(new Set(names).size).toBe(4);
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

  it('treats a language switch on the same page as a step forwards', () => {
    // Both URLs reduce to the same canonical route; there is no axis to mirror.
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
