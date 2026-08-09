import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Blog posts live under src/content/blog/<lang>/<slug>.{md,mdx}. The locale and
// slug are derived from the file id in the route loaders.
const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      author: z.string().default('The Nexow Team'),
      tags: z.array(z.string()).default([]),
      // Tags are translated per locale, so they cannot identify an article kind
      // across languages. `category` is the language-neutral discriminator —
      // it drives the changelog filter and the card label. Defaulting to
      // `release` keeps every existing post exactly where it was.
      category: z.enum(['release', 'guide', 'deep-dive', 'teardown', 'opinion']).default('release'),
      // Cover art lives in src/assets/blog/*.svg, referenced relative to each post.
      heroImage: image().optional(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { blog };
