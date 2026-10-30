import React from 'react';

// Partials
import { Copy } from 'design/docs/mdx/copy';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <Copy id='diagram_preset_active' />;

const name = 'Active';

const Preset = (
  <Origin
    code={source}
    description={description}
    label='diagram_preset_active_name'
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
