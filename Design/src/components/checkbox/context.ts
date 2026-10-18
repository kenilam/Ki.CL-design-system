import { createContext, useContext } from 'react';

type ContextValue = {
  name: string;
  /** The values of the checked boxes. */
  value: string[];
  onCheck: (value: string, checked: boolean) => void;
  /** A box joins the group while it is mounted, so "select all" knows it. */
  register: (value: string, disabled: boolean) => () => void;
};

const CheckboxGroupContext = createContext<ContextValue | null>(null);

/** The group a checkbox sits in, or null for a checkbox on its own. */
const useCheckboxGroup = () => useContext(CheckboxGroupContext);

export { CheckboxGroupContext, useCheckboxGroup };
