import React, { useState } from 'react';

// Components
import { InputGroupButton } from 'design/components/input-group';
import { Input } from 'design/components/input';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Icons
import * as Ri from 'react-icons/ri';

// Spec
import type { InputProps } from 'design/components/input';

type Props = Omit<InputProps, 'type'>;

/**
 * A password field with a button that shows and hides what was typed.
 * Pressed, it shows the text; the button says which it will do next.
 */
const PasswordInput = React.forwardRef<HTMLInputElement, Props>(
  ({ autoComplete = 'current-password', before, ...rest }, ref) => {
    const [shown, setShown] = useState(false);
    const t = useCopy();
    const Icon = shown ? Ri.RiEyeOffLine : Ri.RiEyeLine;

    return (
      <Input
        {...rest}
        after={
          <InputGroupButton
            aria-label={t(
              shown ? 'action_hide_password' : 'action_show_password'
            )}
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
