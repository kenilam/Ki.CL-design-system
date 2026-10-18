import React from 'react';

import { Animation, Badge } from 'design/components';

import type { Props } from 'design/components/animation/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <Animation delay={600} key='delay' property='zoom-in' {...props}>
    <Badge>After 600 ms</Badge>
  </Animation>
);

export { Preview };
