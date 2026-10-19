import React from 'react';

// Partials
import { Text } from 'design/components';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = (
  <>
    For a section title that should look quieter than its place in the outline.
    It's an <Text is='code'>h2</Text> that <Text is='code'>lookLike</Text> sets
    to the size of an <Text is='code'>h5</Text>.
  </>
);

const name = 'Small section title';

/** The preset as `Preview` reads it, with the example's own file as its code. */
const Preset = (
  <Origin code={source} description={description} name={name}>
    <Preview />
  </Origin>
);

export { Preset };
