import type React from 'react';

import type {
  FormDescriptionProps,
  FormLabelProps,
} from 'design/components/form';

export type Props = React.ComponentPropsWithoutRef<'textarea'> & {
  description?: FormDescriptionProps['children'];
  label?: FormLabelProps['children'];
};
