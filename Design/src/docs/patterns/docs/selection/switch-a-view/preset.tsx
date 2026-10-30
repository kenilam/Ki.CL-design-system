import React from 'react';

// Partials
import { Copy } from 'design/docs/mdx/copy';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <Copy id='pattern_selection_preset_switch_a_view' />;

const name = 'Switch a view';

const Preset = (
  <Origin
    code={source}
    description={description}
    label='pattern_selection_preset_switch_a_view_name'
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
