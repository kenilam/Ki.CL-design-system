import type { JSX, PropsWithChildren } from 'react';

import type { LookProps as ButtonLookProps } from 'design/components/button/spec';
import type { PolymorphicIsProps } from 'design/components/polymorphic';

/**
 * Semantic hosts for body copy, quotes and inline meaning (code, emphasis,
 * dates, and text removed or added by an edit).
 */
export type TextIs = Extract<
  keyof JSX.IntrinsicElements,
  | 'blockquote'
  | 'cite'
  | 'code'
  | 'del'
  | 'em'
  | 'ins'
  | 'p'
  | 'pre'
  | 'q'
  | 'span'
  | 'strong'
  | 'time'
>;

/**
 * The look of another element, without its meaning. Headings come from the
 * shared `kicl-look-like-h*` utility, the rest from Text's own styles. `p`,
 * `span` and `time` have no look of their own, so they are left out.
 */
export type TextLookLike = Extract<
  keyof JSX.IntrinsicElements,
  | 'blockquote'
  | 'cite'
  | 'code'
  | 'del'
  | 'em'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'ins'
  | 'pre'
  | 'q'
  | 'strong'
>;

/** `secondary` dims the text, accent included. Leave it out for full strength. */
type Variant = 'secondary';

/** Functional colour from the palette. Inline code tints its fill to match. */
export type TextAccent = NonNullable<ButtonLookProps['level']>;

type LookProps = {
  accent?: TextAccent;
  dense?: boolean;
  lookLike?: TextLookLike;
  variant?: Variant;
};

/** `unstyled` drops the component's class, and every look prop with it. */
type OwnProps = PropsWithChildren<
  | (LookProps & { unstyled?: false })
  | ({ [Key in keyof LookProps]?: never } & { unstyled: true })
>;

export type Props = PolymorphicIsProps<TextIs, OwnProps, 'p'>;
