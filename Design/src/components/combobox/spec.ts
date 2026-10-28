import type { CSSProperties, ReactElement, ReactNode, Ref } from 'react';

import type { PopoverContentProps } from 'design/components/popover/spec';

export type ComboboxProps = {
  children?: ReactNode;
  /**
   * The panel shows while this is true. Left out, the combobox opens itself
   * when the field is focused or typed in, and closes on Escape or when focus
   * leaves the field and the panel. A pick leaves it open, as every list in
   * the system does.
   */
  open?: boolean;
  /** Shows the panel on mount, and the combobox takes it from there. */
  defaultOpen?: boolean;
  /** Reports each change, asked for or made by the combobox itself. */
  onOpenChange?: (open: boolean) => void;
};

export type ComboboxAnchorProps = {
  children: ReactElement<{
    className?: string;
    ref?: Ref<HTMLElement>;
    style?: CSSProperties;
  }>;
};

/** Needs a name: pass `aria-label` or `aria-labelledby`. */
export type ComboboxContentProps = Omit<
  PopoverContentProps,
  'popover' | 'role'
>;
