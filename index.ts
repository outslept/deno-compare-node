/**
 * Code from https://github.com/privatenumber/compare-bun-node/
 * Author: Hiroki Osame (@privatenumber)
 */

import { execa } from 'execa';
import { createFixture } from 'fs-fixture';
import fs from 'node:fs/promises';
import { builtinModules } from 'node:module';
import { stripVTControlCharacters, styleText } from 'node:util';

const code = (string: string) => `\`\`\`js\n${string}\n\`\`\``;

const table = (
	rows: string[][],
	disableHeaders?: boolean,
) => {
	let html = '<table>';

	if (!disableHeaders) {
		const headers = rows.shift()!.map(cell => `<th>${cell}</th>`).join('');
		html += `<tr>${headers}</tr>`;
	}

	html += rows.map(
		columns => `<tr>${columns.map(cell => `<td valign="top">\n\n${cell}\n\n</td>`).join('')
	}</tr>`,
	).join('\n');

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

const files = supportedModules.map(
	m => [
		`${m.replaceAll('/', '_')}.mjs`,
		`
		try {
			const all = await import('node:${m}');
			const { inspect } = await import('./inspect.mjs');
			console.log(inspect(all));
		} catch (error) {
			console.error('Error importing module:', error.message);
		}
		`,
	],
);

log.info(`Creating fixture with ${files.length} modules`);
const fixture = await createFixture({
	...Object.fromEntries(files),
	'inspect.mjs': await fs.readFile('inspect.mjs', 'utf8'),
});

log.info('Running tests');
const output = await Promise.all(
	files.map(async ([file], index) => {
		const moduleName = supportedModules[index];
		log.progress(index + 1, files.length, moduleName);

		const spawnOptions = {
			all: true,
			cwd: fixture.path,
			reject: false,
		};

		const [nodeResult, denoResult] = await Promise.all([
			execa('node', [file], spawnOptions),
			execa('deno', ['run', '--allow-all', file], spawnOptions),
		]);

    // TODO: perhaps this could be removed? Mostly acting as a nobrained to "just work"
		const nodeOutput = stripVTControlCharacters(nodeResult.all || '');
		const denoOutput = stripVTControlCharacters(denoResult.all || '');

		return `
		<details>
			<summary><code>${moduleName}</code></summary>
			<br>\n\n${
				table([
					['Node.js', 'Deno'],
					[code(nodeOutput), code(denoOutput)],
				])
			}
		</details>
		`.trim();
	}),
);

log.info('Cleaning up');
await fixture.rm();

log.info('Getting versions');
const [nodeResult, denoResult] = await Promise.all([
	execa('node', ['--version']),
	execa('deno', ['--version']),
]);

const date = (new Date()).toLocaleDateString('en-US', {
	day: 'numeric',
	month: 'short',
	year: 'numeric',
});

log.info('Writing README');
const readme = `# Deno & Node.js API Comparison

## Overview

This repository provides a comparative overview of the Deno and Node.js runtime API.

Scrolling down, you should be able to see what's available in Deno, what's not, and how they differ.

Heavily inspired and taken most code from [compare-bun-node](https://github.com/privatenumber/compare-bun-node/) by [@privatenumber](https://github.com/privatenumber).

**Last updated on ${date} with Deno ${denoResult.stdout.split('\n')[0].trim()} Node.js ${nodeResult.stdout.trim()}.**

## Node.js APIs compared

${output.join('\n\n')}

## Credits
Code from [compare-bun-node](https://github.com/privatenumber/compare-bun-node/) by [@privatenumber](https://github.com/privatenumber).
`;

await fs.writeFile('README.md', readme);

log.success(`Generated comparison for ${supportedModules.length} modules`);
