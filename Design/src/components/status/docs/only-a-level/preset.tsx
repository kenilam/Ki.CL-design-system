import React from 'react';

// Partials
import { Copy } from 'design/docs/mdx/copy';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <Copy id='status_preset_only_a_level' />;

const name = 'Only a level';

const Preset = (
  <Origin
    code={source}
    description={description}
    label='status_preset_only_a_level_name'
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
