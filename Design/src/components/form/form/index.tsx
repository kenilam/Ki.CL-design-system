import React from 'react';
import { FormProvider, type FieldValues } from 'react-hook-form';

// Spec
import type { FormProps } from 'design/components/form/spec';

// Partials
import { Root } from './root';

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
  noValidate,
  onSubmit,
  ...form
}: FormProps<TFieldValues>) {
  return (
    <FormProvider {...form}>
      <Root
        action={action}
        aria-describedby={ariaDescribedBy}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        autoComplete={autoComplete}
        className={className}
        id={id}
        method={method}
        name={name}
        noValidate={noValidate}
        onSubmit={onSubmit}
      >
        {children}
      </Root>
    </FormProvider>
  );
}

export { Form };
