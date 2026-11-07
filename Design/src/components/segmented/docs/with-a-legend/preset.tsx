import React from 'react';

// Partials
import { Copy } from 'design/mdx/copy';
import { Preset as Origin } from 'design/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <Copy id='segmented_preset_with_a_legend' />;

const name = 'With a legend';

const Preset = (
  <Origin
    code={source}
    description={description}
    label='segmented_preset_with_a_legend_name'
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
