import React from 'react';

import { Badge, Button } from 'design/components';

import type { Props } from 'design/components/button/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <Button after={<Badge>3</Badge>} {...props}>
    Inbox
  </Button>
);

export { Preview };
