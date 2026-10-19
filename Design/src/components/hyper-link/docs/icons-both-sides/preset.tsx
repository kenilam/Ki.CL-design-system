import React from 'react';

// Partials
import { Text } from 'design/components';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = (
  <>
    Uses <Text is='code'>before</Text> and <Text is='code'>after</Text>{' '}
    together. The logo says where it goes and the arrow says it opens another
    site.
  </>
);

const name = 'Icons both sides';

/** The preset as `Preview` reads it, with the example's own file as its code. */
const Preset = (
  <Origin code={source} description={description} name={name}>
    <Preview />
  </Origin>
);

export { Preset };
