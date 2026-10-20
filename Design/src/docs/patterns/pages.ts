import { lazy } from 'react';

export const PAGES = {
  inclusion: {
    'understanding-disability': {
      context: 'understanding_disability',
      Content: lazy(
        () =>
          import('design/docs/patterns/docs/understanding-disability/index.mdx')
      ),
    },
    'accessibility-first': {
      context: 'accessibility_first',
      Content: lazy(
        () => import('design/docs/patterns/docs/accessibility-first/index.mdx')
      ),
    },
    'screen-readers': {
      context: 'screen_readers',
      Content: lazy(
        () => import('design/docs/patterns/docs/screen-readers/index.mdx')
      ),
    },
  },
  interaction: {
    'feedback-and-status': {
      context: 'feedback_and_status',
      Content: lazy(
        () => import('design/docs/patterns/docs/feedback-and-status/index.mdx')
      ),
    },
    'input-and-forms': {
      context: 'input_and_forms',
      Content: lazy(
        () => import('design/docs/patterns/docs/input-and-forms/index.mdx')
      ),
    },
    modality: {
      context: 'modality',
      Content: lazy(
        () => import('design/docs/patterns/docs/modality/index.mdx')
      ),
    },
    selection: {
      context: 'selection',
      Content: lazy(
        () => import('design/docs/patterns/docs/selection/index.mdx')
      ),
    },
    states: {
      context: 'states',
      Content: lazy(() => import('design/docs/patterns/docs/states/index.mdx')),
    },
  },
} as const;

export type Category = keyof typeof PAGES;
export type Pattern = {
  [C in Category]: (typeof PAGES)[C][keyof (typeof PAGES)[C]];
}[Category];
