import React from 'react';

import { Button, Dialog, Text } from 'design/components';

import type { Props } from 'design/components/dialog/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <>
    <Button command='show-modal' commandFor='dialog-keyboard'>
      Open
    </Button>
    <Dialog
      className='kicl-min-block-size-columns-3'
      closable='keyboard'
      footer={
        <Button command='close' commandFor='dialog-keyboard'>
          Done
        </Button>
      }
      id='dialog-keyboard'
      title='All done'
      {...props}
    >
      <Text>Your changes are saved.</Text>
    </Dialog>
  </>
);

export { Preview };
