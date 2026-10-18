import React from 'react';

import { LayoutProps } from 'design/components';

/** Only the layout props the `menu` is laid out with; the rest go on the element. */
export type Props = React.ComponentPropsWithoutRef<'menu'> &
  Pick<
    LayoutProps,
    | 'alignContent'
    | 'alignItems'
    | 'autoFlow'
    | 'frames'
    | 'fullScreen'
    | 'gap'
    | 'justifyContent'
    | 'justifyItems'
    | 'wrap'
  >;
