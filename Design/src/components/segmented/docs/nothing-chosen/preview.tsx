import React from 'react';

import { Segmented, SegmentedItem } from 'design/components';

import type { Props } from 'design/components/segmented/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <Segmented aria-label='View' {...props}>
      <SegmentedItem value='list'>List</SegmentedItem>
      <SegmentedItem value='grid'>Grid</SegmentedItem>
      <SegmentedItem value='map'>Map</SegmentedItem>
    </Segmented>
  );
};

export { Preview };
