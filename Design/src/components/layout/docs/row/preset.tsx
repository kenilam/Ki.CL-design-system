import React from 'react';

// Partials
import { Preset as Origin } from 'design/docs/mdx/preview';

import { ROW_CONTROLS } from 'design/components/layout/docs/controls';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = (
  <>Puts things side by side, like the buttons at the bottom of a dialog.</>
);

const name = 'Row';

const Preset = (
  <Origin
    code={source}
    controls={ROW_CONTROLS}
    description={description}
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
