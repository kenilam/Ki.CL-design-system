import React, { useState } from 'react';

// Components
import { FormItem } from 'design/components/form';
import { useFormItemControl } from 'design/components/form/context';
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
import type { FormItemFieldProps } from 'design/components/form';
import type { InputProps } from 'design/components/input';

type Props = Omit<InputProps, 'after' | 'type' | keyof FormItemFieldProps> &
  FormItemFieldProps;

const PasswordInput = React.forwardRef<HTMLInputElement, Props>(
  ({ description, label, layout, ...props }, ref): React.ReactElement => {
    const {
      autoComplete = 'current-password',
      before,
      className,
      disabled,
      style,
      ...rest
    } = props;
    const control = useFormItemControl(props);
    const [shown, setShown] = useState(false);
    const t = useCopy();
    const Icon = shown ? Ri.RiEyeOffLine : Ri.RiEyeLine;

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
      <InputGroup className={className} disabled={disabled} style={style}>
        {before ?? <Ri.RiLockLine aria-hidden />}
        <InputGroupInput
          {...rest}
          {...control}
          autoComplete={autoComplete}
          ref={ref}
          type={shown ? 'text' : 'password'}
        />
        <InputGroupButton
          aria-label={t(
            shown ? 'action_hide_password' : 'action_show_password'
          )}
          aria-pressed={shown}
          onClick={() => {
            setShown((current) => {
              return !current;
            });
          }}
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
