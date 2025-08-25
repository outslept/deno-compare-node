/**
 * Code adapted from https://github.com/privatenumber/compare-bun-node/
 * Author: Hiroki Osame (@privatenumber)
 */

import { execa } from 'execa';
import { createFixture } from 'fs-fixture';
import fs from 'node:fs/promises';
import { builtinModules } from 'node:module';
import { stripVTControlCharacters, styleText } from 'node:util';

const code = (string: string) => `\`\`\`js\n${string}\n\`\`\``;

const table = (rows: string[][], disableHeaders?: boolean) => {
  let html = '<table>';

  if (!disableHeaders) {
    const headers = rows.shift()!.map(cell => `<th>${cell}</th>`).join('');
    html += `<tr>${headers}</tr>`;
  }

  html += rows
    .map(
      columns =>
        `<tr>${columns.map(cell => `<td valign="top">\n\n${cell}\n\n</td>`).join('')}</tr>`,
    )
    .join('\n');

  return `${html}</table>`;
};

const log = {
  error: (message: string) => console.log(styleText('red', '✕'), message),
  info: (message: string) => console.log(styleText('gray', '▲'), message),
  progress: (current: number, total: number, item: string) =>
    console.log(styleText('gray', `[${current}/${total}]`), styleText('dim', item)),
  success: (message: string) => console.log(styleText('green', '✓'), message),
  warn: (message: string) => console.log(styleText('yellow', '!'), message),
};

log.info('Starting comparison');

const supportedModules = builtinModules.filter(m => !m.startsWith('_'));

const nameCounts = new Map<string, number>();

const makeSafeBase = (orig: string) => {
  const base = orig.replace(/^node:/, '');
  return (
    base.replace(/[:\/\\<>:"\?\|\*\s]+/g, '_').replace(/^[_\.]+|[_\.]+$/g, '') ||
    'module'
  );
};

const entries = supportedModules.map(m => {
  const specifier = m.startsWith('node:') ? m : `node:${m}`;

  const safeBase = makeSafeBase(m);
  const count = nameCounts.get(safeBase) || 0;
  nameCounts.set(safeBase, count + 1);
  const fileName = `${safeBase}${count ? `_${count}` : ''}.mjs`;

  const content = `
    try {
      const all = await import('${specifier}');
      const { inspect } = await import('./inspect.mjs');
      console.log(inspect(all));
    } catch (error) {
      console.error('Error importing module:', error.message);
    }
    `;

  return {
    orig: m,
    specifier,
    fileName,
    content,
  };
});

log.info(`Creating fixture with ${entries.length} modules`);
const fixture = await createFixture({
  ...Object.fromEntries(entries.map(e => [e.fileName, e.content])),
  'inspect.mjs': await fs.readFile('inspect.mjs', 'utf8'),
});

log.info('Running tests');

const slug = (s: string) =>
  s
    .replace(/^node:/, '')
    .replace(/[^a-zA-Z0-9_\-]+/g, '-')
    .toLowerCase();

const results = await Promise.all(
  entries.map(async (entry, index) => {
    const moduleName = entry.orig;
    log.progress(index + 1, entries.length, moduleName);

    const spawnOptions = {
      all: true,
      cwd: fixture.path,
      reject: false,
    } as const;

    const [nodeResult, denoResult] = await Promise.all([
      execa('node', [entry.fileName], spawnOptions),
      execa('deno', ['run', '--allow-all', entry.fileName], spawnOptions),
    ]);

    const nodeOutput = stripVTControlCharacters(nodeResult.all || '');
    const denoOutput = stripVTControlCharacters(denoResult.all || '');

    return {
      moduleName,
      anchor: slug(moduleName),
      nodeExit: nodeResult.exitCode ?? 0,
      denoExit: denoResult.exitCode ?? 0,
      nodeOutput,
      denoOutput,
    };
  }),
);

log.info('Cleaning up');
await fixture.rm();

log.info('Getting versions');
const [nodeResult, denoResult] = await Promise.all([
  execa('node', ['--version']),
  execa('deno', ['--version']),
]);

const date = new Date().toLocaleDateString('en-US', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
});

const nodeVersion = nodeResult.stdout.trim(); // e.g. 1.2.3
const denoVersionLine = denoResult.stdout.split('\n')[0].trim(); // e.g. deno 1.23.4

const bothOK = results.filter(r => r.nodeExit === 0 && r.denoExit === 0);
const nodeOnly = results.filter(r => r.nodeExit === 0 && r.denoExit !== 0);
const denoOnly = results.filter(r => r.nodeExit !== 0 && r.denoExit === 0);
const bothFail = results.filter(r => r.nodeExit !== 0 && r.denoExit !== 0);

const statusBadge = (r: { moduleName?: string; anchor?: string; nodeExit: any; denoExit: any; nodeOutput?: string; denoOutput?: string; }) => {
  if (r.nodeExit === 0 && r.denoExit === 0) return 'Available in both';
  if (r.nodeExit === 0 && r.denoExit !== 0) return 'Node-only';
  if (r.nodeExit !== 0 && r.denoExit === 0) return 'Deno-only';
  return 'Unavailable in both';
};

const details = results
  .sort((a, b) => a.moduleName.localeCompare(b.moduleName))
  .map(r => {
    return `
<a id="${r.anchor}"></a>
<details>
  <summary><code>${r.moduleName}</code> — ${statusBadge(r)}</summary>
  <br>
  ${table(
      [
        ['Node.js', 'Deno'],
        [code(r.nodeOutput), code(r.denoOutput)],
      ],
    )}
</details>
`.trim();
  })
  .join('\n\n');

log.info('Writing README');
const readme = `# Deno vs Node.js: Built-in API comparison
This repository provides a comparative overview of the Deno and Node.js runtime API.

Scrolling down, you should be able to see what's available in Deno, what's not, and how they differ.

Updated ${date} • Node.js ${nodeVersion} • ${denoVersionLine}

## Module details

${details}

## Credits
Code adapted from [compare-bun-node](https://github.com/privatenumber/compare-bun-node/) by [@privatenumber](https://github.com/privatenumber).
`;

await fs.writeFile('README.md', readme);

log.success(`Generated comparison for ${entries.length} modules`);
