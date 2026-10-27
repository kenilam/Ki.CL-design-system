import React from 'react';

// Partials
import { Preset as Origin } from 'design/docs/mdx/preview';

import { STACK_CONTROLS } from 'design/components/layout/docs/controls';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = (
  <>Puts things one under another, like the fields of a form.</>
);

const name = 'Basic';

/** The preset as `Preview` reads it, with the example's own file as its code. */
const Preset = (
  <Origin
    code={source}
    controls={STACK_CONTROLS}
    description={description}
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
