import React from 'react';
import classNames from 'classnames';

import { useFieldError, useFormField, useFormItem } from './context';
import type { FormLabelProps } from './spec';

const CLASS_NAME = 'kicl--components--form__label';

const FormLabel = React.forwardRef<HTMLLabelElement, FormLabelProps>(
  ({ className, required, children, ...rest }, ref) => {
    const field = useFormField();
    const item = useFormItem();
    const error = useFieldError();

    if (!children) {
      return null;
    }

    return (
      <label
        ref={ref}
        className={classNames(
          CLASS_NAME,
          'kicl-font-size-small',
          'kicl-font-weight-bold',
          { 'kicl-color-error': error },
          className
        )}
        htmlFor={item?.id}
        {...rest}
      >
        {children}
        {(required ?? item?.required ?? field?.required) ? (
          <span
            className={classNames(
              `${CLASS_NAME}__required`,
              'kicl-color-error'
            )}
            aria-hidden
          >
            *
          </span>
        ) : null}
      </label>
    );
  }
);

FormLabel.displayName = 'FormLabel';

export { FormLabel };
