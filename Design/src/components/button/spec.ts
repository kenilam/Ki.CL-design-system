import type {
  ComponentPropsWithoutRef,
  PropsWithChildren,
  ReactElement,
  ReactNode,
} from 'react';

import { LayoutProps } from 'design/components';
import type { Level, Variant } from 'design/components/spec';

export const BUTTON_SIZES = ['small', 'large'] as const;

export const BUTTON_ICON_ONLY_UP_TO = [
  'narrowest',
  'narrower',
  'narrow',
] as const;

type Size = (typeof BUTTON_SIZES)[number];

export type ContentProps = PropsWithChildren<{
  after?: ReactNode;
  before?: ReactNode;
  busy?: boolean;
}>;

export type LookProps = {
  /**
   * An icon-only button keeps the regular button's corner instead of
   * becoming a circle.
   */
  block?: boolean;
  /** Up to this breakpoint the label is hidden and only the icon shows. */
  iconOnlyUpTo?: (typeof BUTTON_ICON_ONLY_UP_TO)[number];
  level?: Level;
  size?: Size;
  variant?: Variant;
};

/**
 * `block` needs an icon-only button: an element as the child, or a label that
 * `iconOnlyUpTo` hides. TypeScript can't tell an icon from any other element,
 * so it only rules out a text child.
 */
export type BlockProps =
  | { children: ReactElement }
  | Required<Pick<LookProps, 'iconOnlyUpTo'>>
  | { block?: never };

export type NoLookProps = {
  [Key in keyof LookProps]?: never;
};

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
    | (LookProps & BlockProps & { lookLikeHyperLink?: false; unstyled?: false })
    | (NoLookProps & { lookLikeHyperLink?: false; unstyled: true })
    | (NoLookProps & { lookLikeHyperLink: true; unstyled?: boolean })
  );

export type GetButtonClassNamesProps = LookProps &
  Pick<Props, 'className' | 'disabled'> & {
    icon?: boolean;
    unstyled?: boolean;
  };

type ClipboardProps = LookProps &
  Pick<ComponentPropsWithoutRef<'button'>, 'className' | 'disabled'> & {
    value: string | (() => string);
    /** Shown briefly after a copy. Defaults to "Copied". */
    copiedLabel?: string;
    /** A check replaces it after a copy. */
    icon?: ReactElement;
  } & (
    | {
        /** Without it, only the icon shows and the label is its accessible name. */
        showLabel?: false;
      }
    | { block?: never; showLabel: true }
  );

export type CopyButtonProps = ClipboardProps & {
  /** Defaults to "Copy". */
  label?: string;
};

export type ShareButtonProps = ClipboardProps & {
  /** Defaults to "Share". */
  label?: string;
  /** The title the share sheet gets. Defaults to the document's. */
  title?: string;
};

export type VolumeButtonProps = Pick<LookProps, 'size' | 'variant'> &
  Pick<
    ComponentPropsWithoutRef<'input'>,
    'defaultValue' | 'onChange' | 'value'
  >;
