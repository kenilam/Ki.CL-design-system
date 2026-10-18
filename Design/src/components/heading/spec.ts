import type { PropsWithChildren } from 'react';

import type { PolymorphicIsProps } from 'design/components/polymorphic';

export type HeadingIs = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type OwnProps = PropsWithChildren<{
  dense?: boolean;
  /** Size of another level, so outline order and visual size can differ. */
  lookLike?: HeadingIs;
}>;

export type Props = PolymorphicIsProps<HeadingIs, OwnProps, 'h1'>;
