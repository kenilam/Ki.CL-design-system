import React from 'react';

import { Button, CardTitle, Sheet, Text } from 'design/components';

import type { Props } from 'design/components/sheet/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <>
    <Button popoverTarget='sheet-footer'>Open</Button>
    <Sheet
      footer={
        <>
          <Button
            popoverTarget='sheet-footer'
            popoverTargetAction='hide'
            variant='tertiary'
          >
            Cancel
          </Button>
          <Button popoverTarget='sheet-footer' popoverTargetAction='hide'>
            Save
          </Button>
        </>
      }
      header={<CardTitle is='h2'>Edit profile</CardTitle>}
      id='sheet-footer'
      {...props}
    >
      <Text>Your name and photo are shown to people you share with.</Text>
    </Sheet>
  </>
);

export { Preview };
