import React, { useState } from 'react';

// Components
import { InputGroupButton } from '../../input-group';
import { Input } from '..';

// Icons
import * as Ri from 'react-icons/ri';

// Spec
import type { InputProps } from '..';

type Props = Omit<InputProps, 'type'>;

/**
 * A password field with a button that shows and hides what was typed.
 * Pressed, it shows the text; the button says which it will do next.
 */
const PasswordInput = React.forwardRef<HTMLInputElement, Props>(
  ({ autoComplete = 'current-password', before, ...rest }, ref) => {
    const [shown, setShown] = useState(false);
    const Icon = shown ? Ri.RiEyeOffLine : Ri.RiEyeLine;

    return (
      <Input
        {...rest}
        after={
          <InputGroupButton
            aria-label={shown ? 'Hide password' : 'Show password'}
            aria-pressed={shown}
            onClick={() => setShown((current) => !current)}
            type='button'
          >
            <Icon aria-hidden />
          </InputGroupButton>
        }
        autoComplete={autoComplete}
        before={before ?? <Ri.RiLockLine aria-hidden />}
        ref={ref}
        type={shown ? 'text' : 'password'}
      />
    );
  }
);

PasswordInput.displayName = 'PasswordInput';

export { PasswordInput };
