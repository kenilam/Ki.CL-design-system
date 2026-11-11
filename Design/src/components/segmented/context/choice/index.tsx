import React, { createContext, useContext, useRef, useState } from 'react';

// Spec
import type { SegmentedProps } from 'design/components/segmented/spec';

type Props = React.PropsWithChildren<
  Pick<SegmentedProps, 'defaultValue' | 'name' | 'onValueChange' | 'value'>
>;

type Chosen = Pick<SegmentedProps, 'defaultValue' | 'name' | 'value'> & {
  chosen?: string;
  onValueChange: (value: string) => void;
  onPress: (pointer: boolean) => void;
};

const ChoiceContext = createContext<Chosen | null>(null);

const Choice: React.FunctionComponent<Props> = ({
  children,
  defaultValue,
  name,
  onValueChange,
  value,
}) => {
  // Only the popover needs this: its trigger shows the choice.
  const [chosen, setChosen] = useState(defaultValue);
  const pointer = useRef(false);

  return (
    <ChoiceContext.Provider
      value={{
        chosen,
        defaultValue,
        name,
        onPress: (byPointer) => {
          pointer.current = byPointer;
        },
        onValueChange: (next) => {
          const details = { pointer: pointer.current };

          pointer.current = false;
          setChosen(next);

          // The panel stays open on a pick: the reader may want another.
          onValueChange?.(next, details);
        },
        value,
      }}
    >
      {children}
    </ChoiceContext.Provider>
  );
};

const useChoice = () => {
  const context = useContext(ChoiceContext);

  if (!context) {
    throw new Error('SegmentedItem must be used within Segmented');
  }

  return context;
};

export { Choice, useChoice };
