import type React from 'react';

// Spec
import type { SegmentedItemProps } from 'design/components/segmented/spec';

// Context
import { useChoice, useSegmented } from 'design/components/segmented/context';

type Props = Pick<
  SegmentedItemProps,
  'onChange' | 'onKeyDown' | 'onPointerDown' | 'value'
>;

const useControl = ({ onChange, onKeyDown, onPointerDown, value }: Props) => {
  const { id } = useSegmented();
  const choice = useChoice();
  const controlled = choice.value !== undefined;

  return {
    checked: controlled ? choice.value === value : undefined,
    defaultChecked: controlled ? undefined : choice.defaultValue === value,
    name: choice.name ?? id,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(event);
      choice.onValueChange(value);

      event.currentTarget.parentElement?.scrollIntoView({
        block: 'nearest',
        inline: 'nearest',
      });
    },
    onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => {
      choice.onPress(false);
      onKeyDown?.(event);
    },
    onPointerDown: (event: React.PointerEvent<HTMLInputElement>) => {
      choice.onPress(true);
      onPointerDown?.(event);
    },
  };
};

export { useControl };
