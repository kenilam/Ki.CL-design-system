import type { ComponentPropsWithoutRef } from 'react';

import type { Props as LayoutProps } from 'design/components/layout/spec';

export type Props = ComponentPropsWithoutRef<'details'> &
  /** `gap` lays the content out as a column with that gap, so it needs no wrapper. */
  Pick<LayoutProps, 'gap'> & {
    summary: ComponentPropsWithoutRef<'details'>['children'];
    /**
     * Whether the open/close marker is added after the summary. Turn it off to
     * place `DetailsMarker` yourself, such as inside a badge.
     */
    marker?: boolean;
  };
