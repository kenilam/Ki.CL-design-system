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

  // `useId` output has characters an anchor name or selector won't accept.
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
