import React from 'react';

// Partials
import { Copy } from 'design/docs/mdx/copy';
import { Preset as Origin } from 'design/docs/mdx/preview';
import { HINT_CONTROLS } from 'design/components/popover/docs/controls';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <Copy id='popover_preset_hint' />;

const name = 'Hint';

const Preset = (
  <Origin
    code={source}
    controls={HINT_CONTROLS}
    description={description}
    label='popover_preset_hint_name'
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
