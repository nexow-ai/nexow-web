import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Blog posts live under src/content/blog/<lang>/<slug>.{md,mdx}. The locale and
// slug are derived from the file id in the route loaders.
const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('The Nexow Team'),
    tags: z.array(z.string()).default([]),
    // Cover art lives in public/blog/*.svg, referenced by root-absolute path so
    // the same asset renders in listing cards and the article header.
    heroImage: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
