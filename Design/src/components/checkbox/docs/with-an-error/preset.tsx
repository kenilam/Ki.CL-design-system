import React from 'react';

// Partials
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = (
  <>
    For a box that has to be ticked, like accepting terms. The box and the
    message turn red.
  </>
);

const name = 'With an error';

const Preset = (
  <Origin
    controls={{ checked: null }}
    code={source}
    description={description}
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
