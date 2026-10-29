import React from 'react';

import { Bubble, BubbleContent, BubbleGroup } from 'design/components';

import type { Props } from 'design/components/bubble/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <BubbleGroup>
      <Bubble
        className='kicl-margin-inline-start-auto'
        is='li'
        variant='ghost'
        {...props}
      >
        <BubbleContent is='button' type='button'>
          After six works
        </BubbleContent>
      </Bubble>
      <Bubble
        className='kicl-margin-inline-start-auto'
        is='li'
        variant='ghost'
        {...props}
      >
        <BubbleContent is='button' type='button'>
          Can we do tomorrow?
        </BubbleContent>
      </Bubble>
    </BubbleGroup>
  );
};

export { Preview };
