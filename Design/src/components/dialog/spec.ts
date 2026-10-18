import React from 'react';

// Icons
import { IconType } from 'design/icons';

/**
 * `header` and `footer` are what goes in its header and footer. The dialog is
 * named by its `header` (put a heading in it), or by `aria-label` /
 * `aria-labelledby` when there is no header.
 */
export type Props = React.ComponentPropsWithoutRef<'dialog'> & {
  footer?: React.ReactNode;
  header?: React.ReactNode;
} & (
    | {
        dense?: boolean;
        fullScreen?: never;
      }
    | {
        dense?: never;
        fullScreen?: boolean;
      }
  ) &
  (
    | {
        closeIcon?: IconType;
        closable?: true;
      }
    | {
        closeIcon?: never;
        closable?: false | 'keyboard';
      }
  );
