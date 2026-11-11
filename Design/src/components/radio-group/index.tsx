import React from 'react';

// Spec
import type { RadioGroupProps } from './spec';

// Styles
import './styles.scss';

// Context
import { Provider } from './context';

// Partials
import { Radio } from './radio';
import { Root } from './root';

const RadioGroup = React.forwardRef<HTMLFieldSetElement, RadioGroupProps>(
  ({ defaultValue, name, onValueChange, required, value, ...rest }, ref) => {
    return (
      <Provider
        defaultValue={defaultValue}
        name={name}
        onValueChange={onValueChange}
        required={required}
        value={value}
      >
        <Root ref={ref} {...rest} />
      </Provider>
    );
  }
);

RadioGroup.displayName = 'RadioGroup';

export type { RadioGroupProps, RadioProps } from './spec';
export { Radio, RadioGroup };
