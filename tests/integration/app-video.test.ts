import { mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import AppVideo from '../../src/components/AppVideo.astro';
import { render } from '../helpers/render';

const SLUG = 'zz-test-clip';
const FILES = ['mp4', 'webm'].map((ext) => `public/video/${SLUG}.${ext}`);

describe('AppVideo', () => {
  it('shows an honest placeholder, not a broken player, before the clip is encoded', async () => {
    const html = await render(AppVideo, '/', { props: { slug: 'zz-missing', alt: 'Demo' } });
    expect(html).not.toContain('<video');
    expect(html).toContain('Recording coming soon');
    expect(html).toContain('aria-label="Demo"');
  });

  describe('with an encoded clip', () => {
    beforeAll(() => {
      mkdirSync('public/video', { recursive: true });
      for (const f of FILES) writeFileSync(f, '');
    });
    afterAll(() => {
      for (const f of FILES) rmSync(f, { force: true });
    });

    it('renders a muted, inline, lazy video with a poster and explicit size', async () => {
      const html = await render(AppVideo, '/', { props: { slug: SLUG, alt: 'Demo clip' } });
      expect(html).toMatch(/<video[^>]*\smuted/);
      expect(html).toMatch(/<video[^>]*\sloop/);
      expect(html).toMatch(/<video[^>]*\splaysinline/);
      expect(html).toContain('preload="none"');
      expect(html).toContain(`poster="/video/${SLUG}.webp"`);
      expect(html).toMatch(/<video[^>]*\swidth="1600"[^>]*\sheight="1000"/);
      expect(html).toContain('aria-label="Demo clip"');
      expect(html).toContain(`/video/${SLUG}.webm`);
      expect(html).toContain(`/video/${SLUG}.mp4`);
      expect(html).not.toContain('autoplay');
    });

    it('offers a pause control and uses phone proportions for the phone frame', async () => {
      const html = await render(AppVideo, '/', {
        props: { slug: SLUG, alt: 'Phone', frame: 'phone' },
      });
      expect(html).toContain('data-app-video-toggle');
      expect(html).toMatch(/<video[^>]*\swidth="540"[^>]*\sheight="1170"/);
    });

    it('preloads metadata only for the eager hero clip', async () => {
      const html = await render(AppVideo, '/', { props: { slug: SLUG, alt: 'Hero', eager: true } });
      expect(html).toContain('preload="metadata"');
    });
  });
});
