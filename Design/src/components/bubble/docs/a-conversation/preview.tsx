import React from 'react';

import { Bubble, BubbleContent, BubbleGroup } from 'design/components';

import type { Props } from 'design/components/bubble/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <BubbleGroup>
      <Bubble is='li' {...props}>
        <BubbleContent>Are you around later?</BubbleContent>
      </Bubble>
      <Bubble className='kicl-margin-inline-start-auto' is='li' variant='ghost'>
        <BubbleContent>After six.</BubbleContent>
      </Bubble>
      <Bubble is='li' {...props}>
        <BubbleContent>Perfect, see you then.</BubbleContent>
      </Bubble>
    </BubbleGroup>
  );
};

export { Preview };
