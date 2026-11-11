import React from 'react';

// Components
import { List } from 'design/components';

// Hooks
import { useResponsive } from 'design/hooks';

// Partials
import { Heading } from './heading';

// Constants
import { LEVELS } from './constants';

const Headings: React.FunctionComponent = () => {
  const { isNarrow } = useResponsive();

  return (
    <List alignItems='start' fill={isNarrow ? 12 : 6} gap='normal'>
      {LEVELS.map(([level]) => {
        return <Heading key={level} level={level} />;
      })}
    </List>
  );
};

export { Headings };
