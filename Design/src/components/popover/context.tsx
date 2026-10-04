import { createContext, useContext } from 'react';

type ContextValue = {
  /** Ties the trigger to the panel, and names the anchor they position by. */
  id: string;
  anchor: string;
  /** Set by `Popover inline`: the panel renders at the end of the page. */
  inline: boolean;
  open: boolean;
  setOpen: (open: boolean) => void;
  /** Which parts are rendered, so the trigger only claims what exists. */
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
