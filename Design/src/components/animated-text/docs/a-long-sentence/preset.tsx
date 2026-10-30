import React from 'react';

// Partials
import { Copy } from 'design/docs/mdx/copy';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <Copy id='animated_text_preset_a_long_sentence' />;

const name = 'A long sentence';

const Preset = (
  <Origin
    code={source}
    description={description}
    label='animated_text_preset_a_long_sentence_name'
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
