import React from 'react';
import * as Ri from 'react-icons/ri';

import {
  Button,
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from 'design/components';

import type { Props } from 'design/components/card/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <Card size={4} {...props}>
    <CardHeader>
      <CardTitle is='h3'>Notifications</CardTitle>
      <CardDescription>Three unread</CardDescription>
      <CardAction>
        <Button aria-label='More' variant='ghost'>
          <Ri.RiMoreLine aria-hidden />
        </Button>
      </CardAction>
    </CardHeader>
  </Card>
);

export { Preview };
