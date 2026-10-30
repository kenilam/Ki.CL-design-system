import React from 'react';

// Partials
import { Copy } from 'design/docs/mdx/copy';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <Copy id='dialog_preset_full_screen' />;

const name = 'Full screen';

const Preset = (
  <Origin
    controls={{ dense: null }}
    code={source}
    description={description}
    label='dialog_preset_full_screen_name'
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
