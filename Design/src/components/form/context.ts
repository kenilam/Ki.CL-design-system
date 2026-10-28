import { createContext, useContext } from 'react';
import type React from 'react';
import type { FieldPath, FieldValues } from 'react-hook-form';

import type { FormDescriptionProps } from './spec';

export type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
  /** From the field's `rules.required`. */
  required: boolean;
};

export const FormFieldContext = createContext<FormFieldContextValue | null>(
  null
);

export type FormItemContextValue = {
  descriptionId: string;
  id: string;
  required?: boolean;
};

export const FormItemContext = createContext<FormItemContextValue | null>(null);

export function useFormFieldContext() {
  const field = useContext(FormFieldContext);
  const item = useContext(FormItemContext);

  if (!field) {
    throw new Error('Form field primitives must be used within <FormField>');
  }

  if (!item) {
    throw new Error('Form field primitives must be used within <FormItem>');
  }

  return {
    name: field.name,
    id: item.id,
    required: item.required ?? field.required,
    formItemId: item.id,
    formDescriptionId: item.descriptionId,
    formMessageId: `${item.id}-message`,
  };
}

export function useFormItemControl({
  description,
  id,
  'aria-describedby': describedBy,
}: Pick<React.ComponentPropsWithoutRef<'input'>, 'aria-describedby' | 'id'> & {
  description?: FormDescriptionProps['children'];
}) {
  const item = useContext(FormItemContext);

  return {
    id: id ?? item?.id,
    'aria-describedby':
      describedBy ?? (item && description ? item.descriptionId : undefined),
  };
}
