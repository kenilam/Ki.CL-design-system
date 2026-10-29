import React from 'react';

// Partials
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = (
  <>
    Shows a prompt until something is picked, so the field doesn't start on a
    real answer. The prompt isn't one of the options.
  </>
);

const name = 'With a placeholder';

const Preset = (
  <Origin code={source} description={description} name={name}>
    <Preview />
  </Origin>
);

export { Preset };
