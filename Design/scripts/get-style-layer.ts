import * as nodePath from 'node:path';

/**
 * Cascade layers, lowest priority first.
 *
 * Must match `LAYERS` in Ki.CL's `App/.client/helper/get-style-layer.ts`. The
 * host's view styles and this package's styles end up on one page, and the
 * first `@layer` statement the browser sees fixes the order for both.
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
 * Repeated at the top of every stylesheet, so no single file has to load
 * first. `src/core/styles/reset.css` carries its own copy, since it is plain
 * CSS and never passes through the SCSS hook.
 */
const LAYER_ORDER = `@layer ${LAYERS.join(', ')};`;

/** Element-level defaults - `body`, headings, form controls, theme classes. */
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
 * Which cascade layer a stylesheet belongs to, or `null` for Sass partials -
 * wrapping those would scope their mixins and functions to a block.
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

  // Full pages, styled like the host's views.
  if (path.startsWith('status/')) {
    return 'views';
  }

  if (WRAPPERS.some((folder) => path.startsWith(folder))) {
    return 'wrappers';
  }

  return 'components';
};

export { LAYER_ORDER, LAYERS, getStyleLayer, type Layer };
