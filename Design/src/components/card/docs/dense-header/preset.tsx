import React from 'react';

// Partials
import { Copy } from 'design/docs/mdx/copy';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <Copy id='card_preset_dense_header' />;

const name = 'Dense header';

const Preset = (
  <Origin
    code={source}
    description={description}
    label='card_preset_dense_header_name'
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
