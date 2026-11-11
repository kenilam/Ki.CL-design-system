import React from 'react';
import * as Tb from 'react-icons/tb';

import {
  Button,
  Card,
  CardAction,
  CardDescription,
  CardTitle,
  Menu,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from 'design/components';

import type { Props } from 'design/components/card/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <Card
      is='section'
      header={
        <>
          <CardTitle is='h3'>Notifications</CardTitle>
          <CardDescription>Three unread</CardDescription>
          <Popover>
            <CardAction>
              <PopoverTrigger asChild>
                <Button aria-label='More' variant='ghost' size='small'>
                  <Tb.TbDots aria-hidden />
                </Button>
              </PopoverTrigger>
            </CardAction>
            <PopoverContent>
              <Menu
                aria-label='More'
                autoFlow='row'
                alignItems='stretch'
                gap='narrow'
              >
                <Button
                  before={<Tb.TbVolume3 aria-hidden />}
                  className='kicl-inline-size-full'
                  level='warning'
                  size='small'
                  variant='secondary'
                >
                  Mute
                </Button>
                <Button
                  before={<Tb.TbCheck aria-hidden />}
                  className='kicl-inline-size-full'
                  level='confirm'
                  size='small'
                >
                  Acknowledge
                </Button>
              </Menu>
            </PopoverContent>
          </Popover>
        </>
      }
      size={4}
      {...props}
    />
  );
};

export { Preview };
