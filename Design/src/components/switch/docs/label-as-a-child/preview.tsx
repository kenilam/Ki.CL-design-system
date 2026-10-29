import React from 'react';

import { Switch, SwitchLabel } from 'design/components';

import type { Props } from 'design/components/switch/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <Switch {...props}>
      <SwitchLabel className='kicl-font-weight-bold'>Notifications</SwitchLabel>
    </Switch>
  );
};

export { Preview };
