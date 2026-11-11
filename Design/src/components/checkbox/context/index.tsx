import React, { createContext, useContext } from 'react';

// Spec
import type { CheckboxGroupProps } from 'design/components/checkbox/spec';

// Partials
import { Items } from './items';
import { useGroup } from './use-group';

type Props = React.PropsWithChildren<
  Pick<CheckboxGroupProps, 'defaultValue' | 'name' | 'onValueChange' | 'value'>
>;

const CheckboxGroupContext = createContext<ReturnType<typeof useGroup> | null>(
  null
);

const Provider: React.FunctionComponent<Props> = ({ children, ...options }) => {
  const group = useGroup(options);

  return (
    <CheckboxGroupContext.Provider value={group}>
      <Items>{children}</Items>
    </CheckboxGroupContext.Provider>
  );
};

const useCheckboxGroup = () => {
  return useContext(CheckboxGroupContext);
};

export { useCheckboxItems } from './items';
export { Provider, useCheckboxGroup };
