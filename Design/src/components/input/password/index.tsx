import React from 'react';

// Components
import { FormItem } from 'design/components/form';

// Partials
import { Provider } from './context';
import { Root } from './root';

// Spec
import type { FormItemFieldProps } from 'design/components/form';
import type { InputProps } from 'design/components/input';

type Props = Omit<InputProps, 'after' | 'type' | keyof FormItemFieldProps> &
  FormItemFieldProps;

const PasswordInput = React.forwardRef<HTMLInputElement, Props>(
  ({ description, label, layout, ...props }, ref): React.ReactElement => {
    if (label || description) {
      return (
        <FormItem
          {...layout}
          description={description}
          label={label}
          required={props.required}
        >
          <PasswordInput {...props} ref={ref} />
        </FormItem>
      );
    }

    return (
      <Provider>
        <Root {...props} ref={ref} />
      </Provider>
    );
  }
);

PasswordInput.displayName = 'PasswordInput';

export { PasswordInput };
