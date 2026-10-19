import React from 'react';

// Partials
import { Text } from 'design/components';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = (
  <>
    Outlines the part that broke in red. List its <Text is='code'>id</Text>{' '}
    under <Text is='code'>failed</Text> in <Text is='code'>state</Text>, next to
    any that are still active.
  </>
);

const name = 'Failed';

/** The preset as `Preview` reads it, with the example's own file as its code. */
const Preset = (
  <Origin code={source} description={description} name={name}>
    <Preview />
  </Origin>
);

export { Preset };
