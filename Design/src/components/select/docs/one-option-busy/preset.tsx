import React from 'react';

// Partials
import { Copy } from 'design/docs/mdx/copy';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <Copy id='select_preset_one_option_busy' />;

const name = 'One option busy';

const Preset = (
  <Origin
    code={source}
    description={description}
    label='select_preset_one_option_busy_name'
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
