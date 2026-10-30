import React from 'react';

// Partials
import { Copy } from 'design/docs/mdx/copy';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <Copy id='menu_preset_stacked' />;

const name = 'Stacked';

const Preset = (
  <Origin
    code={source}
    description={description}
    label='menu_preset_stacked_name'
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
