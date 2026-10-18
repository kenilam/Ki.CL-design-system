import React from 'react';

import { Button, Menu } from 'design/components';

import type { Props } from 'design/components/menu/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <Menu aria-label='Form' justifyContent='end' {...props}>
    <Button variant='tertiary'>Cancel</Button>
    <Button>Save</Button>
  </Menu>
);

export { Preview };
