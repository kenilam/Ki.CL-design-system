import React from 'react';

import { Badge } from 'design/components';

import type { Props } from 'design/components/badge/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <Badge className='kicl-border-radius-lg' size='small' {...props}>
    3
  </Badge>
);

export { Preview };
