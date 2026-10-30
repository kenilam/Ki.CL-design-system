import React from 'react';

import { Button, Dialog, Heading, Text } from 'design/components';

import type { Props } from 'design/components/dialog/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <>
      <Button command='show-modal' commandfor='dialog-default'>
        Open
      </Button>
      <Dialog
        header={
          <Heading dense is='h2' lookLike='h4'>
            Daylight
          </Heading>
        }
        id='dialog-default'
        {...props}
      >
        <Text>Where it’s day and where it’s night on Earth right now.</Text>
      </Dialog>
    </>
  );
};

export { Preview };
