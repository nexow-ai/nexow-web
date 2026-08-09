import { describe, expect, it } from 'vitest';
import { SITE, type Lang } from '../../src/i18n/config';
import { getPosts, localesForSlug, slugOf } from '../../src/i18n/blog';
import { localizePath, withTrailingSlash } from '../../src/i18n/utils';
import { linkHrefs, metaContent, render, text } from '../helpers/render';

/**
 * Post detail pages are dynamic routes, so they are reached through
 * `getStaticPaths` — the same entry point the build uses. This exercises the
 * BlogPost layout, the MDX/markdown body render and the reading-time estimate,
 * none of which any static page touches.
 */
type PostRoute = {
  params: { slug: string };
  props: { post: Awaited<ReturnType<typeof getPosts>>[number] };
};

type RouteModule = { default: unknown; getStaticPaths: () => Promise<PostRoute[]> };

// `[...slug]` is a character class to a glob, so match broadly and filter by name.
const routeModules = Object.fromEntries(
  Object.entries(
    import.meta.glob<RouteModule>('../../src/pages/**/blog/*.astro', { eager: true }),
  ).filter(([file]) => file.includes('[...slug]')),
);

function moduleFor(lang: Lang): RouteModule {
  const key = Object.keys(routeModules).find((file) =>
    lang === 'en' ? file.endsWith('pages/blog/[...slug].astro') : file.includes(`/${lang}/blog/`),
  );
  return routeModules[key!];
}

describe('blog post routes', () => {
  it('ships a dynamic route per locale', () => {
    expect(Object.keys(routeModules)).toHaveLength(17);
  });

  it('generates one path per published post, in every locale', async () => {
    for (const lang of ['en', 'es', 'ja'] as const) {
      const paths = await moduleFor(lang).getStaticPaths();
      const posts = await getPosts(lang);
      expect(paths.length, lang).toBe(posts.length);
      expect(paths.map((p) => p.params.slug).sort(), lang).toEqual(posts.map(slugOf).sort());
    }
  });

  it('passes each entry through as a prop, so the page never re-queries', async () => {
    const paths = await moduleFor('en').getStaticPaths();
    for (const path of paths) {
      expect(slugOf(path.props.post), path.params.slug).toBe(path.params.slug);
    }
  });
});

const englishPaths = await moduleFor('en').getStaticPaths();

describe.each(englishPaths.map((p): [string, PostRoute] => [p.params.slug, p]))(
  'post /blog/%s',
  (slug, path) => {
    const renderPost = () =>
      render(moduleFor('en').default as never, `/blog/${slug}`, { props: path.props });

    it('renders a complete document with the post title', async () => {
      const html = await renderPost();
      expect(html).toContain('<html lang="en"');
      expect(html).toContain('</html>');
      expect(text(html)).toContain(path.props.post.data.title);
    });

    it('renders the body copy, not just the frontmatter', async () => {
      const body = text(await renderPost());
      // The layout chrome alone is far shorter than any published post.
      expect(body.length).toBeGreaterThan(2000);
      expect(body).toContain(path.props.post.data.author);
    });

    it('canonicalizes to its own URL and marks itself an article', async () => {
      const html = await renderPost();
      const canonical = withTrailingSlash(new URL(`/blog/${slug}`, SITE.url).href);
      expect(linkHrefs(html, 'canonical')).toEqual([canonical]);
      expect(metaContent(html, 'og:url')[0]).toBe(canonical);
      expect(metaContent(html, 'og:type')[0]).toBe('article');
      expect(metaContent(html, 'og:title')[0]).toContain(path.props.post.data.title.slice(0, 20));
    });

    it('shows a plausible reading time', async () => {
      const body = text(await renderPost());
      const minutes = body.match(/(\d+)\s*(min|分|min\.)/i);
      expect(minutes, `${slug} shows no reading time`).not.toBeNull();
      expect(Number(minutes![1])).toBeGreaterThanOrEqual(1);
    });

    it('lists its tags and publication date', async () => {
      const body = text(await renderPost());
      for (const tag of path.props.post.data.tags) {
        expect(body, `${slug} → ${tag}`).toContain(tag);
      }
      expect(body).toContain(String(path.props.post.data.pubDate.getUTCFullYear()));
    });

    it('leaves no unresolved placeholders in the rendered copy', async () => {
      const body = text(await renderPost());
      expect(body, slug).not.toMatch(/\bundefined\b/);
      expect(body, slug).not.toContain('[object Object]');
      expect(body, slug).not.toMatch(/\$\{[a-zA-Z]/);
    });
  },
);

describe('article kind and body figures', () => {
  const pathFor = (slug: string) => englishPaths.find((p) => p.params.slug === slug)!;
  const renderSlug = (slug: string) =>
    render(moduleFor('en').default as never, `/blog/${slug}`, { props: pathFor(slug).props });

  it('names the article kind in the header, not just the tags', async () => {
    const teardown = englishPaths.find((p) => p.props.post.data.category === 'teardown');
    expect(teardown, 'no teardown post to check').toBeDefined();
    expect(text(await renderSlug(teardown!.params.slug))).toContain('Teardown');
  });

  it('advertises hreflang only for locales that publish the post', async () => {
    // Translations land after the English original, so enumerating all 17
    // locales would point crawlers at pages that 404.
    for (const path of englishPaths) {
      const slug = path.params.slug;
      const langs = await localesForSlug(slug);
      const hreflangs = [...(await renderSlug(slug)).matchAll(/<link\b[^>]*\bhreflang="([^"]*)"/g)]
        .map(([, lang]) => lang)
        .filter((lang) => lang !== 'x-default');
      expect(hreflangs.sort(), slug).toEqual([...langs].sort());
    }
  });

  it('promotes a titled body image to a captioned figure', async () => {
    const withFigure = englishPaths.find((p) => /^!\[.+\]\(.+ "/m.test(p.props.post.body ?? ''));
    expect(withFigure, 'no post uses a captioned body image').toBeDefined();

    const html = await renderSlug(withFigure!.params.slug);
    expect(html).toContain('<figure>');
    expect(html).toContain('<figcaption>');
    // The caption moves out of the title attribute so it is not also a tooltip.
    expect(html).not.toMatch(/<img[^>]*\stitle=/);
  });
});

describe('localized post pages', () => {
  it.each(['es', 'ja', 'ar'] as const)('renders %s posts at their localized route', async (lang) => {
    const paths = await moduleFor(lang).getStaticPaths();
    expect(paths.length).toBeGreaterThan(0);

    for (const path of paths) {
      const route = `${localizePath('/blog', lang)}/${path.params.slug}`;
      const html = await render(moduleFor(lang).default as never, route, { props: path.props });
      expect(html, `${lang} ${path.params.slug}`).toContain(`<html lang="${lang}"`);
      expect(linkHrefs(html, 'canonical')[0], `${lang} ${path.params.slug}`).toBe(
        withTrailingSlash(new URL(route, SITE.url).href),
      );
      expect(text(html), `${lang} ${path.params.slug}`).toContain(path.props.post.data.title);
    }
  });
});
