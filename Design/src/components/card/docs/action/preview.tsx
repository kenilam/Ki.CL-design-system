import React from 'react';
import * as Ri from 'react-icons/ri';

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

const Preview: React.FC<Props> = (props) => (
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
                <Ri.RiMoreLine aria-hidden />
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
                before={<Ri.RiVolumeMuteLine aria-hidden />}
                className='kicl-inline-size-full'
                level='warning'
                size='small'
                variant='secondary'
              >
                Mute
              </Button>
              <Button
                before={<Ri.RiCheckLine aria-hidden />}
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

export { Preview };
