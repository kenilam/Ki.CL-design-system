import React, { useContext } from 'react';
import classNames from 'classnames';
import { useFormContext } from 'react-hook-form';

import { FormFieldContext, FormItemContext } from './context';
import type { FormLabelProps } from './spec';

const CLASS_NAME = 'kicl--components--form__label';

const FormLabel = React.forwardRef<HTMLLabelElement, FormLabelProps>(
  ({ className, required, children, ...rest }, ref) => {
    const field = useContext(FormFieldContext);
    const item = useContext(FormItemContext);
    const form = useFormContext();
    const error =
      field && form
        ? form.getFieldState(field.name, form.formState).error
        : undefined;

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
