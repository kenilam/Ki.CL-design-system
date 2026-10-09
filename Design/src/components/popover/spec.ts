import type { ComponentPropsWithoutRef, ReactNode } from 'react';

import type { Gap } from '../layout/spec';

export type PopoverProps = ComponentPropsWithoutRef<'div'> & {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  children?: ReactNode;
} & (
    | {
        /**
         * For a trigger inside running text, such as a highlighted phrase.
         * The wrapper leaves the line alone, so the trigger can wrap like the
         * words around it, and the panel is rendered at the end of the page,
         * where a block is valid markup.
         */
        inline: true;
        block?: never;
      }
    | {
        inline?: false;
        /** Takes its whole row, like a field, instead of sitting inline. */
        block?: boolean;
      }
  );

export type PopoverTriggerProps = ComponentPropsWithoutRef<'button'> & {
  /**
   * Makes the one child the trigger instead of wrapping it in a button: a
   * `Button`, or a `HyperLink` that should still work as a link without
   * script. If the child has its own `id`, name the panel with `aria-label`.
   */
  asChild?: boolean;
};

/**
 * Which side of the trigger the panel opens on.
 *
 * A preference rather than an instruction: whichever side is asked for, the
 * panel flips to the opposite one when there is no room, so a picker near the
 * foot of the window opens upward instead of off the screen.
 */
export type PopoverSide =
  'block-end' | 'block-start' | 'inline-start' | 'inline-end';

/**
 * Where the panel lines up along that side: its start edge with the trigger's
 * start, centred on the trigger, or its end edge with the trigger's end.
 */
export type PopoverAlign = 'start' | 'center' | 'end';

/** A side alone aligns to `start`, which is how every placement used to work. */
export type PopoverPlacement = PopoverSide | `${PopoverSide}-${PopoverAlign}`;

/** Matches `Card` and `Badge`: `ghost` is the translucent, blurred pane. */
export type PopoverVariant = 'default' | 'ghost';

/** Named by the trigger's text by default; pass `aria-label` or `aria-labelledby` to override. */
export type PopoverContentProps = ComponentPropsWithoutRef<'div'> & {
  placement?: PopoverPlacement;
  /** The gap to the trigger, on the gutter scale `Layout` uses for `gap`. */
  offset?: Gap;
  variant?: PopoverVariant;
};

/** Words only, named by the trigger with `aria-describedby`. */
export type PopoverHintProps = Omit<PopoverContentProps, 'role'>;
