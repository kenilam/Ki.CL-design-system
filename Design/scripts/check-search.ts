import { readFileSync } from 'node:fs';
import path from 'node:path';

import { glob } from 'glob';

import { namesIn, pageFor } from 'design/docs/search/constants';

const dist = path.resolve(import.meta.dirname, '../dist/assets');
const css = glob
  .sync('*.css', { cwd: dist, absolute: true })
  .map((file) => {
    return readFileSync(file, 'utf8');
  })
  .join('\n');

if (!css) {
  console.error(`No CSS in ${dist}. Run yarn build first.`);
  process.exit(1);
}

const { classes, variables } = namesIn(css);

const missing = [
  ...Array.from(classes, (name) => {
    return [`.kicl-${name}`, name];
  }),
  ...Array.from(variables, (name) => {
    return [`--kicl-${name}`, name];
  }),
]
  .filter(([, name]) => {
    return pageFor(name) === undefined;
  })
  .map(([label]) => {
    return label;
  });

if (missing.length) {
  console.error(
    `No docs page for these in Design/src/docs/search/constants.ts:\n${missing.join('\n')}`
  );
  process.exit(1);
}

console.log(
  `${classes.size} classes and ${variables.size} variables, each with a docs page or left out on purpose.`
);
