import React from 'react';

// Partials
import { Preset as Origin } from 'design/docs/mdx/preview';
import { FLEX_CONTROLS } from 'design/components/list/docs/controls';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = (
  <>
    For a long run of short items, like these component names. They move to the
    next line when the row runs out of room.
  </>
);

const name = 'A row that wraps';

/** The preset as `Preview` reads it, with the example's own file as its code. */
const Preset = (
  <Origin
    code={source}
    controls={FLEX_CONTROLS}
    description={description}
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
