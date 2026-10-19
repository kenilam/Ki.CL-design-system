import type React from 'react';

import type { LayoutProps } from 'design/components';
import type { PolymorphicIsProps } from 'design/components/polymorphic';

export const LIST_IS = ['ul', 'ol'] as const;

export type Props = LayoutProps &
  PolymorphicIsProps<(typeof LIST_IS)[number], object, 'ul'> &
  Pick<React.CSSProperties, 'listStyleType'>;
