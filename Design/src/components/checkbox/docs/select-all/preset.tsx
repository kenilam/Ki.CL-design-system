import React from 'react';

// Partials
import { Preset as Origin } from 'design/docs/mdx/preview';
import { GROUP_CONTROLS } from 'design/components/checkbox/docs/controls';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = (
  <>
    For a list where people often want everything. The box on top ticks or
    clears the rest, and looks partly ticked when only some are.
  </>
);

const name = 'Select all';

const Preset = (
  <Origin
    code={source}
    controls={GROUP_CONTROLS}
    description={description}
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
