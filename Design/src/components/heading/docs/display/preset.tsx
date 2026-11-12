import React from 'react';

// Partials
import { Copy } from 'design/mdx/copy';
import { Preset as Origin } from 'design/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <Copy id='heading_preset_display' />;

const name = 'Display';

const Preset = (
  <Origin
    code={source}
    controls={{ lookLike: null }}
    description={description}
    label='heading_preset_display_name'
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
