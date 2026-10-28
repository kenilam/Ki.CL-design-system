import React from 'react';

import { Button, Dialog, Text } from 'design/components';

import type { Props } from 'design/components/dialog/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <>
    <Button command='show-modal' commandFor='dialog-no-title'>
      Open
    </Button>
    <Dialog
      aria-label='Picture'
      id='dialog-no-title'
      {...props}
    >
      <Text>A photo of the harbour at dusk.</Text>
    </Dialog>
  </>
);

export { Preview };
