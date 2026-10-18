import React from 'react';
import * as Ri from 'react-icons/ri';

import { Segmented, SegmentedItem } from 'design/components';

import type { Props } from 'design/components/segmented/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <Segmented aria-label='Theme' defaultValue='light' {...props}>
    <SegmentedItem aria-label='Light' value='light'>
      <Ri.RiSunLine aria-hidden />
    </SegmentedItem>
    <SegmentedItem aria-label='Dark' value='dark'>
      <Ri.RiMoonLine aria-hidden />
    </SegmentedItem>
  </Segmented>
);

export { Preview };
