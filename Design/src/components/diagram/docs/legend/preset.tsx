import React from 'react';

// Partials
import { Text } from 'design/components';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = (
  <>
    Explains what the colours and line styles mean, with a line underneath on
    how to read the diagram. <Text is='code'>legend</Text> and{' '}
    <Text is='code'>caption</Text> set them.
  </>
);

const name = 'Legend';

/** The preset as `Preview` reads it, with the example's own file as its code. */
const Preset = (
  <Origin code={source} description={description} name={name}>
    <Preview />
  </Origin>
);

export { Preset };
