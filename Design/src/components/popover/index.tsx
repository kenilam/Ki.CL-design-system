import React, { useId, useState } from 'react';

// Spec
import type { PopoverProps } from './spec';

// Constants
import { CLASS_NAME } from './constants';

// Context
import { PopoverContext } from './context';

// Partials
import { PopoverContent } from './content';
import { PopoverHint } from './hint';
import { PopoverTrigger } from './trigger';

/**
 * Anchored overlay, built on the browser's own popover.
 *
 * The panel carries `popover` and the trigger points at it with
 * `popovertarget`, so opening, closing, dismissing on an outside click and
 * dismissing on Escape are all the platform's work. What is left here is the
 * controlled-open contract, which the platform has no opinion about, so a
 * caller can open and close the panel itself.
 *
 * The gain is not only less code. A popover lives in the top layer, so no
 * ancestor's `overflow` or stacking context can clip it, and the panel stays
 * mounted while closed, which is what lets it animate out as well as in.
 */
const Popover: React.FC<PopoverProps> = ({
  children,
  defaultOpen = false,
  inline = false,
  onOpenChange,
  open,
}) => {
  const isControlled = open !== undefined;
  const [uncontrolled, setUncontrolled] = useState(defaultOpen);
  const [content, setContent] = useState(false);
  const [hint, setHint] = useState(false);
  const isOpen = isControlled ? Boolean(open) : uncontrolled;

  /*
   * `useId` is unique per instance but contains characters neither an anchor
   * name nor a selector will take, so it is reduced to letters and digits.
   */
  const key = useId().replace(/[^a-zA-Z0-9]/g, '');
  const id = `${CLASS_NAME}--${key}`;
  const anchor = `--${CLASS_NAME}--${key}`;

  const setOpen = (next: boolean) => {
    if (!isControlled) {
      setUncontrolled(next);
    }

    onOpenChange?.(next);
  };

  return (
    <PopoverContext.Provider
      value={{
        id,
        anchor,
        content,
        hint,
        inline,
        open: isOpen,
        setContent,
        setHint,
        setOpen,
      }}
    >
      {children}
    </PopoverContext.Provider>
  );
};

Popover.displayName = 'Popover';

export type {
  PopoverContentProps,
  PopoverHintProps,
  PopoverPlacement,
  PopoverProps,
  PopoverTriggerProps,
  PopoverVariant,
} from './spec';

export { PopoverContent, PopoverHint, PopoverTrigger, Popover };
