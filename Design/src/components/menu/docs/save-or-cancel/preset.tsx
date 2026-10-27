import React from 'react';

// Partials
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <>The buttons at the bottom of a form.</>;

const name = 'Save or cancel';

/** The preset as `Preview` reads it, with the example's own file as its code. */
const Preset = (
  <Origin code={source} description={description} name={name}>
    <Preview />
  </Origin>
);

export { Preset };
