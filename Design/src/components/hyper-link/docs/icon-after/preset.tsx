import React from 'react';

// Partials
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = (
  <>Puts an icon after the text, like the arrow on a Next link.</>
);

const name = 'Icon after';

const Preset = (
  <Origin code={source} description={description} name={name}>
    <Preview />
  </Origin>
);

export { Preset };
