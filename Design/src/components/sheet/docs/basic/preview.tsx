import React from 'react';

import { Button, CardTitle, Sheet, Text } from 'design/components';

import type { Props } from 'design/components/sheet/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <>
      <Button popoverTarget='sheet-default'>Open</Button>
      <Sheet
        header={<CardTitle is='h2'>Filters</CardTitle>}
        id='sheet-default'
        {...props}
      >
        <Text>Show items that are in stock and ship within a week.</Text>
      </Sheet>
    </>
  );
};

export { Preview };
