import React from 'react';

// Partials
import { Text } from 'design/components';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = (
  <>
    For steps that have to happen in order. <Text is='code'>is='ol'</Text> makes
    it an ordered list, and <Text is='code'>listStyleType</Text> shows its
    numbers. With a <Text is='code'>listStyleType</Text>, each item is a list
    item rather than a grid, so it can carry its marker.
  </>
);

const name = 'Steps';

/** The preset as `Preview` reads it, with the example's own file as its code. */
const Preset = (
  <Origin code={source} description={description} name={name}>
    <Preview />
  </Origin>
);

export { Preset };
