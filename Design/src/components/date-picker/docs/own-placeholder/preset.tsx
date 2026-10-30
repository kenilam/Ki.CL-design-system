import React from 'react';

// Partials
import { Copy } from 'design/docs/mdx/copy';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <Copy id='date_picker_preset_own_placeholder' />;

const name = 'Own placeholder';

const Preset = (
  <Origin
    code={source}
    description={description}
    label='date_picker_preset_own_placeholder_name'
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
