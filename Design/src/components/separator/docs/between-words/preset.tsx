import React from 'react';

// Partials
import { Copy } from 'design/docs/mdx/copy';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <Copy id='separator_preset_between_words' />;

const name = 'Between words';

const Preset = (
  <Origin
    code={source}
    description={description}
    label='separator_preset_between_words_name'
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
