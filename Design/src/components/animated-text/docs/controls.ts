import type { AnimatedText } from 'design/components';
import type { Controlled, ControlsSpec } from 'design/docs/mdx/preview';

/** The props the reader can toggle on the page, and the type an example takes. */
export const CONTROLS = {
  split: { options: ['letter', 'word'], default: 'letter' },
  property: {
    options: [
      'blur',
      'fade',
      'slide-from-bottom',
      'slide-from-left',
      'slide-from-right',
      'slide-from-top',
      'zoom-in',
      'zoom-out',
    ],
    default: 'slide-from-top',
  },
  duration: {
    options: [
      'instant',
      'fastest',
      'faster',
      'fast',
      'slow',
      'slower',
      'slowest',
      'extreme',
    ],
    default: 'fastest',
  },
  lookLike: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote'],
  variant: ['secondary'],
  accent: ['confirm', 'error', 'info', 'warning'],
  dense: 'boolean',
} satisfies ControlsSpec;

export type Props = Controlled<typeof AnimatedText, keyof typeof CONTROLS>;
