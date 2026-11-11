import React from 'react';

// Components
import { List } from 'design/components';

// Spec
import { GAPS } from 'design/components';

// Partials
import { Gap } from './gap';

const Gaps: React.FunctionComponent = () => {
  return (
    <List gap='normal'>
      {GAPS.map((gap) => {
        return <Gap gap={gap} key={gap} />;
      })}
    </List>
  );
};

export { Gaps };
