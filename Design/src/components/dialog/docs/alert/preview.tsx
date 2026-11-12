import React from 'react';

import { Button, Dialog, Heading, Text } from 'design/components';

import type { Props } from 'design/components/dialog/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <>
      <Button command='show-modal' commandfor='dialog-alert'>
        Sign out everywhere
      </Button>
      <Dialog
        aria-describedby='dialog-alert-message'
        aria-labelledby='dialog-alert-title'
        closable='keyboard'
        footer={
          <Button command='close' commandfor='dialog-alert'>
            Sign out
          </Button>
        }
        id='dialog-alert'
        role='alertdialog'
        {...props}
      >
        <Heading dense id='dialog-alert-title' is='h2' lookLike='h4'>
          Sign out on every device?
        </Heading>
        <Text id='dialog-alert-message'>
          You’ll need your password on each of them to sign back in.
        </Text>
      </Dialog>
    </>
  );
};

export { Preview };
