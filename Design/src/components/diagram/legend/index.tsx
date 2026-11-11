import React from 'react';

// Spec
import type { LegendItem } from 'design/components/diagram/spec';

// Partials
import { Provider } from './context';
import { Root } from './root';

type Props = {
  items: LegendItem[];
};

const Legend: React.FunctionComponent<Props> = ({ items }) => {
  return (
    <Provider items={items}>
      <Root />
    </Provider>
  );
};

export { Legend };
