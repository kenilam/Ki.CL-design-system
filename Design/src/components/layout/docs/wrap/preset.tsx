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
    to the next line when they run out of room.
  </>
);

const name = 'Wrap';

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
