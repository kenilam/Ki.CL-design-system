import React from 'react';

import { useFormItemControl } from './context';
import type { FormControlProps } from './spec';

type ControlProps = Pick<
  React.ComponentPropsWithoutRef<'input'>,
  'aria-describedby' | 'aria-invalid' | 'id' | 'required'
>;

const FormControl = ({ children }: FormControlProps) => {
  const child = React.Children.only(children);
  const valid = React.isValidElement<ControlProps>(child);
  const control = useFormItemControl(valid ? child.props : {});

  if (!valid) {
    return null;
  }

  return React.cloneElement(child, control);
};

export { FormControl };
