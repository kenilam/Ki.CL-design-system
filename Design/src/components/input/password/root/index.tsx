import React from 'react';

// Components
import { useFormItemControl } from 'design/components';
import { InputGroup, InputGroupInput } from 'design/components/input-group';

// Icons
import * as Tb from 'react-icons/tb';

// Spec
import type { InputProps } from 'design/components/input';

// Context
import { usePassword } from 'design/components/input/password/context';

// Partials
import { Reveal } from 'design/components/input/password/reveal';

type Props = Omit<InputProps, 'after' | 'type'> &
  Pick<React.ComponentProps<'input'>, 'ref'>;

const Root: React.FunctionComponent<Props> = (props) => {
  const {
    autoComplete = 'current-password',
    before,
    className,
    disabled,
    style,
    ...rest
  } = props;
  const control = useFormItemControl(props);
  const { shown } = usePassword();

  return (
    <InputGroup className={className} disabled={disabled} style={style}>
      {before ?? <Tb.TbLock aria-hidden />}
      <InputGroupInput
        {...rest}
        {...control}
        autoComplete={autoComplete}
        type={shown ? 'text' : 'password'}
      />
      <Reveal />
    </InputGroup>
  );
};

export { Root };
