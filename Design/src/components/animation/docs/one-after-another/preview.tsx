import React from 'react';

import { Animation, Badge } from 'design/components';

import type { Props } from 'design/components/animation/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <>
      <Animation key='first' property='slide-from-left' {...props}>
        <Badge>First</Badge>
      </Animation>
      <Animation delay={150} key='second' property='slide-from-left' {...props}>
        <Badge>Second</Badge>
      </Animation>
      <Animation delay={300} key='third' property='slide-from-left' {...props}>
        <Badge>Third</Badge>
      </Animation>
    </>
  );
};

export { Preview };
