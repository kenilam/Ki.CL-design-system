import React from 'react';

// Partials
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = (
  <>
    For a block with more than one piece, like an avatar beside a photo. Use one
    skeleton per piece, laid out the way the content will be.
  </>
);

const name = 'Avatar and photo';

const Preset = (
  <Origin code={source} description={description} name={name}>
    <Preview />
  </Origin>
);

export { Preset };
