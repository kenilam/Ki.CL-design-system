import React from 'react';

// Partials
import { Copy } from 'design/docs/mdx/copy';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <Copy id='checkbox_preset_in_a_form' />;

const name = 'In a form';

const Preset = (
  <Origin
    controls={{ checked: null }}
    code={source}
    description={description}
    label='checkbox_preset_in_a_form_name'
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
