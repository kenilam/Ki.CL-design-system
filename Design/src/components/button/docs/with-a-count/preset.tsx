import React from 'react';

// Partials
import { Copy } from 'design/docs/mdx/copy';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <Copy id='button_preset_with_a_count' />;

const name = 'With a count';

const Preset = (
  <Origin
    code={source}
    description={description}
    label='button_preset_with_a_count_name'
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
