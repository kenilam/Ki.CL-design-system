import React from 'react';
import * as Bs from 'react-icons/bs';

import { Button, Menu } from 'design/components';

import type { Props } from 'design/components/menu/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <Menu aria-label='Formatting' gap='narrowest' {...props}>
      <Button aria-label='Bold' variant='ghost'>
        <Bs.BsTypeBold aria-hidden />
      </Button>
      <Button aria-label='Italic' variant='ghost'>
        <Bs.BsTypeItalic aria-hidden />
      </Button>
      <Button aria-label='Link' variant='ghost'>
        <Bs.BsLink aria-hidden />
      </Button>
    </Menu>
  );
};

export { Preview };
