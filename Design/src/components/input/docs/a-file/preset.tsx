import React from 'react';

// Partials
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = (
  <>For picking a file. The browser draws its own button inside the field.</>
);

const name = 'A file';

const Preset = (
  <Origin
    controls={{ readOnly: null }}
    code={source}
    description={description}
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
