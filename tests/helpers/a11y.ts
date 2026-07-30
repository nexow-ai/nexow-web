/**
 * Accessibility auditing over server-rendered HTML.
 *
 * axe is evaluated *inside* each JSDOM window rather than imported into the test
 * realm: axe captures its window on load, so a single imported copy cannot audit
 * a series of separate documents.
 *
 * jsdom has no layout engine, so rules needing geometry or painted colour cannot
 * produce a trustworthy result and are disabled. What remains is everything
 * decidable from the markup: landmarks, names, roles, heading order, language,
 * labels and duplicate ids.
 */
import fs from 'node:fs';
import { createRequire } from 'node:module';
import { JSDOM, VirtualConsole } from 'jsdom';

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

const require = createRequire(import.meta.url);
let axeSource: string | undefined;

function axeBundle(): string {
  axeSource ??= fs.readFileSync(require.resolve('axe-core'), 'utf8');
  return axeSource;
}

/** Run axe over a full HTML document string. */
export async function audit(html: string): Promise<Violation[]> {
  // jsdom logs "not implemented" for the page's own inline scripts; the audit
  // does not need them to run, so keep the console quiet.
  const virtualConsole = new VirtualConsole();
  const dom = new JSDOM(html, {
    url: 'https://nexow.ai/',
    runScripts: 'outside-only',
    pretendToBeVisual: true,
    virtualConsole,
  });

  try {
    dom.window.eval(axeBundle());

    const results = (await dom.window.eval(`
      window.axe.run(document, {
        resultTypes: ['violations'],
        rules: ${JSON.stringify(
          Object.fromEntries(LAYOUT_DEPENDENT_RULES.map((id) => [id, { enabled: false }])),
        )},
      })
    `)) as { violations: RawResult[] };

    return results.violations.map(summarize);
  } finally {
    dom.window.close();
  }
}

interface RawResult {
  id: string;
  impact: string | null;
  help: string;
  nodes: { html: string }[];
}

function summarize(result: RawResult): Violation {
  return {
    id: result.id,
    impact: result.impact ?? 'unknown',
    help: result.help,
    nodes: result.nodes.slice(0, 3).map((node) => node.html.slice(0, 160)),
  };
}

/** A compact, readable failure message for an `expect(...).toEqual([])`. */
export function describeViolations(violations: Violation[]): string[] {
  return violations.map((v) => `${v.id} (${v.impact}): ${v.help} — ${v.nodes[0] ?? ''}`);
}
