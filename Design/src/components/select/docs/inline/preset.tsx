import React from 'react';

// Partials
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = (
  <>
    For a choice inside a sentence. Without its box, the select reads as the
    chosen value followed by an arrow, in the size and colour of the text around
    it.
  </>
);

const name = 'Inline';

const Preset = (
  <Origin code={source} description={description} name={name}>
    <Preview />
  </Origin>
);

export { Preset };
