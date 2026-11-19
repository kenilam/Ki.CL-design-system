import React from 'react';

// Spec
import type { PopoverProps } from 'design/components/popover/spec';

// Partials
import { Ids, usePopoverIds } from './ids';
import { Interest, usePopoverInterest } from './interest';
import { Open, usePopoverOpen } from './open';
import { Parts, usePopoverParts } from './parts';
import { Trigger, usePopoverTrigger } from './trigger';

const Provider: React.FunctionComponent<PopoverProps> = ({
  children,
  defaultOpen,
  inline,
  onOpenChange,
  open,
}) => {
  return (
    <Ids inline={inline}>
      <Open defaultOpen={defaultOpen} onOpenChange={onOpenChange} open={open}>
        <Parts>
          <Interest>{children}</Interest>
        </Parts>
      </Open>
    </Ids>
  );
};

const usePopover = () => {
  return { ...usePopoverIds(), ...usePopoverOpen(), ...usePopoverParts() };
};

export {
  Provider,
  usePopover,
  usePopoverIds,
  usePopoverInterest,
  usePopoverOpen,
  usePopoverParts,
  usePopoverTrigger,
  Trigger,
};
