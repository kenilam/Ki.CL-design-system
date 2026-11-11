import React from 'react';
import * as Tb from 'react-icons/tb';

import { Button, Dialog, Heading, Text } from 'design/components';

import type { Props } from 'design/components/dialog/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <>
      <Button command='show-modal' commandfor='dialog-close-icon'>
        Open
      </Button>
      <Dialog
        closeIcon={Tb.TbMoodSmile}
        header={
          <Heading dense is='h2' lookLike='h4'>
            Choose a photo
          </Heading>
        }
        id='dialog-close-icon'
        {...props}
      >
        <Text>Pick a photo for your profile.</Text>
      </Dialog>
    </>
  );
};

export { Preview };
