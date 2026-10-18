import type React from 'react';

import type { ListProps } from 'design/components/list';

/** Layout props apply to the list inside the `nav`, not the `nav` itself. */
export type Props = React.ComponentPropsWithoutRef<'nav'> &
  Pick<
    ListProps,
    | 'alignContent'
    | 'alignItems'
    | 'autoFlow'
    | 'frames'
    | 'fullScreen'
    | 'gap'
    | 'is'
    | 'justifyContent'
    | 'justifyItems'
    | 'wrap'
  >;
