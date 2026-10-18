import React from 'react';

import { Bubble, BubbleContent, BubbleGroup } from 'design/components';

import type { Props } from 'design/components/bubble/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <BubbleGroup>
    <Bubble {...props}>
      <BubbleContent>Are you around later?</BubbleContent>
    </Bubble>
    <Bubble {...props}>
      <BubbleContent>I have the photos.</BubbleContent>
    </Bubble>
  </BubbleGroup>
);

export { Preview };
