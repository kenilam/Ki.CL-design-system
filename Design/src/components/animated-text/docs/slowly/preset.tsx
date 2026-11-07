import React from 'react';

// Partials
import { Copy } from 'design/mdx/copy';
import { Preset as Origin } from 'design/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <Copy id='animated_text_preset_slowly' />;

const name = 'Slowly';

const Preset = (
  <Origin
    code={source}
    description={description}
    label='animated_text_preset_slowly_name'
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
