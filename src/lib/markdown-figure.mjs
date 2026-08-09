import { defineMdastPlugin } from 'satteri';

/**
 * Promote a standalone markdown image to a captioned `<figure>`.
 *
 * A paragraph whose only child is an image becomes the figure; the image's
 * title — the quoted string after the URL — becomes the caption:
 *
 *   ![Alt text for screen readers](./art.svg "Caption shown under the figure")
 *
 * Alt and caption stay separate on purpose: the alt describes the picture for
 * someone who cannot see it, the caption adds what the picture cannot say.
 * Both are plain markdown, so a translated post needs no new art and no MDX.
 *
 * Written against Sätteri, Astro's native Markdown pipeline. `data.hName`
 * renames the element when the mdast tree is converted to hast, so the image
 * still goes through Astro's asset pipeline.
 */
export const markdownFigure = defineMdastPlugin({
  name: 'nexow-figure',
  paragraph(node, ctx) {
    if (node.children?.length !== 1) return;
    const image = node.children[0];
    if (image.type !== 'image') return;

    ctx.setProperty(node, 'data', { hName: 'figure' });
    if (!image.title) return;

    ctx.appendChild(node, {
      type: 'emphasis',
      data: { hName: 'figcaption' },
      children: [{ type: 'text', value: image.title }],
    });
    // Without this the caption is also a hover tooltip on the image directly
    // above it.
    ctx.setProperty(image, 'title', null);
  },
});
