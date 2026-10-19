import type React from 'react';

import type {
  PopoverPlacement,
  PopoverVariant,
} from 'design/components/popover/spec';

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
} & (
    | {
        /**
         * What happens at tablet width and below. `popover` shows only the
         * choice, and opens the options in a popover.
         */
        collapse: 'popover';
        /** Lays it out as it is at tablet width and below, whatever the width. */
        collapsed?: boolean;
        /** Where the panel opens. Its options align to match. */
        placement?: PopoverPlacement;
        variant?: PopoverVariant;
      }
    | {
        /**
         * `scroll` keeps the row, never wraps an option, and scrolls sideways
         * one option at a time.
         */
        collapse: 'scroll';
        collapsed?: boolean;
        placement?: never;
        variant?: never;
      }
    | {
        /** Without a mode, the options share the width at any size. */
        collapse?: never;
        collapsed?: never;
        placement?: never;
        variant?: never;
      }
  );

export type SegmentedItemProps = Omit<
  React.ComponentPropsWithoutRef<'input'>,
  'checked' | 'defaultChecked' | 'name' | 'type' | 'value'
> & {
  value: string;
};
