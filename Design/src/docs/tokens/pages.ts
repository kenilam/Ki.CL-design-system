import { lazy } from 'react';

export const PAGES = {
  accessibility: {
    focus: {
      context: 'focus',
      Content: lazy(() => {
        return import('design/docs/tokens/docs/focus/index.mdx');
      }),
    },
    contrast: {
      context: 'contrast',
      Content: lazy(() => {
        return import('design/docs/tokens/docs/contrast/index.mdx');
      }),
    },
    'reduced-motion': {
      context: 'reduced_motion',
      Content: lazy(() => {
        return import('design/docs/tokens/docs/reduced-motion/index.mdx');
      }),
    },
    visibility: {
      context: 'visibility',
      Content: lazy(() => {
        return import('design/docs/tokens/docs/visibility/index.mdx');
      }),
    },
  },
  semantics: {
    variant: {
      context: 'variant',
      Content: lazy(() => {
        return import('design/docs/tokens/docs/variant/index.mdx');
      }),
    },
    level: {
      context: 'level',
      Content: lazy(() => {
        return import('design/docs/tokens/docs/level/index.mdx');
      }),
    },
    spacing: {
      context: 'spacing',
      Content: lazy(() => {
        return import('design/docs/tokens/docs/spacing/index.mdx');
      }),
    },
    sides: {
      context: 'sides',
      Content: lazy(() => {
        return import('design/docs/tokens/docs/sides/index.mdx');
      }),
    },
  },
  foundations: {
    color: {
      context: 'color',
      Content: lazy(() => {
        return import('design/docs/tokens/docs/color/index.mdx');
      }),
    },
    size: {
      context: 'size',
      Content: lazy(() => {
        return import('design/docs/tokens/docs/size/index.mdx');
      }),
    },
    typography: {
      context: 'typography',
      Content: lazy(() => {
        return import('design/docs/tokens/docs/typography/index.mdx');
      }),
    },
    motion: {
      context: 'motion',
      Content: lazy(() => {
        return import('design/docs/tokens/docs/motion/index.mdx');
      }),
    },
    stacking: {
      context: 'stacking',
      Content: lazy(() => {
        return import('design/docs/tokens/docs/stacking/index.mdx');
      }),
    },
    breakpoints: {
      context: 'breakpoints',
      Content: lazy(() => {
        return import('design/docs/tokens/docs/breakpoints/index.mdx');
      }),
    },
    layers: {
      context: 'layers',
      Content: lazy(() => {
        return import('design/docs/tokens/docs/layers/index.mdx');
      }),
    },
  },
  utilities: {
    display: {
      context: 'display',
      Content: lazy(() => {
        return import('design/docs/tokens/docs/display/index.mdx');
      }),
    },
    position: {
      context: 'position',
      Content: lazy(() => {
        return import('design/docs/tokens/docs/position/index.mdx');
      }),
    },
    overflow: {
      context: 'overflow',
      Content: lazy(() => {
        return import('design/docs/tokens/docs/overflow/index.mdx');
      }),
    },
    interaction: {
      context: 'interaction',
      Content: lazy(() => {
        return import('design/docs/tokens/docs/interaction/index.mdx');
      }),
    },
    effects: {
      context: 'effects',
      Content: lazy(() => {
        return import('design/docs/tokens/docs/effects/index.mdx');
      }),
    },
  },
} as const;

export type Category = keyof typeof PAGES;
export type Token = {
  [C in Category]: (typeof PAGES)[C][keyof (typeof PAGES)[C]];
}[Category];
