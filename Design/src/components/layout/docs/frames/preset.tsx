import React from 'react';

// Partials
import { Preset as Origin } from 'design/docs/mdx/preview';

import { FRAMES_CONTROLS } from 'design/components/layout/docs/controls';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = (
  <>
    Gives each item its own width. Here the button is as wide as its label and
    the search field takes the rest.
  </>
);

const name = 'Frames';

/** The preset as `Preview` reads it, with the example's own file as its code. */
const Preset = (
  <Origin
    code={source}
    controls={FRAMES_CONTROLS}
    description={description}
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
