import React from 'react';

import { Bubble, BubbleContent, BubbleReactions } from 'design/components';

import type { Props } from 'design/components/bubble/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <Bubble {...props}>
    <BubbleContent>I have the photos.</BubbleContent>
    <BubbleReactions>👍 2</BubbleReactions>
  </Bubble>
);

export { Preview };
