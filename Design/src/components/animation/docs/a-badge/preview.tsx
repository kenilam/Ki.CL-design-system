import React from 'react';

import { Animation, Badge } from 'design/components';

import type { Props } from 'design/components/animation/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <Animation key='badge' property='fade' {...props}>
    <Badge>Hello</Badge>
  </Animation>
);

export { Preview };
