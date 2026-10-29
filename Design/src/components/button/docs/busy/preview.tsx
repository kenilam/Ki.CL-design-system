import React from 'react';

import { Button, Spinner } from 'design/components';

import type { Props } from 'design/components/button/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <Button aria-disabled before={<Spinner position='inline' />} {...props}>
      Saving
    </Button>
  );
};

export { Preview };
