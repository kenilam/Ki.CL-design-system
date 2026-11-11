import React from 'react';

// Components
import { List } from 'design/components';

// Hooks
import { useResponsive } from 'design/hooks';

// Context
import { useVariables } from 'design/docs/tokens/variables/context';

// Partials
import { Probe } from './probe';
import { Variable } from './variable';

const Root: React.FunctionComponent = () => {
  const { isNarrow } = useResponsive();
  const { fill, names } = useVariables();

  return (
    <>
      <Probe />
      <List alignItems='start' fill={isNarrow ? 12 : fill} gap='normal'>
        {names.map((name) => {
          return <Variable key={name} name={name} />;
        })}
      </List>
    </>
  );
};

export { Root };
