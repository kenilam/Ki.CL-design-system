import React from 'react';

import { Bubble, BubbleContent } from 'design/components';

import type { Props } from 'design/components/bubble/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <Bubble {...props}>
      <BubbleContent>Are you around later?</BubbleContent>
    </Bubble>
  );
};

export { Preview };
