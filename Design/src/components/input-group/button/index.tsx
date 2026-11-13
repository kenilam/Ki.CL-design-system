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
>((props, ref) => {
  if (props.variant === 'primary') {
    const { className, size = 'small', variant, ...rest } = props;

    return (
      <Button
        {...rest}
        className={classNames(CLASS_NAME, className)}
        ref={ref}
        size={size}
        variant={variant}
      />
    );
  }

  const { className, variant, ...rest } = props;

  return (
    <Button
      {...rest}
      className={classNames(CLASS_NAME, className)}
      ref={ref}
      unstyled
    />
  );
});

InputGroupButton.displayName = 'InputGroupButton';

export { InputGroupButton };
