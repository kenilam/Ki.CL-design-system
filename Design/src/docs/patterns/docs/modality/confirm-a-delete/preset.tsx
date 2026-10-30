import React from 'react';

// Partials
import { Copy } from 'design/docs/mdx/copy';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <Copy id='pattern_modality_preset_confirm_a_delete' />;

const name = 'Confirm a delete';

const Preset = (
  <Origin
    code={source}
    description={description}
    label='pattern_modality_preset_confirm_a_delete_name'
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
