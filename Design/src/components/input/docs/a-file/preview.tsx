import React from 'react';

import { Input } from 'design/components';

import type { Props } from 'design/components/input/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <Input accept='image/*' aria-label='Photo' type='file' {...props} />
);

export { Preview };
