import React from 'react';

import { HyperLink } from 'design/components';

import type { Props } from 'design/components/hyper-link/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <HyperLink to='mailto:hello@example.com' {...props}>
    hello@example.com
  </HyperLink>
);

export { Preview };
