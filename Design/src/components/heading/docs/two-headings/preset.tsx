import React from 'react';

// Partials
import { Copy } from 'design/docs/mdx/copy';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <Copy id='heading_preset_two_headings' />;

const name = 'Two headings';

const Preset = (
  <Origin
    code={source}
    description={description}
    label='heading_preset_two_headings_name'
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
