import { createContext, useContext, type RefObject } from 'react';

type ContextValue = {
  anchor: RefObject<HTMLElement | null>;
  content: RefObject<HTMLElement | null>;
  close: () => void;
};

const ComboboxContext = createContext<ContextValue | null>(null);

const useCombobox = () => {
  const ctx = useContext(ComboboxContext);
  if (!ctx) {
    throw new Error('Combobox parts must be used within Combobox');
  }
  return ctx;
};

const focusables = (node: HTMLElement | null, selector: string) => {
  return node ? Array.from(node.querySelectorAll<HTMLElement>(selector)) : [];
};

export { ComboboxContext, focusables, useCombobox };
