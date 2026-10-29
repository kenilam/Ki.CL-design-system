import React from 'react';

// Components
import { Text } from 'design/components';

// Partials
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = (
  <>
    The same select with its parts written out:{' '}
    <Text is='code'>SelectTrigger</Text> holding{' '}
    <Text is='code'>SelectValue</Text>, then{' '}
    <Text is='code'>SelectContent</Text> around the options.
  </>
);

const name = 'Parts written out';

/** The preset as `Preview` reads it, with the example's own file as its code. */
const Preset = (
  <Origin code={source} description={description} name={name}>
    <Preview />
  </Origin>
);

export { Preset };
