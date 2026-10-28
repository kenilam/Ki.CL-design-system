import type { ComponentPropsWithoutRef } from 'react';

import type { ContentProps } from 'design/components/button/spec';

/** `before` and `after` sit inside the field, either side of the text: an icon or a short text. */
export type Props = ComponentPropsWithoutRef<'input'> &
  Pick<ContentProps, 'after' | 'before'>;
