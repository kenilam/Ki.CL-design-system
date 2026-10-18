import React from 'react';
import * as Ri from 'react-icons/ri';

import {
  Button,
  Menu,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from 'design/components';

import type { Props } from 'design/components/button/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <Popover>
    <PopoverTrigger asChild>
      <Button
        after={<Ri.RiArrowDownSLine aria-hidden />}
        variant='secondary'
        {...props}
      >
        More
      </Button>
    </PopoverTrigger>
    <PopoverContent>
      <Menu aria-label='More' autoFlow='row' alignItems='stretch' gap='narrow'>
        <Button
          className='kicl-inline-size-full'
          justifyContent='center'
          variant='secondary'
        >
          Rename
        </Button>
        <Button
          className='kicl-inline-size-full'
          justifyContent='center'
          variant='secondary'
        >
          Duplicate
        </Button>
        <Button
          className='kicl-font-weight-bold kicl-inline-size-full'
          justifyContent='center'
          level='error'
        >
          Delete
        </Button>
      </Menu>
    </PopoverContent>
  </Popover>
);

export { Preview };
