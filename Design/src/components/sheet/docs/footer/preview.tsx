import React from 'react';

import {
  Button,
  CardContent,
  CardTitle,
  Sheet,
  SheetFooter,
  SheetHeader,
  Text,
} from 'design/components';

import type { Props } from 'design/components/sheet/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <>
    <Button popoverTarget='sheet-footer'>Open</Button>
    <Sheet id='sheet-footer' {...props}>
      <SheetHeader>
        <CardTitle is='h2'>Edit profile</CardTitle>
      </SheetHeader>
      <CardContent>
        <Text>Your name and photo are shown to people you share with.</Text>
      </CardContent>
      <SheetFooter justifyContent='end'>
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
      </SheetFooter>
    </Sheet>
  </>
);

export { Preview };
