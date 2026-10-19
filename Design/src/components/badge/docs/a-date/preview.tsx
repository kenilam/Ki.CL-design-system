import React from 'react';

import { Badge } from 'design/components';

import type { Props } from 'design/components/badge/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <Badge dateTime='2026-10-14' is='time' variant='ghost' {...props}>
    14 Oct
  </Badge>
);

export { Preview };
