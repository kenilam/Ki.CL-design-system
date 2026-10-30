import React from 'react';

// Partials
import { Copy } from 'design/docs/mdx/copy';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <Copy id='pattern_selection_preset_on_or_off' />;

const name = 'On or off';

const Preset = (
  <Origin
    code={source}
    description={description}
    label='pattern_selection_preset_on_or_off_name'
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
