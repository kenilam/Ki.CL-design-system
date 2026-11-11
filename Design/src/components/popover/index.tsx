import React from 'react';

// Spec
import type { PopoverProps } from './spec';

// Partials
import { PopoverContent } from './content';
import { PopoverHint } from './hint';
import { Provider } from './context';
import { PopoverTrigger } from './trigger';

const Popover: React.FC<PopoverProps> = ({
  children,
  defaultOpen,
  inline,
  onOpenChange,
  open,
}) => {
  return (
    <Provider
      defaultOpen={defaultOpen}
      inline={inline}
      onOpenChange={onOpenChange}
      open={open}
    >
      {children}
    </Provider>
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
