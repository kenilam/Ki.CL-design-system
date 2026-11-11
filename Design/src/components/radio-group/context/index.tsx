import React, { createContext, useContext, useId } from 'react';

// Spec
import type { RadioGroupProps } from 'design/components/radio-group/spec';

type Props = React.PropsWithChildren<
  Pick<
    RadioGroupProps,
    'defaultValue' | 'name' | 'onValueChange' | 'required' | 'value'
  >
>;

type RadioGroup = Pick<
  RadioGroupProps,
  'defaultValue' | 'required' | 'value'
> & {
  name: string;
  onValueChange: (value: string) => void;
};

const RadioGroupContext = createContext<RadioGroup | null>(null);

const Provider: React.FunctionComponent<Props> = ({
  children,
  defaultValue,
  name,
  onValueChange,
  required,
  value,
}) => {
  const reactId = useId();

  return (
    <RadioGroupContext.Provider
      value={{
        defaultValue,
        name: name ?? reactId,
        onValueChange: (next) => {
          onValueChange?.(next);
        },
        required,
        value,
      }}
    >
      {children}
    </RadioGroupContext.Provider>
  );
};

const useRadioGroup = () => {
  const ctx = useContext(RadioGroupContext);
  if (!ctx) {
    throw new Error('Radio must be used within RadioGroup');
  }
  return ctx;
};

export { Provider, useRadioGroup };
