import React from 'react';

// Partials
import { Copy } from 'design/docs/mdx/copy';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <Copy id='calendar_preset_range' />;

const name = 'A range';

const Preset = (
  <Origin
    code={source}
    description={description}
    label='calendar_preset_range_name'
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
