import { readFileSync } from 'node:fs';
import path from 'node:path';

import { glob } from 'glob';

import { namesIn, pageFor } from 'design/docs/search/constants';

/*
 * Fails when a class or variable in the built CSS has no docs page in
 * PAGE_BY_PREFIX, so the docs search can't miss a new utility. Run after
 * `yarn build`.
 */
const dist = path.resolve(import.meta.dirname, '../dist/assets');
const css = glob
  .sync('*.css', { cwd: dist, absolute: true })
  .map((file) => readFileSync(file, 'utf8'))
  .join('\n');

if (!css) {
  console.error(`No CSS in ${dist}. Run yarn build first.`);
  process.exit(1);
}

const { classes, variables } = namesIn(css);

const missing = [
  ...Array.from(classes, (name) => [`.kicl-${name}`, name]),
  ...Array.from(variables, (name) => [`--kicl-${name}`, name]),
]
  .filter(([, name]) => pageFor(name) === undefined)
  .map(([label]) => label);

if (missing.length) {
  console.error(
    `No docs page for these in Design/src/docs/search/constants.ts:\n${missing.join('\n')}`
  );
  process.exit(1);
}

console.log(
  `${classes.size} classes and ${variables.size} variables, each with a docs page or left out on purpose.`
);
