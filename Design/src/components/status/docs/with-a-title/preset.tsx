import React from 'react';

// Partials
import { Preset as Origin } from 'design/docs/mdx/preview';

// Controls
import { TITLE_CONTROLS } from 'design/components/status/docs/controls';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = (
  <>A note after saving, with a short title over the message.</>
);

const name = 'With a title';

/** The preset as `Preview` reads it, with the example's own file as its code. */
const Preset = (
  <Origin
    code={source}
    controls={TITLE_CONTROLS}
    description={description}
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
