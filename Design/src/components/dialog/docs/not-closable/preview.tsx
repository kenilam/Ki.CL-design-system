import React from 'react';

import { Button, Dialog, Heading, Text } from 'design/components';

import type { Props } from 'design/components/dialog/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <>
    <Button command='show-modal' commandFor='dialog-not-closable'>
      Open
    </Button>
    <Dialog
      className='kicl-min-block-size-columns-3'
      closable={false}
      footer={
        <Button command='close' commandFor='dialog-not-closable'>
          I understand
        </Button>
      }
      header={
        <Heading dense is='h2' lookLike='h4'>
          Read this first
        </Heading>
      }
      id='dialog-not-closable'
      {...props}
    >
      <Text>
        This workspace moves to a new plan on 1 November. Billing stays the same
        until then.
      </Text>
    </Dialog>
  </>
);

export { Preview };
