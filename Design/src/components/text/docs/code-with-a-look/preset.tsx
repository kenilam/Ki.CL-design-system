import React from 'react';

// Partials
import { Text } from 'design/components';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = (
  <>
    Colours a status so it reads at a glance. <Text is='code'>level</Text> makes
    it green or red, and <Text is='code'>{"variant='secondary'"}</Text> gives it
    a quieter outline.
  </>
);

const name = 'Code with a look';

/** The preset as `Preview` reads it, with the example's own file as its code. */
const Preset = (
  <Origin code={source} description={description} name={name}>
    <Preview />
  </Origin>
);

export { Preset };
