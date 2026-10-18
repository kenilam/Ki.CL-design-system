import React from 'react';

import { Button, Dialog, Heading, Text } from 'design/components';

import type { Props } from 'design/components/dialog/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <>
    <Button command='show-modal' commandFor='dialog-footer' level='error'>
      Delete
    </Button>
    <Dialog
      className='kicl-min-block-size-columns-3'
      footer={
        <Button command='close' commandFor='dialog-footer' level='error'>
          Delete
        </Button>
      }
      header={
        <Heading dense is='h2' lookLike='h4'>
          Delete this draft?
        </Heading>
      }
      id='dialog-footer'
      {...props}
    >
      <Text>It can't be brought back.</Text>
    </Dialog>
  </>
);

export { Preview };
