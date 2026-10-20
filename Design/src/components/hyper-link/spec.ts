import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';

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
