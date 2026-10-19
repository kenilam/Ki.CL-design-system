import type { ComponentPropsWithoutRef, ReactNode } from 'react';

import type { CardProps } from 'design/components/card/spec';
import type { ColumnSpan, Side } from 'design/components/spec';

/**
 * Starts open when `defaultOpen`; after that its own buttons open and close
 * it, through `popovertarget`, and `onOpenChange` reports each change.
 * `header` and `footer` are the contents of its stuck header and footer. `side`
 * is the edge of the page it stands at, the end of the line unless set. `size`
 * is how many columns wide it is at an inline side; at a block side it spans
 * the page and is as tall as its content. `closable`, on unless set to
 * `false`, puts a close button at the end of its header. `modal` opens it
 * as a modal dialog: the page behind is blurred, inert and doesn't scroll.
 */
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
