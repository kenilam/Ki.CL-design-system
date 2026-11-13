import type { ComponentPropsWithoutRef, ReactNode } from 'react';

import { ALIGNS, SIDES, VARIANTS } from 'design/components/spec';
import type { Align, Gap, Side, Variant } from 'design/components/spec';

export type PopoverProps = {
  children?: ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  /**
   * For a trigger inside running text. The panel renders at the end of the
   * page, where a block is valid markup.
   */
  inline?: boolean;
};

export type PopoverTriggerProps = ComponentPropsWithoutRef<'button'> & {
  /** If the child has its own `id`, name the panel with `aria-label`. */
  asChild?: boolean;
};

/** The panel flips to the opposite side when there's no room. */
export type { Side as PopoverSide } from 'design/components/spec';

export type { Align as PopoverAlign } from 'design/components/spec';

/** A side alone aligns to `start`. */
export type PopoverPlacement = Side | `${Side}-${Align}`;

export const POPOVER_PLACEMENTS = SIDES.flatMap((side) => {
  return ALIGNS.map((align) => {
    return `${side}-${align}` as const;
  });
});

export type PopoverVariant = Exclude<Variant, 'ghost'>;

export const POPOVER_VARIANTS = VARIANTS.filter(
  (variant): variant is PopoverVariant => {
    return variant !== 'ghost';
  }
);

/**
 * Named by the trigger's text unless given `aria-label` or `aria-labelledby`.
 */
export type PopoverContentProps = ComponentPropsWithoutRef<'section'> & {
  /**
   * Renders the children while closed, for a panel CSS shows in place at some
   * widths.
   */
  forceMount?: boolean;
  placement?: PopoverPlacement;
  offset?: Gap;
  variant?: PopoverVariant;
};

/** Text only, since the trigger reads it through `aria-describedby`. */
export type PopoverHintProps = Omit<PopoverContentProps, 'forceMount' | 'role'>;
