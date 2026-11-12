import type {
  ComponentPropsWithoutRef,
  PropsWithChildren,
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
  block?: boolean;
  /** Up to this breakpoint the label is hidden and only the icon shows. */
  iconOnlyUpTo?: (typeof BUTTON_ICON_ONLY_UP_TO)[number];
  level?: Level;
  size?: Size;
  variant?: Variant;
};

export type NoLookProps = Pick<LookProps, 'block'> & {
  [Key in Exclude<keyof LookProps, 'block'>]?: never;
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
    | (LookProps & { lookLikeHyperLink?: false; unstyled?: false })
    | (NoLookProps & { lookLikeHyperLink?: false; unstyled: true })
    | (NoLookProps & { lookLikeHyperLink: true; unstyled?: boolean })
  );

export type GetButtonClassNamesProps = LookProps &
  Pick<Props, 'className' | 'disabled'> & {
    icon?: boolean;
    unstyled?: boolean;
  };

export type CopyButtonProps = LookProps &
  Pick<ComponentPropsWithoutRef<'button'>, 'className' | 'disabled'> & {
    value: string | (() => string);
    /** Defaults to "Copy". */
    label?: string;
    /** Shown briefly after a copy. Defaults to "Copied". */
    copiedLabel?: string;
    /** Without it, only the icon shows and the label is its accessible name. */
    showLabel?: boolean;
    /** A check replaces it after a copy. */
    icon?: ReactNode;
  };

export type ShareButtonProps = Omit<CopyButtonProps, 'label'> & {
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
