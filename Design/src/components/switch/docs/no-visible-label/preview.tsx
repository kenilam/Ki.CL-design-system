import React from 'react';

import { Switch } from 'design/components';

import type { Props } from 'design/components/switch/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return <Switch aria-label='Notifications' {...props} />;
};

export { Preview };
