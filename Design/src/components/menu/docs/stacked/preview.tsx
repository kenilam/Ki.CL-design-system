import React from 'react';

import { Button, Menu } from 'design/components';

import type { Props } from 'design/components/menu/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <Menu aria-label='Photo' autoFlow='row' {...props}>
    <Button variant='ghost'>Edit</Button>
    <Button variant='ghost'>Share</Button>
    <Button variant='ghost'>Delete</Button>
  </Menu>
);

export { Preview };
