import React from 'react';

import { Button, Dialog, Text } from 'design/components';

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
      id='dialog-not-closable'
      title='Read this first'
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
