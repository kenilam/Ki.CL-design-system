import React from 'react';

// Icons
import { IconType } from 'design/icons';

/** Named by its `header`, or by `aria-label` or `aria-labelledby` if none. */
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
