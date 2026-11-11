import React from 'react';

// Components
import { FormDescription } from 'design/components/form/form-description';

// Spec
import type { FormItemProps } from 'design/components/form/spec';

// Partials
import { Provider } from 'design/components/form/context/item';
import { Root } from './root';

const FormItem = React.forwardRef<HTMLDivElement, FormItemProps>(
  ({ gap = 'narrowest', required, ...rest }, ref) => {
    const described =
      Boolean(rest.description) ||
      React.Children.toArray(rest.children).some((child) => {
        return React.isValidElement(child) && child.type === FormDescription;
      });

    return (
      <Provider described={described} required={required}>
        <Root {...rest} gap={gap} ref={ref} />
      </Provider>
    );
  }
);

FormItem.displayName = 'FormItem';

export { FormItem };
