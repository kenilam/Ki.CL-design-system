import React from 'react';

// Partials
import { Text } from 'design/components';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = (
  <>
    For a few short items in a line, like the tools a project uses.{' '}
    <Text is='code'>autoFlow='column'</Text> puts them side by side, each in a
    badge so the gap between them shows.
  </>
);

const name = 'A row';

/** The preset as `Preview` reads it, with the example's own file as its code. */
const Preset = (
  <Origin code={source} description={description} name={name}>
    <Preview />
  </Origin>
);

export { Preset };
