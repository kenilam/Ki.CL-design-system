import React from 'react';

import { PasswordInput } from 'design/components';

import type { Props } from 'design/components/input/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return <PasswordInput aria-label='Password' {...props} />;
};

export { Preview };
