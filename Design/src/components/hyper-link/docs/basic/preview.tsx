import React from 'react';

import { HyperLink, Text } from 'design/components';

import type { Props } from 'design/components/hyper-link/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <Text>
    Read the{' '}
    <HyperLink to='#' {...props}>
      release notes
    </HyperLink>{' '}
    before you update.
  </Text>
);

export { Preview };
