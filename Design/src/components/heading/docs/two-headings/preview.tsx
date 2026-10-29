import React from 'react';

import { Heading } from 'design/components';

import type { Props } from 'design/components/heading/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <>
      <Heading is='h2' {...props}>
        Components
      </Heading>
      <Heading is='h3'>Button</Heading>
    </>
  );
};

export { Preview };
