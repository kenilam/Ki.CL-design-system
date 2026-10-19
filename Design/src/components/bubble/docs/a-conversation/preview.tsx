import React from 'react';

import { Bubble, BubbleContent } from 'design/components';

import type { Props } from 'design/components/bubble/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <>
    <Bubble {...props}>
      <BubbleContent>Are you around later?</BubbleContent>
    </Bubble>
    <Bubble className='kicl-margin-inline-start-auto' variant='ghost'>
      <BubbleContent>After six.</BubbleContent>
    </Bubble>
    <Bubble {...props}>
      <BubbleContent>Perfect, see you then.</BubbleContent>
    </Bubble>
  </>
);

export { Preview };
