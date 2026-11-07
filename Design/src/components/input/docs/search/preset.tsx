import React from 'react';

// Partials
import { Copy } from 'design/mdx/copy';
import { Preset as Origin } from 'design/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <Copy id='input_preset_search' />;

const name = 'Search';

const Preset = (
  <Origin
    code={source}
    description={description}
    label='input_preset_search_name'
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
