import { createContext, useContext } from 'react';
import type React from 'react';
import { useFormContext } from 'react-hook-form';
import type { FieldPath, FieldValues } from 'react-hook-form';

export type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
  required: boolean;
};

export const FormFieldContext = createContext<FormFieldContextValue | null>(
  null
);

export type FormItemContextValue = {
  descriptionId?: string;
  id: string;
  messageId: string;
  required?: boolean;
};

export const FormItemContext = createContext<FormItemContextValue | null>(null);

export function useFieldError() {
  const field = useContext(FormFieldContext);
  const form = useFormContext();

  return field && form
    ? form.getFieldState(field.name, form.formState).error
    : undefined;
}

export function useFormItemControl({
  'aria-describedby': describedBy,
  'aria-invalid': invalid,
  id,
  required,
}: Pick<
  React.ComponentPropsWithoutRef<'input'>,
  'aria-describedby' | 'aria-invalid' | 'id' | 'required'
>) {
  const item = useContext(FormItemContext);
  const field = useContext(FormFieldContext);
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
