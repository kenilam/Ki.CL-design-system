import React from 'react';
import * as Ri from 'react-icons/ri';

import { Button, Menu } from 'design/components';

import type { Props } from 'design/components/menu/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <Menu aria-label='Formatting' gap='narrowest' {...props}>
    <Button aria-label='Bold' variant='ghost'>
      <Ri.RiBold aria-hidden />
    </Button>
    <Button aria-label='Italic' variant='ghost'>
      <Ri.RiItalic aria-hidden />
    </Button>
    <Button aria-label='Link' variant='ghost'>
      <Ri.RiLink aria-hidden />
    </Button>
  </Menu>
);

export { Preview };
