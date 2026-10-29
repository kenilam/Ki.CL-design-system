import type { PAGES } from 'design/docs/tokens/pages';

type TokenPath = {
  [C in keyof typeof PAGES]: `${C}/${keyof (typeof PAGES)[C] & string}`;
}[keyof typeof PAGES];

/**
 * Matched by the name's start after `kicl-`, longest first. `null` leaves a
 * name out because a component prop sets it, and `yarn check:search` fails on
 * a built name that matches nothing here.
 */
const PAGE_BY_PREFIX: Record<string, TokenPath | null> = {
  'align-self': 'utilities/display',
  'animation-none': 'foundations/motion',
  'aspect-ratio': 'foundations/size',
  backdrop: 'utilities/effects',
  'background-color': 'foundations/color',
  'block-size': 'foundations/size',
  body: 'foundations/color',
  'border-radius': 'foundations/size',
  'box-shadow': 'utilities/effects',
  breakpoint: 'foundations/breakpoints',
  color: 'foundations/color',
  columns: 'foundations/size',
  contain: 'utilities/overflow',
  cursor: 'utilities/interaction',
  disabled: 'accessibility/contrast',
  display: 'utilities/display',
  ease: 'foundations/motion',
  field: 'foundations/size',
  fill: 'foundations/color',
  font: 'foundations/typography',
  gradient: 'foundations/motion',
  grid: 'utilities/display',
  gutter: 'semantics/spacing',
  heading: 'foundations/typography',
  hidden: 'accessibility/visibility',
  'hidden-up-to': 'foundations/breakpoints',
  'inline-size': 'foundations/size',
  inset: 'utilities/position',
  'justify-self': 'utilities/display',
  layout: null,
  'letter-spacing': 'foundations/typography',
  'line-height': 'foundations/typography',
  'look-like': 'foundations/typography',
  margin: 'semantics/spacing',
  'max-block-size': 'foundations/size',
  'max-inline-size': 'foundations/size',
  'min-block-size': 'foundations/size',
  'min-inline-size': 'foundations/size',
  outline: 'accessibility/focus',
  overflow: 'utilities/overflow',
  'overscroll-behavior': 'utilities/overflow',
  padding: 'semantics/spacing',
  'pointer-events': 'utilities/interaction',
  position: 'utilities/position',
  print: 'accessibility/visibility',
  scrim: 'utilities/effects',
  'scroll-fade': 'utilities/overflow',
  'scroll-reveal': 'foundations/motion',
  'scrollbar-none': 'utilities/overflow',
  size: 'foundations/size',
  'stuck-line': 'utilities/overflow',
  surface: 'foundations/color',
  text: 'foundations/typography',
  'touch-action': 'utilities/interaction',
  transition: 'foundations/motion',
  'user-select': 'utilities/interaction',
  viewport: 'foundations/breakpoints',
  visibility: 'accessibility/visibility',
  'z-index': 'foundations/stacking',
};

/**
 * `null` when the name is left out on purpose, `undefined` when no page
 * covers it.
 */
const pageFor = (name: string) => {
  const prefix = Object.keys(PAGE_BY_PREFIX)
    .filter((key) => {
      return name === key || name.startsWith(`${key}-`);
    })
    .sort((a, b) => {
      return b.length - a.length;
    })[0];

  return prefix === undefined ? undefined : PAGE_BY_PREFIX[prefix];
};

const namesIn = (css: string) => {
  return {
    classes: new Set(
      Array.from(css.matchAll(/\.kicl-([a-z0-9][a-z0-9-]*)/g), ([, name]) => {
        return name;
      })
    ),
    variables: new Set(
      Array.from(
        css.matchAll(/--kicl-([a-z0-9][a-z0-9-]*)\s*:/g),
        ([, name]) => {
          return name;
        }
      )
    ),
  };
};

export type { TokenPath };
export { namesIn, PAGE_BY_PREFIX, pageFor };
