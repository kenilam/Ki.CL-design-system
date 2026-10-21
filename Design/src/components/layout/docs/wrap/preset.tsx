import React from 'react';

// Partials
import { Preset as Origin } from 'design/docs/mdx/preview';

import { WRAP_CONTROLS } from 'design/components/layout/docs/controls';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = (
  <>
    For tags and other things of different widths. They sit in a line and move
    to the next one when they run out of room. With `wrap='stack'`, each one
    takes its own line on phones.
  </>
);

const name = 'Wrap';

/** The preset as `Preview` reads it, with the example's own file as its code. */
const Preset = (
  <Origin
    code={source}
    controls={WRAP_CONTROLS}
    description={description}
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
