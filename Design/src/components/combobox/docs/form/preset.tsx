import React from 'react';

// Partials
import { Copy } from 'design/docs/mdx/copy';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <Copy id='combobox_preset_form' />;

const name = 'In a form';

const Preset = (
  <Origin
    code={source}
    description={description}
    label='combobox_preset_form_name'
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
