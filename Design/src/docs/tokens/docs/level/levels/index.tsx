import React from 'react';

// Components
import { List } from 'design/components';

// Hooks
import { useResponsive } from 'design/hooks';

// Spec
import { LEVELS } from 'design/components';

// Partials
import { Level } from './level';

const Levels: React.FunctionComponent = () => {
  const { isNarrow } = useResponsive();

  return (
    <List fill={isNarrow ? 12 : 6} gap='normal'>
      {LEVELS.map((level) => {
        return <Level key={level} level={level} />;
      })}
    </List>
  );
};

export { Levels };
