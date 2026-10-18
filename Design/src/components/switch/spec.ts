import type React from 'react';

import type { Props as ButtonProps } from 'design/components/button/spec';

/** `size` changes only its font size, which the switch is drawn from, as on `Button`. */
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
