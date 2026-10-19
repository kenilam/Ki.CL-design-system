import type {
  ComponentPropsWithoutRef,
  PropsWithChildren,
  ReactNode,
} from 'react';

import { LayoutProps } from 'design/components';
import type { Level, Variant } from 'design/components/spec';

export const BUTTON_SIZES = ['small', 'large'] as const;

type Size = (typeof BUTTON_SIZES)[number];

/** An icon, a spinner or the like on either side of the label. */
export type ContentProps = PropsWithChildren<{
  after?: ReactNode;
  before?: ReactNode;
}>;

/** What only the button look takes. */
export type LookProps = {
  level?: Level;
  size?: Size;
  variant?: Variant;
};

/** The same props, refused: for an element with no look, or with the link's. */
export type NoLookProps = { [Key in keyof LookProps]?: never };

export type Props = Required<PropsWithChildren> &
  ContentProps &
  ComponentPropsWithoutRef<'button'> &
  Pick<
    LayoutProps,
    | 'autoFlow'
    | 'alignContent'
    | 'alignItems'
    | 'gap'
    | 'justifyContent'
    | 'justifyItems'
  > &
  (
    | (LookProps & { lookLikeHyperLink?: false; unstyled?: false })
    | (NoLookProps & { lookLikeHyperLink?: false; unstyled: true })
    // With the link's look, `unstyled` drops the link's class, as on a link.
    | (NoLookProps & { lookLikeHyperLink: true; unstyled?: boolean })
  );

export type GetButtonClassNamesProps = LookProps &
  Pick<Props, 'className' | 'disabled'> & {
    /** It holds no text of its own, so it may be an icon button. See `hasText`. */
    icon?: boolean;
    unstyled?: boolean;
  };

export type CopyButtonProps = LookProps &
  Pick<ComponentPropsWithoutRef<'button'>, 'className' | 'disabled'> & {
    /** What it copies, or a function that returns it at the moment of the click. */
    value: string | (() => string);
    /** What it says before a copy. "Copy" when left out. */
    label?: string;
    /** What it says after one, for a moment. "Copied" when left out. */
    copiedLabel?: string;
    /** Shows the label beside the icon. Without it the button is the icon alone, named by the label. */
    showLabel?: boolean;
    /** The icon before a copy. A check replaces it after one. */
    icon?: ReactNode;
  };
