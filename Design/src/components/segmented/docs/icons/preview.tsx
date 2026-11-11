import React from 'react';
import * as Tb from 'react-icons/tb';

import { Segmented, SegmentedItem } from 'design/components';

import type { Props } from 'design/components/segmented/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <Segmented aria-label='Theme' defaultValue='light' {...props}>
      <SegmentedItem aria-label='Light' value='light'>
        <Tb.TbSun aria-hidden />
      </SegmentedItem>
      <SegmentedItem aria-label='Dark' value='dark'>
        <Tb.TbMoon aria-hidden />
      </SegmentedItem>
    </Segmented>
  );
};

export { Preview };
