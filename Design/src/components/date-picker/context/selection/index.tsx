import React, { createContext, useContext } from 'react';

// Spec
import type { DatePickerProps } from 'design/components/date-picker/spec';

// Partials
import { useSelected } from './use-selected';

type Props = React.PropsWithChildren<{ picker: DatePickerProps }>;

const SelectionContext = createContext<ReturnType<typeof useSelected> | null>(
  null
);

const Selection: React.FunctionComponent<Props> = ({ children, picker }) => {
  const selection = useSelected(picker);

  return (
    <SelectionContext.Provider value={selection}>
      {children}
    </SelectionContext.Provider>
  );
};

const useSelection = () => {
  const selection = useContext(SelectionContext);

  if (!selection) {
    throw new Error('DatePicker parts must be used within DatePicker');
  }

  return selection;
};

export { Selection, useSelection };
