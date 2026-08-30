import { describe, expect, it } from 'vitest';
import {
  acceptableUsePage,
  cookiesPage,
  legalPage,
  privacyPage,
  termsPage,
} from '../../../src/i18n/legal-en';
import type { LegalPageContent } from '../../../src/i18n/content';
import { SITE } from '../../../src/i18n/config';
import { content, useContent } from '../../../src/i18n/content';
import { LANGS } from '../../helpers/locales';

const DOCS: [string, LegalPageContent][] = [
  ['privacy', privacyPage],
  ['terms', termsPage],
  ['cookies', cookiesPage],
  ['legal', legalPage],
  ['acceptable-use', acceptableUsePage],
];

describe.each(DOCS)('%s policy', (name, doc) => {
  it('has a badge, title, subtitle and update stamp', () => {
    expect(doc.badge.trim()).not.toBe('');
    expect(doc.title.trim()).not.toBe('');
    expect(doc.subtitle.trim()).not.toBe('');
    expect(doc.updated).toMatch(/2026/);
    expect(doc.updated.trim()).not.toBe('');
  });

  it('carries SEO metadata that names the brand', () => {
    expect(doc.meta.title).toContain(SITE.name);
    expect(doc.meta.description.length).toBeGreaterThan(50);
  });

  it('states that English is the governing language', () => {
    expect(doc.governingNote).toBeDefined();
    expect(doc.governingNote).toContain('English');
  });

  it('numbers its sections consecutively from 1', () => {
    const numbers = doc.sections.map((s) => Number(s.h.match(/^(\d+)\./)?.[1]));
    expect(numbers).toEqual(numbers.map((_, i) => i + 1));
  });

  it('gives every section a heading and at least one paragraph', () => {
    for (const section of doc.sections) {
      expect(section.h.trim(), `${name} heading`).not.toBe('');
      expect(section.paragraphs.length, section.h).toBeGreaterThan(0);
      for (const paragraph of section.paragraphs) {
        expect(paragraph.trim(), section.h).not.toBe('');
      }
    }
  });

  it('leaves no unresolved template placeholders', () => {
    const text = JSON.stringify(doc);
    expect(text).not.toMatch(/\$\{/);
    expect(text).not.toMatch(/\bundefined\b/);
    expect(text).not.toMatch(/\[(TODO|TBD|COMPANY|ADDRESS)\]/i);
  });
});

describe('legal documents as a set', () => {
  it('uses a distinct badge and title per document', () => {
    expect(new Set(DOCS.map(([, d]) => d.badge)).size).toBe(DOCS.length);
    expect(new Set(DOCS.map(([, d]) => d.title)).size).toBe(DOCS.length);
  });

  it('shares one update stamp so the policies are versioned together', () => {
    expect(new Set(DOCS.map(([, d]) => d.updated)).size).toBe(1);
  });

  it('interpolates the live entity, address and contact details', () => {
    const privacy = JSON.stringify(privacyPage);
    expect(privacy).toContain(SITE.legalName);
    expect(privacy).toContain(SITE.address);
    expect(privacy).toContain(SITE.email);
    expect(privacy).toContain(SITE.url);
    expect(privacy).toContain(SITE.appUrl);
  });

  it('ships a full localized legal set in every locale, not an English fallback', () => {
    const keys = ['privacyPage', 'termsPage', 'cookiesPage', 'legalPage', 'acceptableUsePage'] as const;
    const englishCounts = {
      privacyPage: privacyPage.sections.length,
      termsPage: termsPage.sections.length,
      cookiesPage: cookiesPage.sections.length,
      legalPage: legalPage.sections.length,
      acceptableUsePage: acceptableUsePage.sections.length,
    };
    for (const lang of LANGS) {
      const merged = useContent(lang);
      for (const key of keys) {
        const doc = merged[key];
        expect(doc, `${lang}.${key}`).toBeDefined();
        expect(doc!.sections.length, `${lang}.${key} section count`).toBe(englishCounts[key]);
        expect(doc!.governingNote, `${lang}.${key} governingNote`).toBeDefined();
        expect(doc!.governingNote, `${lang}.${key}`).toMatch(/English/);
        if (lang !== 'en') {
          expect(doc, `${lang}.${key} still English`).not.toEqual(
            { privacyPage, termsPage, cookiesPage, legalPage, acceptableUsePage }[key],
          );
        }
      }
    }
  });

  it('is wired into the English bundle by reference', () => {
    expect(content.en.privacyPage).toBe(privacyPage);
    expect(content.en.termsPage).toBe(termsPage);
    expect(content.en.cookiesPage).toBe(cookiesPage);
    expect(content.en.legalPage).toBe(legalPage);
    expect(content.en.acceptableUsePage).toBe(acceptableUsePage);
  });
});
