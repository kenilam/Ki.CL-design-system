import type { ComponentPropsWithoutRef, ReactNode } from 'react';

import type { CardProps } from 'design/components';
import type { HyperLinkProps } from 'design/components';
import type { Side } from 'design/components/spec';

export type NotificationGroupProps = Omit<
  ComponentPropsWithoutRef<'section'>,
  'popover'
> & {
  closable?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  side?: Side;
};

type Primitive = boolean | number | string;

export type NotificationProps = Omit<
  ComponentPropsWithoutRef<'article'>,
  'children' | 'title'
> &
  Pick<CardProps, 'level' | 'variant'> &
  Partial<Pick<HyperLinkProps, 'to'>> & {
    avatar?: ReactNode;
    children?: Primitive;
    onClear?: () => void;
    title: Primitive;
  };
