import type { ComponentPropsWithoutRef } from 'react';

import type { HeadingIs, LayoutProps } from 'design/components';

export type Props = ComponentPropsWithoutRef<'details'> &
  Pick<LayoutProps, 'gap'> & {
    /**
     * For a section of an article: the summary becomes a heading at this
     * level, and the section keeps to eight columns with a narrow gap.
     */
    heading?: Exclude<HeadingIs, 'h1'>;
    summary: ComponentPropsWithoutRef<'details'>['children'];
    /** Turn off to place `DetailsMarker` yourself. */
    marker?: boolean;
  };
