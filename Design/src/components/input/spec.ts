import type { ComponentPropsWithoutRef } from 'react';

import type { ButtonContentProps as ContentProps } from 'design/components';
import type { FormItemFieldProps } from 'design/components/form';

export type Props = ComponentPropsWithoutRef<'input'> &
  Pick<ContentProps, 'after' | 'before'> &
  FormItemFieldProps;
