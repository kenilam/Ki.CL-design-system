import React from 'react';

// Partials
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = (
  <>For a message that failed a check, with the reason under it.</>
);

const name = 'With an error';

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
