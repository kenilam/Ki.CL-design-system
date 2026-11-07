import { createContext, useContext, type CSSProperties } from 'react';

type ContextValue = {
  id: string;
  anchor: string;
  /** Sets the anchor on the element it's spread on, for parts and composed anchors. */
  anchorStyle: CSSProperties;
  inline: boolean;
  open: boolean;
  setOpen: (open: boolean) => void;
  /** So the trigger only points at parts that are rendered. */
  content: boolean;
  setContent: (content: boolean) => void;
  hint: boolean;
  setHint: (hint: boolean) => void;
};

const PopoverContext = createContext<ContextValue | null>(null);

const usePopover = () => {
  const ctx = useContext(PopoverContext);
  if (!ctx) {
    throw new Error('Popover parts must be used within Popover');
  }
  return ctx;
};

export { PopoverContext, usePopover };
