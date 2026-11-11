import React from 'react';

// Components
import { List } from 'design/components';

// Context
import { useLegend } from 'design/components/diagram/legend/context';

// Partials
import { Item } from './item';

const Root: React.FunctionComponent = () => {
  const items = useLegend();

  return (
    <List display='flex' gap='narrow' wrap>
      {items.map(({ label }) => {
        return <Item key={label} label={label} />;
      })}
    </List>
  );
};

export { Root };
