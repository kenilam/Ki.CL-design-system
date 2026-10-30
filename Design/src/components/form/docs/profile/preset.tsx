import React from 'react';

// Partials
import { Copy } from 'design/docs/mdx/copy';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <Copy id='form_preset_profile' />;

const name = 'Profile';

const Preset = (
  <Origin
    code={source}
    description={description}
    label='form_preset_profile_name'
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
