import React from 'react';
import * as Tb from 'react-icons/tb';

import { Button, Menu } from 'design/components';

import type { Props } from 'design/components/menu/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <Menu aria-label='Formatting' gap='narrowest' {...props}>
      <Button aria-label='Bold' variant='ghost'>
        <Tb.TbBold aria-hidden />
      </Button>
      <Button aria-label='Italic' variant='ghost'>
        <Tb.TbItalic aria-hidden />
      </Button>
      <Button aria-label='Link' variant='ghost'>
        <Tb.TbLink aria-hidden />
      </Button>
    </Menu>
  );
};

export { Preview };
