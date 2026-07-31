/** Container-API helpers for rendering `.astro` components and pages. */
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { SITE } from '../../src/i18n/config';

type Component = Parameters<AstroContainer['renderToString']>[0];
type RenderOptions = Parameters<AstroContainer['renderToString']>[1];

let container: Promise<AstroContainer> | undefined;

/** One container per worker — creating it costs a full Astro pipeline boot. */
export function getContainer(): Promise<AstroContainer> {
  container ??= AstroContainer.create();
  return container;
}

/** Render a component with a request whose URL matches the route under test. */
export async function render(
  component: Component,
  route = '/',
  options: RenderOptions = {},
): Promise<string> {
  const instance = await getContainer();
  return instance.renderToString(component, {
    request: new Request(new URL(route, SITE.url)),
    ...options,
  });
}

/** Decode the HTML entities Astro escapes, so assertions can use copy as authored. */
export function decodeHtml(html: string): string {
  return html
    .replace(/&#(\d+);/g, (_, code: string) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code: string) => String.fromCodePoint(parseInt(code, 16)))
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');
}

/** Visible text of a rendered document: markup and scripts stripped, entities decoded. */
export function text(html: string): string {
  return decodeHtml(
    html
      .replace(/<script[\s\S]*?<\/script>/g, ' ')
      .replace(/<style[\s\S]*?<\/style>/g, ' ')
      .replace(/<[^>]*>/g, ' '),
  );
}

/** Collect every `attr` value of the matching tags in a rendered document. */
export function attrs(html: string, tag: string, attr: string): string[] {
  const pattern = new RegExp(`<${tag}\\b[^>]*\\b${attr}="([^"]*)"`, 'g');
  return [...html.matchAll(pattern)].map(([, value]) => value);
}

/** Values of `<meta property="…" content="…">` / `<meta name="…" …>` tags. */
export function metaContent(html: string, key: string): string[] {
  const pattern = new RegExp(`<meta\\b[^>]*\\b(?:property|name)="${key}"[^>]*\\bcontent="([^"]*)"`, 'g');
  return [...html.matchAll(pattern)].map(([, value]) => value);
}

/** `href` of the `<link rel="…">` tags in a rendered document. */
export function linkHrefs(html: string, rel: string): string[] {
  const pattern = new RegExp(`<link\\b[^>]*\\brel="${rel}"[^>]*>`, 'g');
  return [...html.matchAll(pattern)]
    .map(([tag]) => tag.match(/\bhref="([^"]*)"/)?.[1])
    .filter((href): href is string => href !== undefined);
}
