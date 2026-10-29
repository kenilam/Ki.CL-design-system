import type { ComponentPropsWithoutRef } from 'react';

import type { ContentProps } from 'design/components/button/spec';
import type { FormItemFieldProps } from 'design/components/form';

export type Props = ComponentPropsWithoutRef<'input'> &
  Pick<ContentProps, 'after' | 'before'> &
  FormItemFieldProps;
