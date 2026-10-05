import type React from 'react';

import type { PopoverPlacement } from '../popover/spec';

export type SegmentedProps = Omit<
  React.ComponentPropsWithoutRef<'fieldset'>,
  'onChange' | 'defaultValue'
> & {
  value?: string;
  defaultValue?: string;
  /**
   * `pointer` is true when a click or tap made the choice, false for the arrow
   * keys, which move through the options one press at a time.
   */
  onValueChange?: (value: string, details: { pointer: boolean }) => void;
  /** Shared by every option, so the browser groups them. */
  name?: string;
  /**
   * What happens at tablet width and below. `scroll` keeps the row, never
   * wraps an option, and scrolls sideways one option at a time. `popover`
   * shows only the choice, and opens the options in a popover. Leave it out
   * and the options keep sharing the width.
   */
  collapse?: 'popover' | 'scroll';
  /** Where the panel opens with `collapse='popover'`. Its options align to match. */
  placement?: PopoverPlacement;
};

export type SegmentedItemProps = Omit<
  React.ComponentPropsWithoutRef<'input'>,
  'checked' | 'defaultChecked' | 'name' | 'type' | 'value'
> & {
  value: string;
};
