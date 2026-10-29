import React from 'react';

import { Segmented, SegmentedItem } from 'design/components';

import type { Props } from 'design/components/segmented/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <Segmented
      aria-label='Month'
      collapse='scroll'
      defaultValue='jan'
      {...props}
    >
      <SegmentedItem value='jan'>January</SegmentedItem>
      <SegmentedItem value='feb'>February</SegmentedItem>
      <SegmentedItem value='mar'>March</SegmentedItem>
      <SegmentedItem value='apr'>April</SegmentedItem>
      <SegmentedItem value='may'>May</SegmentedItem>
      <SegmentedItem value='jun'>June</SegmentedItem>
    </Segmented>
  );
};

export { Preview };
