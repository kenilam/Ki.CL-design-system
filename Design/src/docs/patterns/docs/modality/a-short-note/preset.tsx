import React from 'react';

// Partials
import { Copy } from 'design/docs/mdx/copy';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <Copy id='pattern_modality_preset_a_short_note' />;

const name = 'A short note';

const Preset = (
  <Origin
    code={source}
    description={description}
    label='pattern_modality_preset_a_short_note_name'
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
