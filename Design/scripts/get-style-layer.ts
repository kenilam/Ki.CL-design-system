import * as nodePath from 'node:path';

/**
 * Lowest priority first. Must match `LAYERS` in Ki.CL's
 * `App/.client/helper/get-style-layer.ts`: both packages' styles share one
 * page, and the first `@layer` statement the browser sees sets the order.
 */
const LAYERS = [
  'reset',
  'base',
  'layout',
  'components',
  'wrappers',
  'views',
  'utilities',
] as const;

type Layer = (typeof LAYERS)[number];

/**
 * Prepended to every stylesheet so no file has to load first.
 * `src/core/styles/reset.css` keeps its own copy because plain CSS skips the
 * SCSS hook.
 */
const LAYER_ORDER = `@layer ${LAYERS.join(', ')};`;

const BASE = [
  'styles.body.scss',
  'styles.generic.scss',
  'styles.headings.scss',
];

/**
 * `.kicl-layout` sits below `components`: `Layout` clones its classes onto the
 * child it wraps, and the child component should win.
 */
const LAYOUT = ['layout.scss'];

/**
 * Components that clone their class onto a child. `wrappers` sits above
 * `components` so the wrapper wins.
 */
const WRAPPERS = ['components/animation/', 'components/frame/'];

/**
 * Sass partials get `null`: wrapping them in a layer would scope their mixins
 * and functions to that block.
 */
const getStyleLayer = (filename: string): Layer | null => {
  const normalized = filename.replace(/\\/g, '/');
  const basename = nodePath.basename(normalized);

  if (basename.startsWith('_')) {
    return null;
  }

  const [, path = ''] = normalized.split('/Design/src/');

  if (path.startsWith('core/styles/')) {
    if (BASE.includes(basename)) {
      return 'base';
    }

    if (LAYOUT.includes(basename)) {
      return 'layout';
    }

    // Tokens and `kicl-*` utilities, so a class in JSX beats component SCSS.
    return 'utilities';
  }

  if (path.startsWith('status/')) {
    return 'views';
  }

  if (
    WRAPPERS.some((folder) => {
      return path.startsWith(folder);
    })
  ) {
    return 'wrappers';
  }

  return 'components';
};

export { LAYER_ORDER, LAYERS, getStyleLayer, type Layer };
