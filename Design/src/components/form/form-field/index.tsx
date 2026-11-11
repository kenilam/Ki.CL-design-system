import React from 'react';
import { Controller, type FieldPath, type FieldValues } from 'react-hook-form';

// Spec
import type { FormFieldProps } from 'design/components/form/spec';

// Partials
import { Provider } from 'design/components/form/context/field';

function FormField<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(props: FormFieldProps<TFieldValues, TName>) {
  return (
    <Provider name={props.name} required={Boolean(props.rules?.required)}>
      <Controller {...props} />
    </Provider>
  );
}

export { FormField };
