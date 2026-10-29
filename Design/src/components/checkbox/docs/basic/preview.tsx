import React from 'react';

import { Checkbox } from 'design/components';

import type { Props } from 'design/components/checkbox/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return <Checkbox {...props}>Remember me</Checkbox>;
};

export { Preview };
