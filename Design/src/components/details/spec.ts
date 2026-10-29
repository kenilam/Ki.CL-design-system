import type { ComponentPropsWithoutRef } from 'react';

import type { Props as LayoutProps } from 'design/components/layout/spec';

export type Props = ComponentPropsWithoutRef<'details'> &
  Pick<LayoutProps, 'gap'> & {
    summary: ComponentPropsWithoutRef<'details'>['children'];
    /** Turn off to place `DetailsMarker` yourself. */
    marker?: boolean;
  };
