import React from 'react';
import * as Bs from 'react-icons/bs';

import { Segmented, SegmentedItem } from 'design/components';

import type { Props } from 'design/components/segmented/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <Segmented aria-label='Theme' defaultValue='light' {...props}>
      <SegmentedItem aria-label='Light' value='light'>
        <Bs.BsSun aria-hidden />
      </SegmentedItem>
      <SegmentedItem aria-label='Dark' value='dark'>
        <Bs.BsMoon aria-hidden />
      </SegmentedItem>
    </Segmented>
  );
};

export { Preview };
