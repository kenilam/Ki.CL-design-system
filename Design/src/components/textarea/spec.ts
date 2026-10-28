import type React from 'react';

import type { FormItemFieldProps } from 'design/components/form';

export type Props = React.ComponentPropsWithoutRef<'textarea'> &
  FormItemFieldProps;
