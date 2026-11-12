import React, { createContext, useContext, useId } from 'react';

// Spec
import * as Spec from 'design/components/dialog/spec';

type Props = React.PropsWithChildren<
  Pick<
    Spec.Props,
    | 'closable'
    | 'closeIcon'
    | 'dense'
    | 'footer'
    | 'fullScreen'
    | 'header'
    | 'id'
    | 'open'
    | 'size'
  >
>;

type Value = Omit<Props, 'children' | 'id'> & { id: string };

const DialogContext = createContext<Value | null>(null);

const Provider: React.FunctionComponent<Props> = ({
  children,
  closable = true,
  closeIcon,
  dense = false,
  footer,
  fullScreen = false,
  header,
  id,
  open = false,
  size = 6,
}) => {
  const generated = useId();

  return (
    <DialogContext.Provider
      value={{
        closable,
        closeIcon,
        dense,
        footer,
        fullScreen,
        header,
        id: id ?? generated,
        open,
        size,
      }}
    >
      {children}
    </DialogContext.Provider>
  );
};

const useDialog = () => {
  const ctx = useContext(DialogContext);
  if (!ctx) {
    throw new Error('Dialog parts must be used within Dialog');
  }
  return ctx;
};

export { Provider, useDialog };
