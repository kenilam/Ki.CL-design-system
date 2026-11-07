import type React from 'react';

import type { ButtonProps } from 'design/components';

export type Props = Omit<
  React.ComponentPropsWithoutRef<'input'>,
  'checked' | 'defaultChecked' | 'role' | 'size' | 'type'
> &
  Pick<ButtonProps, 'size'> & {
    checked?: boolean;
    defaultChecked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
  };

export type SwitchLabelProps = React.ComponentPropsWithoutRef<'span'>;
