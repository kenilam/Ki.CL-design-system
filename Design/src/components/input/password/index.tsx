import React, { useState } from 'react';

// Components
import {
  InputGroup,
  InputGroupButton,
  InputGroupInput,
} from 'design/components/input-group';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Icons
import * as Ri from 'react-icons/ri';

// Spec
import type { InputProps } from 'design/components/input';

type Props = Omit<InputProps, 'after' | 'type'>;

/**
 * A password field with a button that shows and hides what was typed.
 * Pressed, it shows the text; the button says which it will do next.
 */
const PasswordInput = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      autoComplete = 'current-password',
      before,
      className,
      disabled,
      style,
      ...rest
    },
    ref
  ) => {
    const [shown, setShown] = useState(false);
    const t = useCopy();
    const Icon = shown ? Ri.RiEyeOffLine : Ri.RiEyeLine;

    return (
      <InputGroup className={className} disabled={disabled} style={style}>
        {before ?? <Ri.RiLockLine aria-hidden />}
        <InputGroupInput
          {...rest}
          autoComplete={autoComplete}
          ref={ref}
          type={shown ? 'text' : 'password'}
        />
        <InputGroupButton
          aria-label={t(shown ? 'action_hide_password' : 'action_show_password')}
          aria-pressed={shown}
          onClick={() => setShown((current) => !current)}
          type='button'
        >
          <Icon aria-hidden />
        </InputGroupButton>
      </InputGroup>
    );
  }
);

PasswordInput.displayName = 'PasswordInput';

export { PasswordInput };
