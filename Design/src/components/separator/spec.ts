import type React from 'react';

import type { PolymorphicIsProps } from 'design/components/polymorphic';

export type SeparatorIs = 'hr' | 'span';

export const SEPARATOR_VARIANTS = ['solid', 'gradient'] as const;

export type Props = PolymorphicIsProps<
  SeparatorIs,
  {
    orientation?: React.AriaAttributes['aria-orientation'];
    variant?: (typeof SEPARATOR_VARIANTS)[number];
  },
  'span'
>;
