/**
 * Strips comments and indentation out of `glsl`-tagged template literals.
 *
 * The shaders in `WorldField.astro` are documented as heavily as the code
 * around them, and a template literal is opaque to the minifier: every comment
 * and every level of indentation inside one ships as-is. Before this, that
 * commentary was a third of the WorldField script — bytes the payload budget
 * in `tests/build/payload.test.ts` counts against the page. This keeps the
 * source exactly as written and ships only the GLSL.
 *
 * Line count is preserved (a comment is replaced by the newlines it spanned),
 * so a WebGL compile error's `0:<line>` still points at the same line of the
 * shader as in the source, and Vite's dev sourcemap for the module stays
 * line-accurate. A blank line costs one byte; that is a fair trade.
 *
 * The tag itself is removed from the output, leaving the `glsl` binding unused
 * for the minifier to drop. Literals containing `${}` are left alone — the
 * shaders have none, and splitting on interpolations is not worth the parser.
 */
export function glslStrip() {
  return {
    name: 'nexow:glsl-strip',
    /** @param {string} code @param {string} id */
    transform(code, id) {
      if (id.includes('node_modules') || !code.includes('glsl`')) return null;
      const out = code.replace(/\bglsl`([^`$]*)`/g, (_, body) => '`' + strip(body) + '`');
      return out === code ? null : { code: out, map: null };
    },
  };
}

/** @param {string} src */
export function strip(src) {
  return src
    .replace(/\/\*[\s\S]*?\*\//g, (m) => '\n'.repeat((m.match(/\n/g) ?? []).length))
    .replace(/\/\/[^\n]*/g, '')
    .split('\n')
    .map((line) => line.trim())
    .join('\n');
}
