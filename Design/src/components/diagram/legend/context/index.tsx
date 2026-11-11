import React, { createContext, useContext } from 'react';

// Spec
import type { LegendItem } from 'design/components/diagram/spec';

const LegendContext = createContext<LegendItem[] | null>(null);

type Props = React.PropsWithChildren<{ items: LegendItem[] }>;

const Provider: React.FunctionComponent<Props> = ({ children, items }) => {
  return (
    <LegendContext.Provider value={items}>{children}</LegendContext.Provider>
  );
};

const useLegend = () => {
  const items = useContext(LegendContext);

  if (!items) {
    throw new Error('useLegend needs a DiagramLegend around it.');
  }

  return items;
};

export { Provider, useLegend };
