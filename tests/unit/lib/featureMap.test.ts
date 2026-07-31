import { describe, expect, it } from 'vitest';
import {
  FEATURE_MAP_SURFACES,
  featureCopyByIcon,
  featureMapAppHref,
  resolveFeatureMapGroups,
  resolveFeatureMapNodes,
  type FeatureMapSurfaceDef,
} from '../../../src/lib/featureMap';
import { communityAppUrl, panelAppUrl } from '../../../src/lib/appDeepLinks';
import { SITE } from '../../../src/i18n/config';
import type { Feature } from '../../../src/i18n/content';
import { useContent } from '../../../src/i18n/content';
import { ICON_PATHS } from '../../../src/components/icon-paths';
import { LANGS } from '../../helpers/locales';

const feature = (icon: string, title = `${icon} title`, body = `${icon} body`): Feature =>
  ({ icon, title, body }) as Feature;

const list = (...icons: string[]) => ({ items: icons.map((i) => feature(i)) });

describe('FEATURE_MAP_SURFACES', () => {
  it('has a unique id per surface', () => {
    const ids = FEATURE_MAP_SURFACES.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('uses icons the shared icon set can draw', () => {
    for (const surface of FEATURE_MAP_SURFACES) {
      expect(ICON_PATHS, `${surface.id} → ${surface.icon}`).toHaveProperty(surface.icon);
    }
  });

  it('sends every "more" link to a page that exists', () => {
    for (const surface of FEATURE_MAP_SURFACES) {
      expect(['/features', '/connectors', '/community'], surface.id).toContain(surface.morePath);
    }
  });

  it('targets a known app surface', () => {
    const targets = ['root', 'community', 'messages', ...Object.keys({
      account: 1, community: 1, marketplace: 1, copilot: 1, library: 1,
      bots: 1, agents: 1, connectors: 1, themes: 1, settings: 1,
    })];
    for (const surface of FEATURE_MAP_SURFACES) {
      expect(targets, surface.id).toContain(surface.app);
    }
  });
});

describe('featureMapAppHref', () => {
  it('sends workspace chrome to the app root', () => {
    expect(featureMapAppHref('root')).toBe(SITE.appUrl);
  });

  it('sends community and messages to their community tabs', () => {
    expect(featureMapAppHref('community')).toBe(communityAppUrl({ tab: 'discover' }));
    expect(featureMapAppHref('messages')).toBe(communityAppUrl({ tab: 'messages' }));
  });

  it('sends every other target to its panel', () => {
    expect(featureMapAppHref('bots')).toBe(panelAppUrl('bots'));
    expect(featureMapAppHref('account')).toBe(panelAppUrl('account'));
    expect(featureMapAppHref('themes')).toBe(panelAppUrl('themes'));
  });

  it('resolves an https app URL for every shipped surface', () => {
    for (const surface of FEATURE_MAP_SURFACES) {
      const href = featureMapAppHref(surface.app);
      expect(href.startsWith(SITE.appUrl), surface.id).toBe(true);
      expect(new URL(href).protocol, surface.id).toBe('https:');
    }
  });
});

describe('featureCopyByIcon', () => {
  it('indexes flat items by icon', () => {
    const map = featureCopyByIcon(list('bot', 'plug'));
    expect([...map.keys()]).toEqual(['bot', 'plug']);
    expect(map.get('bot')?.title).toBe('bot title');
  });

  it('prefers grouped copy over the flat list', () => {
    const map = featureCopyByIcon({
      items: [feature('bot', 'flat')],
      groups: [{ title: 'G', items: [feature('bot', 'grouped')] }],
    });
    expect(map.get('bot')?.title).toBe('grouped');
  });

  it('keeps the first occurrence when an icon repeats', () => {
    const map = featureCopyByIcon({
      items: [],
      groups: [
        { title: 'A', items: [feature('bot', 'first')] },
        { title: 'B', items: [feature('bot', 'second')] },
      ],
    });
    expect(map.get('bot')?.title).toBe('first');
  });

  it('ignores an empty groups array and falls back to items', () => {
    const map = featureCopyByIcon({ items: [feature('bot', 'flat')], groups: [] });
    expect(map.get('bot')?.title).toBe('flat');
  });

  it('is empty for empty input', () => {
    expect(featureCopyByIcon({ items: [] }).size).toBe(0);
  });
});

describe('resolveFeatureMapNodes', () => {
  it('returns one node per surface, in surface order', () => {
    const nodes = resolveFeatureMapNodes(list(), list());
    expect(nodes.map((n) => n.id)).toEqual(FEATURE_MAP_SURFACES.map((s) => s.id));
  });

  it('prefers locale copy over English', () => {
    const nodes = resolveFeatureMapNodes(
      { items: [feature('bot', 'Bots ES')] },
      { items: [feature('bot', 'Bots EN')] },
    );
    expect(nodes.find((n) => n.id === 'bots')?.title).toBe('Bots ES');
  });

  it('falls back to English when the locale omits an icon', () => {
    const nodes = resolveFeatureMapNodes(list(), { items: [feature('bot', 'Bots EN')] });
    expect(nodes.find((n) => n.id === 'bots')?.title).toBe('Bots EN');
  });

  it('borrows the moon copy for themes and settings when a locale combines them', () => {
    const nodes = resolveFeatureMapNodes({ items: [feature('moon', 'Aspecto')] }, list());
    expect(nodes.find((n) => n.id === 'themes')?.title).toBe('Aspecto');
    expect(nodes.find((n) => n.id === 'settings')?.title).toBe('Aspecto');
  });

  it('borrows the moon copy from English when the locale has neither', () => {
    const nodes = resolveFeatureMapNodes(list(), { items: [feature('moon', 'Appearance')] });
    expect(nodes.find((n) => n.id === 'themes')?.title).toBe('Appearance');
    expect(nodes.find((n) => n.id === 'settings')?.title).toBe('Appearance');
  });

  it('borrows the grid copy for the toolbar and dock', () => {
    const nodes = resolveFeatureMapNodes({ items: [feature('grid', 'Dock')] }, list());
    expect(nodes.find((n) => n.id === 'toolbar')?.title).toBe('Dock');
    expect(nodes.find((n) => n.id === 'dock')?.title).toBe('Dock');
  });

  it('keeps a surface’s own icon copy over the moon/grid fallbacks', () => {
    const nodes = resolveFeatureMapNodes(
      { items: [feature('sync', 'Settings'), feature('moon', 'Themes'), feature('sliders', 'Toolbar'), feature('grid', 'Dock')] },
      list(),
    );
    expect(nodes.find((n) => n.id === 'settings')?.title).toBe('Settings');
    expect(nodes.find((n) => n.id === 'themes')?.title).toBe('Themes');
    expect(nodes.find((n) => n.id === 'toolbar')?.title).toBe('Toolbar');
    expect(nodes.find((n) => n.id === 'dock')?.title).toBe('Dock');
  });

  it('labels a node with its own id when no copy exists anywhere', () => {
    const nodes = resolveFeatureMapNodes(list(), list());
    for (const node of nodes) {
      expect(node.title, node.id).toBe(node.id);
      expect(node.body, node.id).toBe('');
    }
  });

  it('carries the surface definition through untouched', () => {
    const nodes = resolveFeatureMapNodes(list(), list());
    for (const node of nodes) {
      const surface = FEATURE_MAP_SURFACES.find((s) => s.id === node.id) as FeatureMapSurfaceDef;
      expect({ id: node.id, icon: node.icon, morePath: node.morePath, app: node.app }).toEqual(surface);
    }
  });
});

describe('resolveFeatureMapGroups', () => {
  it('uses the locale groups when present', () => {
    const locale = {
      items: [],
      groups: [
        { title: 'Automatiza', items: [feature('bot'), feature('cpu')] },
        { title: 'Conecta', items: [feature('plug')] },
      ],
    };
    const groups = resolveFeatureMapGroups(locale, list());
    expect(groups.map((g) => g.title)).toEqual(['Automatiza', 'Conecta']);
    expect(groups[0].nodes.map((n) => n.id)).toEqual(['bots', 'agents']);
    expect(groups[1].nodes.map((n) => n.id)).toEqual(['connectors']);
  });

  it('falls back to the English groups when the locale has none', () => {
    const english = { items: [], groups: [{ title: 'Automate', items: [feature('bot')] }] };
    const groups = resolveFeatureMapGroups(list(), english);
    expect(groups.map((g) => g.title)).toEqual(['Automate']);
    expect(groups[0].nodes.map((n) => n.id)).toEqual(['bots']);
  });

  it('falls back to the English groups when the locale groups array is empty', () => {
    const english = { items: [], groups: [{ title: 'Automate', items: [feature('bot')] }] };
    const groups = resolveFeatureMapGroups({ items: [], groups: [] }, english);
    expect(groups.map((g) => g.title)).toEqual(['Automate']);
  });

  it('drops icons that map to no surface', () => {
    const locale = { items: [], groups: [{ title: 'Mixed', items: [feature('bot'), feature('nope')] }] };
    const groups = resolveFeatureMapGroups(locale, list());
    expect(groups[0].nodes.map((n) => n.id)).toEqual(['bots']);
  });

  it('drops groups left with no nodes', () => {
    const locale = {
      items: [],
      groups: [
        { title: 'Empty', items: [feature('nope')] },
        { title: 'Kept', items: [feature('bot')] },
      ],
    };
    const groups = resolveFeatureMapGroups(locale, list());
    expect(groups.map((g) => g.title)).toEqual(['Kept']);
  });

  it('returns one untitled group with every node when nothing is grouped', () => {
    const groups = resolveFeatureMapGroups(list(), list());
    expect(groups).toHaveLength(1);
    expect(groups[0].title).toBe('');
    expect(groups[0].nodes).toHaveLength(FEATURE_MAP_SURFACES.length);
  });

  it('resolves at least one populated group for every shipped locale', () => {
    const english = useContent('en').home.features;
    for (const lang of LANGS) {
      const groups = resolveFeatureMapGroups(useContent(lang).home.features, english);
      expect(groups.length, lang).toBeGreaterThan(0);
      for (const group of groups) {
        expect(group.nodes.length, `${lang} / ${group.title}`).toBeGreaterThan(0);
        for (const node of group.nodes) {
          expect(node.title.trim(), `${lang} / ${node.id}`).not.toBe('');
        }
      }
    }
  });

  it('never repeats a surface across groups for a shipped locale', () => {
    const english = useContent('en').home.features;
    for (const lang of LANGS) {
      const ids = resolveFeatureMapGroups(useContent(lang).home.features, english).flatMap((g) =>
        g.nodes.map((n) => n.id),
      );
      expect(new Set(ids).size, lang).toBe(ids.length);
    }
  });
});
