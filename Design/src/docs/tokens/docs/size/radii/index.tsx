import React from 'react';

// Components
import { List } from 'design/components';

// Partials
import { Radius } from './radius';

// Constants
import { RADII } from './constants';

const Radii: React.FunctionComponent = () => {
  return (
    <List autoFlow='row' display='flex' gap='normal' wrap>
      {RADII.map((radius) => {
        return <Radius key={radius} radius={radius} />;
      })}
    </List>
  );
};

export { Radii };
