import React from 'react';

import { Animation, Card, CardDescription, CardTitle } from 'design/components';

import type { Props } from 'design/components/animation/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <>
      <Animation key='first' property='slide-from-left' {...props}>
        <Card
          is='article'
          header={
            <>
              <CardTitle is='h3'>Daylight</CardTitle>
              <CardDescription>Comes in first.</CardDescription>
            </>
          }
          size={3}
        />
      </Animation>
      <Animation delay={150} key='second' property='slide-from-left' {...props}>
        <Card
          is='article'
          header={
            <>
              <CardTitle is='h3'>Tree of life</CardTitle>
              <CardDescription>150 ms later.</CardDescription>
            </>
          }
          size={3}
        />
      </Animation>
      <Animation delay={300} key='third' property='slide-from-left' {...props}>
        <Card
          is='article'
          header={
            <>
              <CardTitle is='h3'>Kinetic Light</CardTitle>
              <CardDescription>300 ms later.</CardDescription>
            </>
          }
          size={3}
        />
      </Animation>
    </>
  );
};

export { Preview };
