import React from 'react';
import classNames from 'classnames';
import * as Tb from 'react-icons/tb';

import {
  Button,
  Menu,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from 'design/components';

import type { Props } from 'design/components/button/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          after={<Tb.TbChevronDown aria-hidden />}
          variant='secondary'
          {...props}
        >
          More
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <Menu
          aria-label='More'
          autoFlow='row'
          alignItems='stretch'
          gap='narrow'
        >
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
            className={classNames(
              'kicl-font-weight-bold',
              'kicl-inline-size-full'
            )}
            justifyContent='center'
            level='error'
          >
            Delete
          </Button>
        </Menu>
      </PopoverContent>
    </Popover>
  );
};

export { Preview };
