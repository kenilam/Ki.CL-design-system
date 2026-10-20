import type { JSX, PropsWithChildren } from 'react';

import type { PolymorphicIsProps } from 'design/components/polymorphic';
import { VARIANTS } from 'design/components/spec';
import type { Level, Variant } from 'design/components/spec';

/**
 * Semantic hosts for body copy, quotes and inline meaning (code, emphasis,
 * dates, and text removed or added by an edit).
 */
export const TEXT_IS = [
  'p',
  'span',
  'blockquote',
  'cite',
  'code',
  'del',
  'em',
  'ins',
  'pre',
  'q',
  'strong',
  'time',
] as const satisfies readonly (keyof JSX.IntrinsicElements)[];

export type TextIs = (typeof TEXT_IS)[number];

/**
 * The look of another element, without its meaning. Headings come from the
 * shared `kicl-look-like-h*` utility, the rest from Text's own styles. `p`,
 * `span` and `time` have no look of their own, so they are left out.
 */
export const TEXT_LOOK_LIKES = [
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
] as const satisfies readonly (keyof JSX.IntrinsicElements)[];

export type TextLookLike = (typeof TEXT_LOOK_LIKES)[number];

export type TextVariant = Extract<Variant, 'primary' | 'secondary'>;

export const TEXT_VARIANTS = VARIANTS.filter(
  (variant): variant is TextVariant =>
    variant === 'primary' || variant === 'secondary'
);

export type { Level as TextLevel } from 'design/components/spec';

type LookProps<Is extends TextIs> = {
  dense?: boolean;
  level?: Level;
  lookLike?: Exclude<TextLookLike, Is>;
  variant?: TextVariant;
};

/** `unstyled` drops the component's class, and every look prop with it. */
type OwnProps<Is extends TextIs> = PropsWithChildren<
  | (LookProps<Is> & { unstyled?: false })
  | ({ [Key in keyof LookProps<Is>]?: never } & { unstyled: true })
>;

export type Props = {
  [Is in TextIs]: Extract<
    PolymorphicIsProps<TextIs, OwnProps<Is>, 'p'>,
    { is?: Is }
  >;
}[TextIs];
