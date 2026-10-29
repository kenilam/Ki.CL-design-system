import React from 'react';

// Partials
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = (
  <>For a button that does two things, like Save and continue.</>
);

const name = 'Icons both sides';

const Preset = (
  <Origin code={source} description={description} name={name}>
    <Preview />
  </Origin>
);

export { Preset };
