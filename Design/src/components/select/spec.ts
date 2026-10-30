import type React from 'react';

import type { FormItemFieldProps } from 'design/components/form';

export type SelectProps = Omit<
  React.ComponentPropsWithoutRef<'select'>,
  'multiple' | 'size'
> &
  FormItemFieldProps & {
    inline?: boolean;
    onValueChange?: (value: string) => void;
    /** Shown while nothing is chosen; also makes `required` meaningful. */
    placeholder?: string;
  };

export type SelectTriggerProps = React.ComponentPropsWithoutRef<'button'>;

export type SelectValueProps = React.HTMLAttributes<HTMLElement>;

export type SelectContentProps = React.PropsWithChildren;

export type SelectItemProps = Omit<
  React.ComponentPropsWithoutRef<'option'>,
  'value'
> & {
  value: string;
};

export type SelectGroupProps = React.ComponentPropsWithoutRef<'optgroup'>;

/** Text only: the group also reads it into the native `label` attribute. */
export type SelectLabelProps = Omit<
  React.ComponentPropsWithoutRef<'legend'>,
  'children'
> & { children: string };

export type SelectSeparatorProps = React.ComponentPropsWithoutRef<'hr'>;
