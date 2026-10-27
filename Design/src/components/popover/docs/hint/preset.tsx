import React from 'react';

// Partials
import { Preset as Origin } from 'design/docs/mdx/preview';
import { HINT_CONTROLS } from 'design/components/popover/docs/controls';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = (
  <>
    A short note that shows while the trigger is hovered or focused, like a
    tooltip.
  </>
);

const name = 'Hint';

/** The preset as `Preview` reads it, with the example's own file as its code. */
const Preset = (
  <Origin
    code={source}
    controls={HINT_CONTROLS}
    description={description}
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
