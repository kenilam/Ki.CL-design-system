import React, { createContext, useContext } from 'react';

// Spec
import type { DatePickerProps } from 'design/components/date-picker/spec';

// Partials
import { Selection } from './selection';
import { useField } from './use-field';

type Props = React.PropsWithChildren<{ picker: DatePickerProps }>;

const DatePickerContext = createContext<ReturnType<typeof useField> | null>(
  null
);

const Provider: React.FunctionComponent<Props> = ({ children, picker }) => {
  const field = useField(picker);

  return (
    <DatePickerContext.Provider value={field}>
      <Selection picker={picker}>{children}</Selection>
    </DatePickerContext.Provider>
  );
};

const useDatePicker = () => {
  const datePicker = useContext(DatePickerContext);

  if (!datePicker) {
    throw new Error('DatePicker parts must be used within DatePicker');
  }

  return datePicker;
};

export { useSelection } from './selection';
export { Provider, useDatePicker };
