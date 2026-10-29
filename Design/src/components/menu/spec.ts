import React from 'react';

import { LayoutProps } from 'design/components';

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
