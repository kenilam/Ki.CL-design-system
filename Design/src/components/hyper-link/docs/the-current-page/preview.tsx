import React from 'react';

import { HyperLink } from 'design/components';

import type { Props } from 'design/components/hyper-link/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <HyperLink to='.' {...props}>
    Hyperlink
  </HyperLink>
);

export { Preview };
