import React, { createContext, useContext } from 'react';

// Spec
import type { SegmentedProps } from 'design/components/segmented/spec';

// Partials
import { Choice } from './choice';
import { Popover } from './popover';
import { useGroup } from './use-group';

type Props = React.PropsWithChildren<
  Pick<
    SegmentedProps,
    | 'aria-label'
    | 'block'
    | 'collapse'
    | 'defaultValue'
    | 'disabled'
    | 'name'
    | 'onValueChange'
    | 'placement'
    | 'value'
    | 'variant'
  > & {
    options: SegmentedProps['children'];
  }
>;

const SegmentedContext = createContext<ReturnType<typeof useGroup> | null>(
  null
);

const Provider: React.FunctionComponent<Props> = ({
  children,
  defaultValue,
  name,
  onValueChange,
  options,
  value,
  ...props
}) => {
  const group = useGroup(props, options);

  return (
    <SegmentedContext.Provider value={group}>
      <Choice
        defaultValue={defaultValue}
        name={name}
        onValueChange={onValueChange}
        value={value}
      >
        <Popover collapse={props.collapse}>{children}</Popover>
      </Choice>
    </SegmentedContext.Provider>
  );
};

const useSegmented = () => {
  const context = useContext(SegmentedContext);

  if (!context) {
    throw new Error('SegmentedItem must be used within Segmented');
  }

  return context;
};

export { useChoice } from './choice';
export { Provider, useSegmented };
