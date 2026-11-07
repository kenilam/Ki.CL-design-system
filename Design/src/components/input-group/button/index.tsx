import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { Button } from 'design/components/button';

// Spec
import type { InputGroupButtonProps } from 'design/components/input-group/spec';

// Styles
import './styles.scss';

// Constants
import { CLASS_NAME as INPUT_GROUP } from 'design/components/input-group/constants';

const CLASS_NAME = `${INPUT_GROUP}__button`;

const InputGroupButton = React.forwardRef<
  HTMLButtonElement,
  InputGroupButtonProps
>(({ className, size = 'small', variant = 'ghost', ...rest }, ref) => {
  return (
    <Button
      {...rest}
      {...(variant === 'ghost' ? ({ unstyled: true } as const) : { size })}
      className={classNames(CLASS_NAME, className)}
      ref={ref}
    />
  );
});

InputGroupButton.displayName = 'InputGroupButton';

export { InputGroupButton };
