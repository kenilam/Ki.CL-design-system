import React from 'react';

import { Button, Dialog, Heading, Text } from 'design/components';

const Preview: React.FC = () => {
  return (
    <>
      <Button command='show-modal' commandfor='dialog-full-screen'>
        Open
      </Button>
      <Dialog
        fullScreen
        header={
          <Heading dense is='h2' lookLike='h4'>
            Daylight
          </Heading>
        }
        id='dialog-full-screen'
      >
        <Text>Where it’s day and where it’s night on Earth right now.</Text>
      </Dialog>
    </>
  );
};

export { Preview };
