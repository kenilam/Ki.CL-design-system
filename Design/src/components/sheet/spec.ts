import type { ComponentPropsWithoutRef, ReactNode } from 'react';

import type { CardProps } from 'design/components/card/spec';
import type { ColumnSpan, Side } from 'design/components/spec';

/** `size` is a column count and applies only at an inline side; at a block side it spans the page. */
export type SheetProps = Omit<ComponentPropsWithoutRef<'dialog'>, 'popover'> &
  Pick<CardProps, 'variant'> & {
    closable?: boolean;
    defaultOpen?: boolean;
    footer?: ReactNode;
    header?: ReactNode;
    modal?: boolean;
    onOpenChange?: (open: boolean) => void;
    side?: Side;
    size?: ColumnSpan;
  };
