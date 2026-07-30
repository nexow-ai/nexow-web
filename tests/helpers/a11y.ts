/**
 * Accessibility auditing over server-rendered HTML.
 *
 * axe runs against jsdom, which has no layout engine — so rules that need
 * geometry or painted colour (colour-contrast, target size, overlap) cannot
 * produce a trustworthy result and are disabled. What remains is everything
 * decidable from the markup itself: landmarks, names, roles, heading order,
 * language, labels and duplicate ids.
 */
import axe, { type AxeResults, type Result, type RunOptions } from 'axe-core';
import { JSDOM } from 'jsdom';

/** Rules jsdom cannot evaluate without layout — excluded rather than trusted. */
export const LAYOUT_DEPENDENT_RULES = [
  'color-contrast',
  'color-contrast-enhanced',
  'target-size',
  'scrollable-region-focusable',
] as const;

export interface Violation {
  id: string;
  impact: string;
  help: string;
  nodes: string[];
}

/** Run axe over a full HTML document string. */
export async function audit(
  html: string,
  options: RunOptions = {},
): Promise<{ violations: Violation[]; raw: AxeResults }> {
  const dom = new JSDOM(html, { url: 'https://nexow.ai/', pretendToBeVisual: true });
  const { window } = dom;

  try {
    // axe reads globals from the document it is handed.
    const results = await axe.run(window.document.documentElement, {
      resultTypes: ['violations'],
      rules: Object.fromEntries(LAYOUT_DEPENDENT_RULES.map((id) => [id, { enabled: false }])),
      ...options,
    });

    return { violations: results.violations.map(summarize), raw: results };
  } finally {
    window.close();
  }
}

function summarize(result: Result): Violation {
  return {
    id: result.id,
    impact: result.impact ?? 'unknown',
    help: result.help,
    nodes: result.nodes.slice(0, 3).map((node) => node.html.slice(0, 160)),
  };
}

/** A compact, readable failure message for an expect(...).toEqual([]) assertion. */
export function describeViolations(violations: Violation[]): string[] {
  return violations.map((v) => `${v.id} (${v.impact}): ${v.help} — ${v.nodes[0] ?? ''}`);
}
