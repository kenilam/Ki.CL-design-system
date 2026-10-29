import React from 'react';

// Partials
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = (
  <>
    For a task that needs the whole window. It fills the screen, and the close
    button stays in its corner.
  </>
);

const name = 'Full screen';

const Preset = (
  <Origin
    controls={{ dense: null }}
    code={source}
    description={description}
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
