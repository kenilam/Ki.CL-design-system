import React from 'react';

import { Badge, Details, DetailsMarker, Text } from 'design/components';

import type { Props } from 'design/components/details/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <Details
    marker={false}
    summary={
      <Badge>
        Changes <DetailsMarker />
      </Badge>
    }
    {...props}
  >
    <Text>Twelve files changed since yesterday.</Text>
  </Details>
);

export { Preview };
