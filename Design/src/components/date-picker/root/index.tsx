import React from 'react';

// Components
import { Popover } from 'design/components/popover';

// Partials
import { Panel } from './panel';
import { Trigger } from './trigger';

const Root: React.FunctionComponent = () => {
  return (
    <Popover>
      <Trigger />
      <Panel />
    </Popover>
  );
};

export { Root };
