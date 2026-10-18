import type React from 'react';

export type CheckedState = boolean | 'indeterminate';

export type Props = Omit<
  React.ComponentPropsWithoutRef<'input'>,
  'checked' | 'defaultChecked' | 'type'
> & {
  checked?: CheckedState;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  /** The visible label. The `<label>` wraps the box, so clicking the text toggles it. */
  children?: React.ReactNode;
};

export type CheckboxGroupProps = Omit<
  React.ComponentPropsWithoutRef<'fieldset'>,
  'onChange' | 'defaultValue'
> & {
  /** The values of the checked boxes, for a group the page controls. */
  value?: string[];
  defaultValue?: string[];
  onValueChange?: (value: string[]) => void;
  /** Visible group name, rendered as the `<legend>`. */
  legend?: React.ReactNode;
  /** Shared by every box, so a form sends the checked values under one name. */
  name?: string;
  /**
   * The label of a box above the others that checks or clears them all. It
   * is checked when they all are, and partly checked when some are.
   */
  selectAll?: React.ReactNode;
};
