import React from 'react';

// Partials
import { Copy } from 'design/docs/mdx/copy';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <Copy id='form_preset_built_by_hand' />;

const name = 'Built by hand';

const Preset = (
  <Origin
    code={source}
    description={description}
    label='form_preset_built_by_hand_name'
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
