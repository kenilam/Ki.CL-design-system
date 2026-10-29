import React from 'react';

import { Heading } from 'design/components';

import type { Props } from 'design/components/heading/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return <Heading {...props}>Ki.CL design system</Heading>;
};

export { Preview };
