import React from 'react';

// Partials
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = (
  <>
    Six months fit in a row on a wide screen. At tablet width and below, the row
    scrolls sideways instead.
  </>
);

const name = 'Many options';

const Preset = (
  <Origin code={source} description={description} name={name}>
    <Preview />
  </Origin>
);

export { Preset };
