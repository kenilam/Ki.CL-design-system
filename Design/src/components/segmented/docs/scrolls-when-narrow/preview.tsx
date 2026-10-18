import React from 'react';

import { Segmented, SegmentedItem } from 'design/components';

import type { Props } from 'design/components/segmented/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <Segmented
    aria-label='Month'
    className='kicl-inline-size-columns-4'
    collapse='scroll'
    collapsed
    defaultValue='may'
    {...props}
  >
    <SegmentedItem value='january'>January</SegmentedItem>
    <SegmentedItem value='february'>February</SegmentedItem>
    <SegmentedItem value='march'>March</SegmentedItem>
    <SegmentedItem value='april'>April</SegmentedItem>
    <SegmentedItem value='may'>May</SegmentedItem>
    <SegmentedItem value='june'>June</SegmentedItem>
    <SegmentedItem value='july'>July</SegmentedItem>
    <SegmentedItem value='august'>August</SegmentedItem>
    <SegmentedItem value='september'>September</SegmentedItem>
    <SegmentedItem value='october'>October</SegmentedItem>
    <SegmentedItem value='november'>November</SegmentedItem>
    <SegmentedItem value='december'>December</SegmentedItem>
  </Segmented>
);

export { Preview };
