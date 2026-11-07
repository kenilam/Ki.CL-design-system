import React from 'react';

// Partials
import { Copy } from 'design/docs/mdx/copy';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <Copy id='input_preset_file_input' />;

const name = 'File upload';

const Preset = (
  <Origin
    controls={{ inline: 'boolean', multiple: 'boolean', readOnly: null }}
    code={source}
    description={description}
    label='input_preset_file_input_name'
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
