import React from 'react';

// Partials
import { Text } from 'design/components';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = (
  <>
    Highlights in green the part that's working right now, for a diagram that
    follows something as it runs. List its <Text is='code'>id</Text> under{' '}
    <Text is='code'>active</Text> in <Text is='code'>state</Text>.
  </>
);

const name = 'Active';

/** The preset as `Preview` reads it, with the example's own file as its code. */
const Preset = (
  <Origin code={source} description={description} name={name}>
    <Preview />
  </Origin>
);

export { Preset };
