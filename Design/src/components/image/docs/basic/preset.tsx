import React from 'react';

// Partials
import { Copy } from 'design/docs/mdx/copy';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <Copy id='image_preset_basic' />;

const name = 'Basic';

const Preset = (
  <Origin
    code={source}
    description={description}
    label='image_preset_basic_name'
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
