import React from 'react';

// Spec
import type { ComboboxProps } from 'design/components/combobox/spec';

// Partials
import { Nodes, useComboboxNodes } from './nodes';
import { Open, useComboboxOpen } from './open';

const Provider: React.FunctionComponent<ComboboxProps> = ({
  children,
  defaultOpen,
  onOpenChange,
  open,
}) => {
  return (
    <Nodes>
      <Open defaultOpen={defaultOpen} onOpenChange={onOpenChange} open={open}>
        {children}
      </Open>
    </Nodes>
  );
};

export { Provider, useComboboxNodes, useComboboxOpen };
