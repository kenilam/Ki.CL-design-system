import React from 'react';
import * as Ri from 'react-icons/ri';

import { Button, Dialog, Text } from 'design/components';

import type { Props } from 'design/components/dialog/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <>
    <Button command='show-modal' commandFor='dialog-close-icon'>
      Open
    </Button>
    <Dialog
      className='kicl-min-block-size-columns-3'
      closeIcon={Ri.RiArrowLeftLine}
      id='dialog-close-icon'
      title='Choose a photo'
      {...props}
    >
      <Text>Pick a photo for your profile.</Text>
    </Dialog>
  </>
);

export { Preview };
