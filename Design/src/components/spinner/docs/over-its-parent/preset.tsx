import React from 'react';

// Partials
import { Preset as Origin } from 'design/docs/mdx/preview';

// Controls
import { OVERLAY_CONTROLS } from 'design/components/spinner/docs/controls';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const name = 'Over its parent';

/** The preset as `Preview` reads it, with the example's own file as its code. */
const Preset = (
  <Origin code={source} controls={OVERLAY_CONTROLS} name={name}>
    <Preview />
  </Origin>
);

export { Preset };
