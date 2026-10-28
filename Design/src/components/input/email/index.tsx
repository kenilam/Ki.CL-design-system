import React from 'react';

// Components
import { Input } from 'design/components/input';

// Icons
import * as Ri from 'react-icons/ri';

// Spec
import type { FormItemFieldProps } from 'design/components/form';
import type { InputProps } from 'design/components/input';

type Props = Omit<InputProps, 'type' | keyof FormItemFieldProps> &
  FormItemFieldProps;

/** An email field: the mail icon, the email keyboard and autofill. */
const EmailInput = React.forwardRef<HTMLInputElement, Props>(
  ({ autoComplete = 'email', before, ...rest }, ref) => (
    <Input
      {...rest}
      autoComplete={autoComplete}
      before={before ?? <Ri.RiMailLine aria-hidden />}
      inputMode='email'
      ref={ref}
      spellCheck={false}
      type='email'
    />
  )
);

EmailInput.displayName = 'EmailInput';

export { EmailInput };
