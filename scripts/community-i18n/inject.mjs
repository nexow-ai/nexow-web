import { injectCommunityPage } from './util.mjs';

const langs = ['es', 'fr', 'de', 'it', 'pt', 'nl', 'zh', 'ja', 'ko', 'ru', 'uk', 'ar', 'he', 'ms', 'el', 'tr'];

for (const lang of langs) {
  const { default: content } = await import(`./${lang}.mjs`);
  injectCommunityPage(lang, content);
}
