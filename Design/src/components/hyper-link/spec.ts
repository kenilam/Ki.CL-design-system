import { ComponentPropsWithoutRef, PropsWithChildren, ReactNode } from 'react';

// Routes
import { NavLinkProps } from 'design/router';

// Components
import type {
  ContentProps,
  LookProps,
  NoLookProps,
} from 'design/components/button/spec';

export type Props = Required<PropsWithChildren> &
  Pick<ContentProps, 'after' | 'before'> &
  Omit<NavLinkProps, 'className'> &
  Pick<ComponentPropsWithoutRef<'a'>, 'className'> &
  Pick<ComponentPropsWithoutRef<'button'>, 'disabled'> &
  (
    | (LookProps & { lookLikeButton: true; unstyled?: never })
    | (NoLookProps & { lookLikeButton?: false; unstyled?: boolean })
  );

export type GetHyperLinkClassNamesProps = Pick<Props, 'className' | 'unstyled'>;

/** A link to the home page, drawn as a button with a house: "Home" by default. */
export type HomeLinkProps = Pick<Props, 'className' | 'to'> &
  LookProps & {
    /** The icon. A house when left out. */
    icon?: ReactNode;
    /** What it's called. "Home" when left out. */
    label?: string;
    /** Shows the label beside the icon. Without it the link is the icon alone, named by the label. */
    showLabel?: boolean;
  };
