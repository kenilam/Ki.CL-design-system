import React from 'react';

import { Input } from 'design/components';

import type { Props } from 'design/components/input/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return <Input aria-label='Name' defaultValue='John Smith' {...props} />;
};

export { Preview };
