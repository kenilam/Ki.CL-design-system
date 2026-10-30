import React from 'react';

// Partials
import { Copy } from 'design/docs/mdx/copy';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <Copy id='select_preset_with_a_placeholder' />;

const name = 'With a placeholder';

const Preset = (
  <Origin
    code={source}
    description={description}
    label='select_preset_with_a_placeholder_name'
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
