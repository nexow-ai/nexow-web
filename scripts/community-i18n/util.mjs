import fs from 'node:fs';
import path from 'node:path';

/** Serialize a JS value to a TypeScript object literal (single-quoted strings). */
export function toTsLiteral(value, indent = 2) {
  const pad = (n) => ' '.repeat(n);
  const esc = (s) =>
    s
      .replace(/\\/g, '\\\\')
      .replace(/'/g, "\\'")
      .replace(/\n/g, '\\n');

  function walk(v, level) {
    if (v === null) return 'null';
    if (typeof v === 'number' || typeof v === 'boolean') return String(v);
    if (typeof v === 'string') return `'${esc(v)}'`;
    if (Array.isArray(v)) {
      if (!v.length) return '[]';
      const items = v.map((item) => `${pad(level + 2)}${walk(item, level + 2)}`);
      return `[\n${items.join(',\n')},\n${pad(level)}]`;
    }
    if (typeof v === 'object') {
      const keys = Object.keys(v);
      if (!keys.length) return '{}';
      const lines = keys.map((k) => {
        const key = /^[a-zA-Z_$][\w$]*$/.test(k) ? k : `'${esc(k)}'`;
        return `${pad(level + 2)}${key}: ${walk(v[k], level + 2)}`;
      });
      return `{\n${lines.join(',\n')},\n${pad(level)}}`;
    }
    throw new Error(`Unsupported value: ${typeof v}`);
  }

  return walk(value, indent);
}

/** Insert or replace `communityPage` immediately before the Features page block. */
export function injectCommunityPage(lang, content, root = process.cwd()) {
  const file = path.join(root, 'src/i18n/locales', `${lang}.ts`);
  let src = fs.readFileSync(file, 'utf8');

  // Drop any existing communityPage sibling before features
  src = src.replace(/\n  communityPage:\s*\{[\s\S]*?\n  \},(?=\n  features:\s*\{)/, '');

  const block = `  communityPage: ${toTsLiteral(content, 2)},\n`;
  const anchor = '\n  features: {\n    meta:';
  if (!src.includes(anchor)) {
    throw new Error(`Cannot find features page anchor in ${lang}`);
  }
  src = src.replace(anchor, `\n${block}  features: {\n    meta:`);
  fs.writeFileSync(file, src);
  console.log('injected', lang);
}
