import type React from 'react';

import type { PolymorphicIsProps } from 'design/components/polymorphic';

export type SeparatorIs = 'hr' | 'span';

export type Props = PolymorphicIsProps<
  SeparatorIs,
  { orientation?: React.AriaAttributes['aria-orientation'] },
  'span'
>;
