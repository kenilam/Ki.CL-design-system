import type React from 'react';
import { useFormContext } from 'react-hook-form';

// Partials
import { useFormField } from './field';
import { useFormItem } from './item';

function useFieldError() {
  const field = useFormField();
  const form = useFormContext();

  return field && form
    ? form.getFieldState(field.name, form.formState).error
    : undefined;
}

function useFormItemControl({
  'aria-describedby': describedBy,
  'aria-invalid': invalid,
  id,
  required,
}: Pick<
  React.ComponentPropsWithoutRef<'input'>,
  'aria-describedby' | 'aria-invalid' | 'id' | 'required'
>) {
  const item = useFormItem();
  const field = useFormField();
  const error = useFieldError();

  if (!item) {
    return {
      'aria-describedby': describedBy,
      'aria-invalid': invalid,
      id,
      required,
    };
  }

  const ids = new Set([
    ...(describedBy?.split(' ') ?? []),
    item.descriptionId,
    error ? item.messageId : undefined,
  ]);

  return {
    'aria-describedby': [...ids].filter(Boolean).join(' ') || undefined,
    'aria-invalid': error ? true : invalid,
    id: item.id,
    required: required ?? ((item.required ?? field?.required) || undefined),
  };
}

export { useFieldError, useFormField, useFormItem, useFormItemControl };
