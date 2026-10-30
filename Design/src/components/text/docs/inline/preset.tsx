import React from 'react';

// Partials
import { Copy } from 'design/docs/mdx/copy';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <Copy id='text_preset_inline' />;

const name = 'Inline';

const Preset = (
  <Origin
    code={source}
    description={description}
    label='text_preset_inline_name'
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
