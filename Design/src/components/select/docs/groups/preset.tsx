import React from 'react';

// Partials
import { Copy } from 'design/mdx/copy';
import { Preset as Origin } from 'design/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <Copy id='select_preset_groups' />;

const name = 'Groups';

const Preset = (
  <Origin
    code={source}
    description={description}
    label='select_preset_groups_name'
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
