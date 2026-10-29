import React from 'react';

// Partials
import { Preset as Origin } from 'design/docs/mdx/preview';

import { COLUMNS_CONTROLS } from 'design/components/layout/docs/controls';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = (
  <>Lays things out on 12 columns. On phones every item is full width.</>
);

const name = 'Columns';

const Preset = (
  <Origin
    code={source}
    controls={COLUMNS_CONTROLS}
    description={description}
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
