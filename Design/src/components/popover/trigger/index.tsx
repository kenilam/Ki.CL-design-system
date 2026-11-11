import React from 'react';

// Spec
import type { PopoverTriggerProps } from 'design/components/popover/spec';

// Styles
import './styles.scss';

// Partials
import { Button } from './button';
import { Child } from './child';

const PopoverTrigger = React.forwardRef<HTMLButtonElement, PopoverTriggerProps>(
  ({ asChild, ...props }, ref) => {
    if (asChild && React.isValidElement(props.children)) {
      return <Child {...props} ref={ref} />;
    }

    return <Button {...props} ref={ref} />;
  }
);

PopoverTrigger.displayName = 'PopoverTrigger';

export { PopoverTrigger };
