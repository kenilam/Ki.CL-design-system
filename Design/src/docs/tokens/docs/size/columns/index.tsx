import React from 'react';

// Components
import { List } from 'design/components';

// Spec
import { COLUMN_SPANS } from 'design/components';

// Partials
import { Column } from './column';

const Columns: React.FunctionComponent = () => {
  return (
    <List gap='narrow'>
      {COLUMN_SPANS.map((span) => {
        return <Column key={span} span={span} />;
      })}
    </List>
  );
};

export { Columns };
