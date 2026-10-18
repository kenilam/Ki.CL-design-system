import React from 'react';

import { Button, Dialog, Text } from 'design/components';

import type { Props } from 'design/components/dialog/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <>
    <Button command='show-modal' commandFor='dialog-default'>
      Open
    </Button>
    <Dialog
      className='kicl-min-block-size-columns-3'
      id='dialog-default'
      title='Daylight'
      {...props}
    >
      <Text>The Earth lit by where the sun is now.</Text>
    </Dialog>
  </>
);

export { Preview };
