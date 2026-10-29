import { createContext, useContext } from 'react';

type ContextValue = {
  name: string;
  value: string[];
  onCheck: (value: string, checked: boolean) => void;
  register: (value: string, disabled: boolean) => () => void;
};

const CheckboxGroupContext = createContext<ContextValue | null>(null);

const useCheckboxGroup = () => {
  return useContext(CheckboxGroupContext);
};

export { CheckboxGroupContext, useCheckboxGroup };
