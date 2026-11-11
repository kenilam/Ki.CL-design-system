import { useId, useState } from 'react';

// Spec
import type { CheckboxGroupProps } from 'design/components/checkbox/spec';

type Options = Pick<
  CheckboxGroupProps,
  'defaultValue' | 'name' | 'onValueChange' | 'value'
>;

const useGroup = ({
  defaultValue = [],
  name,
  onValueChange,
  value: controlled,
}: Options) => {
  const reactId = useId();
  const [uncontrolled, setUncontrolled] = useState(defaultValue);

  const value = controlled ?? uncontrolled;

  const change = (next: string[]) => {
    if (controlled === undefined) {
      setUncontrolled(next);
    }

    onValueChange?.(next);
  };

  return {
    change,
    name: name ?? reactId,
    onCheck: (item: string, checked: boolean) => {
      change(
        checked
          ? [
              ...value.filter((current) => {
                return current !== item;
              }),
              item,
            ]
          : value.filter((current) => {
              return current !== item;
            })
      );
    },
    value,
  };
};

export { useGroup };
