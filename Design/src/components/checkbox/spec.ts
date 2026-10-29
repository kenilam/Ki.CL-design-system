import type React from 'react';

export type CheckedState = boolean | 'indeterminate';

export type Props = Omit<
  React.ComponentPropsWithoutRef<'input'>,
  'checked' | 'defaultChecked' | 'type'
> & {
  checked?: CheckedState;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  children?: React.ReactNode;
};

export type CheckboxGroupProps = Omit<
  React.ComponentPropsWithoutRef<'fieldset'>,
  'onChange' | 'defaultValue'
> & {
  value?: string[];
  defaultValue?: string[];
  onValueChange?: (value: string[]) => void;
  legend?: React.ReactNode;
  name?: string;
  /** Label for a box that checks or clears every box in the group. */
  selectAll?: React.ReactNode;
};
