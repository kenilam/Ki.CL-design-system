import React from 'react';

import { Button, Dialog, Heading, Text } from 'design/components';

import type { Props } from 'design/components/dialog/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <>
      <Button command='show-modal' commandFor='dialog-keyboard'>
        Open
      </Button>
      <Dialog
        closable='keyboard'
        footer={
          <Button command='close' commandFor='dialog-keyboard'>
            Done
          </Button>
        }
        header={
          <Heading dense is='h2' lookLike='h4'>
            All done
          </Heading>
        }
        id='dialog-keyboard'
        {...props}
      >
        <Text>Your changes are saved.</Text>
      </Dialog>
    </>
  );
};

export { Preview };
