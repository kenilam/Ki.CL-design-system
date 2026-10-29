import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { Textarea } from 'design/components/textarea';

// Spec
import type { InputGroupTextareaProps } from './spec';

// Constants
import { CLASS_NAME } from './constants';

const InputGroupTextarea = React.forwardRef<
  HTMLTextAreaElement,
  InputGroupTextareaProps
>(({ className, ...rest }, ref) => {
  return (
    <Textarea
      ref={ref}
      className={classNames(`${CLASS_NAME}__control`, className)}
      {...rest}
    />
  );
});

InputGroupTextarea.displayName = 'InputGroupTextarea';

export { InputGroupTextarea };
