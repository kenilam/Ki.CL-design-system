import React from 'react';

import { Card, Badge, Details, DetailsMarker, Text } from 'design/components';

import type { Props } from 'design/components/details/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <Card is='section' size='max'>
      <Details
        marker={false}
        summary={
          <Badge size='large'>
            Changes <DetailsMarker />
          </Badge>
        }
        {...props}
      >
        <Text>Twelve files changed since yesterday.</Text>
      </Details>
    </Card>
  );
};

export { Preview };
