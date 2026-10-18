import type { TextAccent } from 'design/components/text/spec';
import type { ControlsSpec } from 'design/docs/mdx/preview';

/** The props the reader can toggle on the page, and the type an example takes. */
export const CONTROLS = {
  variant: ['secondary'],
  accent: ['confirm', 'error', 'info', 'warning'],
  lookLike: [
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'blockquote',
    'cite',
    'code',
    'del',
    'em',
    'ins',
    'pre',
    'q',
    'strong',
  ],
  dense: 'boolean',
} as const satisfies ControlsSpec;

/*
 * Written out, not `Controlled`: the props are a union on `is` and on
 * `unstyled`, so a `Pick` of them fits none of its branches. `is` has no
 * control, since a preset's element is part of what it shows.
 */
export type Props = {
  accent?: TextAccent;
  className?: string;
  dense?: boolean;
  lookLike?: (typeof CONTROLS.lookLike)[number];
  variant?: (typeof CONTROLS.variant)[number];
};
