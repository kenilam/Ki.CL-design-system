import type React from 'react';

export type RadioGroupProps = Omit<
  React.ComponentPropsWithoutRef<'fieldset'>,
  'onChange' | 'defaultValue'
> & {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  legend?: React.ReactNode;
  name?: string;
  required?: boolean;
};

export type RadioProps = Omit<
  React.ComponentPropsWithoutRef<'input'>,
  'checked' | 'defaultChecked' | 'name' | 'type' | 'value'
> & {
  value: string;
};
