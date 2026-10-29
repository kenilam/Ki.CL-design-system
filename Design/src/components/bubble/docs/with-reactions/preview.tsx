import React from 'react';

import {
  Bubble,
  BubbleContent,
  BubbleReactions,
  ListItem,
} from 'design/components';

import type { Props } from 'design/components/bubble/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <Bubble {...props}>
      <BubbleContent>I have the photos.</BubbleContent>
      <BubbleReactions>
        <ListItem>👍 2</ListItem>
      </BubbleReactions>
    </Bubble>
  );
};

export { Preview };
