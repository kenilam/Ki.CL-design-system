import { ComponentPropsWithoutRef, PropsWithChildren, ReactNode } from 'react';

// Routes
import { NavLinkProps } from 'design/router';

// Components
import type {
  ContentProps,
  LookProps,
  NoLookProps,
} from 'design/components/button/spec';
import type { LayoutProps } from 'design/components/layout';

export type Props = Required<PropsWithChildren> &
  Pick<ContentProps, 'after' | 'before'> &
  Omit<NavLinkProps, 'className'> &
  Pick<ComponentPropsWithoutRef<'a'>, 'className'> &
  Pick<ComponentPropsWithoutRef<'button'>, 'disabled'> &
  (
    | (LookProps &
        Pick<LayoutProps, 'frames' | 'justifyContent'> & {
          lookLikeButton: true;
          unstyled?: never;
        })
    | (NoLookProps & {
        frames?: never;
        justifyContent?: never;
        lookLikeButton?: false;
        unstyled?: boolean;
      })
  );

export type GetHyperLinkClassNamesProps = Pick<Props, 'className' | 'unstyled'>;

export type HomeLinkProps = Pick<Props, 'className' | 'to'> &
  LookProps & {
    /** A house by default. */
    icon?: ReactNode;
    /** "Home" by default. */
    label?: string;
    /**
     * Without it the link shows only the icon, and the label becomes its
     * accessible name.
     */
    showLabel?: boolean;
  };

export type BackLinkProps = Pick<Props, 'className'> &
  Partial<Pick<Props, 'relative' | 'to'>> & {
    label?: string;
  };
