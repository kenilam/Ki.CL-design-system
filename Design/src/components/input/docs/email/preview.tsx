import React from 'react';

import { EmailInput } from 'design/components';

import type { Props } from 'design/components/input/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <EmailInput aria-label='Email' placeholder='you@example.com' {...props} />
);

export { Preview };
