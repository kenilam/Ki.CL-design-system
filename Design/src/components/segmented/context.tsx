import { createContext, useContext } from 'react';

import type { SegmentedProps } from './spec';

type ContextValue = Pick<SegmentedProps, 'defaultValue' | 'value'> & {
  name: string;
  onValueChange: (value: string) => void;
  onPress: (pointer: boolean) => void;
};

const SegmentedContext = createContext<ContextValue | null>(null);

const useSegmented = () => {
  const context = useContext(SegmentedContext);

  if (!context) {
    throw new Error('SegmentedItem must be used within Segmented');
  }

  return context;
};

export { SegmentedContext, useSegmented };
