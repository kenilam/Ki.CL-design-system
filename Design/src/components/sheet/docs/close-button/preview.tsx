import React from 'react';
import * as Ri from 'react-icons/ri';

import {
  Button,
  CardAction,
  CardContent,
  CardTitle,
  Sheet,
  SheetHeader,
  Text,
} from 'design/components';

import type { Props } from 'design/components/sheet/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <>
    <Button popoverTarget='sheet-close'>Open</Button>
    <Sheet id='sheet-close' {...props}>
      <SheetHeader>
        <CardTitle is='h2'>Filters</CardTitle>
        <CardAction>
          <Button
            aria-label='Close'
            popoverTarget='sheet-close'
            popoverTargetAction='hide'
            size='small'
            variant='secondary'
          >
            <Ri.RiCloseLine aria-hidden />
          </Button>
        </CardAction>
      </SheetHeader>
      <CardContent>
        <Text>Show items that are in stock and ship within a week.</Text>
      </CardContent>
    </Sheet>
  </>
);

export { Preview };
