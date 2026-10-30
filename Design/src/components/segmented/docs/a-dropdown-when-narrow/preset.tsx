import React from 'react';

// Partials
import { Copy } from 'design/docs/mdx/copy';
import { Preset as Origin } from 'design/docs/mdx/preview';

import { POPOVER_CONTROLS } from 'design/components/segmented/docs/controls';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <Copy id='segmented_preset_a_dropdown_when_narrow' />;

const name = 'A dropdown when narrow';

const Preset = (
  <Origin
    code={source}
    controls={POPOVER_CONTROLS}
    description={description}
    label='segmented_preset_a_dropdown_when_narrow_name'
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
