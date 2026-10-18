import React from 'react';

import {
  Button,
  CardContent,
  CardTitle,
  Sheet,
  SheetHeader,
  Text,
} from 'design/components';

import type { Props } from 'design/components/sheet/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <>
    <Button popoverTarget='sheet-default'>Open</Button>
    <Sheet id='sheet-default' {...props}>
      <SheetHeader>
        <CardTitle is='h2'>Filters</CardTitle>
      </SheetHeader>
      <CardContent>
        <Text>Show items that are in stock and ship within a week.</Text>
      </CardContent>
    </Sheet>
  </>
);

export { Preview };
