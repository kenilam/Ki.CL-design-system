import React from 'react';

// Partials
import { Text } from 'design/components';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = (
  <>
    A list of pages one under another, like a sidebar. A section with more pages
    goes in a <Text is='code'>Details</Text> with its own{' '}
    <Text is='code'>Navigation</Text> inside.
  </>
);

const name = 'Pages';

/** The preset as `Preview` reads it, with the example's own file as its code. */
const Preset = (
  <Origin code={source} description={description} name={name}>
    <Preview />
  </Origin>
);

export { Preset };
