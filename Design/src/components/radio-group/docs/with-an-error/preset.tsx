import React from 'react';

// Partials
import { Copy } from 'design/docs/mdx/copy';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <Copy id='radio_group_preset_with_an_error' />;

const name = 'With an error';

const Preset = (
  <Origin
    code={source}
    description={description}
    label='radio_group_preset_with_an_error_name'
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
