/** Shared locale fixtures — derived from the shipped config so tests never
 *  hard-code a language list that can drift. */
import { defaultLang, languages, type Lang } from '../../src/i18n/config';

export const LANGS = Object.keys(languages) as Lang[];

/** Locales served under a `/{lang}/` prefix (everything but English). */
export const PREFIXED_LANGS = LANGS.filter((l) => l !== defaultLang);

/** Canonical (English-shaped) routes every locale ships a page for. */
export const CANONICAL_ROUTES = [
  '/',
  '/features',
  '/community',
  '/connectors',
  '/plans',
  '/about',
  '/help',
  '/changelog',
  '/contact',
  '/invite',
  '/security',
  '/privacy',
  '/terms',
  '/cookies',
  '/legal',
  '/acceptable-use',
  '/blog',
  '/for/traders',
  '/for/founders',
  '/for/builders',
] as const;
