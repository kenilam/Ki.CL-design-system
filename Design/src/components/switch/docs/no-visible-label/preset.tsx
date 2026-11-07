import React from 'react';

// Partials
import { Copy } from 'design/mdx/copy';
import { Preset as Origin } from 'design/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <Copy id='switch_preset_no_visible_label' />;

const name = 'No visible label';

const Preset = (
  <Origin
    code={source}
    description={description}
    label='switch_preset_no_visible_label_name'
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
