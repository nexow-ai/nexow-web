import { describe, expect, it } from 'vitest';
import {
  ALL_BADGES,
  CREDIT_COST_CENTS,
  CREDIT_MARGIN_PCT,
  CREDIT_PACKS,
  CREDIT_SALE_CENTS,
  LEGENDARY_BADGES,
  LEGENDARY_BONUS,
  LEVELS,
  LEVEL_REWARDS,
  MATRIX,
  MAX_BADGE_POINTS,
  NXW_DRY_MINT_ISO,
  NXW_OPEN_MINT_PRICE_USDC,
  NXW_OPEN_MINT_SUPPLY,
  NXW_TOTAL_SUPPLY,
  NXW_UTILITY_SUPPLY,
  PEG_CENTS,
  PLANS,
  POINT_WEIGHTS,
  PURCHASE_CREDIT_TTL_DAYS,
  RARE_BADGES,
  RARE_BONUS,
  RARITY_COLORS,
  RARITY_POINTS,
  REWARD_LADDER,
  SIGNUP_BONUS_CREDITS,
  SIM_ACTIONS,
  TIERED_BADGES,
  TIER_BONUS,
  TOKENS_PER_CREDIT,
  TOTAL_REWARD_CREDITS,
  TOTAL_REWARD_SPONSOR_MONTHS,
  TOTAL_REWARD_TOKENS,
  TOTAL_REWARD_USD,
  USD_PER_MILLION_CREDITS,
  YEARLY_MONTHS_PAID,
  creditsToUsd,
  niceRound,
  packCredits,
  packDiscountPct,
  planCredits,
  yearlyPerMonth,
  yearlyTotal,
  type LevelId,
  type PlanKey,
  type StatKey,
} from '../../../src/data/gamification';
import { ICON_PATHS } from '../../../src/components/icon-paths';
import { useContent } from '../../../src/i18n/content';
import { LANGS } from '../../helpers/locales';

const HEX = /^#[0-9a-f]{6}$/;

describe('credit economics', () => {
  it('pegs one credit to one Sonnet output token of provider cost', () => {
    expect(PEG_CENTS).toBe(1500);
    expect(CREDIT_COST_CENTS).toBeCloseTo(PEG_CENTS / 1_000_000, 12);
  });

  it('sells a credit at cost plus the shipped margin', () => {
    expect(CREDIT_MARGIN_PCT).toBe(480);
    expect(CREDIT_SALE_CENTS).toBeCloseTo(CREDIT_COST_CENTS * 5.8, 12);
    expect(CREDIT_SALE_CENTS).toBeGreaterThan(CREDIT_COST_CENTS);
  });

  it('publishes the headline rate of $87 per million credits', () => {
    expect(USD_PER_MILLION_CREDITS).toBeCloseTo(87, 10);
  });

  it('quotes model token rates relative to the Sonnet peg', () => {
    const bySonnet = TOKENS_PER_CREDIT.find((m) => m.model === 'Sonnet 5');
    expect(bySonnet?.tokens).toBe(1);
    for (const { model, tokens } of TOKENS_PER_CREDIT) {
      expect(tokens, model).toBeGreaterThan(0);
    }
    // Cheaper models buy more tokens per credit; the list runs cheapest first.
    const rates = TOKENS_PER_CREDIT.map((m) => m.tokens);
    expect(rates).toEqual([...rates].sort((a, b) => b - a));
  });
});

describe('creditsToUsd', () => {
  it('values a million credits at the headline rate', () => {
    expect(creditsToUsd(1_000_000)).toBeCloseTo(USD_PER_MILLION_CREDITS, 10);
  });

  it('is linear and zero at zero', () => {
    expect(creditsToUsd(0)).toBe(0);
    expect(creditsToUsd(2_000_000)).toBeCloseTo(creditsToUsd(1_000_000) * 2, 10);
  });
});

describe('niceRound', () => {
  it('rejects non-positive and non-finite input', () => {
    expect(niceRound(0)).toBe(0);
    expect(niceRound(-1)).toBe(0);
    expect(niceRound(Number.NaN)).toBe(0);
    expect(niceRound(Number.POSITIVE_INFINITY)).toBe(0);
    expect(niceRound(Number.NEGATIVE_INFINITY)).toBe(0);
  });

  it('rounds to 1,000 below 20,000', () => {
    expect(niceRound(1)).toBe(0);
    expect(niceRound(1_400)).toBe(1_000);
    expect(niceRound(1_500)).toBe(2_000);
    expect(niceRound(19_999)).toBe(20_000);
  });

  it('rounds to 5,000 from 20,000 up to 200,000', () => {
    expect(niceRound(20_000)).toBe(20_000);
    expect(niceRound(22_400)).toBe(20_000);
    expect(niceRound(22_500)).toBe(25_000);
    expect(niceRound(199_999)).toBe(200_000);
  });

  it('rounds to 10,000 from 200,000 up to 1,000,000', () => {
    expect(niceRound(200_000)).toBe(200_000);
    expect(niceRound(204_999)).toBe(200_000);
    expect(niceRound(205_000)).toBe(210_000);
    expect(niceRound(999_999)).toBe(1_000_000);
  });

  it('rounds to 25,000 at and above 1,000,000', () => {
    expect(niceRound(1_000_000)).toBe(1_000_000);
    expect(niceRound(1_012_499)).toBe(1_000_000);
    expect(niceRound(1_012_500)).toBe(1_025_000);
  });

  it('always lands on a multiple of its band step, within half a step', () => {
    const stepFor = (n: number) =>
      n < 20_000 ? 1_000 : n < 200_000 ? 5_000 : n < 1_000_000 ? 10_000 : 25_000;
    for (const n of [500, 12_345, 87_654, 543_210, 4_321_098]) {
      const rounded = niceRound(n);
      const step = stepFor(n);
      expect(rounded % step, `${n}`).toBe(0);
      expect(Math.abs(rounded - n), `${n}`).toBeLessThanOrEqual(step / 2);
    }
  });
});

describe('planCredits', () => {
  it('derives the shipped catalog numbers from the list prices', () => {
    expect(planCredits(9.99)).toBe(115_000);
    expect(planCredits(69.99)).toBe(800_000);
  });

  it('grants nothing for a free plan', () => {
    expect(planCredits(0)).toBe(0);
  });

  it('is monotonic in price', () => {
    expect(planCredits(69.99)).toBeGreaterThan(planCredits(9.99));
  });
});

describe('PLANS', () => {
  const KEYS: PlanKey[] = ['free', 'supporter', 'sponsor', 'partner'];

  it('ships the four tiers in ladder order', () => {
    expect(PLANS.map((p) => p.key)).toEqual(KEYS);
  });

  it('features exactly one plan', () => {
    expect(PLANS.filter((p) => p.featured)).toHaveLength(1);
    expect(PLANS.find((p) => p.featured)?.key).toBe('sponsor');
  });

  it('gives every tier an icon the icon set can draw', () => {
    for (const plan of PLANS) {
      expect(ICON_PATHS, `${plan.key} → ${plan.icon}`).toHaveProperty(plan.icon);
    }
  });

  it('gives every tier a distinct accent and an on-white variant', () => {
    for (const plan of PLANS) {
      expect(plan.accent, plan.key).toMatch(HEX);
      expect(plan.accentInk, plan.key).toMatch(HEX);
      expect(plan.accentInk, plan.key).not.toBe(plan.accent);
    }
    expect(new Set(PLANS.map((p) => p.accent)).size).toBe(PLANS.length);
    expect(new Set(PLANS.map((p) => p.accentInk)).size).toBe(PLANS.length);
  });

  it('prices only the two self-serve tiers', () => {
    expect(PLANS.filter((p) => p.monthly !== null).map((p) => p.key)).toEqual([
      'supporter',
      'sponsor',
    ]);
    for (const plan of PLANS) {
      if (plan.monthly !== null) expect(plan.monthly, plan.key).toBeGreaterThan(0);
    }
  });

  it('derives the monthly credit grant from the monthly price', () => {
    for (const plan of PLANS) {
      const expected = plan.monthly === null ? 0 : planCredits(plan.monthly);
      expect(plan.monthlyCredits, plan.key).toBe(expected);
    }
  });

  it('inherits in a chain from free to partner', () => {
    expect(PLANS.map((p) => p.inherits)).toEqual([undefined, 'free', 'supporter', 'sponsor']);
  });

  it('quotes bot and agent limits that grow up the ladder', () => {
    const finite = PLANS.filter((p) => p.bots !== 'custom');
    const counts = finite.map((p) => Number(p.bots));
    expect(counts).toEqual([...counts].sort((a, b) => a - b));
    // Partner is a bespoke contract, not an uncapped tier — the app caps its
    // deployed agents at 100 like Sponsor, so it must not advertise "unlimited".
    expect(PLANS.at(-1)?.bots).toBe('custom');
    expect(PLANS.at(-1)?.agents).toBe('custom');
    for (const plan of PLANS) {
      expect(plan.agents, plan.key).toMatch(/^(\d+|custom)$/);
    }
  });

  it('lists non-empty, unique feature keys', () => {
    for (const plan of PLANS) {
      expect(plan.features.length, plan.key).toBeGreaterThan(0);
      expect(new Set(plan.features).size, `${plan.key} duplicates`).toBe(plan.features.length);
      for (const feature of plan.features) {
        expect(feature, plan.key).toMatch(/^[a-z][a-zA-Z]*$/);
      }
    }
  });

  it('sends self-serve tiers to the app and Partner to sales', () => {
    for (const plan of PLANS) {
      if (plan.key === 'partner') expect(plan.ctaHref).toBe('/contact?type=partnership');
      else expect(new URL(plan.ctaHref).protocol, plan.key).toBe('https:');
    }
  });
});

describe('yearly pricing', () => {
  it('charges 10 months for 12', () => {
    expect(YEARLY_MONTHS_PAID).toBe(10);
  });

  it('multiplies the monthly price by the months paid', () => {
    const supporter = PLANS.find((p) => p.key === 'supporter')!;
    expect(yearlyTotal(supporter)).toBeCloseTo(99.9, 10);
    expect(yearlyPerMonth(supporter)).toBe(8.33);
  });

  it('rounds the effective monthly rate to cents', () => {
    const sponsor = PLANS.find((p) => p.key === 'sponsor')!;
    expect(yearlyTotal(sponsor)).toBeCloseTo(699.9, 10);
    expect(yearlyPerMonth(sponsor)).toBe(58.33);
  });

  it('has no yearly price for plans without a list price', () => {
    for (const plan of PLANS.filter((p) => p.monthly === null)) {
      expect(yearlyTotal(plan), plan.key).toBeNull();
      expect(yearlyPerMonth(plan), plan.key).toBeNull();
    }
  });

  it('always discounts against paying monthly', () => {
    for (const plan of PLANS.filter((p) => p.monthly !== null)) {
      expect(yearlyPerMonth(plan)!, plan.key).toBeLessThan(plan.monthly!);
    }
  });
});

/**
 * The visible plan cards are hand-written copy in the locale bundles while the
 * numbers behind them are derived here. These are the assertions that catch the
 * two drifting apart.
 */
describe('plan cards vs. billing math', () => {
  it('renders one card per plan spec, in the same order, in every locale', () => {
    for (const lang of LANGS) {
      const tiers = useContent(lang).plansPage.tiers;
      expect(tiers.length, lang).toBe(PLANS.length);
      tiers.forEach((tier, i) => {
        expect(tier.ctaHref, `${lang}.${PLANS[i].key}`).toBe(PLANS[i].ctaHref);
        expect(Boolean(tier.featured), `${lang}.${PLANS[i].key}`).toBe(Boolean(PLANS[i].featured));
        expect(tier.name?.trim(), `${lang}.${PLANS[i].key}`).toBeTruthy();
        expect(tier.features.length, `${lang}.${PLANS[i].key}`).toBeGreaterThan(0);
        expect((tier.stats ?? []).length, `${lang}.${PLANS[i].key}`).toBeGreaterThan(0);
      });
    }
  });

  it('quotes the monthly and yearly prices the pricing functions compute', () => {
    const tiers = useContent('en').plansPage.tiers;
    tiers.forEach((tier, i) => {
      const spec = PLANS[i];
      if (spec.monthly !== null) {
        expect(tier.priceMonthly, spec.key).toBe(`$${spec.monthly}`);
        expect(tier.priceYearly, spec.key).toBe(`$${yearlyPerMonth(spec)}`);
        return;
      }
      // Free is free at both cadences; Partner is quoted, so it carries no figure.
      const expected = spec.key === 'free' ? '$0' : 'Custom';
      expect(tier.priceMonthly, spec.key).toBe(expected);
      expect(tier.priceYearly, spec.key).toBe(expected);
    });
  });

  it('quotes the bot, agent and credit numbers from the specs', () => {
    const tiers = useContent('en').plansPage.tiers;
    tiers.forEach((tier, i) => {
      const spec = PLANS[i];
      const stats = (tier.stats ?? []).join(' · ');
      if (spec.bots !== 'custom') expect(stats, spec.key).toContain(spec.bots);
      if (spec.agents !== 'custom') expect(stats, spec.key).toContain(spec.agents);
      const credits = spec.key === 'free' ? SIGNUP_BONUS_CREDITS : spec.monthlyCredits;
      if (credits > 0) {
        expect(stats, spec.key).toContain(credits.toLocaleString('en-US'));
      }
    });
  });
});

describe('MATRIX', () => {
  const groupKeys = MATRIX.map((g) => g.key);

  it('has unique group keys and icons the icon set can draw', () => {
    expect(new Set(groupKeys).size).toBe(groupKeys.length);
    for (const group of MATRIX) {
      expect(ICON_PATHS, `${group.key} → ${group.icon}`).toHaveProperty(group.icon);
    }
  });

  it('gives every group at least one row and unique row keys', () => {
    for (const group of MATRIX) {
      expect(group.rows.length, group.key).toBeGreaterThan(0);
      const keys = group.rows.map((r) => r.key);
      expect(new Set(keys).size, group.key).toBe(keys.length);
    }
  });

  it('gives every row exactly one cell per plan', () => {
    for (const group of MATRIX) {
      for (const row of group.rows) {
        expect(row.cells.length, `${group.key}.${row.key}`).toBe(PLANS.length);
      }
    }
  });

  it('uses only booleans or {n,t} cells, never an empty object', () => {
    for (const group of MATRIX) {
      for (const row of group.rows) {
        for (const cell of row.cells) {
          const label = `${group.key}.${row.key}`;
          if (typeof cell === 'boolean') continue;
          expect(cell, label).toBeTypeOf('object');
          expect(cell.n !== undefined || cell.t !== undefined, label).toBe(true);
        }
      }
    }
  });

  it('resolves every group, row and value leaf in the English bundle', () => {
    const m = useContent('en').plansPage.matrix as unknown as {
      groups: Record<string, string>;
      rows: Record<string, string>;
      values: Record<string, string>;
    };
    for (const group of MATRIX) {
      expect(m.groups[group.key], `groups.${group.key}`).toBeTruthy();
      for (const row of group.rows) {
        expect(m.rows[row.key], `rows.${row.key}`).toBeTruthy();
        for (const cell of row.cells) {
          if (typeof cell === 'boolean' || cell.t === undefined) continue;
          expect(m.values[cell.t], `values.${cell.t}`).toBeTruthy();
        }
      }
    }
  });

  it('quotes the same bot, agent and credit numbers as the plan cards', () => {
    const automation = MATRIX.find((g) => g.key === 'automation')!;
    const bots = automation.rows.find((r) => r.key === 'bots')!;
    expect(bots.cells.slice(0, 3)).toEqual(PLANS.slice(0, 3).map((p) => ({ n: p.bots })));

    const agents = automation.rows.find((r) => r.key === 'agents')!;
    expect(agents.cells.slice(0, 3)).toEqual(PLANS.slice(0, 3).map((p) => ({ n: p.agents })));

    const grant = MATRIX.find((g) => g.key === 'ai')!.rows.find((r) => r.key === 'creditsGrant')!;
    expect(grant.cells[0]).toEqual({ n: SIGNUP_BONUS_CREDITS.toLocaleString('en-US'), t: 'onSignup' });
    expect(grant.cells[1]).toEqual({ n: (115_000).toLocaleString('en-US'), t: 'perMonth' });
    expect(grant.cells[2]).toEqual({ n: (800_000).toLocaleString('en-US'), t: 'perMonth' });
  });

  it('marks the capabilities that are not live yet, and labels them', () => {
    const soon = MATRIX.flatMap((g) => g.rows.filter((r) => r.soon).map((r) => r.key));
    // Credit rewards are live; NXW / DAO stay planned.
    expect(soon).not.toContain('rewards');
    expect(soon).toContain('dao');
    expect(new Set(soon).size, 'a row is marked soon twice').toBe(soon.length);

    const t = useContent('en').plansPage.matrix as unknown as { soon?: string };
    expect(t.soon?.trim(), 'plansPage.matrix.soon must exist to render the chip').toBeTruthy();
  });

  it('never lets a lower tier beat a higher one on a boolean row', () => {
    for (const group of MATRIX) {
      for (const row of group.rows) {
        if (!row.cells.every((c) => typeof c === 'boolean')) continue;
        const bits = row.cells as boolean[];
        expect(bits, `${group.key}.${row.key} regresses`).toEqual([...bits].sort((a, b) => Number(a) - Number(b)));
      }
    }
  });
});

describe('credit packs', () => {
  it('grants credits derived from the price, the bonus and the sale rate', () => {
    // The pack `id` is the app's opaque catalog key (it encodes the grant from
    // an earlier margin) — the grant shown to visitors is always derived.
    for (const pack of CREDIT_PACKS) {
      const expected = niceRound((pack.priceUsd * 100 * (1 + pack.volumeBonus)) / CREDIT_SALE_CENTS);
      expect(packCredits(pack), pack.id).toBe(expected);
    }
    expect(CREDIT_PACKS.map(packCredits)).toEqual([55_000, 210_000, 640_000, 1_800_000]);
  });

  it('gives every pack a unique catalog id', () => {
    expect(new Set(CREDIT_PACKS.map((p) => p.id)).size).toBe(CREDIT_PACKS.length);
    for (const pack of CREDIT_PACKS) {
      expect(pack.id, pack.id).toMatch(/^cr\d+k$/);
    }
  });

  it('advertises the volume discount the bonus implies', () => {
    expect(CREDIT_PACKS.map(packDiscountPct)).toEqual([0, 5, 11, 17]);
  });

  it('gets cheaper per credit as the pack grows', () => {
    const rates = CREDIT_PACKS.map((p) => (p.priceUsd * 100) / packCredits(p));
    expect(rates).toEqual([...rates].sort((a, b) => b - a));
    for (const pack of CREDIT_PACKS) {
      expect(pack.volumeBonus, pack.id).toBeGreaterThanOrEqual(0);
    }
  });

  it('features exactly one pack and prices them in ascending order', () => {
    expect(CREDIT_PACKS.filter((p) => p.featured)).toHaveLength(1);
    const prices = CREDIT_PACKS.map((p) => p.priceUsd);
    expect(prices).toEqual([...prices].sort((a, b) => a - b));
  });

  it('keeps purchased credits for a year', () => {
    expect(PURCHASE_CREDIT_TTL_DAYS).toBe(365);
  });

  it('grants the sign-up bonus without a purchase', () => {
    expect(SIGNUP_BONUS_CREDITS).toBe(100_000);
  });
});

describe('LEVELS', () => {
  it('runs bronze → legend with ascending thresholds starting at zero', () => {
    expect(LEVELS.map((l) => l.id)).toEqual(['bronze', 'silver', 'gold', 'platinum', 'legend']);
    expect(LEVELS[0].min).toBe(0);
    const mins = LEVELS.map((l) => l.min);
    expect(mins).toEqual([...mins].sort((a, b) => a - b));
    expect(new Set(mins).size).toBe(mins.length);
  });

  it('gives every band a medallion gradient and a drawable icon', () => {
    for (const level of LEVELS) {
      expect(level.from, level.id).toMatch(HEX);
      expect(level.to, level.id).toMatch(HEX);
      expect(ICON_PATHS, `${level.id} → ${level.icon}`).toHaveProperty(level.icon);
    }
  });

  it('reuses the shared rarity palette for the tier bands', () => {
    for (const id of ['bronze', 'silver', 'gold'] as const) {
      const level = LEVELS.find((l) => l.id === id)!;
      expect({ from: level.from, to: level.to }).toEqual(RARITY_COLORS[id]);
    }
    const legend = LEVELS.find((l) => l.id === 'legend')!;
    expect({ from: legend.from, to: legend.to }).toEqual(RARITY_COLORS.legendary);
  });
});

describe('badges', () => {
  it('ships 27 tiered, 13 rare and 6 legendary achievements', () => {
    expect(TIERED_BADGES).toHaveLength(27);
    expect(RARE_BADGES).toHaveLength(13);
    expect(LEGENDARY_BADGES).toHaveLength(6);
    expect(ALL_BADGES).toHaveLength(46);
    expect(ALL_BADGES).toEqual([...TIERED_BADGES, ...RARE_BADGES, ...LEGENDARY_BADGES]);
  });

  it('has a unique id per badge', () => {
    expect(new Set(ALL_BADGES.map((b) => b.id)).size).toBe(ALL_BADGES.length);
  });

  it('tags each badge with its own rarity list', () => {
    for (const badge of TIERED_BADGES) expect(badge.rarity, badge.id).toBe('tiered');
    for (const badge of RARE_BADGES) expect(badge.rarity, badge.id).toBe('rare');
    for (const badge of LEGENDARY_BADGES) expect(badge.rarity, badge.id).toBe('legendary');
  });

  it('gives tiered badges three ascending thresholds', () => {
    for (const badge of TIERED_BADGES) {
      expect(badge.thresholds, badge.id).toHaveLength(3);
      expect(badge.thresholds, badge.id).toEqual([...badge.thresholds].sort((a, b) => a - b));
      expect(badge.thresholds[0], badge.id).toBeGreaterThan(0);
    }
  });

  it('gives rare and legendary medals a single bar past gold', () => {
    for (const badge of [...RARE_BADGES, ...LEGENDARY_BADGES]) {
      expect(badge.thresholds, badge.id).toHaveLength(1);
      const tiered = TIERED_BADGES.find((t) => t.stat === badge.stat);
      if (tiered) {
        expect(badge.thresholds[0], `${badge.id} vs ${tiered.id}`).toBeGreaterThan(tiered.thresholds[2]);
      }
    }
  });

  it('uses icons the icon set can draw', () => {
    for (const badge of ALL_BADGES) {
      expect(ICON_PATHS, `${badge.id} → ${badge.icon}`).toHaveProperty(badge.icon);
    }
  });

  it('tracks a stat the reputation engine knows', () => {
    const weighted = new Set(Object.keys(POINT_WEIGHTS));
    for (const badge of ALL_BADGES) {
      const badgeOnly = [
        'accountAgeDays',
        'nightPosts',
        'closeTags',
        'familyTags',
        'workTags',
        'teamTags',
        'schoolTags',
        'mentorTags',
        'favoriteTags',
        'partnerTags',
        'loveTags',
        'tagKindsUsed',
      ];
      const known = weighted.has(badge.stat) || badgeOnly.includes(badge.stat);
      expect(known, `${badge.id} tracks unknown stat ${badge.stat}`).toBe(true);
    }
  });

  it('names every badge and stat in the English bundle', () => {
    const badges = useContent('en').rewards.badges as unknown as {
      names: Record<string, { title: string; body: string }>;
      stats: Record<string, string>;
    };
    for (const badge of ALL_BADGES) {
      expect(badges.names[badge.id], `names.${badge.id}`).toBeTruthy();
      expect(badges.stats[badge.stat], `stats.${badge.stat}`).toBeTruthy();
    }
  });

  it('prices rarity bonuses in ascending order', () => {
    expect(TIER_BONUS).toBe(20);
    expect(RARE_BONUS).toBe(100);
    expect(LEGENDARY_BONUS).toBe(250);
    expect(RARITY_POINTS).toEqual({ tiered: TIER_BONUS, rare: RARE_BONUS, legendary: LEGENDARY_BONUS });
  });

  it('totals every point available from badges alone', () => {
    expect(MAX_BADGE_POINTS).toBe(27 * 3 * 20 + 13 * 100 + 6 * 250);
    expect(MAX_BADGE_POINTS).toBe(4_420);
  });

  it('gives every rarity and tier band a gradient', () => {
    for (const [key, colors] of Object.entries(RARITY_COLORS)) {
      expect(colors.from, key).toMatch(HEX);
      expect(colors.to, key).toMatch(HEX);
    }
  });
});

describe('POINT_WEIGHTS', () => {
  it('weights every counted stat positively', () => {
    for (const [stat, weight] of Object.entries(POINT_WEIGHTS)) {
      expect(weight, stat).toBeGreaterThan(0);
      expect(Number.isInteger(weight), stat).toBe(true);
    }
  });

  it('leaves badge-only stats unweighted so they are not double-counted', () => {
    const badgeOnly: StatKey[] = [
      'accountAgeDays',
      'nightPosts',
      'closeTags',
      'familyTags',
      'workTags',
      'teamTags',
      'schoolTags',
      'mentorTags',
      'favoriteTags',
      'partnerTags',
      'loveTags',
      'tagKindsUsed',
    ];
    for (const stat of badgeOnly) {
      expect(POINT_WEIGHTS[stat], stat).toBeUndefined();
    }
  });
});

describe('reward ladder', () => {
  it('has one row per rarity band, counted off the badge lists', () => {
    expect(REWARD_LADDER.map((r) => r.key)).toEqual([
      'bronze',
      'silver',
      'gold',
      'tagBronze',
      'tagSilver',
      'tagGold',
      'rare',
      'tagRare',
      'legendary',
    ]);
    const counts = Object.fromEntries(REWARD_LADDER.map((r) => [r.key, r.count]));
    expect(counts.bronze).toBe(20);
    expect(counts.silver).toBe(20);
    expect(counts.gold).toBe(20);
    expect(counts.tagBronze).toBe(7);
    expect(counts.rare).toBe(10);
    expect(counts.tagRare).toBe(3);
    expect(counts.legendary).toBe(LEGENDARY_BADGES.length);
  });

  it('pays the rarity bonus the reputation engine awards', () => {
    for (const row of REWARD_LADDER) {
      const expected =
        row.key === 'rare' || row.key === 'tagRare'
          ? RARE_BONUS
          : row.key === 'legendary'
            ? LEGENDARY_BONUS
            : TIER_BONUS;
      expect(row.points, row.key).toBe(expected);
    }
  });

  it('pays live app credit amounts on the regular rungs', () => {
    const byKey = Object.fromEntries(REWARD_LADDER.map((r) => [r.key, r]));
    expect(byKey.bronze.credits).toBe(2_500);
    expect(byKey.silver.credits).toBe(10_000);
    expect(byKey.gold.credits).toBe(40_000);
    expect(byKey.tagBronze.credits).toBe(500);
    expect(byKey.rare.credits).toBe(100_000);
    expect(byKey.tagRare.credits).toBe(5_000);
    expect(byKey.legendary.credits).toBe(250_000);
  });

  it('draws each row medallion from the shared rarity palette', () => {
    const paletteKey: Record<string, keyof typeof RARITY_COLORS> = {
      bronze: 'bronze',
      silver: 'silver',
      gold: 'gold',
      tagBronze: 'bronze',
      tagSilver: 'silver',
      tagGold: 'gold',
      rare: 'rare',
      tagRare: 'rare',
      legendary: 'legendary',
    };
    for (const row of REWARD_LADDER) {
      const palette = RARITY_COLORS[paletteKey[row.key]];
      expect({ from: row.from, to: row.to }, row.key).toEqual(palette);
      expect(ICON_PATHS, `${row.key} → ${row.icon}`).toHaveProperty(row.icon);
    }
  });

  it('grants a level-up reward at every band above bronze', () => {
    expect(LEVEL_REWARDS.map((r) => r.id)).toEqual(['silver', 'gold', 'platinum', 'legend']);
    for (const reward of LEVEL_REWARDS) {
      const level = LEVELS.find((l) => l.id === (reward.id as LevelId));
      expect(level?.min, reward.id).toBe(reward.at);
      expect(reward.credits, reward.id).toBeGreaterThan(0);
      expect(reward.tokens, reward.id).toBeGreaterThan(0);
    }
  });

  it('totals live badge credits and planned NXW from the rows', () => {
    expect(TOTAL_REWARD_CREDITS).toBe(3_617_500);
    expect(TOTAL_REWARD_TOKENS).toBe(25_250);
  });

  it('derives the totals from the rows, not from a hard-coded number', () => {
    const credits = REWARD_LADDER.reduce((a, r) => a + r.credits * r.count, 0);
    const tokens =
      REWARD_LADDER.reduce((a, r) => a + r.tokens * r.count, 0) +
      LEVEL_REWARDS.reduce((a, r) => a + r.tokens, 0);
    expect(TOTAL_REWARD_CREDITS).toBe(credits);
    expect(TOTAL_REWARD_TOKENS).toBe(tokens);
  });

  it('values the live credit haul at list price', () => {
    expect(TOTAL_REWARD_USD).toBeCloseTo(creditsToUsd(TOTAL_REWARD_CREDITS), 10);
  });

  it('covers months of Elite-grade generation', () => {
    expect(TOTAL_REWARD_SPONSOR_MONTHS).toBe(Math.round(TOTAL_REWARD_CREDITS / planCredits(69.99)));
  });

  it('caps NXW at 20M with a dry mint, utility pool, and 1 USDC open mint', () => {
    expect(NXW_DRY_MINT_ISO).toBe('2026-08-14');
    expect(NXW_UTILITY_SUPPLY).toBe(10_000_000);
    expect(NXW_OPEN_MINT_SUPPLY).toBe(10_000_000);
    expect(NXW_OPEN_MINT_PRICE_USDC).toBe(1);
    expect(NXW_TOTAL_SUPPLY).toBe(NXW_UTILITY_SUPPLY + NXW_OPEN_MINT_SUPPLY);
    expect(NXW_TOTAL_SUPPLY).toBe(20_000_000);
    expect(TOTAL_REWARD_TOKENS).toBeLessThanOrEqual(NXW_UTILITY_SUPPLY);
  });

  it('names every ladder row and level reward in the English bundle', () => {
    const rewards = useContent('en').rewards as unknown as {
      ledger: { rows: Record<string, unknown> };
      levels: { names: Record<string, string> };
    };
    for (const row of REWARD_LADDER) {
      expect(rewards.ledger.rows[row.key], `ledger.rows.${row.key}`).toBeTruthy();
    }
    for (const level of LEVELS) {
      expect(rewards.levels.names[level.id], `levels.names.${level.id}`).toBeTruthy();
    }
  });
});

describe('SIM_ACTIONS', () => {
  it('scores each chip at the real point weight', () => {
    for (const action of SIM_ACTIONS) {
      expect(action.points, action.stat).toBe(POINT_WEIGHTS[action.stat]);
      expect(action.points, action.stat).toBeGreaterThan(0);
      expect(action.step, action.stat).toBeGreaterThan(0);
    }
  });

  it('offers each stat once, with a drawable icon', () => {
    expect(new Set(SIM_ACTIONS.map((a) => a.stat)).size).toBe(SIM_ACTIONS.length);
    for (const action of SIM_ACTIONS) {
      expect(ICON_PATHS, `${action.stat} → ${action.icon}`).toHaveProperty(action.icon);
    }
  });

  it('can climb past every level band, so the simulator is not a dead end', () => {
    const perRound = SIM_ACTIONS.reduce((total, a) => total + a.points * a.step, 0);
    expect(perRound).toBeGreaterThan(0);
    expect(perRound * 1_000).toBeGreaterThan(LEVELS.at(-1)!.min);
  });

  it('names every simulated stat in the English bundle', () => {
    const stats = useContent('en').rewards.badges.stats as unknown as Record<string, string>;
    for (const action of SIM_ACTIONS) {
      expect(stats[action.stat], `stats.${action.stat}`).toBeTruthy();
    }
  });
});
