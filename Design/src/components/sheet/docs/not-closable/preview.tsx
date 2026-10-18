import React from 'react';

import { Button, CardTitle, Sheet, Text } from 'design/components';

import type { Props } from 'design/components/sheet/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <>
    <Button popoverTarget='sheet-not-closable'>Open</Button>
    <Sheet
      closable={false}
      footer={
        <Text>
          a foot note
        </Text>
      }
      header={<CardTitle is='h2'>Filters</CardTitle>}
      id='sheet-not-closable'
      {...props}
    >
      <Text>Show items that are in stock and ship within a week.</Text>
    </Sheet>
  </>
);

export { Preview };
