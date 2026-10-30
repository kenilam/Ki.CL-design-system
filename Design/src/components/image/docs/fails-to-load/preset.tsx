import React from 'react';

// Partials
import { Copy } from 'design/docs/mdx/copy';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <Copy id='image_preset_fails_to_load' />;

const name = 'Fails to load';

const Preset = (
  <Origin
    code={source}
    description={description}
    label='image_preset_fails_to_load_name'
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
