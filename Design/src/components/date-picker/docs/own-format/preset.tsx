import React from 'react';

// Partials
import { Copy } from 'design/docs/mdx/copy';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <Copy id='date_picker_preset_own_format' />;

const name = 'Own format';

const Preset = (
  <Origin
    code={source}
    description={description}
    label='date_picker_preset_own_format_name'
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
