import type { PropsWithChildren } from 'react';

import type { PolymorphicIsProps } from 'design/components/polymorphic';
import type { Level } from 'design/components/spec';

export const HEADING_LEVELS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;

export type HeadingIs = (typeof HEADING_LEVELS)[number];

type OwnProps<Is extends HeadingIs> = PropsWithChildren<{
  dense?: boolean;
  level?: Level;
  /** Size of another level, so outline order and visual size can differ. */
  lookLike?: Exclude<HeadingIs, Is>;
}>;

export type Props = {
  [Is in HeadingIs]: Extract<
    PolymorphicIsProps<HeadingIs, OwnProps<Is>, 'h1'>,
    { is?: Is }
  >;
}[HeadingIs];
