import React from 'react';

// Components
import { Input } from '..';

// Icons
import * as Ri from 'react-icons/ri';

// Spec
import type { InputProps } from '..';

type Props = Omit<InputProps, 'type'>;

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
