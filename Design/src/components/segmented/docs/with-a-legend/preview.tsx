import React from 'react';

import { Segmented, SegmentedItem } from 'design/components';

import type { Props } from 'design/components/segmented/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <Segmented defaultValue='week' {...props}>
    <legend>Range</legend>
    <SegmentedItem value='day'>Day</SegmentedItem>
    <SegmentedItem value='week'>Week</SegmentedItem>
    <SegmentedItem value='month'>Month</SegmentedItem>
  </Segmented>
);

export { Preview };
