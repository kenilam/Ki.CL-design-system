import React from 'react';

import { Button, Menu } from 'design/components';

import type { Props } from 'design/components/menu/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <Menu aria-label='Photo' {...props}>
    <Button variant='secondary'>Edit</Button>
    <Button variant='secondary'>Share</Button>
    <Button level='error' variant='secondary'>
      Delete
    </Button>
  </Menu>
);

export { Preview };
