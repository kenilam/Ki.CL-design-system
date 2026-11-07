import type { ComponentPropsWithoutRef } from 'react';

import type { LayoutProps } from 'design/components';

export type Props = ComponentPropsWithoutRef<'details'> &
  Pick<LayoutProps, 'gap'> & {
    summary: ComponentPropsWithoutRef<'details'>['children'];
    /** Turn off to place `DetailsMarker` yourself. */
    marker?: boolean;
  };
