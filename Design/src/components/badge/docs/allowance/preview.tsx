import React from 'react';

import { Badge, BadgeLabel } from 'design/components';

import type { Props } from 'design/components/badge/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <Badge limit={10} remaining={4} size='small' {...props}>
      <BadgeLabel>Today</BadgeLabel>4 images left
    </Badge>
  );
};

export { Preview };
