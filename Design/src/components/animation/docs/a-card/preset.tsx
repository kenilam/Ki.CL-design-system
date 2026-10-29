import React from 'react';

// Partials
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <>A card that slides up from below as it comes in.</>;

const name = 'A card';

const Preset = (
  <Origin code={source} description={description} name={name}>
    <Preview />
  </Origin>
);

export { Preset };
