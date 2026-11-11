import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { InputGroup, InputGroupInput } from 'design/components';

// Spec
import type { FormItemFieldProps } from 'design/components/form';
import type { Props } from 'design/components/input/file';

// Styles
import './styles.scss';

// Constants
import { CLASS_NAME } from 'design/components/input/file/constants';

const Inline = React.forwardRef<
  HTMLInputElement,
  Omit<Props, keyof FormItemFieldProps | 'inline'>
>(({ after, className, disabled, style, ...rest }, ref) => {
  const group = classNames(
    CLASS_NAME,
    `${CLASS_NAME}--inline`,
    'kicl-backdrop-blur',
    className
  );
  const field = (
    <InputGroupInput {...rest} disabled={disabled} ref={ref} type='file' />
  );

  if (after) {
    return (
      <InputGroup className={group} disabled={disabled} style={style}>
        {field}
        {after}
      </InputGroup>
    );
  }

  return (
    <InputGroup className={group} is='label' style={style}>
      {field}
    </InputGroup>
  );
});

Inline.displayName = 'FileInputInline';

export { Inline };
