import React from 'react';

// Partials
import { Copy } from 'design/docs/mdx/copy';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <Copy id='text_preset_an_edit' />;

const name = 'An edit';

const Preset = (
  <Origin
    code={source}
    description={description}
    label='text_preset_an_edit_name'
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
