import React from 'react';

// Partials
import { Copy } from 'design/docs/mdx/copy';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <Copy id='pattern_states_preset_empty' />;

const name = 'Empty';

const Preset = (
  <Origin
    code={source}
    description={description}
    label='pattern_states_preset_empty_name'
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
