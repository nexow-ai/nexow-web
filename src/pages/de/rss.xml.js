import rss from '@astrojs/rss';
import { getPosts, slugOf } from '../../i18n/blog';
import { useContent } from '../../i18n/content';

export async function GET(context) {
  const posts = await getPosts('de');
  const t = useContent('de').blog;
  return rss({
    title: t.meta.title,
    description: t.meta.description,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/de/blog/${slugOf(post)}/`,
      categories: post.data.tags,
    })),
    customData: `<language>de</language>`,
  });
}
