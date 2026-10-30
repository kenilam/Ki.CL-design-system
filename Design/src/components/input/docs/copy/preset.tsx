import React from 'react';

// Partials
import { Copy } from 'design/docs/mdx/copy';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <Copy id='input_preset_copy' />;

const name = 'Copy';

const Preset = (
  <Origin
    code={source}
    controls={{ readOnly: null }}
    description={description}
    label='input_preset_copy_name'
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
