import React from 'react';

// Partials
import { Preset as Origin } from 'design/docs/mdx/preview';

// Controls
import { OVERLAY_CONTROLS } from 'design/components/spinner/docs/controls';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = (
  <>Covers a card with a light blur and a spinner while its content loads.</>
);

const name = 'Over its parent';

const Preset = (
  <Origin
    code={source}
    controls={OVERLAY_CONTROLS}
    description={description}
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
