import React, { createContext, useContext } from 'react';

// Spec
import type { ColorPickerProps } from 'design/components/color-picker/spec';

// Partials
import { useField } from './use-field';

type Props = React.PropsWithChildren<{ picker: ColorPickerProps }>;

const ColorPickerContext = createContext<ReturnType<typeof useField> | null>(
  null
);

const Provider: React.FunctionComponent<Props> = ({ children, picker }) => {
  const field = useField(picker);

  return (
    <ColorPickerContext.Provider value={field}>
      {children}
    </ColorPickerContext.Provider>
  );
};

const useColorPicker = () => {
  const colorPicker = useContext(ColorPickerContext);

  if (!colorPicker) {
    throw new Error('ColorPicker parts must be used within ColorPicker');
  }

  return colorPicker;
};

export { Provider, useColorPicker };
