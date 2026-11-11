import React, { createContext, useContext } from 'react';

// Partials
import { useFiles } from './use-files';

type Props = React.PropsWithChildren<
  Pick<React.ComponentProps<'input'>, 'multiple' | 'onChange'>
>;

type Field = ReturnType<typeof useFiles> & {
  multiple?: boolean;
};

const FieldContext = createContext<Field | null>(null);

const Provider: React.FunctionComponent<Props> = ({
  children,
  multiple,
  onChange,
}) => {
  const files = useFiles(onChange);

  return (
    <FieldContext.Provider value={{ ...files, multiple }}>
      {children}
    </FieldContext.Provider>
  );
};

const useFieldContext = () => {
  const field = useContext(FieldContext);

  if (!field) {
    throw new Error('useFieldContext needs a FileInput around it.');
  }

  return field;
};

export { Provider, useFieldContext };
