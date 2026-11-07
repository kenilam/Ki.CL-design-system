import React from 'react';

// Partials
import { Copy } from 'design/mdx/copy';
import { Preset as Origin } from 'design/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <Copy id='textarea_preset_taller' />;

const name = 'Taller';

const Preset = (
  <Origin
    code={source}
    description={description}
    label='textarea_preset_taller_name'
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
