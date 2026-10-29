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
  /** `pointer` is false when the arrow keys made the choice. */
  onValueChange?: (value: string, details: { pointer: boolean }) => void;
  name?: string;
} & (
    | {
        /** Applies at tablet width and below. */
        collapse: 'popover';
        /** Uses the collapsed layout at every width. */
        collapsed?: boolean;
        placement?: PopoverPlacement;
        variant?: PopoverVariant;
      }
    | {
        collapse: 'scroll';
        collapsed?: boolean;
        placement?: never;
        variant?: never;
      }
    | {
        /** Without it, the options share the width at any size. */
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
