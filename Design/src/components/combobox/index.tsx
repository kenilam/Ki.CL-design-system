import React from 'react';

// Spec
import type { ComboboxProps } from './spec';

// Partials
import { ComboboxAnchor } from './anchor';
import { ComboboxContent } from './content';
import { Provider } from './context';
import { Root } from './root';

// Not a native `<datalist>`, which can't serve a textarea.
const Combobox: React.FC<ComboboxProps> = ({
  children,
  defaultOpen,
  onOpenChange,
  open,
}) => {
  return (
    <Provider defaultOpen={defaultOpen} onOpenChange={onOpenChange} open={open}>
      <Root>{children}</Root>
    </Provider>
  );
};

Combobox.displayName = 'Combobox';

export type {
  ComboboxAnchorProps,
  ComboboxContentProps,
  ComboboxProps,
} from './spec';

export { Combobox, ComboboxAnchor, ComboboxContent };
