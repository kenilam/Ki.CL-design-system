import React from 'react';

// Partials
import { Text } from 'design/components';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = (
  <>
    For a list where people often want everything. The box on top, set with{' '}
    <Text is='code'>selectAll</Text>, ticks or clears the rest and looks partly
    ticked when only some are.
  </>
);

const name = 'Select all';

/** The preset as `Preview` reads it, with the example's own file as its code. */
const Preset = (
  <Origin code={source} description={description} name={name}>
    <Preview />
  </Origin>
);

export { Preset };
