import React, { createContext, useContext, useId } from 'react';

// Spec
import type { SheetProps } from 'design/components/sheet/spec';

type Props = React.PropsWithChildren<
  Pick<SheetProps, 'closable' | 'footer' | 'header' | 'id'>
>;

type Value = Required<Pick<SheetProps, 'closable' | 'id'>> &
  Pick<SheetProps, 'footer' | 'header'>;

const SheetContext = createContext<Value | null>(null);

const Provider: React.FunctionComponent<Props> = ({
  children,
  closable = true,
  footer,
  header,
  id,
}) => {
  const generated = useId();

  return (
    <SheetContext.Provider
      value={{ closable, footer, header, id: id ?? generated }}
    >
      {children}
    </SheetContext.Provider>
  );
};

const useSheet = () => {
  const sheet = useContext(SheetContext);

  if (!sheet) {
    throw new Error('useSheet needs a Sheet around it.');
  }

  return sheet;
};

export { Provider, useSheet };
