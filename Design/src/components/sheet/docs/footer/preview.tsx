import React, { useId } from 'react';

import {
  Button,
  CardTitle,
  Input,
  Layout,
  Sheet,
  Text,
} from 'design/components';

import type { Props } from 'design/components/sheet/docs/controls';

const Preview: React.FC<Props> = (props) => {
  const nameId = useId();

  return (
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
        <Text>Your name is shown to people you share with.</Text>
        <Layout gap='narrowest'>
          <label className='kicl-font-size-small' htmlFor={nameId}>
            Display name
            <Input defaultValue='John Smith' id={nameId} />
          </label>
        </Layout>
      </Sheet>
    </>
  );
};

export { Preview };
