import React from 'react';
import { FormProvider, type FieldValues } from 'react-hook-form';
import classNames from 'classnames';

import type { FormProps } from './spec';

import './styles.scss';

const CLASS_NAME = 'kicl--components--form';

/**
 * `noValidate` defaults to true because react-hook-form does the validation.
 * The grid is in the stylesheet, not `Layout`, because callers wrap Form in
 * their own `Layout` and two sets of layout classes on one element clash.
 */
function Form<TFieldValues extends FieldValues>({
  action,
  'aria-describedby': ariaDescribedBy,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  autoComplete,
  children,
  className,
  id,
  method,
  name,
  noValidate = true,
  onSubmit,
  ...form
}: FormProps<TFieldValues>) {
  return (
    <FormProvider {...form}>
      <form
        action={action}
        aria-describedby={ariaDescribedBy}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        autoComplete={autoComplete}
        className={classNames(CLASS_NAME, className)}
        id={id}
        method={method}
        name={name}
        noValidate={noValidate}
        onSubmit={
          onSubmit ??
          ((event) => {
            event.preventDefault();
          })
        }
      >
        {children}
      </form>
    </FormProvider>
  );
}

export { Form };
