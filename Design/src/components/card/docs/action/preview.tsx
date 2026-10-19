import React from 'react';
import * as Ri from 'react-icons/ri';

import {
  Button,
  Card,
  CardAction,
  CardDescription,
  CardTitle,
} from 'design/components';

import type { Props } from 'design/components/card/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <Card
    header={
      <>
        <CardTitle is='h3'>Notifications</CardTitle>
        <CardDescription>Three unread</CardDescription>
        <CardAction>
          <Button aria-label='More' variant='ghost' size='small'>
            <Ri.RiMoreLine aria-hidden />
          </Button>
        </CardAction>
      </>
    }
    size={4}
    {...props}
  />
);

export { Preview };
