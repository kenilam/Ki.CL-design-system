import React from 'react';

// Icons
import { IconType } from 'design/icons';

// Spec
import type { ColumnSpan } from 'design/components/spec';

/** Named by its `header`, or by `aria-label` or `aria-labelledby` if none. */
export type Props = React.ComponentPropsWithoutRef<'dialog'> & {
  footer?: React.ReactNode;
  header?: React.ReactNode;
} & (
    | {
        dense?: boolean;
        fullScreen?: never;
        /** The most columns of the 12-column page the panel takes. */
        size?: ColumnSpan;
      }
    | {
        dense?: never;
        fullScreen?: boolean;
        size?: never;
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
