import React from 'react';

// Partials
import { Copy } from 'design/docs/mdx/copy';
import { Preset as Origin } from 'design/docs/mdx/preview';

import { FRAMES_CONTROLS } from 'design/components/layout/docs/controls';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <Copy id='layout_preset_frames' />;

const name = 'Frames';

const Preset = (
  <Origin
    code={source}
    controls={FRAMES_CONTROLS}
    description={description}
    label='layout_preset_frames_name'
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
