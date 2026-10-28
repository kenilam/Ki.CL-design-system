import React from 'react';

// Partials
import { Preset as Origin } from 'design/docs/mdx/preview';

import { FILL_CONTROLS } from 'design/components/layout/docs/controls';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = (
  <>For cards of equal width: four a row here, one a row on phones.</>
);

const name = 'Fill';

/** The preset as `Preview` reads it, with the example's own file as its code. */
const Preset = (
  <Origin
    code={source}
    controls={FILL_CONTROLS}
    description={description}
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
