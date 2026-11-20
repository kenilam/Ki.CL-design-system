import type React from 'react';

import type { FormItemFieldProps } from 'design/components/form';
import type { PopoverVariant } from 'design/components';

export const COLOR_PICKER_PRESENTATIONS = ['popover', 'widget'] as const;

export type ColorPickerPresentation =
  (typeof COLOR_PICKER_PRESENTATIONS)[number];

/** Forwarded to the trigger, or to the widget's value, so FormControl and FormLabel can name it. */
export type ColorPickerControlProps = Pick<
  React.ComponentPropsWithoutRef<'button'>,
  | 'aria-describedby'
  | 'aria-invalid'
  | 'aria-label'
  | 'aria-labelledby'
  | 'className'
  | 'disabled'
  | 'id'
>;

export type ColorPickerProps = ColorPickerControlProps &
  FormItemFieldProps & {
    /** Puts a button after the popover's color that copies its hex. */
    copyable?: boolean;
    /** `#rrggbb`. */
    defaultValue?: string;
    /** Called with `#rrggbb` as a slider moves. */
    onValueChange?: (value: string) => void;
    /** `popover` puts the picker behind a button that shows the color; `widget` shows it in place. */
    presentation?: ColorPickerPresentation;
    /** `#rrggbb`. */
    value?: string;
    variant?: PopoverVariant;
  };
