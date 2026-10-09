import type {
  ComponentPropsWithoutRef,
  PropsWithChildren,
  ReactNode,
} from 'react';

import { LayoutProps } from '..';

type Size = 'large' | 'small';
type Level = 'confirm' | 'error' | 'info' | 'warning';
type Variant = 'primary' | 'secondary' | 'tertiary' | 'ghost';

/** An icon, a spinner or the like on either side of the label. */
export type ContentProps = PropsWithChildren<{
  after?: ReactNode;
  before?: ReactNode;
}>;

/** What only the button look takes. */
export type LookProps = {
  bold?: boolean;
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
    | (NoLookProps & { lookLikeHyperLink: true; unstyled?: never })
  );

export type GetButtonClassNamesProps = LookProps &
  Pick<Props, 'className' | 'disabled'> & {
    /** It holds no text of its own, so it may be an icon button. See `hasText`. */
    icon?: boolean;
    unstyled?: boolean;
  };
