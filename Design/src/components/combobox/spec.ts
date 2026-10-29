import type { CSSProperties, ReactElement, ReactNode, Ref } from 'react';

import type { PopoverContentProps } from 'design/components/popover/spec';

export type ComboboxProps = {
  children?: ReactNode;
  /**
   * Left out, the panel opens on focus or input and closes on Escape or when
   * focus leaves. A pick leaves it open.
   */
  open?: boolean;
  defaultOpen?: boolean;
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
