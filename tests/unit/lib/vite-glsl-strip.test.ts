import { describe, expect, it } from 'vitest';
import { glslStrip, strip } from '../../../src/lib/vite-glsl-strip.mjs';

const SHADER = `
    precision mediump float;
    /* A block comment
       spanning three lines. */
    uniform float uT; // trailing note
    void main() {
      gl_FragColor = vec4(1.0); /* inline */
    }
`;

describe('strip', () => {
  it('removes block and line comments and indentation', () => {
    const out = strip(SHADER);
    expect(out).not.toContain('/*');
    expect(out).not.toContain('//');
    expect(out).not.toMatch(/^[ \t]+/m);
    expect(out).toContain('precision mediump float;');
    expect(out).toContain('uniform float uT;');
    expect(out).toContain('gl_FragColor=vec4(1.0);');
  });

  it('tightens operators but never the space between two words', () => {
    expect(strip('col = mix(col, paper, x * 0.5) ;')).toBe('col=mix(col,paper,x*0.5);');
    expect(strip('for (int k = 0; k < 6; k++) { x += 1.0; }')).toBe('for(int k=0;k<6;k++){x+=1.0;}');
    expect(strip('vec3 c = k == 0 ? a : b;')).toBe('vec3 c=k==0?a:b;');
    expect(strip('} else if (a <= b) {')).toBe('}else if(a<=b){');
    expect(strip('length(max(cd, 0.0)) + min(cd.x, 0.0) - rr;')).toBe('length(max(cd,0.0))+min(cd.x,0.0)-rr;');
  });

  it('leaves a sign alone where tightening would change its meaning', () => {
    expect(strip('a = b - -c;')).toBe('a=b - -c;');
    expect(strip('return -x;')).toBe('return -x;');
    expect(strip('x = a + +b;')).toBe('x=a + +b;');
  });

  it('preserves the line count, so compile errors still point at the source line', () => {
    const lines = (s: string) => s.split('\n').length;
    expect(lines(strip(SHADER))).toBe(lines(SHADER));
  });
});

describe('glslStrip plugin', () => {
  const plugin = glslStrip();
  const transform = plugin.transform as (code: string, id: string) => { code: string } | null;
  /* Vitest runs under the Astro Vite config, so this very file goes through
     the plugin: a tagged literal written out here would be stripped before
     the test ran. The fixtures are assembled so the source never contains
     one. */
  const tagged = (body: string) => 'glsl' + '`' + body + '`';

  it('strips only tagged literals and drops the tag', () => {
    const code = `const glsl = String.raw;\nconst A = ${tagged('/* x */ a;')};\nconst B = \`/* keep */ b;\`;`;
    const out = transform(code, '/src/components/world/WorldField.astro?astro&type=script&index=0&lang.ts');
    expect(out?.code).toBe('const glsl = String.raw;\nconst A = `a;`;\nconst B = `/* keep */ b;`;');
  });

  it('leaves modules without a tagged literal, and node_modules, alone', () => {
    expect(transform('const x = `/* c */`;', '/src/x.ts')).toBeNull();
    expect(transform(tagged('/* c */'), '/node_modules/pkg/index.js')).toBeNull();
  });

  it('does not touch a tagged literal that interpolates', () => {
    expect(transform(tagged('/* c */ ${x}'), '/src/x.ts')).toBeNull();
  });
});
