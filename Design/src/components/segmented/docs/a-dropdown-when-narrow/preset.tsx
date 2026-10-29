import React from 'react';

// Partials
import { Preset as Origin } from 'design/docs/mdx/preview';

import { POPOVER_CONTROLS } from 'design/components/segmented/docs/controls';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = (
  <>
    At tablet width and below, it shows only the current choice and opens the
    rest in a popover. It starts collapsed here so you can see it.
  </>
);

const name = 'A dropdown when narrow';

const Preset = (
  <Origin
    code={source}
    controls={POPOVER_CONTROLS}
    description={description}
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
