import React from 'react';

// Context
import {
  useCheckboxGroup,
  useCheckboxItems,
} from 'design/components/checkbox/context';

// Partials
import { Checkbox } from 'design/components/checkbox/checkbox';

const CLASS_NAME = 'kicl--components--checkbox-group__select-all';

const SelectAll: React.FunctionComponent<React.PropsWithChildren> = ({
  children,
}) => {
  const group = useCheckboxGroup();
  const items = useCheckboxItems();

  if (!group || !items) {
    return null;
  }

  const { change, value } = group;
  const { enabled } = items;
  const picked = enabled.filter((item) => {
    return value.includes(item);
  });
  let all: boolean | 'indeterminate' =
    picked.length > 0 ? 'indeterminate' : false;

  if (enabled.length > 0 && picked.length === enabled.length) {
    all = true;
  }

  return (
    <Checkbox
      checked={all}
      className={CLASS_NAME}
      onCheckedChange={(checked) => {
        change(
          checked
            ? [
                ...value.filter((item) => {
                  return !enabled.includes(item);
                }),
                ...enabled,
              ]
            : value.filter((item) => {
                return !enabled.includes(item);
              })
        );
      }}
    >
      {children}
    </Checkbox>
  );
};

export { SelectAll };
