import React from 'react';

// Spec
import type { CheckboxGroupProps } from 'design/components/checkbox/spec';

// Context
import { Provider } from 'design/components/checkbox/context';

// Partials
import { Root } from './root';

const CheckboxGroup = React.forwardRef<HTMLFieldSetElement, CheckboxGroupProps>(
  ({ defaultValue, name, onValueChange, value, ...rest }, ref) => {
    return (
      <Provider
        defaultValue={defaultValue}
        name={name}
        onValueChange={onValueChange}
        value={value}
      >
        <Root {...rest} ref={ref} />
      </Provider>
    );
  }
);

CheckboxGroup.displayName = 'CheckboxGroup';

export { CheckboxGroup };
