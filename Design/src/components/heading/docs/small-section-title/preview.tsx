import React from 'react';

import { Heading } from 'design/components';

import type { Props } from 'design/components/heading/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <Heading is='h2' lookLike='h5' {...props}>
    A section title set small
  </Heading>
);

export { Preview };
