import React from 'react';

import { CopyInput } from 'design/components';

import type { Props } from 'design/components/input/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <CopyInput
    aria-label='Link'
    value='https://example.com/invite/4f9a'
    {...props}
  />
);

export { Preview };
