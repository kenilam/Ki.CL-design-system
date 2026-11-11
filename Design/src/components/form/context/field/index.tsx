import React, { createContext, useContext } from 'react';
import type { FieldPath, FieldValues } from 'react-hook-form';

export type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
  required: boolean;
};

const FormFieldContext = createContext<FormFieldContextValue | null>(null);

const Provider: React.FunctionComponent<
  React.PropsWithChildren<FormFieldContextValue>
> = ({ children, name, required }) => {
  return (
    <FormFieldContext.Provider value={{ name, required }}>
      {children}
    </FormFieldContext.Provider>
  );
};

const useFormField = () => {
  return useContext(FormFieldContext);
};

export { Provider, useFormField };
