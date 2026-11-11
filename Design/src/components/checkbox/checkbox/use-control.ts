import type React from 'react';
import { useCallback, useEffect } from 'react';

import { mergeRefs } from 'design/helper';

import type { Props } from 'design/components/checkbox/spec';

import {
  useCheckboxGroup,
  useCheckboxItems,
} from 'design/components/checkbox/context';

type Options = Pick<
  Props,
  'checked' | 'disabled' | 'name' | 'onChange' | 'onCheckedChange' | 'value'
> & {
  ref: React.ForwardedRef<HTMLInputElement>;
};

const useControl = ({
  checked: own,
  disabled,
  name,
  onChange,
  onCheckedChange,
  ref,
  value,
}: Options) => {
  const group = useCheckboxGroup();
  const item = group && value !== undefined ? String(value) : undefined;

  const { register } = useCheckboxItems() ?? {};

  useEffect(() => {
    return item === undefined ? undefined : register?.(item, Boolean(disabled));
  }, [disabled, item, register]);

  const checked =
    item === undefined ? own : Boolean(group?.value.includes(item));
  const isIndeterminate = checked === 'indeterminate';

  // `indeterminate` has no HTML attribute, so it is set on the element.
  const setRef = useCallback(
    (node: HTMLInputElement | null) => {
      if (node) {
        node.indeterminate = isIndeterminate;
      }
      mergeRefs(ref)(node);
    },
    [isIndeterminate, ref]
  );

  return {
    checked: checked === undefined ? undefined : checked === true,
    name: item === undefined ? name : group?.name,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(event);
      onCheckedChange?.(event.currentTarget.checked);

      if (item !== undefined) {
        group?.onCheck(item, event.currentTarget.checked);
      }
    },
    ref: setRef,
  };
};

export { useControl };
