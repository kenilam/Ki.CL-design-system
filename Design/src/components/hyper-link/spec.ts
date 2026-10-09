import { PropsWithChildren } from 'react';

// Routes
import { NavLinkProps } from 'react-router-dom';

// Components
import type { ContentProps, LookProps, NoLookProps } from '../button/spec';

export type Props = Required<PropsWithChildren> &
  Pick<ContentProps, 'after' | 'before'> &
  Omit<NavLinkProps, 'className'> & {
    className?: string;
    disabled?: boolean;
  } & (
    | (LookProps & { lookLikeButton: true; unstyled?: never })
    | (NoLookProps & { lookLikeButton?: false; unstyled?: boolean })
  );

export type GetHyperLinkClassNamesProps = Pick<Props, 'className' | 'unstyled'>;
