import React from 'react';

import { Badge, BadgeLabel } from 'design/components';

import type { Props } from 'design/components/badge/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <Badge variant='secondary' {...props}>
      <BadgeLabel>Version</BadgeLabel>2.4.0
    </Badge>
  );
};

export { Preview };
