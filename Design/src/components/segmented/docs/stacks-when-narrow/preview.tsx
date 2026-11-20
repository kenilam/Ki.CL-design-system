import React from 'react';

import { Segmented, SegmentedItem } from 'design/components';

import type { Props } from 'design/components/segmented/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <Segmented
      aria-label='Source'
      className='kicl-inline-size-columns-3'
      collapse='stack'
      defaultValue='pick'
      {...props}
    >
      <SegmentedItem value='pick'>Pick a color</SegmentedItem>
      <SegmentedItem value='upload'>Upload a picture</SegmentedItem>
    </Segmented>
  );
};

export { Preview };
