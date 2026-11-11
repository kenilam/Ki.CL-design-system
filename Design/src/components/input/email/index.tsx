import React from 'react';

// Components
import { Input } from 'design/components/input';

// Icons
import * as Tb from 'react-icons/tb';

// Spec
import type { FormItemFieldProps } from 'design/components/form';
import type { InputProps } from 'design/components/input';

type Props = Omit<InputProps, 'type' | keyof FormItemFieldProps> &
  FormItemFieldProps;

const EmailInput = React.forwardRef<HTMLInputElement, Props>(
  ({ autoComplete = 'email', before, ...rest }, ref) => {
    return (
      <Input
        {...rest}
        autoComplete={autoComplete}
        before={before ?? <Tb.TbMail aria-hidden />}
        inputMode='email'
        ref={ref}
        spellCheck={false}
        type='email'
      />
    );
  }
);

EmailInput.displayName = 'EmailInput';

export { EmailInput };
