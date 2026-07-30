/**
 * Plans, reputation and rewards — the language-neutral numbers behind the Plans page.
 *
 * Everything in the LIVE half of this file is mirrored from the app repo (`../nexow`)
 * so the marketing site can never drift from what the product actually does:
 *
 *   app/utils/reputation.ts        badges, thresholds, point weights, level bands
 *   app/billing/pricing.ts         the credit ⇄ token ⇄ dollar engine (margin 480 %)
 *   app/billing/plans.ts           subscription prices, credit packs, signup bonus
 *   app/components/account/plans.ts  per-plan accent, quotas and feature order
 *   app/composables/settings/useAppearance.ts  which appearance options are premium
 *
 * The PLANNED half — `REWARD_LADDER` and the DAO token allocation — is a designed
 * reward schedule that ships with the DAO; it has no counterpart in the app yet and
 * every surface that renders it must carry the "planned" chip (see `rewards.planned`
 * in the locales). Keep it honest: numbers here are a published commitment.
 *
 * Copy lives in `src/i18n/locales/*.ts`; this file holds only keys, icons and numbers.
 */

import { CONNECTOR_COUNT } from './connectors';

/* ------------------------------------------------------------------ *
 * Credit economics — mirrors app/billing/pricing.ts
 * ------------------------------------------------------------------ */

/** Anthropic list price in cents per 1M output tokens for the peg model (Sonnet).
 *  1 credit ≡ one Sonnet output token of real provider cost. */
export const PEG_CENTS = 1500;

/** What one credit COSTS the operator, in USD cents (PEG_CENTS / 1e6). */
export const CREDIT_COST_CENTS = PEG_CENTS / 1_000_000;

/** The operator's margin over cost, in percent (NUXT_PUBLIC_CREDIT_MARGIN_PCT). */
export const CREDIT_MARGIN_PCT = 480;

/** What one credit SELLS for, in USD cents: cost × (1 + margin). */
export const CREDIT_SALE_CENTS = CREDIT_COST_CENTS * (1 + CREDIT_MARGIN_PCT / 100);

/** Headline rate: USD per 1,000,000 credits ($87.00 at the shipped margin). */
export const USD_PER_MILLION_CREDITS = (CREDIT_SALE_CENTS * 1_000_000) / 100;

/** USD value of a credit balance, at list price. */
export function creditsToUsd(credits: number): number {
  return (credits * CREDIT_SALE_CENTS) / 100;
}

/** How many tokens one credit buys, per model (PEG_CENTS / output rate). */
export const TOKENS_PER_CREDIT = [
  { model: 'Haiku 4.5', tokens: 3 },
  { model: 'Sonnet 5', tokens: 1 },
  { model: 'Opus 4.8', tokens: 0.6 },
  { model: 'Fable 5', tokens: 0.3 },
] as const;

/* ------------------------------------------------------------------ *
 * Plans — mirrors app/billing/plans.ts + app/components/account/plans.ts
 * ------------------------------------------------------------------ */

export type PlanKey = 'free' | 'supporter' | 'sponsor' | 'partner';

/** Months paid on a yearly subscription (12 months for the price of 10). */
export const YEARLY_MONTHS_PAID = 10;

/** One-time grant on sign-up (SIGNUP_BONUS_CREDITS). */
export const SIGNUP_BONUS_CREDITS = 10_000;

export interface PlanSpec {
  key: PlanKey;
  icon: string;
  /** Card accent, matching the app's plan cards exactly. */
  accent: string;
  /**
   * The same hue, darkened for use ON WHITE. The app's accents are tuned for a
   * dark canvas — cyan and gold at those values fail contrast as a check mark or
   * as a button fill on the marketing site, so light surfaces use this instead.
   */
  accentInk: string;
  /** Monthly USD, or null for Free / Partner. */
  monthly: number | null;
  /** Credits granted every billing period (0 = not applicable). */
  monthlyCredits: number;
  bots: string;
  agents: string;
  featured?: boolean;
  /** Plan whose features this one inherits ("Everything in X, plus:"). */
  inherits?: PlanKey;
  /** i18n leaf keys under `plansPage.tiers.<key>.features`, in display order. */
  features: string[];
  /** Where the card's button goes. */
  ctaHref: string;
}

/** Credits a plan grants per period — derived exactly as the invoice derives them:
 *  price ÷ per-credit sale price, rounded to a clean catalog number. */
export function planCredits(monthlyUsd: number): number {
  return niceRound((monthlyUsd * 100) / CREDIT_SALE_CENTS);
}

/** Round a raw credit amount the way the billing engine does (niceRound). */
export function niceRound(n: number): number {
  if (!Number.isFinite(n) || n <= 0) return 0;
  const step = n < 20_000 ? 1_000 : n < 200_000 ? 5_000 : n < 1_000_000 ? 10_000 : 25_000;
  return Math.round(n / step) * step;
}

export const PLANS: PlanSpec[] = [
  {
    key: 'free',
    icon: 'bolt',
    accent: '#22d3ee',
    accentInk: '#0e7490',
    monthly: null,
    monthlyCredits: 0,
    bots: '10',
    agents: '3',
    features: ['unlimited', 'connections', 'sync', 'credits', 'copilot', 'security', 'community'],
    ctaHref: 'https://x.nexow.ai',
  },
  {
    key: 'supporter',
    icon: 'heart',
    accent: '#b072ff',
    accentInk: '#7c3aed',
    monthly: 9.99,
    monthlyCredits: planCredits(9.99), // 115,000
    bots: '30',
    agents: '10',
    inherits: 'free',
    features: ['credits', 'limits', 'copilot', 'gradient', 'ui'],
    ctaHref: 'https://x.nexow.ai',
  },
  {
    key: 'sponsor',
    icon: 'gem',
    accent: '#22c55e',
    accentInk: '#15803d',
    monthly: 69.99,
    monthlyCredits: planCredits(69.99), // 800,000
    bots: '300',
    agents: '100',
    featured: true,
    inherits: 'supporter',
    features: ['credits', 'limits', 'builder', 'copilot', 'logo', 'ui'],
    ctaHref: 'https://x.nexow.ai',
  },
  {
    key: 'partner',
    icon: 'handshake',
    accent: '#f6c25a',
    accentInk: '#a16207',
    monthly: null,
    monthlyCredits: 0,
    // Partner is a bespoke contract, not an uncapped tier — the app's
    // AGENT_QUOTAS caps `partner` at 100 deployed agents, the same as Sponsor.
    // 'custom' renders as the translated "Custom", like its price.
    bots: 'custom',
    agents: 'custom',
    inherits: 'sponsor',
    features: ['infra', 'setup', 'dev', 'personalization', 'support'],
    ctaHref: '/contact?type=partnership',
  },
];

/** Annual total for a plan (monthly × 10), or null when there is no list price. */
export function yearlyTotal(plan: PlanSpec): number | null {
  return plan.monthly === null ? null : plan.monthly * YEARLY_MONTHS_PAID;
}

/** Effective per-month price when paying yearly. */
export function yearlyPerMonth(plan: PlanSpec): number | null {
  const total = yearlyTotal(plan);
  return total === null ? null : Math.round((total / 12) * 100) / 100;
}

/* ------------------------------------------------------------------ *
 * Feature matrix — one row per capability, one cell per plan (Free, Supporter,
 * Sponsor, Partner in that order).
 *
 * A cell is a boolean (✓ / —) or an object: `t` is an i18n leaf resolved against
 * `plansPage.matrix.values`, `n` is a literal that needs no translation (a
 * number, a quota, "∞"). Both together render as "115,000 / month".
 * ------------------------------------------------------------------ */

export type MatrixCell = boolean | {
  n?: string;
  t?: string;
  /** This one cell is a defined-but-unbuilt capability (row-level `soon` marks
   *  the whole capability; this marks a single tier's version of it). */
  soon?: boolean;
};

export interface MatrixRow {
  /** i18n leaf under `plansPage.matrix.rows`. */
  key: string;
  cells: [MatrixCell, MatrixCell, MatrixCell, MatrixCell];
  /** Marks a capability that is defined but not live in the app yet. */
  soon?: boolean;
}

export interface MatrixGroup {
  /** i18n leaf under `plansPage.matrix.groups`. */
  key: string;
  icon: string;
  rows: MatrixRow[];
}

const num = (n: number) => ({ n: n.toLocaleString('en-US') });
const all = (t: string): [MatrixCell, MatrixCell, MatrixCell, MatrixCell] => [{ t }, { t }, { t }, { t }];
/** Every plan sees the whole connector catalogue. The size is read from the
 *  generated catalog and dropped into the locale's `{n}` slot, so it can never
 *  drift from what /connectors actually lists. */
const allCatalog = (): [MatrixCell, MatrixCell, MatrixCell, MatrixCell] => {
  const cell = { n: String(CONNECTOR_COUNT), t: 'connectorsAll' };
  return [cell, cell, cell, cell];
};
const yes: [MatrixCell, MatrixCell, MatrixCell, MatrixCell] = [true, true, true, true];

export const MATRIX: MatrixGroup[] = [
  {
    key: 'canvas',
    icon: 'layers',
    rows: [
      { key: 'workspaces', cells: all('unlimited') },
      { key: 'widgets', cells: all('unlimited') },
      { key: 'links', cells: all('unlimited') },
      { key: 'library', cells: yes },
      { key: 'sync', cells: all('unlimited') },
      { key: 'runtime', cells: yes },
    ],
  },
  {
    key: 'ai',
    icon: 'coins',
    rows: [
      {
        key: 'creditsGrant',
        cells: [
          { ...num(SIGNUP_BONUS_CREDITS), t: 'onSignup' },
          { ...num(planCredits(9.99)), t: 'perMonth' },
          { ...num(planCredits(69.99)), t: 'perMonth' },
          { t: 'custom' },
        ],
      },
      { key: 'creditsBuy', cells: yes },
      { key: 'models', cells: yes },
      { key: 'copilot', cells: [{ t: 'copilotGlobal' }, { t: 'copilotWorkspace' }, { t: 'copilotScreen' }, { t: 'copilotScreen' }] },
      { key: 'codegen', cells: yes },
    ],
  },
  {
    key: 'automation',
    icon: 'bot',
    rows: [
      { key: 'bots', cells: [num(10), num(30), num(300), { t: 'custom' }] },
      { key: 'agents', cells: [num(3), num(10), num(100), { t: 'custom' }] },
      { key: 'connectors', cells: allCatalog() },
      // Connector Builder is an announced Sponsor capability with no
      // implementation in the app yet — flagged, not quietly claimed.
      { key: 'builder', cells: [false, false, true, true], soon: true },
      { key: 'signals', cells: [false, false, true, true], soon: true },
    ],
  },
  {
    key: 'appearance',
    icon: 'sparkles',
    rows: [
      { key: 'themes', cells: yes },
      { key: 'accent', cells: [{ t: 'accentOne' }, { t: 'accentTwo' }, { t: 'accentTwo' }, { t: 'accentTwo' }] },
      // Counts mirror app/themes/tiers.ts: CANVAS_PATTERN_TIER gives Free the dot
      // grid, Supporter seven more, Sponsor `topo` + `circuit` on top (10 total);
      // SPLASH_LOADER_TIER gives Free 3, Supporter 3 more, Sponsor 2 more (8).
      { key: 'patterns', cells: [{ t: 'patternsDots' }, { n: '8' }, { t: 'patternsAll' }, { t: 'patternsAll' }] },
      { key: 'aurora', cells: [false, true, true, true] },
      { key: 'loaders', cells: [{ n: '3' }, { n: '6' }, { t: 'loadersAll' }, { t: 'loadersAll' }] },
      // LOGO_TIER tops out at `account` (your avatar) — a custom logo upload is
      // announced for Sponsor but not built, so that cell carries the Soon chip.
      { key: 'brand', cells: [{ t: 'brandNexow' }, { t: 'brandAvatar' }, { t: 'brandCustom', soon: true }, { t: 'brandBespoke' }] },
    ],
  },
  {
    key: 'community',
    icon: 'users',
    rows: [
      { key: 'feed', cells: yes },
      { key: 'reputation', cells: yes },
      { key: 'marketplace', cells: yes },
      { key: 'rewards', cells: yes, soon: true },
      { key: 'dao', cells: yes, soon: true },
    ],
  },
  {
    key: 'ops',
    icon: 'shield',
    rows: [
      { key: 'lock', cells: yes },
      { key: 'local', cells: yes },
      { key: 'infra', cells: [false, false, false, true] },
      { key: 'support', cells: [{ t: 'supportCommunity' }, { t: 'supportCommunity' }, { t: 'supportPriority' }, { t: 'supportDedicated' }] },
      { key: 'dev', cells: [false, false, false, true] },
    ],
  },
];

/* ------------------------------------------------------------------ *
 * Credit packs — mirrors CREDIT_PACKS in app/billing/plans.ts
 * ------------------------------------------------------------------ */

export interface CreditPack {
  id: string;
  priceUsd: number;
  /** Deliberate extra credits over the price-derived grant (the volume curve). */
  volumeBonus: number;
  featured?: boolean;
}

export const CREDIT_PACKS: CreditPack[] = [
  { id: 'cr20k', priceUsd: 4.99, volumeBonus: 0 },
  { id: 'cr75k', priceUsd: 16.99, volumeBonus: 0.05 },
  { id: 'cr250k', priceUsd: 49.99, volumeBonus: 0.12, featured: true },
  { id: 'cr750k', priceUsd: 129.99, volumeBonus: 0.2 },
];

/** Credits a pack grants — price × volume bonus ÷ sale price, then niceRound. */
export function packCredits(pack: CreditPack): number {
  return niceRound((pack.priceUsd * 100 * (1 + pack.volumeBonus)) / CREDIT_SALE_CENTS);
}

/** The pack's advertised volume discount vs the base rate, as a percentage. */
export function packDiscountPct(pack: CreditPack): number {
  return Math.round((pack.volumeBonus / (1 + pack.volumeBonus)) * 100);
}

/** Purchased credits keep their value for a year (PURCHASE_CREDIT_TTL_DAYS). */
export const PURCHASE_CREDIT_TTL_DAYS = 365;

/* ------------------------------------------------------------------ *
 * Reputation — mirrors app/utils/reputation.ts exactly
 * ------------------------------------------------------------------ */

export type LevelId = 'bronze' | 'silver' | 'gold' | 'platinum' | 'legend';

export interface LevelSpec {
  id: LevelId;
  /** Points needed to reach the level. */
  min: number;
  /** Medallion gradient endpoints — the app's hex--<variant> colours. */
  from: string;
  to: string;
  icon: string;
}

export const LEVELS: LevelSpec[] = [
  { id: 'bronze', min: 0, from: '#cd9a67', to: '#8c5a2b', icon: 'award' },
  { id: 'silver', min: 250, from: '#d9dee6', to: '#8e99a8', icon: 'award' },
  { id: 'gold', min: 1_000, from: '#f2ca55', to: '#c98f1b', icon: 'award' },
  { id: 'platinum', min: 5_000, from: '#9be3e0', to: '#4d9aa8', icon: 'award' },
  { id: 'legend', min: 20_000, from: '#c6a6f5', to: '#7c4dd8', icon: 'crown' },
];

/** Every stat the reputation engine counts. Keys are i18n leaves under
 *  `rewards.badges.stats` and double as the badge "tracks" line. */
export type StatKey =
  | 'accountAgeDays'
  | 'posts'
  | 'likesReceived'
  | 'commentsWritten'
  | 'commentsReceived'
  | 'followers'
  | 'following'
  | 'contacts'
  | 'widgetsBuilt'
  | 'assetsPublished'
  | 'installsReceived'
  | 'boards'
  | 'bots'
  | 'reportsFiled'
  | 'likesGiven'
  | 'reactionsGiven'
  | 'nightPosts'
  | 'dmThreads';

/** Points awarded per unit of raw activity (POINT_WEIGHTS). `nightPosts` is
 *  badge-only — it is a subset of `posts` and carries no separate weight. */
export const POINT_WEIGHTS: Partial<Record<StatKey, number>> = {
  posts: 5,
  likesReceived: 2,
  commentsReceived: 1,
  commentsWritten: 1,
  followers: 3,
  following: 1,
  contacts: 2,
  widgetsBuilt: 5,
  assetsPublished: 25,
  installsReceived: 10,
  boards: 10,
  bots: 15,
  likesGiven: 1,
  reactionsGiven: 1,
  reportsFiled: 10,
  dmThreads: 5,
};

/** Flat point bonus for crossing a badge tier / earning a medal. */
export const TIER_BONUS = 20;
export const RARE_BONUS = 100;
export const LEGENDARY_BONUS = 250;

export type Rarity = 'tiered' | 'rare' | 'legendary';

export interface BadgeSpec {
  /** Matches the app's achievement id — also the i18n leaf under `rewards.badges.names`. */
  id: string;
  icon: string;
  stat: StatKey;
  rarity: Rarity;
  /** Bronze / silver / gold thresholds (tiered), or a single hard bar (rare / legendary). */
  thresholds: number[];
}

/** The 18 tiered achievements: bronze → silver → gold on one stat. */
export const TIERED_BADGES: BadgeSpec[] = [
  { id: 'pioneer', icon: 'history', stat: 'accountAgeDays', rarity: 'tiered', thresholds: [1, 30, 365] },
  { id: 'storyteller', icon: 'pen', stat: 'posts', rarity: 'tiered', thresholds: [1, 10, 50] },
  { id: 'crowdPleaser', icon: 'heart', stat: 'likesReceived', rarity: 'tiered', thresholds: [10, 100, 1000] },
  { id: 'conversationalist', icon: 'chat', stat: 'commentsWritten', rarity: 'tiered', thresholds: [10, 100, 500] },
  { id: 'hypeTrain', icon: 'megaphone', stat: 'commentsReceived', rarity: 'tiered', thresholds: [10, 100, 500] },
  { id: 'magnet', icon: 'users', stat: 'followers', rarity: 'tiered', thresholds: [5, 25, 100] },
  { id: 'socialButterfly', icon: 'sparkles', stat: 'following', rarity: 'tiered', thresholds: [10, 50, 200] },
  { id: 'innerCircle', icon: 'handshake', stat: 'contacts', rarity: 'tiered', thresholds: [3, 10, 25] },
  { id: 'architect', icon: 'layers', stat: 'widgetsBuilt', rarity: 'tiered', thresholds: [1, 10, 50] },
  { id: 'shipwright', icon: 'store', stat: 'assetsPublished', rarity: 'tiered', thresholds: [1, 5, 20] },
  { id: 'sensation', icon: 'flame', stat: 'installsReceived', rarity: 'tiered', thresholds: [10, 100, 1000] },
  { id: 'curator', icon: 'grid', stat: 'boards', rarity: 'tiered', thresholds: [1, 5, 15] },
  { id: 'automator', icon: 'bot', stat: 'bots', rarity: 'tiered', thresholds: [1, 3, 10] },
  { id: 'bugHunter', icon: 'bug', stat: 'reportsFiled', rarity: 'tiered', thresholds: [1, 5, 25] },
  { id: 'cheerleader', icon: 'gift', stat: 'likesGiven', rarity: 'tiered', thresholds: [25, 250, 1000] },
  { id: 'emojiSommelier', icon: 'smile', stat: 'reactionsGiven', rarity: 'tiered', thresholds: [10, 100, 500] },
  { id: 'nightOwl', icon: 'moon', stat: 'nightPosts', rarity: 'tiered', thresholds: [1, 15, 75] },
  { id: 'penPal', icon: 'mail', stat: 'dmThreads', rarity: 'tiered', thresholds: [1, 10, 40] },
];

/** The 10 rare medals: one-shot bars past gold on the same stat. */
export const RARE_BADGES: BadgeSpec[] = [
  { id: 'oracle', icon: 'scroll', stat: 'posts', rarity: 'rare', thresholds: [500] },
  { id: 'agora', icon: 'chat', stat: 'commentsWritten', rarity: 'rare', thresholds: [5000] },
  { id: 'catalyst', icon: 'bolt', stat: 'commentsReceived', rarity: 'rare', thresholds: [5000] },
  { id: 'foundry', icon: 'factory', stat: 'assetsPublished', rarity: 'rare', thresholds: [100] },
  { id: 'pantheon', icon: 'landmark', stat: 'boards', rarity: 'rare', thresholds: [75] },
  { id: 'dynasty', icon: 'gem', stat: 'contacts', rarity: 'rare', thresholds: [100] },
  { id: 'warden', icon: 'shield', stat: 'reportsFiled', rarity: 'rare', thresholds: [100] },
  { id: 'benefactor', icon: 'gift', stat: 'likesGiven', rarity: 'rare', thresholds: [10000] },
  { id: 'midnightSun', icon: 'moon', stat: 'nightPosts', rarity: 'rare', thresholds: [500] },
  { id: 'nexus', icon: 'signal', stat: 'dmThreads', rarity: 'rare', thresholds: [200] },
];

/** The 6 legendary medals: a single, outrageous bar. */
export const LEGENDARY_BADGES: BadgeSpec[] = [
  { id: 'immortal', icon: 'hourglass', stat: 'accountAgeDays', rarity: 'legendary', thresholds: [1000] },
  { id: 'folkHero', icon: 'crown', stat: 'likesReceived', rarity: 'legendary', thresholds: [10000] },
  { id: 'luminary', icon: 'sun', stat: 'followers', rarity: 'legendary', thresholds: [1000] },
  { id: 'blockbuster', icon: 'trophy', stat: 'installsReceived', rarity: 'legendary', thresholds: [10000] },
  { id: 'grandArchitect', icon: 'castle', stat: 'widgetsBuilt', rarity: 'legendary', thresholds: [250] },
  { id: 'overmind', icon: 'cpu', stat: 'bots', rarity: 'legendary', thresholds: [50] },
];

export const ALL_BADGES: BadgeSpec[] = [...TIERED_BADGES, ...RARE_BADGES, ...LEGENDARY_BADGES];

/** Rarity palette — the app's hex medallion gradients. */
export const RARITY_COLORS: Record<Rarity | 'bronze' | 'silver' | 'gold', { from: string; to: string }> = {
  bronze: { from: '#cd9a67', to: '#8c5a2b' },
  silver: { from: '#d9dee6', to: '#8e99a8' },
  gold: { from: '#f2ca55', to: '#c98f1b' },
  tiered: { from: '#f2ca55', to: '#c98f1b' },
  rare: { from: '#6eb6f5', to: '#2f6fd6' },
  legendary: { from: '#c6a6f5', to: '#7c4dd8' },
};

/** Points a rarity is worth when unlocked. */
export const RARITY_POINTS: Record<Rarity, number> = {
  tiered: TIER_BONUS,
  rare: RARE_BONUS,
  legendary: LEGENDARY_BONUS,
};

/** Every point available from badges alone: 18 × 3 tiers, 10 rare, 6 legendary. */
export const MAX_BADGE_POINTS =
  TIERED_BADGES.length * 3 * TIER_BONUS + RARE_BADGES.length * RARE_BONUS + LEGENDARY_BADGES.length * LEGENDARY_BONUS;

/* ------------------------------------------------------------------ *
 * Reward ladder — PLANNED. Ships with the DAO; every surface must label it.
 *
 * Two currencies, one ladder:
 *   • CREDITS  — spendable AI generation, priced at the same $87 / 1M as a pack.
 *   • NEXO     — the DAO's governance token, from the community allocation.
 *
 * Totals are exact by construction: 1,600,000 credits and 25,000 NEXO for a
 * complete set. Change a row and the totals below move with it.
 * ------------------------------------------------------------------ */

export interface RewardRow {
  /** i18n leaf under `rewards.ledger.rows`. */
  key: string;
  icon: string;
  /** Gradient for the row medallion. */
  from: string;
  to: string;
  /** How many times this row can be claimed across the whole catalog. */
  count: number;
  /** Reputation points the unlock itself is worth (0 for level-ups — the points
   *  ARE the trigger). */
  points: number;
  credits: number;
  tokens: number;
}

export const REWARD_LADDER: RewardRow[] = [
  {
    key: 'bronze',
    icon: 'award',
    ...RARITY_COLORS.bronze,
    count: TIERED_BADGES.length,
    points: TIER_BONUS,
    credits: 500,
    tokens: 10,
  },
  {
    key: 'silver',
    icon: 'award',
    ...RARITY_COLORS.silver,
    count: TIERED_BADGES.length,
    points: TIER_BONUS,
    credits: 1_500,
    tokens: 25,
  },
  {
    key: 'gold',
    icon: 'award',
    ...RARITY_COLORS.gold,
    count: TIERED_BADGES.length,
    points: TIER_BONUS,
    credits: 5_000,
    tokens: 90,
  },
  {
    key: 'rare',
    icon: 'gem',
    ...RARITY_COLORS.rare,
    count: RARE_BADGES.length,
    points: RARE_BONUS,
    credits: 25_000,
    tokens: 250,
  },
  {
    key: 'legendary',
    icon: 'crown',
    ...RARITY_COLORS.legendary,
    count: LEGENDARY_BADGES.length,
    points: LEGENDARY_BONUS,
    credits: 100_000,
    tokens: 1_000,
  },
];

/** Level-up rewards — claimed once each, when the points bar crosses the band. */
export interface LevelReward {
  id: LevelId;
  at: number;
  credits: number;
  tokens: number;
}

export const LEVEL_REWARDS: LevelReward[] = [
  { id: 'silver', at: 250, credits: 4_000, tokens: 250 },
  { id: 'gold', at: 1_000, credits: 20_000, tokens: 1_000 },
  { id: 'platinum', at: 5_000, credits: 100_000, tokens: 3_000 },
  { id: 'legend', at: 20_000, credits: 500_000, tokens: 10_000 },
];

const sum = (ns: number[]) => ns.reduce((a, b) => a + b, 0);

/** Every credit on the ladder: 1,600,000 for a complete set. */
export const TOTAL_REWARD_CREDITS =
  sum(REWARD_LADDER.map((r) => r.credits * r.count)) + sum(LEVEL_REWARDS.map((r) => r.credits));

/** Every NEXO on the ladder: 25,000 for a complete set. */
export const TOTAL_REWARD_TOKENS =
  sum(REWARD_LADDER.map((r) => r.tokens * r.count)) + sum(LEVEL_REWARDS.map((r) => r.tokens));

/** What the full credit haul is worth at list price (≈ $139). */
export const TOTAL_REWARD_USD = creditsToUsd(TOTAL_REWARD_CREDITS);

/** Months of Sponsor-grade generation the full haul covers (1.6M ÷ 800K = 2). */
export const TOTAL_REWARD_SPONSOR_MONTHS = Math.round(TOTAL_REWARD_CREDITS / planCredits(69.99));

/** Reserved share of the NEXO supply that funds the ladder. */
export const DAO_COMMUNITY_ALLOCATION_PCT = 10;

/* ------------------------------------------------------------------ *
 * Points simulator — the interactive "what am I worth" panel.
 *
 * Each chip adds one unit of a real stat at its real weight, so the number the
 * visitor watches climb is the number the app would compute for them.
 * ------------------------------------------------------------------ */

export interface SimAction {
  stat: StatKey;
  icon: string;
  /** Points per tap = the real POINT_WEIGHTS entry. */
  points: number;
  /** How many units one tap represents (a tap on "likes" is worth 10 likes). */
  step: number;
}

const weight = (s: StatKey) => POINT_WEIGHTS[s] ?? 0;

export const SIM_ACTIONS: SimAction[] = [
  { stat: 'posts', icon: 'pen', points: weight('posts'), step: 1 },
  { stat: 'widgetsBuilt', icon: 'layers', points: weight('widgetsBuilt'), step: 1 },
  { stat: 'assetsPublished', icon: 'store', points: weight('assetsPublished'), step: 1 },
  { stat: 'bots', icon: 'bot', points: weight('bots'), step: 1 },
  { stat: 'boards', icon: 'grid', points: weight('boards'), step: 1 },
  { stat: 'installsReceived', icon: 'flame', points: weight('installsReceived'), step: 1 },
  { stat: 'followers', icon: 'users', points: weight('followers'), step: 1 },
  { stat: 'likesReceived', icon: 'heart', points: weight('likesReceived'), step: 1 },
  { stat: 'dmThreads', icon: 'mail', points: weight('dmThreads'), step: 1 },
  { stat: 'reportsFiled', icon: 'bug', points: weight('reportsFiled'), step: 1 },
  { stat: 'contacts', icon: 'handshake', points: weight('contacts'), step: 1 },
  { stat: 'commentsWritten', icon: 'chat', points: weight('commentsWritten'), step: 1 },
];
