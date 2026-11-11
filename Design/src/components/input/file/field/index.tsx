import React from 'react';

// Spec
import type { FormItemFieldProps } from 'design/components/form';
import type { Props } from 'design/components/input/file';

// Partials
import { Provider } from './context';
import { Root } from './root';

const Field = React.forwardRef<
  HTMLInputElement,
  Omit<Props, keyof FormItemFieldProps | 'inline'>
>(({ multiple, onChange, ...rest }, ref) => {
  return (
    <Provider multiple={multiple} onChange={onChange}>
      <Root {...rest} ref={ref} />
    </Provider>
  );
});

Field.displayName = 'FileInputField';

export { Field };
